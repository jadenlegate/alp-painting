import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Painters — Whistler, Pemberton & Squamish",
  description:
    "Professional interior painters serving Whistler, Pemberton, and Squamish. Walls, trim, ceilings, and doors with clean crews, premium finishes, and a 10-year warranty.",
  alternates: { canonical: "/services/interior-painting" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Interior Painting",
  serviceType: "Interior Painting",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Interior painting for homes and businesses across Whistler and the Sea to Sky. Walls, trim, ceilings, and doors with a clean-crew process and a 10-year warranty.",
  url: "https://alpenglowpainting.ca/services/interior-painting",
};

const PILLARS = [
  "Two-coat finish standard",
  "Low-VOC, premium products",
  "Furniture protected & moved",
  "Daily cleanup, livable home",
  "Written project report",
  "10-year written warranty",
];

const SURFACE_CARDS = [
  {
    title: "Walls",
    body: "Bedrooms, kitchens, baths, accent walls — sheen matched to the room, two coats standard, lines cut sharp.",
  },
  {
    title: "Ceilings",
    body: "Flat, vaulted, and beam-detailed, masked and cut by hand so nothing lands on the walls or trim.",
  },
  {
    title: "Trim, baseboards & crown",
    body: "Caulked, sanded, and hand-finished in a hard, washable coat built for daily contact.",
  },
  {
    title: "Doors, frames & jambs",
    body: "Removed where it makes sense and finished smooth — the surfaces you touch every day, done right.",
  },
  {
    title: "Stair railings & spindles",
    body: "Hand-sanded spindles and a hard-wearing handrail finish — the tedious work most crews rush.",
  },
  {
    title: "Closets, repair & colour",
    body: "Closet interiors, drywall patches, and on-wall colour testing — included, not billed as extras.",
  },
];

const APPROACH = [
  {
    title: "We protect before we paint.",
    body: "Floors, furniture, fixtures — nothing painted accidentally, nothing dusty at the end.",
  },
  {
    title: "Two coats is the baseline.",
    body: "Full, even coverage with proper dry time between coats. We don't call a room done after one pass.",
  },
  {
    title: "Low-VOC products by default.",
    body: "Premium low-odour lines — safe to sleep in the same room the night we finish.",
  },
  {
    title: "Closeout you'll actually use.",
    body: "A project report listing the exact products, colours, and sheens — so touch-ups years later aren't guesswork.",
  },
];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-interior",
    title: "Chalet interior — full repaint",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/finished-interior-chandelier-whistler.jpg",
  },
  {
    slug: "whistler-master-bedroom-repaint",
    title: "Master bedroom — walls and trim",
    location: "Whistler",
    serviceTags: ["Interior", "Trim"],
    coverUrl: "/stock-images/portfolio/master-bedroom-chalet-whistler.jpg",
  },
  {
    slug: "whistler-guest-bedroom",
    title: "Guest bedroom repaint",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/guest-bedroom-chalet-whistler.jpg",
  },
];

const FAQS = [
  {
    q: "How long does an interior project take?",
    a: "A typical three-bedroom repaint runs 3–5 working days depending on scope. We give you a specific day count in the proposal, not a vague range.",
  },
  {
    q: "Can we stay in the house while you paint?",
    a: "Almost always, yes. We use low-VOC products and work one area at a time so you have a clean, dry space to live in. We'll walk through the logistics on the site visit.",
  },
  {
    q: "What products do you use?",
    a: "Premium interior lines specified to the surface and the wear — Benjamin Moore Aura and Advance, Sherwin-Williams Emerald, and similar. We don't upcharge for a brand name; we use the right product for the job and tell you exactly what's going on your walls before we start.",
  },
  {
    q: "How do you handle colour selection?",
    a: "We test swatches on your walls and compare them in your light. If you want outside help, we partner with a local colour consultant who knows Sea-to-Sky light. Either way, you see the colours on your wall before they go on the wall.",
  },
  {
    q: "What prep work is included before painting?",
    a: "Hole filling, sanding, spot-priming, caulking where needed, and protecting floors, furniture, and fixtures. Prep is where a paint job is won or lost — we don't shortcut it.",
  },
  {
    q: "What does the warranty cover?",
    a: "Peeling, flaking, and premature failure of the paint finish under normal interior conditions. Interior projects carry a 10-year written warranty when we apply approved products with standard prep.",
  },
];

export default function InteriorPaintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Interior Painting"
        subline="Walls, trim, ceilings, doors. A clean process that respects your home — and a finish that holds up."
        imageUrl="/stock-images/empty-dark-blue-wall-modern-living-room-mock-up-interior-contemporary-style-free-space-picture-poster-leather-sofa-armchair-fireplace-plant-3d-rendering_429124-1653.avif"
        imageAlt="Interior of a Whistler home mid-repaint"
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
              <Eyebrow className="mb-5">Interior painting in the Sea to Sky</Eyebrow>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                The full interior,<br />done <em className="text-alpine not-italic font-medium">properly</em>.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Most homes we paint in Whistler are lived in — primary
                  residences, long-term rentals, second homes used every weekend.
                  The job has to be precise, low-disruption, and finished cleanly
                  enough that the house is better than before we arrived.
                </p>
                <p>
                  A single accent wall or a whole-house repaint — the standard is
                  the same.
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

      {/* Surfaces & details */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Eyebrow className="mb-5">Surfaces & details</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Everything inside the house — from baseboards to vaulted ceilings.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              If it&rsquo;s a finished surface and you want it painted, we paint
              it — and the proposal shows exactly what&rsquo;s in scope.
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

      <WarrantyBanner
        title="10-Year Interior Painting Warranty"
        body="Every interior project is backed in writing against peeling, flaking, and premature finish failure under normal conditions. If it fails inside the window, we come back and fix it."
      />

      {/* Approach */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">Our approach</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              The details other painters skip.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div
                key={a.title}
                className="border-l-2 border-alpine bg-background p-6 md:p-8"
              >
                <h3 className="font-serif text-xl md:text-[1.375rem] text-navy leading-tight tracking-tight font-medium">
                  {a.title}
                </h3>
                <p className="mt-3 text-ink leading-relaxed text-[0.95rem]">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/process" variant="text">See our full process →</Button>
          </div>
        </Container>
      </section>

      {/* Related projects */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div className="max-w-xl">
              <Eyebrow className="mb-5">Recent interior work</Eyebrow>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
                A few projects we&rsquo;ve loved.
              </h2>
            </div>
            <Button href="/work" variant="text">See all work →</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">
            Interior painting questions.
          </h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready for a fresh interior?"
        subline="Tell us about your space — we'll come see it and quote it, usually the day of the visit."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
