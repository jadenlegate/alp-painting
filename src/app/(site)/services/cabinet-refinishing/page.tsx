import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IS_FULL } from "@/lib/flags";
import { Container } from "@/components/Container";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Cabinet Refinishing — Whistler, Pemberton & Squamish",
  description:
    "Kitchen and bathroom cabinet refinishing across Whistler, Pemberton, and Squamish. Factory-grade spray finish without replacing your boxes.",
  alternates: { canonical: "/services/cabinet-refinishing" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cabinet Refinishing",
  serviceType: "Cabinet Refinishing",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Cabinet refinishing across Whistler and the Sea to Sky. Spray-applied, factory-grade finishes for kitchen and bathroom cabinets without replacing the boxes.",
  url: "https://alpenglowpainting.ca/services/cabinet-refinishing",
};

const SURFACE_CARDS = [
  {
    title: "Kitchen cabinets",
    body: "Uppers, lowers, and islands sprayed in our shop for a factory-smooth finish — phased so the kitchen stays usable.",
  },
  {
    title: "Bathroom vanities",
    body: "Hard, washable finishes built for humidity and daily contact.",
  },
  {
    title: "Built-ins & media units",
    body: "Bookcases, desks, and media walls finished to read custom, matched to the rest of the room.",
  },
  {
    title: "Closet built-ins & wardrobes",
    body: "Mudroom storage and walk-in built-ins, finished to suit how they get used.",
  },
  {
    title: "Mantels & fireplace surrounds",
    body: "Focal-point woodwork refinished with the colour and sheen tested first.",
  },
  {
    title: "Colour consultation & samples",
    body: "Drawdowns tested on a real door in your kitchen light before we commit.",
  },
];

// Add a real photo to a step with image: "/working-images/cabinet-step-spraying-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Protection & kitchen prep",
    body: "Cabinet work makes dust, so containment comes first. We mask off the kitchen, protect countertops, floors, and appliances, and set up to keep airborne dust out of the rest of the home. Because we work in phases, we plan the layout with you so the sink, stove, and fridge stay usable throughout. The space is sealed and staged before any doors come off.",
  },
  {
    n: "02",
    title: "Door & drawer removal",
    body: "Every door and drawer front comes off and is labelled so each piece returns to its exact opening. Hinges, pulls, and hardware are removed and bagged by location. The fronts head to our shop for finishing while the boxes stay with you. Careful labelling here is what makes reinstall seamless at the end.",
  },
  {
    n: "03",
    title: "Clean, degrease, sand & prime",
    body: "Cabinets carry years of grease and cooking residue that paint won't stick to, so we degrease thoroughly, then scuff-sand every surface to give the finish a mechanical grip. Grain is filled where a glass-smooth result calls for it. Then we apply a bonding primer made for cabinetry. This adhesion prep is the single biggest reason a refinish lasts a decade instead of chipping in a year.",
  },
  {
    n: "04",
    title: "Spray finishing in the shop",
    body: "Doors and drawer fronts are sprayed in our controlled, dust-free shop — not brushed or rolled — for the flat, even, factory-grade finish that's the whole point of refinishing. We apply multiple thin coats of a hard, cabinet-specific finish in your chosen colour and sheen, with proper cure time between each. Spraying off-site is what eliminates brush marks and lets the finish level out perfectly.",
  },
  {
    n: "05",
    title: "Box finishing on-site",
    body: "The cabinet boxes that stay in your kitchen get the same prep and finish, sprayed in place with an HVLP setup and full masking so overspray stays contained. We match the boxes precisely to the shop-sprayed fronts so everything reads as one consistent finish. Working clean and contained is what lets us do this without taking your kitchen apart.",
  },
  {
    n: "06",
    title: "Reinstall & adjust",
    body: "Once everything has cured, we rehang the doors and drawers, reinstall the hardware, and adjust every hinge so doors sit square and close evenly. New hardware, soft-close hinges, or bumpers go on at this stage if you've added them. The kitchen goes back together tighter and cleaner than it came apart.",
  },
  {
    n: "07",
    title: "Inspection & close-out",
    body: "We walk the finished kitchen with you, checking every face and edge in good light and touching up anything that isn't perfect. You get a written project report with the exact product, colour, and sheen so future touch-ups match. Final payment happens once you're satisfied — and your kitchen looks new without the renovation.",
  },
];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-kitchen",
    title: "Whistler chalet — kitchen refresh",
    location: "Whistler",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "/stock-images/tinted-coty2024-kitchen-1024x690.jpg",
  },
  {
    slug: "whistler-chalet-living",
    title: "Chalet living room — paint and trim",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/living-room-chalet-whistler.jpg",
  },
  {
    slug: "whistler-master-suite",
    title: "Master suite — finish carpentry refresh",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/master-bedroom-detail-whistler.jpg",
  },
];

