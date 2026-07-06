import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient, isSupabaseConfigured } from "@/lib/supabase";

// Basic but sane email validation. Server-side is the source of truth.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL_RE.test(value);
}

function clean(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 },
    );
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "That email does not look right. Mind checking it?" },
      { status: 400 },
    );
  }

  if (!isSupabaseConfigured) {
    // Fail loudly in logs, gently to the reader.
    console.error(
      "Waitlist submission received but Supabase is not configured. " +
        "Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
    return NextResponse.json(
      { error: "The waitlist is not quite ready. Try again in a moment." },
      { status: 503 },
    );
  }

  const name = clean(data.name, 120);
  const source = clean(data.source, 120) ?? "direct";
  const note = clean(data.note, 500);

  try {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("waitlist").insert({
      email,
      name,
      source,
      note,
    });

    if (error) {
      // Postgres unique violation → already on the list. Treat as success.
      if (error.code === "23505") {
        return NextResponse.json({
          ok: true,
          alreadyOnList: true,
          message: "You are already on the list. Aelin has not forgotten you.",
        });
      }
      console.error("Waitlist insert failed:", error);
      return NextResponse.json(
        { error: "Something went sideways saving you. Try again?" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      alreadyOnList: false,
      message: "You are in. Aelin will find you.",
    });
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json(
      { error: "Something went sideways. Try again?" },
      { status: 500 },
    );
  }
}
