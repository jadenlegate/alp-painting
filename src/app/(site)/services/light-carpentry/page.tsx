import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SITE } from "@/lib/site";
import { AlertTriangle, Phone } from "lucide-react";

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

const PILLARS = [
  "Identified at the quote",
  "Matched species & profile",
  "Paired with painting",
  "Coordinated by one crew",
  "Weatherproofed properly",
  "Repairs that disappear",
];

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

const APPROACH = [
  {
    title: "One point of contact.",
    body: "We handle the scheduling and the hand-off between carpentry and paint so you're not chasing trades.",
  },
  {
    title: "Found at the quote, not as a surprise.",
    body: "We look for rot and failing trim before we write the proposal. If we find it, it's in the quote.",
  },
  {
    title: "Matched to the house.",
    body: "Same species, profile, and finish as the rest of the home, so the repair blends in once painted.",
  },
  {
    title: "Paired with paint, not sold alone.",
    body: "We do this because it's needed before painting. We don't take standalone carpentry jobs.",
  },
];

const FAQS = [
  {
    q: "Is carpentry priced inside the paint quote, or separate?",
    a: "Usually separate. The paint quote covers prep and painting; repair work is its own line item based on the materials and time needed. You'll see both on the proposal with a clear breakdown — nothing is buried.",
  },
  {
    q: "What if you find more rot once you start prepping?",
    a: "We stop and tell you immediately. Nothing gets built or billed without a written change order. Hidden rot is one of the most common reasons exterior projects go over budget — we'd rather pause and re-scope than surprise you.",
  },
  {
    q: "How do you match the new material to the existing siding?",
    a: "Same species, profile, and dimension wherever possible — rough or smooth cedar in matching widths, or the same Hardie line and texture. Once the finish goes on, the repair disappears.",
  },
  {
    q: "Do you do interior carpentry too?",
    a: "Only incidental — baseboard and trim swaps as part of an interior paint job, for example. We don't take on cabinetry, built-ins, or finish carpentry as standalone work.",
  },
  {
    q: "Can you just do the carpentry and we'll paint it ourselves?",
    a: "We prefer to pair the two. A big part of the value of fixing rot or trim before painting is making sure the repair is sealed and protected properly — which happens in how the paint or stain goes on right after. When one team handles both, the repair blends in and you get one crew accountable. If a carpentry-only job is really what you need, we're happy to recommend someone in the corridor.",
  },
  {
    q: "How long does a typical repair add to the project?",
    a: "Most rot and trim repairs add 1–3 days to the front of a paint project, depending on scope. We sequence the repair, give it the right cure time, then move into prep and finish so the new wood blends in.",
  },
];

export default function LightCarpentryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Light Carpentry & Repair"
        subline="Rot repair, trim replacement, and exterior carpentry handled as part of your painting project — so the work is coordinated and the finish holds up."
        imageUrl="/stock-images/CornCobBlastingSideHouse.0063-67b24c93.webp"
        imageAlt="Exterior home under preparation — siding and trim repair"
      >
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
      </Hero>

      {/* Intro */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid gap-12 md:gap-20 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <Eyebrow className="mb-5">Repair-level carpentry</Eyebrow>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                Fix the wood,<br /><em className="text-alpine not-italic font-medium">then</em> paint it.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Rot, rotted trim, and failing fascia don&rsquo;t wait for the
                  painter. Moisture and freeze-thaw quietly undo exterior surfaces
                  year after year — and if you paint over compromised wood, the
                  paint fails.
                </p>
                <p>
                  We scope and coordinate the repair as part of your painting or
                  wood restoration project — siding, trim, fascia, soffits, deck
                  boards, and the weatherproofing around them.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href="/contact" size="lg">Get a Quote</Button>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-navy text-sm font-medium hover:text-alpine transition-colors"
                >
                  <Phone size={15} />
                  {SITE.phone}
                </a>
              </div>
            </div>

            <div>
              <Eyebrow className="mb-5">How every repair runs</Eyebrow>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {PILLARS.map((p) => (
                  <div
                    key={p}
                    className="border border-navy/15 bg-background p-5 md:p-6 hover:border-navy/35 transition-colors"
                  >
                    <div className="h-px w-7 bg-alpine mb-3.5" aria-hidden />
                    <div className="font-serif text-navy text-[1rem] md:text-[1.0625rem] leading-[1.25] tracking-tight">
                      {p}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

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

      {/* Approach */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">How we approach it</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Repairs that disappear — not patches that announce themselves.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div key={a.title} className="border-l-2 border-alpine bg-stone-light/40 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-[1.375rem] text-navy leading-tight tracking-tight font-medium">{a.title}</h3>
                <p className="mt-3 text-ink leading-relaxed text-[0.95rem]">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
