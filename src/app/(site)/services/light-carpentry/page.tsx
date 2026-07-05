import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Light Carpentry & Repair — Whistler, Pemberton & Squamish",
  description:
    "Rot repair, trim replacement, fascia, soffits, and exterior carpentry repairs across Whistler, Pemberton, and Squamish — coordinated with your painting project so it's finished properly.",
  alternates: { canonical: "/services/light-carpentry" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Light Carpentry & Repair",
  serviceType: "Light Carpentry",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Exterior carpentry repair for Sea to Sky homes: rotted siding, fascia, soffits, trim, deck boards, and weatherproofing — coordinated with your painting project.",
  url: "https://alpenglowpainting.ca/services/light-carpentry",
};

const SCOPE_CARDS = [
  {
    title: "Rotted siding & trim",
    body: "Failing boards pulled and replaced in matched species before the finish goes on.",
  },
  {
    title: "Fascia, soffit & rake board",
    body: "The roofline rot that makes a paint job fail early, fixed and re-flashed.",
  },
  {
    title: "Window & door trim",
    body: "Rotted casings, split sills, and failing mitres rebuilt in matched profile.",
  },
  {
    title: "Deck boards & railings",
    body: "Loose boards, soft pickets, and rotten rail caps swapped — not painted over.",
  },
  {
    title: "Cedar & Hardie repairs",
    body: "The right cut, fastener, and caulk for each, finished to match the siding.",
  },
  {
    title: "Caulking & flashing",
    body: "The joints and details where water gets in, sealed as part of the repair.",
  },
];

const OUT_OF_SCOPE = [
  "New decks, pergolas, or outdoor structures built from scratch",
  "Framing, structural, or load-bearing work",
  "Interior cabinetry, built-ins, or finish carpentry",
  "Roofing repairs",
];

// Add a real photo to a step with image: "/working-images/carpentry-step-replace-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Find it at the quote",
    body: "Repairs start before the proposal. On the site visit we probe for rot, soft spots, and failing trim — the things that quietly undo a paint job — and write any repair work into the quote as its own clear line item. You see the cost up front, not as a surprise mid-project. If we find more once prep starts, nothing gets built or billed without a written change order first.",
  },
  {
    n: "02",
    title: "Remove the failed material",
    body: "We cut out the rotted or failing board, trim, or section back to sound, dry material. Removing all the compromised wood matters — leaving damp or punky wood behind just lets the rot spread under the new piece. We inspect what's behind it for hidden moisture or damage while it's open, so the repair fixes the cause, not just the symptom.",
  },
  {
    n: "03",
    title: "Replace in matched material",
    body: "The new piece goes in using the same species, profile, and dimension as the original — rough or smooth cedar in the matching width, or the same Hardie line and texture. Cut and fit on-site so it sits flush with the surrounding surfaces. Matching the material is what makes the repair vanish once the finish goes on, instead of standing out as an obvious patch.",
  },
  {
    n: "04",
    title: "Fasten & weatherproof",
    body: "We fasten with the right corrosion-resistant hardware for the material, then seal the repair against the weather — caulking joints, re-flashing where needed, and detailing the spots where water tends to get in. Most exterior rot starts at an unsealed joint, so closing those up is what keeps the same failure from coming back. The envelope goes back tighter than before.",
  },
  {
    n: "05",
    title: "Prime & seal for finish",
    body: "New wood gets primed and sealed — all faces, including the cut ends that drink up moisture — so the finish coat bonds and the repair is protected from day one. This is also why we pair carpentry with painting: the repair only stays protected if it's coated properly right after. Bare patched wood left for a season is the start of the next rot problem.",
  },
  {
    n: "06",
    title: "Hand off to the finish",
    body: "With the repair primed and weatherproofed, it flows straight into the paint or stain work, finished to match the rest of the house. One crew owns the whole thing, so there's no gap between the carpenter and the painter where the work stalls or the accountability slips. The result is a surface that's sound underneath and seamless on top.",
  },
];

