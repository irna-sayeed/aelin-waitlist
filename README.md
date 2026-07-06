# Aelin — waitlist

Landing page and working email waitlist for **Aelin**, a romantasy book best
friend that lives on Telegram. You text her about the book you are reading and
she learns your taste, chapter by chapter, then tells you exactly what to read
next.

Built with Next.js (App Router) + TypeScript + Tailwind CSS. Waitlist signups
are stored in Supabase.

## Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in the real service role key
npm run dev
```

Open http://localhost:3000.

The landing page renders with no env vars set, but the waitlist will return a
"not quite ready" message until Supabase is configured (see below).

## Environment variables

Both are **server-side only**. The Supabase service role key must never be
exposed to the client, so there is no `NEXT_PUBLIC_` prefix and it is only read
inside the API route.

| Variable                    | Description                                                        |
| --------------------------- | ----------------------------------------------------------------- |
| `SUPABASE_URL`              | `https://wfxtqjezrivyihsgffhu.supabase.co`                        |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (Project Settings → API). Keep secret.  |

`.env.local` is gitignored. `.env.example` documents the two vars and is
committed.

## How the waitlist works

- The form (`components/WaitlistForm.tsx`) POSTs to `/app/api/waitlist/route.ts`.
- The API route validates the email server-side, then inserts into the existing
  `public.waitlist` table using `@supabase/supabase-js` with the service role
  key.
- Columns used: `email` (unique, required), `name`, `source`, `note`,
  `created_at` (defaults to `now()`).
- A `?ref=` URL query param is captured as `source` for attribution, defaulting
  to `direct`.
- A duplicate email (Postgres unique violation `23505`) is treated as a friendly
  success ("you are already on the list") rather than an error.

The `public.waitlist` table already exists in Supabase — this app does not
create or migrate it.

## Build

```bash
npm run build
```

Should compile with no type or lint errors.

## Deploy to Vercel

1. Push this repo to GitHub (or connect the local folder with the Vercel CLI).
2. In Vercel, **New Project** → import the repo. The framework auto-detects as
   Next.js; the build command (`npm run build`) and output are handled by
   `vercel.json`.
3. Before the first deploy, add both environment variables under
   **Project → Settings → Environment Variables** (Production, Preview, and
   Development):
   - `SUPABASE_URL` = `https://wfxtqjezrivyihsgffhu.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service role key
4. Deploy. Submit a test email on the live URL and confirm the row lands in the
   `public.waitlist` table in Supabase.

If you add the env vars after the first deploy, trigger a redeploy so they take
effect.

## Notes / TODO

- Footer Instagram and Substack links are placeholder `#` hrefs with `TODO`
  comments in `app/page.tsx` — swap in the real URLs.
