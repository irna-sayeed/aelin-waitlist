import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PhoneMock } from "@/components/PhoneMock";
import { Reveal } from "@/components/Reveal";

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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16a1 1 0 011 1v10a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "She learns how you felt",
    body: "Chapter by chapter, she remembers what actually landed for you and what did not. Your real taste, not a five-star average.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 21c-4-2.5-8-5.5-8-10a5 5 0 019-3 5 5 0 019 3c0 4.5-4 7.5-8 10-.35.22-.65.22-1 0z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "She tells you what is next",
    body: "When you close the book, she already knows what should be in your hands next, and exactly why it is the one.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 4.5A1.5 1.5 0 016.5 3H17a1.5 1.5 0 011.5 1.5v16L12 17l-6.5 3.5v-16z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const CHAT_MESSAGES: { from: "reader" | "aelin"; text: string }[] = [
  { from: "reader", text: "chapter 35. i am not okay. WHY would he say that" },
  { from: "aelin", text: "i KNOW. do you want to sit in it or should i queue the next gut-punch" },
  { from: "reader", text: "queue it. i need worse." },
  { from: "aelin", text: "noted: you like the knife twisted. i have three. #1 in a sec 🕯️" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="grain-overlay" aria-hidden />

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
      <section className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:text-left">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="caps-label rise rise-1 mb-6 text-gold">
            A romantasy book bestie · on Telegram
          </p>

          <h1 className="hero-title rise rise-1 max-w-4xl text-4xl text-ink sm:text-6xl lg:text-6xl xl:text-7xl">
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
        </div>

        {/* Real phone mockup — this is what the reader actually holds. */}
        <div className="rise rise-4 flex justify-center lg:justify-end">
          <PhoneMock messages={CHAT_MESSAGES} />
        </div>
      </section>

      <div className="gold-hairline mx-auto max-w-5xl" />

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="caps-label mb-4 text-gold">How she works</p>
          <h2 className="section-title text-3xl text-ink sm:text-5xl">
            Text her. She learns. She recommends.
          </h2>
          <p className="mt-4 text-ink-muted">
            Goodreads makes you file paperwork. StoryGraph makes you fill in a
            survey. Aelin just talks to you like the friend who reads everything
            you do.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <li className="card flex h-full flex-col p-7">
                <div className="step-icon">{step.icon}</div>
                <span className="font-display mt-4 text-sm font-semibold tracking-widest text-ink-dim">
                  {step.n}
                </span>
                <h3 className="section-title mt-1 text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <div className="gold-hairline mx-auto max-w-5xl" />

      {/* ===================== WRAPPED SHOWCASE ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="order-2 flex justify-center lg:order-1">
            <div className="wrapped-showcase">
              <Image
                src="/wrapped-demo.png"
                alt="Example of an Aelin monthly Reading Wrapped card, showing books finished, pages read, pace, top genre, and favorite book of the month"
                width={1080}
                height={1350}
                className="wrapped-showcase-img"
                priority
              />
            </div>
          </Reveal>

          <Reveal className="order-1 text-center lg:order-2 lg:text-left" delay={100}>
            <p className="caps-label mb-4 text-blush">Not a mockup — real output</p>
            <h2 className="section-title text-3xl text-ink sm:text-5xl">
              Your reading life, wrapped every month
            </h2>
            <p className="mt-4 max-w-lg text-ink-muted lg:mx-0">
              This is an actual card the bot generates, not a rendering someone
              drew for a landing page. Books finished, pages turned, pace against
              your usual, your favorite of the month, all pulled from the taste
              graph she has been building every time you text her.
            </p>
            <p className="mt-3 max-w-lg text-ink-muted lg:mx-0">
              Shareable, screenshot-ready, and yours automatically on the first of
              every month.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="gold-hairline mx-auto max-w-5xl" />

      {/* ===================== VALUE PROPS ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="caps-label mb-4 text-gold">Coming to the waitlist</p>
          <h2 className="section-title text-3xl text-ink sm:text-5xl">
            Everything a reading best friend should do
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {VALUE_PROPS.map((vp, i) => (
            <Reveal key={vp.title} delay={(i % 2) * 100}>
              <div className="card flex h-full flex-col p-7 sm:p-8">
                <p className="caps-label text-blush">{vp.tag}</p>
                <h3 className="section-title mt-3 text-2xl text-ink">
                  {vp.title}
                </h3>
                <p className="mt-3 text-ink-muted">{vp.body}</p>
              </div>
            </Reveal>
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
        <Reveal className="relative">
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
        </Reveal>
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
