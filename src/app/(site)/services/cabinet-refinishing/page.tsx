import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";

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

const PILLARS = [
  "Doors sprayed in shop",
  "Boxes prepped on-site",
  "Cabinet-grade finishes",
  "Kitchen stays usable",
  "Colour samples on real doors",
  "Documented for touch-ups",
];

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

const APPROACH = [
  {
    title: "Spray, not brush.",
    body: "Every door and drawer face sprayed off-site for a flat, smooth finish that reads factory-new.",
  },
  {
    title: "Proper prep every time.",
    body: "Cabinets take grease, humidity, and daily contact. We degrease, sand, and prime before any finish.",
  },
  {
    title: "Stay in your kitchen.",
    body: "We work in phases — the sink, stove, and fridge stay accessible throughout.",
  },
  {
    title: "Colour consultation included.",
    body: "We bring samples and test them in your actual kitchen light before committing to the project.",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Cabinet Refinishing"
        subline="A factory-smooth finish on your existing cabinets. No replacement, no renovation chaos — just a kitchen that looks new."
        imageUrl="/stock-images/WKP-53Constitution-HR-10.jpeg.webp"
        imageAlt="Freshly refinished white kitchen cabinets"
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
              <Eyebrow className="mb-5">Cabinet refinishing in the Sea to Sky</Eyebrow>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                New kitchen,<br />a <em className="text-alpine not-italic font-medium">fraction</em> of the cost.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Cabinet replacement is one of the most disruptive renovations in
                  a home. Refinishing gets you 90% of the visual result for
                  10–20% of the cost — and you&rsquo;re back in your kitchen
                  within a week.
                </p>
                <p>
                  If the boxes are solid and the layout works, refinishing is
                  almost always the right call.
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
              <Eyebrow className="mb-5">What every project includes</Eyebrow>
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

      {/* Approach */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">Our approach</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Why our cabinet finish looks different from a brushed repaint.
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

      {/* Related */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <Eyebrow className="mb-5">Recent cabinet work</Eyebrow>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Before and after.</h2>
            </div>
            <Button href="/work" variant="text">See all work →</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Container>
      </section>

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