const FAQS = [
  {
    q: "Is refinishing worth it vs. replacing?",
    a: "Almost always yes, if the boxes are structurally sound. Refinishing runs a fraction of replacement cost for a like-new finish. If the boxes are damaged, warped, or you want a layout change, replacement makes more sense — we'll tell you honestly on the site visit.",
  },
  {
    q: "What products and finishes do you use?",
    a: "Cabinet-specific waterborne and alkyd finishes — harder, more washable, and more chip-resistant than wall paint — from lines like Benjamin Moore and Sherwin-Williams. Available in matte, eggshell, satin, and semi-gloss; satin is the most popular for kitchens.",
  },
  {
    q: "How long does cabinet refinishing take?",
    a: "Most kitchens are done in 3–5 working days. Day one is prep and door removal; days two through four are spray and dry cycles; day five is reinstallation and touch-up.",
  },
  {
    q: "Can we use the kitchen during the project?",
    a: "Yes, in most cases. We phase the work so the boxes stay in place and one section stays functional at a time. The sink, stove, and fridge stay accessible throughout.",
  },
  {
    q: "Will the finish hold up to daily use?",
    a: "Properly prepped and sprayed, refinished cabinets hold up for 8–12 years under normal use. Surface prep is the key — without it, even good paint fails in high-traffic areas within a couple of years.",
  },
  {
    q: "Do you spray on-site or in a shop?",
    a: "Doors and drawer fronts go to our shop and are sprayed in a controlled, dust-free environment. Boxes get spray-prepped on-site with masking and HVLP so overspray stays contained. Best of both.",
  },
];

export default function CabinetRefinishingPage() {
  if (!IS_FULL) notFound(); // MVP: page hidden until launch-ready
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceHero
        eyebrow="Services"
        headline="Cabinet Refinishing"
        subline="A factory-smooth finish on your existing cabinets. No replacement, no renovation chaos — just a kitchen that looks new."
        imageUrl="/stock-images/WKP-53Constitution-HR-10.jpeg.webp"
        imageAlt="Freshly refinished white kitchen cabinets"
      >
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
      </ServiceHero>

      {/* Surfaces */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Eyebrow className="mb-5">What we refinish</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Cabinets, vanities, built-ins — anywhere there&rsquo;s a casework finish.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              The same spray process works on anything with a finished surface —
              a coordinated refinish can transform a room without renovating a box.
            </p>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SURFACE_CARDS.map((c) => (
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

      <ProcessSteps
        bg="white"
        eyebrow="How we do it"
        heading="The cabinet refinishing process, step by step."
        intro="A factory-smooth finish comes from controlled prep and spray work, not a quick brush-over. Here's exactly how a kitchen runs from masking to reinstall — with your sink and stove usable throughout."
        steps={PROCESS}
      />

      {/* Related */}
      {/* Related — hidden in MVP mode, returning with tweaks in V2 */}
      {IS_FULL && (
        <section className="py-16 md:py-24 bg-stone-light/50">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <Eyebrow className="mb-5">Recent cabinet work</Eyebrow>
                <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Before and after.</h2>
              </div>
              <Button href="/portfolio" variant="text">See all work →</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {RELATED_PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-24">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Cabinet refinishing questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Want to see what your kitchen could look like?"
        subline="We'll take a look at the cabinets on-site and give you an honest assessment — and a quote the day of the visit."
      />
    </>
  );
}