const FAQS = [
  {
    q: "Is carpentry priced inside the paint quote, or separate?",
    a: "Carpentry repairs are included as a separate line item on your written proposal. The painting line items include prep and painting, and repair work is on its own line based on the materials and time needed. Your written proposal will show a clear breakdown.",
  },
  {
    q: "What if you find more rot once you start prepping?",
    a: "We stop and tell you immediately. Nothing gets built or billed without a written and approved change order. Hidden rot is one of the most common reasons exterior projects go over budget — we'd rather pause and re-scope than surprise you.",
  },
  {
    q: "How do you match the new material to the existing siding?",
    a: "We match the existing materials and stain/paint colours to ensure that the repair is minimally visible or completely indistinguishable.",
  },
  {
    q: "Do you do interior carpentry too?",
    a: "We only do incidental interior carpentry like small repairs and trim replacement, but we don't take on cabinetry, built-ins, or finish carpentry as standalone work.",
  },
  {
    q: "Can you just do the carpentry and we'll paint it ourselves?",
    a: "We prefer to pair the two. A big part of the value of fixing rot or trim before painting is making sure the repair is sealed and protected properly which happens in how the paint or stain goes on right after. When one team handles both, the repair blends in and you get one crew accountable. If a carpentry-only job is really what you need, we're happy to recommend someone.",
  },
  {
    q: "How long does a typical repair add to the project?",
    a: "This is completely dependent on how extensive the repair work is. We'll give you an idea of what is necessary, or consult with a dedicated carpentry subcontractor for more extensive repairs.",
  },
];

export default function LightCarpentryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceHero
        eyebrow="Services"
        headline="Light Carpentry & Repair"
        subline="Rot repair, trim replacement, and exterior carpentry handled as part of your painting project — so the work is coordinated and the finish holds up."
        imageUrl="/stock-images/CornCobBlastingSideHouse.0063-67b24c93.webp"
        imageAlt="Exterior home under preparation — siding and trim repair"
      >
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
      </ServiceHero>

      {/* What's in scope */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Eyebrow className="mb-5">What&rsquo;s in scope</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Repair work that disappears under the finish.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              The repairs we handle as part of paint and wood restoration projects.
              If your scope falls outside these, we&rsquo;ll point you to someone we trust.
            </p>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SCOPE_CARDS.map((c) => (
              <article
                key={c.title}
                className="group relative border border-navy/15 bg-background p-7 md:p-8 transition-colors hover:border-navy/40"
              >
                <div className="h-px w-7 bg-alpine" aria-hidden />
                <h3 className="mt-4 font-serif text-navy text-[1.375rem] md:text-[1.5rem] leading-[1.15] tracking-tight font-medium">
                  {c.title}
                </h3>
                <p className="mt-3 text-ink leading-relaxed text-[0.95rem]">{c.body}</p>
              </article>
            ))}
          </div>

          {/* Out of scope */}
          <div className="mt-12 md:mt-16 max-w-3xl border-t border-navy/10 pt-10">
            <div className="text-sm uppercase tracking-[0.16em] text-muted mb-5 font-semibold">
              What&rsquo;s not
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {OUT_OF_SCOPE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted leading-relaxed text-[0.95rem]">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ProcessSteps
        bg="white"
        eyebrow="How we do it"
        heading="The repair process, step by step."
        intro="A repair only lasts if the cause is fixed and the new wood is sealed and finished properly. Here's how we handle it — coordinated with the paint so the patch disappears."
        steps={PROCESS}
      />

      {/* Honest callout */}
      <section className="py-16 md:py-20 bg-navy">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle size={24} className="mx-auto mb-5 text-alpine" />
            <div className="text-sm uppercase tracking-[0.16em] text-alpine font-semibold mb-5">
              Honest about scope
            </div>
            <h2 className="font-serif text-background font-medium text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight">
              If the repair is big enough to be its own project, we&rsquo;ll say so.
            </h2>
            <p className="mt-6 text-background/75 text-lg leading-relaxed">
              There&rsquo;s a line where a repair becomes a build — and past it,
              you&rsquo;re better served by a dedicated carpenter or GC. If your
              project needs more than repair-level carpentry, we&rsquo;ll tell you
              at the site visit and recommend someone in the corridor we&rsquo;d use ourselves.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Light carpentry questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        heading="Got rot or failing trim?"
        eyebrow="Get a site visit"
        subline="We&rsquo;ll flag everything that needs repair on the quote — so painting day isn&rsquo;t the day you find out."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
