import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";

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

// Add a real photo to a step with image: "/working-images/new-construction-step-priming-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Pre-start walkthrough & spec",
    body: "We meet your site super or PM before we mobilize to confirm scope, schedule, and the finish spec — products, colours, and sheens, room by room. We map our phases to your build sequence so painting slots in cleanly around the other trades. Anything ambiguous gets pinned down in writing now, not argued over at handoff. You know exactly what you're getting and when.",
  },
  {
    n: "02",
    title: "New drywall prep & priming",
    body: "Fresh board and joint compound drink primer unevenly and telegraph every flaw, so this is its own dedicated step. We prime uniformly, then assess the walls under raking light and skim or spot-fix where it's needed before any finish coat. Proper priming is the single biggest reason a new build's walls look custom instead of builder-grade once the furniture's in.",
  },
  {
    n: "03",
    title: "Trim, doors & millwork",
    body: "Baseboard, casing, crown, built-ins, and doors are finished to a furniture-grade standard — sprayed or hand-finished depending on the piece. This is the woodwork buyers run their hands across at the walkthrough, so it's finished like it'll be inspected, because it will be. We sequence it with the other trades to protect the finish.",
  },
  {
    n: "04",
    title: "Wall & ceiling finish coats",
    body: "We apply the finish coats in the right order — ceilings before walls, both before floors go in — to keep everything clean and consistent. Each surface gets the product and sheen the spec calls for, applied to full, even coverage. We hold proper dry time and protect completed areas as we move through the build.",
  },
  {
    n: "05",
    title: "Exterior coatings",
    body: "Siding, soffits, fascia, trim, and decks get climate-rated coatings from day one, coordinated with the exterior weather window. Getting the exterior right on a new build is far cheaper than a callback after the first Sea-to-Sky winter exposes a shortcut. Same prep discipline as the interior, built for the elements.",
  },
  {
    n: "06",
    title: "Punch list & touch-ups",
    body: "We close out clean. Touch-ups and deficiency items get handled promptly — usually within a few business days of the walkthrough — so the painting line on your deficiency list clears without you chasing us. A clean handoff is the part of the job a builder actually remembers.",
  },
  {
    n: "07",
    title: "Handoff & documentation",
    body: "We hand off a project report listing the exact products, colours, sheens, and areas covered — so it lives with the home and transfers to the buyer. Insurance certificates and warranty documentation come with it. The warranty matches the substrate, the same terms your client would get on residential work, on record from day one.",
  },
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
    a: "The warranty matches the substrate, same as our residential work: 5 years on interior painting, 5 years on exterior solid finishes, 2 years on exterior semi-transparent and translucent stains. Documented in the project agreement so it's on record with the home.",
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
        body="Every build is backed in writing — 5 years on interior and exterior solid finishes, 2 on exterior stains. The same terms your client would get on residential work, documented so it transfers with the home."
      />

      <ProcessSteps
        bg="white"
        eyebrow="How we do it"
        heading="From first coat to clean handoff."
        intro="The same disciplined sequence on every build, so you know exactly what you're getting on the next one. Here's how a project runs from pre-start to documentation."
        steps={PROCESS}
      />

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
