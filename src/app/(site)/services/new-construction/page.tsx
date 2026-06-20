import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SITE } from "@/lib/site";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "New Construction Painting for Builders — Whistler & Sea to Sky",
  description:
    "New construction painting for general contractors and custom home builders across Whistler and the Sea to Sky. Schedule-integrated, spec-precise interior and exterior finishing with clean handoffs and progress documentation.",
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
    "New construction painting for general contractors and builders in Whistler and the Sea to Sky. Schedule integration, spec-precise interior and exterior finishing, and progress documentation.",
  url: "https://alpenglowpainting.ca/services/new-construction",
};

const PILLARS = [
  "Built into your schedule",
  "Spec-precise, room to room",
  "New-drywall prep & priming",
  "Coordinated with other trades",
  "Progress updates at milestones",
  "Clean handoff for walkthrough",
];

const SCOPE_CARDS = [
  {
    title: "New drywall prep & priming",
    body: "Fresh drywall and mud drink primer and telegraph every flaw under raking light. We prime to seal the board and joint compound uniformly, then assess the walls and skim or spot-fix where the light demands it before finish coats. The foundation that determines whether the whole job looks custom or builder-grade.",
  },
  {
    title: "Trim, doors & millwork",
    body: "Baseboard, casing, crown, built-ins, and doors — sprayed or hand-finished to a furniture-grade standard. On a new build the millwork is what buyers run their hands across at the walkthrough, so we finish it like it'll be inspected, because it will be.",
  },
  {
    title: "Ceilings & specialty finishes",
    body: "Flat ceilings, vaulted and beamed ceilings, T&G, and any specialty finish a spec calls for. We coordinate spray sequencing with the other trades so ceilings go on clean before walls and floors are at risk, and we hit the finish and sheen the designer specified.",
  },
  {
    title: "Exterior coatings on new builds",
    body: "Siding, soffits, fascia, decks, and exterior trim, coated with products rated for the Sea-to-Sky climate from day one. Getting the exterior finish right on a new build is far cheaper than a callback after the first winter exposes a shortcut.",
  },
  {
    title: "Garages, mechanical & utility spaces",
    body: "The spaces that get skipped on a rushed job — garages, mechanical rooms, mudrooms, utility areas. We finish them to the same standard so the build reads complete and consistent everywhere a buyer or inspector looks.",
  },
  {
    title: "Punch list & deficiency completion",
    body: "We close out clean. Touch-ups, deficiency items, and final walkthrough fixes handled promptly so the painting line on your deficiency list clears without chasing. A clean handoff is the part of the job a builder actually remembers.",
  },
];

const APPROACH = [
  {
    title: "Built into your schedule.",
    body: "We integrate with the build sequence and hit our milestones — primer before trim-out, finish coats timed around flooring and fixtures. We plan around the other trades so painting never becomes the bottleneck.",
  },
  {
    title: "Spec-precise, every room consistent.",
    body: "We paint to the spec — products, colours, sheens — and keep them consistent across every room and every unit. The finish reads the same in the primary suite and the basement utility room.",
  },
  {
    title: "One trade you don't have to manage.",
    body: "Clear communication with your site super, documentation in the format your accounting needs, and a crew that shows up when we said. We make the painting line the easy one on your project.",
  },
  {
    title: "A clean handoff for the walkthrough.",
    body: "We close out with the client walkthrough in mind — surfaces detailed, deficiencies cleared, and a project report listing exactly what went where, so your client's home comes with a record.",
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
    a: "We plan our phases around your sequence — priming before trim-out, finish coats timed around flooring and fixture install, exterior coordinated with weather windows. We hold our milestones and flag early if anything upstream is going to affect our start. Painting shouldn't be the trade that slips your schedule.",
  },
  {
    q: "Do you prime and finish new drywall?",
    a: "Yes — sealing fresh board and joint compound is its own step, and we treat it as one. We prime uniformly, assess under raking light, and skim or spot-fix before finish coats. Skipping proper primer is the most common reason a new build's walls look cheap once the furniture's in.",
  },
  {
    q: "Can you handle multi-unit or multi-home volume?",
    a: "Yes. We deliver consistent finishes across multiple units and homes, with documentation at each phase close. We scope volume work specifically so the spec stays identical from the first unit to the last.",
  },
  {
    q: "What's your insurance and WCB status for our sites?",
    a: "$5M commercial general liability insurance and full WorkSafeBC coverage for every worker. We provide certificates of insurance for your records before we start on site.",
  },
  {
    q: "Do you handle the punch list and deficiencies?",
    a: "Yes, and we close them promptly. Touch-ups and deficiency items get handled within a few business days of the walkthrough so the painting line on your deficiency list clears without you chasing us.",
  },
  {
    q: "What warranty does the homeowner get?",
    a: "The warranty matches the substrate, same as our residential work: 10 years on interior painting, 5 years on exterior solid finishes, 2 years on exterior semi-transparent and translucent stains. Documented in the project agreement so your client has it on record.",
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
        imageUrl="/stock-images/6ModernMountainHomeStudioMcGee.jpg"
        imageAlt="Newly built modern mountain home interior, freshly painted"
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
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                  New construction · for builders
                </span>
              </div>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                The painting line that <em className="text-alpine not-italic font-medium">never</em> slips your schedule.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  On a build, the painter can make or break the finish — and the
                  schedule. A crew that shows up late, paints to the wrong spec,
                  or leaves a messy punch list costs you time you don&rsquo;t have
                  and a walkthrough you have to apologize for.
                </p>
                <p>
                  We work as the painting trade builders keep calling back:
                  integrated with your sequence, precise to the spec, and clean
                  at handoff. One line on your schedule you don&rsquo;t have to
                  worry about.
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
              <div className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium mb-5">
                What working with us looks like
              </div>
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
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                What we handle on a build
              </span>
            </div>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Every painted surface, to spec, start to handoff.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              From the first coat of primer on bare drywall to the last punch-list
              touch-up before the client walkthrough — the full painting scope of
              a new build, handled by one accountable crew.
            </p>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SCOPE_CARDS.map((c) => (
              <article
                key={c.title}
                className="group relative border border-navy/15 bg-background p-7 md:p-8 lg:p-9 transition-colors hover:border-navy/40"
              >
                <div className="h-px w-7 bg-alpine" aria-hidden />
                <h3 className="mt-4 font-serif text-navy text-[1.375rem] md:text-[1.5rem] leading-[1.15] tracking-tight font-medium">
                  {c.title}
                </h3>
                <p className="mt-4 text-ink leading-relaxed text-[0.95rem]">{c.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">How we work with builders</span>
            </div>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Built around how your project actually runs.
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

      {/* What's standard */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Standard on every build</span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.375rem] leading-[1.05] tracking-tight font-medium">
                Structure from first coat to handoff.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                The same process on every project, so you know exactly what
                you&rsquo;re getting on the next one — no relearning how we work
                each build.
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

      <section className="py-16 md:py-24">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-alpine" aria-hidden />
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Frequently asked</span>
          </div>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">New construction questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        years="10"
        heading="Years on interior. Five on exterior solid. Two on exterior stain."
        body="Written warranty on every build, matched to the substrate — the same terms your client would get on residential work, documented in the project agreement so it transfers with the home record."
      />

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
