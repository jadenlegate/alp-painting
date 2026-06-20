import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { WarrantyTiers } from "@/components/WarrantyTiers";
import { ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Painting Warranty — Up to 10 Years in Writing",
  description:
    "Alpenglow Painting's written warranty — up to 10 years on interior painting, 5 years on exterior solid finishes, 2 years on semi-transparent stains. Coverage by service, exclusions, and how to register a claim.",
  alternates: { canonical: "/warranty" },
};

const FINE_PRINT = [
  "Your project must be paid in full to activate the guarantee.",
  "Guarantee work must be requested within the warranty window, from the date of project completion.",
  "The guarantee is non-transferable — if the property is sold, it ends.",
  "Coverage applies to the work we performed, repainting the failed area.",
  "We warranty work done with approved products (Sherwin-Williams, Benjamin Moore, Sikkens, Sansin, and a few others). Other brands can be used on request but sit outside our warranty.",
  "Pressure washing is not covered — no permanent material is being applied.",
  "Stain work requires two or more coats to be guaranteed. Exterior varnish carries a one-year warranty.",
  "Horizontal and walked-on wood surfaces (decks, steps, landings, railings) and fences sit outside the standard finish warranty — foot traffic and pooling water wear them faster, and we quote them as their own line.",
];

export default function WarrantyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-stone-light/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Eyebrow className="mb-4">Warranty</Eyebrow>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              A written guarantee on every project.
            </h1>
            <p className="mt-6 text-ink text-lg leading-relaxed">
              Every Alpenglow project comes with a written workmanship warranty,
              included at no extra cost. How long it runs depends on the work —
              the prep level, the products specified, and the surface itself.
              Qualifying interior projects carry up to 10 years; exterior solid
              finishes up to 5; penetrating and semi-transparent stains 2.
              We&rsquo;ll tell you exactly which applies before you sign.
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
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-4">Coverage by service</Eyebrow>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              The term matches the work.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Interior paint and exterior solid finishes hold up differently than
              penetrating stains in the mountain sun. So each service carries its
              own warranty, set to how the finish actually performs.
            </p>
          </div>
          <WarrantyTiers />
        </Container>
      </section>

      {/* Fine print */}
      <section className="py-16 md:py-20 bg-stone-light/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Eyebrow className="mb-4">Fine print worth reading</Eyebrow>
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
