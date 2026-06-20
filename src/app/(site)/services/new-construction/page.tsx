import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SITE } from "@/lib/site";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "New Construction Painting for Builders — Whistler & Sea to Sky",
  description:
    "New construction painting for general contractors and custom home builders across Whistler and the Sea to Sky. Schedule-integrated, spec-precise finishing with clean handoffs.",
  alternates: { canonical: "/services/new-construction" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "New Construction Painting",
  serviceType: "New Construction Painting",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "New construction painting for general contractors and builders in Whistler and the Sea to Sky. Schedule integration, spec-precise finishing, and progress documentation.",
  url: "https://alpenglowpainting.ca/services/new-construction",
};

const PILLARS = [
  "Built into your schedule",
  "Spec-precise, room to room",
  "New-drywall prep & priming",
  "Coordinated with other trades",
  "Updates at milestones",
  "Clean handoff for walkthrough",
];

const SCOPE_CARDS = [
  {
    title: "New drywall prep & priming",
    body: "Primed and assessed under raking light, then skimmed or spot-fixed before finish coats.",
  },
  {
    title: "Trim, doors & millwork",
    body: "Baseboard, casing, crown, built-ins, and doors finished to a furniture-grade standard.",
  },
  {
    title: "Ceilings & specialty finishes",
    body: "Flat, vaulted, and beamed ceilings, spray-sequenced clean before walls and floors are at risk.",
  },
  {
    title: "Exterior coatings",
    body: "Siding, soffits, fascia, decks, and trim coated with climate-rated products from day one.",
  },
  {
    title: "Garages & utility spaces",
    body: "The spaces a rushed job skips, finished to the same standard everywhere a buyer looks.",
  },
  {
    title: "Punch list & close-out",
    body: "Touch-ups and deficiency items handled promptly so the painting line clears clean.",
  },
];

const APPROACH = [
  {
    title: "Built into your schedule.",
    body: "We integrate with the build sequence and hit our milestones, so painting never becomes the bottleneck.",
  },
  {
    title: "Spec-precise, every room consistent.",
    body: "We paint to the spec — products, colours, sheens — identical from the primary suite to the utility room.",
  },
  {
    title: "One trade you don't manage.",
    body: "Clear communication with your super, documentation in the format your accounting needs, and a crew that shows up.",
  },
  {
    title: "A clean handoff.",
    body: "We close out with the walkthrough in mind — deficiencies cleared and a report of exactly what went where.",
  },
];

const STANDARD = [
  "Pre-start walkthrough with the site super or builder",
  "Written scope, schedule, and spec confirmation",
  "Primer and prep matched to new substrates",
  "Spray sequencing coordinated with other trades",
  "Progress updates at agreed milestones",
  "Prompt punch-list and deficiency completion",
  "Project report at handoff — products, colours, sheens, areas",
];

const FAQS = [
  {
    q: "How do you integrate with our build schedule?",
    a: "We plan our phases around your sequence — priming before trim-out, finish coats timed around flooring and fixtures, exterior coordinated with weather windows. We hold our milestones and flag early if anything upstream affects our start.",
  },
  {
    q: "Do you prime and finish new drywall?",
    a: "Yes — sealing fresh board and joint compound is its own step. We prime uniformly, assess under raking light, and skim or spot-fix before finish coats. Skipping proper primer is the most common reason a new build's walls look cheap once furniture's in.",
  },
  {
    q: "What products do you use?",
    a: "We spec to the build and the designer's requirements — premium Benjamin Moore and Sherwin-Williams interior lines, climate-rated exterior coatings, and cabinet-grade finishes for millwork. The full spec is confirmed in writing before we start and documented at handoff.",
  },
  {
    q: "Can you handle multi-unit or multi-home volume?",
    a: "Yes. We deliver consistent finishes across multiple units and homes with documentation at each phase close, and scope volume work so the spec stays identical from the first unit to the last.",
  },
  {
    q: "What's your insurance and WCB status for our sites?",
    a: "$5M commercial general liability insurance and full WorkSafeBC coverage for every worker. We provide certificates of insurance for your records before we start on site.",
  },
  {
    q: "What warranty does the homeowner get?",
    a: "The warranty matches the substrate, same as our residential work: 10 years on interior painting, 5 years on exterior solid finishes, 2 years on exterior semi-transparent and translucent stains. Documented in the project agreement so it's on record with the home.",
  },
];

export default function NewConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="New Construction Painting"
        subline="For general contractors and custom home builders. Schedule-integrated, spec-precise finishing — and a painting line that never slips your timeline."
        imageUrl="/working-images/new-construction-painting-whistler.jpg"
        imageAlt="Alpenglow painter spray-priming the ceiling of a new-construction interior in Whistler"
        overlayClass="bg-gradient-to-t from-black/85 via-black/65 to-black/55"
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
              <Eyebrow className="mb-5">New construction · for builders</Eyebrow>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                The painting line that <em className="text-alpine not-italic font-medium">never</em> slips your schedule.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  On a build, the painter can make or break the finish — and the
                  schedule. A crew that shows up late, paints to the wrong spec,
                  or leaves a messy punch list costs you time and a walkthrough
                  you have to apologize for.
                </p>
                <p>
                  We work as the painting trade builders keep calling back:
                  integrated with your sequence, precise to the spec, clean at
                  handoff.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href="/contact" size="lg">Talk to Us</Button>
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
              <Eyebrow className="mb-5">What working with us looks like</Eyebrow>
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

      {/* Scope */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Eyebrow className="mb-5">What we handle on a build</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Every painted surface, to spec, start to handoff.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              From the first coat of primer on bare drywall to the last punch-list
              touch-up — the full painting scope of a build, one accountable crew.
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
        </Container>
      </section>

      <WarrantyBanner
        title="Warranty Matched to the Substrate"
        body="Every build is backed in writing — 10 years on interior painting, 5 on exterior solid finishes, 2 on exterior stains. The same terms your client would get on residential work, documented so it transfers with the home."
      />

      {/* Approach */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">How we work with builders</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Built around how your project actually runs.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div key={a.title} className="border-l-2 border-alpine bg-background p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-[1.375rem] text-navy leading-tight tracking-tight font-medium">{a.title}</h3>
                <p className="mt-3 text-ink leading-relaxed text-[0.95rem]">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's standard */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
            <div>
              <Eyebrow className="mb-5">Standard on every build</Eyebrow>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.375rem] leading-[1.05] tracking-tight font-medium">
                Structure from first coat to handoff.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                The same process on every project, so you know exactly what
                you&rsquo;re getting on the next one.
              </p>
              <div className="mt-8">
                <Button href="/process" variant="secondary">See our full process</Button>
              </div>
            </div>
            <ul className="space-y-4">
              {STANDARD.map((item) => (
                <li key={item} className="flex items-start gap-4 border-l-2 border-alpine pl-5 py-1">
                  <Check size={18} className="text-navy mt-0.5 flex-shrink-0" />
                  <span className="text-ink leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">New construction questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="For builders"
        heading="Building this season? Let's talk."
        subline="Send us the project scope and timeline and we'll set up a site meeting. We're set up to be the easy trade on your schedule."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
