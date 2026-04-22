import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Warranty & Quality Guarantee",
  description:
    "Our written quality guarantee — coverage tiers, what factors affect them, and the conditions that keep them valid.",
};

const WARRANTY_TIERS = [
  {
    years: "3",
    label: "Standard",
    description: "Included on all projects at no extra cost. Covers peeling, flaking, and premature finish failure under normal conditions.",
    highlight: false,
  },
  {
    years: "7",
    label: "Extended",
    description: "Available on most exterior and interior projects when premium products are specified. Requires a surface assessment at quoting.",
    highlight: false,
  },
  {
    years: "10",
    label: "Maximum",
    description: "Available on select projects where surface conditions and product choice support it.",
    highlight: true,
  },
];

const PREP_LEVELS = [
  {
    name: "Standard",
    body: "Scrape loose paint, feather-sand the edges, and seal against moisture. This is the default on most of our projects and the level our warranty is built around.",
  },
  {
    name: "Refinish",
    body: "Complete paint removal and thorough sanding of the entire surface. Priced on time and materials — the right move when older coats are compromised.",
  },
];

const FINE_PRINT = [
  "Your project must be paid in full to activate the guarantee.",
  "Guarantee work must be requested within the warranty window, from the date of project completion.",
  "The guarantee is non-transferable — if the property is sold, it ends.",
  "Coverage applies to the work we performed, repainting the failed area.",
  "We warranty work done with approved products (Sherwin-Williams, Benjamin Moore, and a few others). Other brands can be used on request but sit outside our warranty.",
  "Pressure washing is not covered — no permanent material is being applied.",
  "Stain work requires two or more coats to be guaranteed. Exterior varnish carries a one-year warranty.",
  "Horizontal and walked-on surfaces (decks, floors, steps, railings, roofs), fences, foundations, eaves, and downspouts are excluded.",
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
              A written guarantee on every project.
            </h1>
            <p className="mt-6 text-ink text-lg leading-relaxed">
              Every Alpenglow project comes with a written workmanship warranty. Standard coverage is 3 years, included at no extra cost, with extended options available on projects where the surface and products support it.
            </p>
          </div>
        </Container>
      </section>

      {/* Promise block */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-alpine/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={22} className="text-alpine" />
              </div>
              <div>
                <h2 className="font-serif text-navy text-2xl md:text-[1.75rem] leading-tight">
                  The Alpenglow Quality Guarantee
                </h2>
                <p className="mt-3 text-ink leading-relaxed">
                  If the paint we applied fails due to improper application — peeling, flaking, or premature finish failure — we come back and fix it at no charge. Labour and materials included, within the warranty period.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Warranty tiers */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Coverage tiers</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Three, seven, or ten years.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              The level of coverage depends on the surface, the products specified, and the prep the project gets. We&rsquo;ll walk you through which tier applies at the quote.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WARRANTY_TIERS.map((tier) => (
              <div
                key={tier.years}
                className={`rounded-sm border p-6 md:p-7 ${
                  tier.highlight
                    ? "border-navy bg-navy text-background"
                    : "border-border bg-surface"
                }`}
              >
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className={`font-serif text-5xl tabular-nums ${tier.highlight ? "text-background" : "text-navy"}`}>
                    {tier.years}
                  </span>
                  <span className={`text-sm ${tier.highlight ? "text-background/70" : "text-muted"}`}>years</span>
                </div>
                <div className={`font-medium mb-2 ${tier.highlight ? "text-background" : "text-navy"}`}>
                  {tier.label}
                </div>
                <p className={`text-sm leading-relaxed ${tier.highlight ? "text-background/80" : "text-ink"}`}>
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Prep levels */}
      <section className="py-16 md:py-20 bg-navy">
        <Container>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Preparation level</div>
            <h2 className="font-serif text-background text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
              How much prep your project gets shapes the outcome.
            </h2>
            <p className="mt-4 text-background/70 text-lg leading-relaxed">
              Every project is quoted at one of two prep levels. You&rsquo;ll know which one applies to your project before you sign.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {PREP_LEVELS.map((lvl) => (
              <div
                key={lvl.name}
                className="rounded-sm border border-background/10 bg-background/5 p-6 md:p-7"
              >
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
              This page summarizes our warranty. The full terms live in your signed project agreement and take precedence over anything here. If you have questions, ask us before you sign.
            </p>
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="Questions about coverage?"
        eyebrow="Before you sign"
        subline="Ask us anything about the warranty at the site visit."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
