import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { ShieldCheck, Check, X, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Warranty & Quality Guarantee",
  description:
    "Our 3-year written quality guarantee — what's covered, what isn't, and why. Full transparency on the contractual commitment behind every Alpenglow project.",
};

const COVERED = [
  "Peeling, flaking, and premature finish failure under normal conditions",
  "Paint applied by our crew, for three years from project completion",
  "Labour and materials to fix the failed area — at no charge",
];

const NOT_COVERED = [
  "Horizontal or walked-on surfaces (decks, floors, steps, railings, roofs)",
  "Fences and foundations",
  "Eaves-troughs and downspouts",
  "Stain work with a single coat (guaranteed only if two or more coats are applied)",
  "Exterior varnish (1-year coverage only)",
  "An older coat underneath ours that breaks down",
  "Moisture damage from leaks, cracks, burst pipes, or structural movement",
  "Fading, rusting, or substances bleeding through the paint",
  "Dark colors chosen for vinyl siding (warping risk is on you)",
  "Pressure washing (no permanent material is being applied)",
];

const PREP_LEVELS = [
  {
    name: "Minimal",
    guaranteed: false,
    body: "Minimum scraping to remove loose flakes only. Fast and cheap — but not covered by the guarantee. We'll tell you if this is what the project needs.",
  },
  {
    name: "Standard",
    guaranteed: true,
    body: "Scrape all loose paint, feather-sand the edges, and seal against moisture. The default on most of our projects. Fully guaranteed.",
  },
  {
    name: "Refinish",
    guaranteed: true,
    body: "Complete paint removal, thorough sanding of the entire surface. Priced on time and materials. Fully guaranteed — and the right move when older coats are compromised.",
  },
];

const FINE_PRINT = [
  "Your project must be paid in full to activate the guarantee.",
  "Guarantee work must be requested within the 3-year window, from the date of project completion.",
  "The guarantee is non-transferable — if the property is sold, it ends.",
  "We fix the failed area, not the whole project.",
  "We only guarantee work done with our approved products (Sherwin-Williams, Benjamin Moore, and a few others). If you insist on a different brand, we'll use it — but we can't stand behind it.",
];

export default function WarrantyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-stone-light/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Warranty</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Three years in writing — backed by the way we prep.
            </h1>
            <p className="mt-6 text-ink text-lg leading-relaxed">
              Our quality guarantee isn&rsquo;t a marketing line. It&rsquo;s a contractual commitment on every job we deliver — and the reason we prep the way we do.
            </p>
          </div>
        </Container>
      </section>

      {/* Headline promise */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-sm bg-alpine/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={22} className="text-alpine" />
              </div>
              <div>
                <h2 className="font-serif text-navy text-2xl md:text-[1.75rem] leading-tight">
                  The Alpenglow Quality Guarantee
                </h2>
                <p className="mt-3 text-ink leading-relaxed">
                  For <strong>three years</strong> from your project&rsquo;s completion, if the paint we applied fails due to improper application — peeling, flaking, or premature finish failure — we come back and fix it at no charge. Labour and materials included.
                </p>
                <p className="mt-3 text-ink leading-relaxed">
                  Extended coverage (up to 10 years) is available on select projects where surface condition, product choice, and prep level support it. Ask at the site visit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's covered / What's not covered */}
      <section className="pb-16 md:pb-20">
        <Container>
          <div className="max-w-5xl mx-auto grid gap-8 md:gap-10 md:grid-cols-2">
            <div className="rounded-sm border border-border bg-surface p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">What&rsquo;s covered</div>
              <h3 className="font-serif text-navy text-xl md:text-2xl leading-tight mb-5">
                The integrity of the paint we applied.
              </h3>
              <ul className="space-y-3">
                {COVERED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink leading-relaxed text-[0.95rem]">
                    <Check size={16} className="text-alpine mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-border bg-surface p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">What&rsquo;s not covered</div>
              <h3 className="font-serif text-navy text-xl md:text-2xl leading-tight mb-5">
                Things outside our control — and honest exclusions.
              </h3>
              <ul className="space-y-3">
                {NOT_COVERED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink leading-relaxed text-[0.95rem]">
                    <X size={16} className="text-muted mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Prep levels */}
      <section className="py-16 md:py-20 bg-navy">
        <Container>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Preparation levels</div>
            <h2 className="font-serif text-background text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
              How much prep your project gets decides whether it&rsquo;s guaranteed.
            </h2>
            <p className="mt-4 text-background/70 text-lg leading-relaxed">
              Every project is quoted at one of three prep levels. The level determines the finish, the lifespan, and whether the job falls under our guarantee. You&rsquo;ll know which one your project needs before you sign.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PREP_LEVELS.map((lvl) => (
              <div
                key={lvl.name}
                className="rounded-sm border border-background/10 bg-background/5 p-6 md:p-7"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs uppercase tracking-[0.2em] font-medium ${lvl.guaranteed ? "text-alpine" : "text-background/50"}`}>
                    {lvl.guaranteed ? "Guaranteed" : "Not guaranteed"}
                  </span>
                </div>
                <h3 className="font-serif text-background text-xl mb-3">{lvl.name}</h3>
                <p className="text-background/70 leading-relaxed text-[0.95rem]">{lvl.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fine print */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Fine print worth reading</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
              A few conditions — stated plainly.
            </h2>
            <ul className="mt-8 space-y-4">
              {FINE_PRINT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink leading-relaxed">
                  <FileText size={16} className="text-navy mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-muted text-sm leading-relaxed italic">
              This page summarizes our warranty for readability. The full terms live in your signed project agreement and take precedence over anything here. Ask us anything before you sign — we&rsquo;d rather over-explain than under-deliver.
            </p>
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="Questions about coverage?"
        eyebrow="Before you sign"
        subline="We&rsquo;d rather walk you through the warranty on the phone than have surprises later."
        primaryLabel="Get a Quote"
        secondaryLabel="Call (604) 938-4037"
        secondaryHref="tel:+16049384037"
      />
    </>
  );
}
