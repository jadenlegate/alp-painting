import type { Metadata } from "next";
import { IBM_Plex_Mono, Caveat } from "next/font/google";

// Preview-only fonts (loaded on this route, not the live site)
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Previews — Internal",
  robots: { index: false, follow: false },
};

// =============================================================================
// DIRECTION A — THE RECORD (Editorial Magazine)
// =============================================================================
function DirectionA() {
  return (
    <section className="relative bg-[#faf7f2] min-h-screen">
      {/* Mono ticker, top */}
      <div className="absolute top-0 left-0 right-0 border-b border-[#15234a]/20 bg-[#faf7f2]/80 backdrop-blur-sm z-10">
        <div className="mx-auto max-w-[1440px] px-8 py-3 flex justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-[#15234a]/60">
          <span>Alpenglow Painting</span>
          <span className="hidden md:inline">Established · Whistler, BC</span>
          <span>№ 01 / Home</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-8 pt-32 pb-24 grid grid-cols-12 gap-8">
        {/* Photo, left */}
        <div className="col-span-12 md:col-span-7 relative">
          <div className="aspect-[4/5] md:aspect-[5/6] border border-[#15234a]/90 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/stock-images/I_Blackcomb_Dusk_1-scaled.jpg"
              alt="Alpenglow on Blackcomb"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs font-mono text-[#15234a]/60 italic">
            fig. 01 — Blackcomb at dusk, February.
          </p>
        </div>

        {/* Text column, right */}
        <div className="col-span-12 md:col-span-5 md:pt-12 flex flex-col">
          <p className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#15234a]/70">
            № 01 &nbsp;·&nbsp; Record / 2026 / Whistler
          </p>

          <h1 className="mt-10 font-serif italic font-medium text-[#15234a] text-[3rem] md:text-[5rem] leading-[0.95] tracking-tight">
            The painting{" "}
            <span className="not-italic font-bold underline decoration-[#48addb] decoration-[3px] underline-offset-[8px]">
              experience
            </span>{" "}
            the Sea to Sky deserves.
          </h1>

          <div className="my-10 h-px w-full bg-[#15234a]/80" />

          <p className="font-serif italic text-[#15234a]/85 text-lg leading-relaxed max-w-md">
            A small crew of painters based in Whistler, BC. We take on residential
            and commercial projects where the process matters as much as the
            finish — and we document both.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#"
              className="font-serif italic text-[#15234a] text-lg underline decoration-[#15234a] decoration-[1px] underline-offset-[6px] hover:decoration-[#48addb] hover:text-[#48addb] transition-colors"
            >
              Request a quote →
            </a>
            <a
              href="#"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#15234a]/70 hover:text-[#15234a] transition-colors"
            >
              Browse the record
            </a>
          </div>
        </div>
      </div>

      {/* Giant faint numeral, bottom-right */}
      <div
        className="pointer-events-none absolute bottom-8 right-8 font-serif italic text-[#48addb]/15 leading-none select-none"
        style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
      >
        01
      </div>
    </section>
  );
}

// =============================================================================
// DIRECTION B — ALPENGLOW / COLD PEAK (Dark Editorial)
// =============================================================================
function DirectionB() {
  return (
    <section className="relative min-h-screen bg-[#15234a] overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/stock-images/I_Blackcomb_Dusk_1-scaled.jpg"
          alt=""
          className="w-full h-full object-cover opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#15234a]/70 via-[#15234a]/40 to-[#15234a]/90" />
      </div>

      {/* Horizon gradient band */}
      <div className="absolute inset-x-0 bottom-[28%] h-[2px] bg-gradient-to-r from-transparent via-[#48addb] to-[#f4d8b8] opacity-80" />
      <div className="absolute inset-x-0 bottom-[calc(28%+2px)] h-[120px] bg-gradient-to-b from-[#f4d8b8]/10 to-transparent" />

      {/* Top nav bar */}
      <header className="relative z-10 flex justify-between items-center px-10 pt-8 text-[#f4efe6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Alpenglow Logo White.svg" alt="Alpenglow" className="h-10" />
        <nav className="hidden md:flex gap-10 text-sm font-light tracking-wide">
          {["Work", "Services", "Process", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="relative hover:text-[#f4d8b8] transition-colors group"
            >
              {l}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#48addb] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-end min-h-[85vh] px-10 pb-32 max-w-[1600px] mx-auto">
        <p
          className="text-[#f4d8b8]/80 font-serif text-xs tracking-[0.4em] uppercase mb-8"
        >
          Whistler · Sea to Sky · Established
        </p>

        <h1
          className="font-serif font-bold text-[#f4d8b8] leading-[0.85] tracking-[-0.03em]"
          style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
        >
          Alpenglow.
          <br />
          <span className="text-[#f4efe6]">The painting</span>
          <br />
          <span className="italic text-[#48addb]">experience</span>
          <span className="text-[#f4efe6]"> deserved.</span>
        </h1>

        <div className="mt-16 flex flex-wrap items-center gap-8">
          <a
            href="#"
            className="group flex items-center gap-3 text-[#f4d8b8] text-lg font-light border-b border-[#f4d8b8]/40 pb-2 hover:border-[#f4d8b8] transition-all"
          >
            Request a quote
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
          <span className="font-serif text-[#f4efe6]/50 text-xs tracking-[0.3em] uppercase">
            or call (604) 938-4037
          </span>
        </div>
      </div>

      {/* Bottom "run markers" */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className={`block w-[2px] h-3 ${i === 14 ? "bg-[#f4d8b8]" : "bg-[#f4efe6]/25"}`}
          />
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// DIRECTION C — FIELD NOTES (Craft Journal)
// =============================================================================
function DirectionC() {
  return (
    <section className="relative min-h-screen bg-[#f3ede0] overflow-hidden">
      {/* Paper grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-10 pt-16 pb-32">
        {/* Header */}
        <header className="flex justify-between items-baseline mb-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Alpenglow Logo Blue.svg" alt="Alpenglow" className="h-8" />
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#15234a]/70">
            Field Notes / Vol. 01 / Whistler BC
          </div>
        </header>

        {/* Hero grid */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Photo, pinned slightly rotated */}
          <figure className="col-span-12 md:col-span-5 md:row-start-1 md:row-span-2 transform -rotate-[2deg] origin-top-left">
            <div className="relative border border-[#15234a]/80 bg-[#f3ede0] p-2 shadow-[4px_4px_0_rgba(21,35,74,0.1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/stock-images/I_Blackcomb_Dusk_1-scaled.jpg"
                alt="Blackcomb at dusk"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#b56845]">
              ↓ fig. a — Blackcomb, Feb. 2026
            </figcaption>
          </figure>

          {/* Headline */}
          <div className="col-span-12 md:col-span-6 md:col-start-6 md:row-start-1">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#15234a]/70 mb-6"
              style={{ marginLeft: "3rem" }}
            >
              Subject ——— Painting, done with care
            </p>

            <h1
              className="font-serif font-normal italic text-[#15234a] leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              A small crew
              <br />
              of painters who treat
              <br />
              your home like a{" "}
              <span className="not-italic font-bold">record</span>
              <br />
              of their{" "}
              <span className="not-italic font-bold relative">
                craft
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#b56845]/70" />
              </span>
              .
            </h1>

            {/* Rust marginalia with hand arrow */}
            <div className="mt-4 flex items-start gap-2">
              <svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                className="text-[#b56845] flex-shrink-0 mt-1"
              >
                <path
                  d="M 2 15 Q 15 2 35 15 L 30 10 M 35 15 L 30 20"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className="text-[#b56845] text-xl"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                see fig. a
              </span>
            </div>
          </div>

          {/* Spec sheet column, right */}
          <aside className="col-span-12 md:col-span-6 md:col-start-6 md:row-start-2 mt-8 md:mt-12">
            <dl className="grid grid-cols-2 gap-y-3 gap-x-6 border-t border-[#15234a]/80 pt-6 max-w-md">
              {[
                ["Established", "Whistler, BC"],
                ["Warranty", "Up to 10 years"],
                ["Insurance", "$5M liability"],
                ["Medium", "Benjamin Moore + SW"],
                ["Crew", "Small, consistent, local"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="contents font-mono text-[11px] uppercase tracking-wide"
                >
                  <dt className="text-[#15234a]/60">{k}</dt>
                  <dd className="text-[#15234a]">{v}</dd>
                </div>
              ))}
            </dl>

            {/* Paint swatches */}
            <div className="mt-10 flex items-end gap-0">
              {[
                { hex: "#15234a", name: "Deep Navy" },
                { hex: "#48addb", name: "Alpine" },
                { hex: "#f3ede0", name: "Paper" },
                { hex: "#b56845", name: "Mark" },
              ].map((c) => (
                <div key={c.hex} className="flex flex-col" style={{ width: 72 }}>
                  <div
                    className="h-20 border border-[#15234a]/20"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="pt-1 font-mono text-[9px] uppercase tracking-wider text-[#15234a]/70">
                    {c.hex.replace("#", "")}
                  </div>
                  <div className="font-mono text-[9px] uppercase text-[#15234a]/50">
                    {c.name}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#"
                className="font-serif italic text-[#b56845] text-lg border-b border-[#b56845]/50 pb-0.5 hover:text-[#15234a] hover:border-[#15234a] transition-colors"
              >
                Request a quote ↗
              </a>
              <span className="ml-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#15234a]/50">
                or see the record →
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// LABEL BANNER
// =============================================================================
function DirectionLabel({
  letter,
  name,
  description,
}: {
  letter: string;
  name: string;
  description: string;
}) {
  return (
    <div className="bg-white border-y-2 border-[#15234a]">
      <div className="mx-auto max-w-[1440px] px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-baseline gap-6">
          <span className="font-mono text-6xl md:text-7xl font-bold text-[#15234a] tabular-nums">
            {letter}
          </span>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#48addb] mb-1">
              Direction {letter}
            </div>
            <h2 className="font-serif text-[#15234a] text-2xl md:text-3xl">
              {name}
            </h2>
          </div>
        </div>
        <p className="md:max-w-md font-sans text-sm text-[#15234a]/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// PAGE
// =============================================================================
export default function PreviewPage() {
  return (
    <main className={`${plexMono.variable} ${caveat.variable}`}>
      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1000px] px-8 text-center">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#48addb] mb-4">
            Internal Preview · Not indexed
          </div>
          <h1 className="font-serif text-[#15234a] text-4xl md:text-5xl leading-tight mb-6">
            Three design directions for the Alpenglow homepage.
          </h1>
          <p className="font-sans text-[#15234a]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Each direction renders as a live hero section below with the same
            content so they can be compared directly. The live site at
            alpenglowpainting.ca is unchanged — this page is separate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#15234a]/60">
            <span>↓ Scroll to view</span>
            <span>·</span>
            <span>A. The Record</span>
            <span>·</span>
            <span>B. Cold Peak</span>
            <span>·</span>
            <span>C. Field Notes</span>
          </div>
        </div>
      </section>

      <DirectionLabel
        letter="A"
        name="The Record"
        description="Editorial/magazine aesthetic. Italic Fraunces + IBM Plex Mono, numerical index system, 1px hairlines, pages read like a well-designed print feature."
      />
      <DirectionA />

      <DirectionLabel
        letter="B"
        name="Cold Peak"
        description="Dark-first cinematic. Navy background, massive bold Fraunces in warm alpenglow peach, a single horizon gradient band, premium hotel / architecture-firm feel."
      />
      <DirectionB />

      <DirectionLabel
        letter="C"
        name="Field Notes"
        description="Craftsman's journal. Paper cream background, delicate italic type with bold upright emphasis, hand-drawn marginalia, paint swatches exposed as UI — the brand made tactile."
      />
      <DirectionC />

      {/* Outro */}
      <section className="bg-[#15234a] py-20">
        <div className="mx-auto max-w-[1000px] px-8 text-center text-[#f4efe6]">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#48addb] mb-4">
            Pick one
          </div>
          <h2 className="font-serif text-4xl leading-tight mb-4">
            Which direction feels right?
          </h2>
          <p className="text-[#f4efe6]/70 leading-relaxed max-w-xl mx-auto">
            Tell Claude which letter (or a hybrid) to commit to, and the full
            homepage — hero + all sections — will be rebuilt in that direction.
          </p>
        </div>
      </section>
    </main>
  );
}
