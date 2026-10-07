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
  title: "Cabinet Refinishing in Whistler, Pemberton & Squamish",
  description:
    "Kitchen and bathroom cabinet refinishing in Whistler, Pemberton, and Squamish. Your existing cabinets get a smooth, hard-wearing lacquer finish, so you don't have to replace them.",
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
    "Cabinet refinishing in Whistler and the Sea to Sky. Kitchen and bathroom cabinets are finished in premium sprayed lacquer, so the existing cabinets can stay.",
  url: "https://alpenglowpainting.ca/services/cabinet-refinishing",
};

const SURFACE_CARDS = [
  {
    title: "Kitchen cabinets",
    body: "Uppers, lowers, and islands. Doors and drawer fronts are sprayed off-site in a shop, and we work in phases so you can keep using the kitchen.",
  },
  {
    title: "Bathroom vanities",
    body: "A hard, washable finish that stands up to steam, water, and daily use.",
  },
  {
    title: "Built-ins & media units",
    body: "Bookcases, desks, and media walls, finished to match the rest of the room.",
  },
  {
    title: "Closet built-ins & wardrobes",
    body: "Mudroom storage, wardrobes, and walk-in closets, with a finish chosen for how much use they get.",
  },
  {
    title: "Mantels & fireplace surrounds",
    body: "A mantel is usually the first thing you notice in a room, so we test the colour and sheen on it before we start.",
  },
  {
    title: "Colour consultation & samples",
    body: "We'll go over colour and sheen samples with you and look at them in your kitchen's light before you decide.",
  },
];

// Add a real photo to a step with image: "/working-images/cabinet-step-spraying-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Protection & kitchen prep",
    body: "Sanding cabinets makes dust, so we start by sealing off the kitchen. Countertops, floors, and appliances get covered, and we put up barriers to keep dust out of the rest of the house. We work in phases and plan the order with you, so the sink, stove, and fridge stay usable. Nothing comes off the cabinets until the room is fully covered.",
  },
  {
    n: "02",
    title: "Door & drawer removal",
    body: "We take off every door and drawer front and label each one, so it goes back on the same opening it came from. Hinges, pulls, and other hardware are bagged and marked by location. The doors and drawer fronts go off-site to a shop for finishing, and the cabinet boxes stay in your kitchen. The labelling takes time, but it's why everything lines up again at the end.",
  },
  {
    n: "03",
    title: "Clean, degrease, sand & prime",
    body: "Kitchen cabinets build up years of grease and cooking residue, and no finish will stick to it. Every surface is degreased, then scuff-sanded so the new finish has something to grab onto. On open-grain wood like oak, the grain can be filled if you want a completely smooth look with a solid finish. Then the surfaces are primed or sealed, depending on the finish you've chosen. When a cabinet finish starts chipping within a year, this is usually the step that was skipped.",
  },
  {
    n: "04",
    title: "Spray finishing off-site",
    body: "The doors and drawer fronts are sprayed off-site in a shop, where dust can be kept under control. Several thin coats of premium lacquer go on in the colour and sheen you picked, with full drying time between coats. Lacquer cures much harder than standard cabinet paint, and spraying leaves no brush or roller marks.",
  },
  {
    n: "05",
    title: "Box finishing on-site",
    body: "The cabinet boxes get the same cleaning, sanding, and priming, then they're sprayed in place with an HVLP sprayer, which keeps overspray low. Everything around them is masked off. The boxes are matched to the doors so the whole kitchen has one consistent finish.",
  },
  {
    n: "06",
    title: "Reinstall & adjust",
    body: "Once everything has cured, we hang the doors, put the drawer fronts back on, and reinstall the hardware. Then we adjust each hinge so the doors sit straight and close evenly. If you're adding new pulls, soft-close hinges, or bumpers, they go on now.",
  },
  {
    n: "07",
    title: "Inspection & close-out",
    body: "We walk through the kitchen with you in good light, check every door and edge, and touch up anything that needs it. You'll get a written project report listing the exact product, colour, and sheen, so future touch-ups match. Final payment happens once you're satisfied.",
  },
];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-kitchen",
    title: "Whistler chalet kitchen refresh",
    location: "Whistler",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "/stock-images/tinted-coty2024-kitchen-1024x690.jpg",
  },
  {
    slug: "whistler-chalet-living",
    title: "Chalet living room, paint and trim",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/living-room-chalet-whistler.jpg",
  },
  {
    slug: "whistler-master-suite",
    title: "Master suite finish carpentry refresh",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/master-bedroom-detail-whistler.jpg",
  },
];

const FAQS = [
  {
    q: "Is refinishing worth it compared to replacing?",
    a: "If your cabinet boxes are in good shape, usually yes. Refinishing costs a fraction of new cabinets, and the result looks close to new. If the boxes are water-damaged or warped, or you want a different layout, replacing them makes more sense. We'll give you our honest opinion when we come see them.",
  },
  {
    q: "What products and finishes do you use?",
    a: "We use premium lacquer, which cures much harder than standard cabinet paint for maximum durability. You can choose a solid lacquer, which looks like paint, or a semi-transparent stain that lets the wood grain show through. Sheens range from matte to semi-gloss, and satin is the most popular for kitchens.",
  },
  {
    q: "How long does cabinet refinishing take?",
    a: "Most kitchens take 3 to 5 working days. The first day is prep and taking the doors off, the middle days are spraying and drying, and the last day is putting everything back and touching up. We'll give you a timeline with your written proposal.",
  },
  {
    q: "Can we use the kitchen during the project?",
    a: "In most cases, yes. We work in sections so part of the kitchen is always usable, and the sink, stove, and fridge stay accessible.",
  },
  {
    q: "Will the finish hold up to daily use?",
    a: "With proper prep and a sprayed lacquer finish, refinished cabinets typically last 8 to 12 years with normal use. Prep makes the biggest difference. Without it, even a good finish can start failing in a busy kitchen within a couple of years.",
  },
  {
    q: "Do you spray on-site or in a shop?",
    a: "Both. Doors and drawer fronts are sprayed off-site in a shop, where dust can be kept under control. The cabinet boxes are sprayed on-site with an HVLP sprayer, with everything around them masked off.",
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
        subline="A smooth, hard-wearing lacquer finish on the cabinets you already have. Your kitchen looks new without the cost and mess of replacing them."
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
              Cabinets, vanities, built-ins, and other finished woodwork.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              We use the same spray process on anything with a painted or stained
              finish, so the cabinets and built-ins in a room can be done together
              and match.
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
        intro="A finish this smooth takes careful prep and spraying, and it can't be rushed. Here's how a typical kitchen goes, from covering the countertops to hanging the doors back up."
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
        subline="We'll come look at your cabinets and tell you honestly what we think. We can usually quote the same day, and if not, you'll have it within a couple of days."
      />
    </>
  );
}
