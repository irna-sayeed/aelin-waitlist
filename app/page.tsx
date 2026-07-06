import { WaitlistForm } from "@/components/WaitlistForm";

const VALUE_PROPS = [
  {
    tag: "Next reads",
    title: "The #1 pick, ranked for you",
    body: "Not a shelf of maybes. One next read at the top, chosen for your exact taste, with the reason it fits, in plain words. Slow-burn over spice? Morally grey love interest? She knows.",
  },
  {
    tag: "Release radar",
    title: "A living release calendar",
    body: "Subscribe to the drops that matter to your taste. Sequels, new-to-you authors, the sequel you have been feral for since chapter 35. Never miss a release again.",
  },
  {
    tag: "Your year in books",
    title: "A monthly Reading Wrapped",
    body: "Your reading life, told back to you. The tropes you chased, the books that wrecked you, the month you did not sleep. Like Spotify Wrapped, but for your romantasy era.",
  },
  {
    tag: "Smart picks",
    title: "Never waste a credit",
    body: "She knows where a book is cheapest before you buy. No burning an Audible credit on something that is free on Kindle Unlimited. Read more for less.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Text her while you read",
    body: '"Chapter 35, oh my GOD." "This is so slow." "I would die for him." Just texts, or voice notes. No forms, no star ratings, no spreadsheets.',
  },
  {
    n: "02",
    title: "She learns how you felt",
    body: "Chapter by chapter, she remembers what actually landed for you and what did not. Your real taste, not a five-star average.",
  },
  {
    n: "03",
    title: "She tells you what is next",
    body: "When you close the book, she already knows what should be in your hands next, and exactly why it is the one.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* soft candlelit glow accents */}
      <div
        aria-hidden
        className="candle-glow pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(229,192,123,0.28), transparent 70%)",
        }}
      />

      {/* ===================== HERO ===================== */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:pt-28">
        <p className="caps-label rise rise-1 mb-6 text-gold">
          A romantasy book bestie · on Telegram
        </p>

        <h1 className="hero-title rise rise-1 max-w-4xl text-4xl text-ink sm:text-6xl md:text-7xl">
          The book bestie who{" "}
          <span className="gold-gradient-text italic">actually knows</span> your
          taste
        </h1>

        <p className="rise rise-2 mt-6 max-w-2xl text-lg text-ink-muted sm:text-xl">
          Meet Aelin. You text her about the book you are in the middle of, and
          she remembers how you actually felt, chapter by chapter. Then she tells
          you exactly what to read next. No spreadsheets. No star-rating forms.
          Just texts.
        </p>

        <div className="rise rise-3 mt-9 w-full">
          <WaitlistForm id="waitlist-hero" />
        </div>

        {/* Chat mock — shows the wedge */}
        <div className="rise rise-4 card mt-14 w-full max-w-md p-4 text-left sm:p-5">
          <p className="caps-label mb-3 text-center text-ink-dim">
            Aelin · Telegram
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="bubble bubble-them">
              chapter 35. i am not okay. WHY would he say that
            </div>
            <div className="bubble bubble-her">
              i KNOW. do you want to sit in it or should i queue the next
              gut-punch
            </div>
            <div className="bubble bubble-them">queue it. i need worse.</div>
            <div className="bubble bubble-her">
              noted: you like the knife twisted. i have three. #1 in a sec 🕯️
            </div>
          </div>
        </div>
      </section>

      <div className="gold-hairline mx-auto max-w-5xl" />

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="caps-label mb-4 text-gold">How she works</p>
          <h2 className="section-title text-3xl text-ink sm:text-5xl">
            Text her. She learns. She recommends.
          </h2>
          <p className="mt-4 text-ink-muted">
            Goodreads makes you file paperwork. StoryGraph makes you fill in a
            survey. Aelin just talks to you like the friend who reads everything
            you do.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.n} className="card flex flex-col p-7">
              <span className="font-display text-4xl font-semibold text-gold">
                {step.n}
              </span>
              <h3 className="section-title mt-3 text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="gold-hairline mx-auto max-w-5xl" />

      {/* ===================== VALUE PROPS ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="caps-label mb-4 text-gold">Coming to the waitlist</p>
          <h2 className="section-title text-3xl text-ink sm:text-5xl">
            Everything a reading best friend should do
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {VALUE_PROPS.map((vp) => (
            <div key={vp.title} className="card flex flex-col p-7 sm:p-8">
              <p className="caps-label text-blush">{vp.tag}</p>
              <h3 className="section-title mt-3 text-2xl text-ink">
                {vp.title}
              </h3>
              <p className="mt-3 text-ink-muted">{vp.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-hairline mx-auto max-w-5xl" />

      {/* ===================== CLOSING CTA ===================== */}
      <section className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:py-28">
        <div
          aria-hidden
          className="candle-glow pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(240,166,192,0.18), transparent 70%)",
          }}
        />
        <div className="relative">
          <h2 className="section-title text-3xl text-ink sm:text-5xl">
            Your next favorite book is already out there
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Get in line to meet the bestie who will find it for you. Early readers
            get her first.
          </p>
          <div className="mt-9">
            <WaitlistForm id="waitlist-footer" />
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-[color:var(--line)] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-dim sm:flex-row">
          <p>
            <span className="font-display text-lg text-gold">Aelin</span> · built
            by Irna
          </p>
          <nav className="flex items-center gap-6" aria-label="Social links">
            {/* TODO: replace # with Irna's real Instagram URL */}
            <a
              href="#"
              className="transition-colors hover:text-gold"
              aria-label="Instagram (link coming soon)"
            >
              Instagram
            </a>
            {/* TODO: replace # with Irna's real Substack URL */}
            <a
              href="#"
              className="transition-colors hover:text-gold"
              aria-label="Substack (link coming soon)"
            >
              Substack
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
