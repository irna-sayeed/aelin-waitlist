"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Capture ?ref= for attribution, default to "direct". Read lazily at submit
// time so there is no render-affecting state and no setState-in-effect.
function readSource(): string {
  if (typeof window === "undefined") return "direct";
  const ref = new URLSearchParams(window.location.search).get("ref");
  return ref ? ref.slice(0, 120) : "direct";
}

export function WaitlistForm({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus("error");
      setMessage("That email does not look right. Mind checking it?");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: readSource() }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (res.ok && data.ok) {
        setStatus("success");
        setMessage(data.message ?? "You are in. Aelin will find you.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went sideways. Try again?");
      }
    } catch {
      setStatus("error");
      setMessage("Could not reach the tower. Check your connection and retry.");
    }
  }

  if (status === "success") {
    return (
      <div
        id={id}
        role="status"
        aria-live="polite"
        className="card mx-auto w-full max-w-md px-6 py-7 text-center"
      >
        <p className="section-title text-2xl gold-gradient-text">
          {message}
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Watch your inbox. When she opens on Telegram, you get in first.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-md"
      aria-describedby={message ? `${id ?? "waitlist"}-msg` : undefined}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`${id ?? "waitlist"}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${id ?? "waitlist"}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          disabled={status === "loading"}
          className="field w-full flex-1 px-5 py-3.5 text-base"
          aria-invalid={status === "error"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-gold whitespace-nowrap px-7 py-3.5 text-base"
        >
          {status === "loading" ? "Saving..." : "Join the waitlist"}
        </button>
      </div>

      {message && status === "error" && (
        <p
          id={`${id ?? "waitlist"}-msg`}
          role="alert"
          className="mt-3 text-center text-sm text-blush sm:text-left"
        >
          {message}
        </p>
      )}

      <p className="mt-3 text-center text-xs text-ink-dim">
        No spam. Just Aelin, when she is ready for you.
      </p>
    </form>
  );
}
