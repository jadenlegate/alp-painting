import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Painters — Whistler, Pemberton & Squamish",
  description:
    "Professional interior painters serving Whistler, Pemberton, and Squamish. Walls, trim, ceilings, and doors with clean crews, premium Benjamin Moore and Sherwin-Williams finishes, and up to a 10-year warranty.",
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
    "Interior painting for homes and businesses across Whistler and the Sea to Sky. Walls, trim, ceilings, and doors with a clean-crew process and up to a 10-year warranty.",
  url: "https://alpenglowpainting.ca/services/interior-painting",
};

// Interior Painting service page — matches brief §7.2 template:
// Hero → What we do → Approach → Products → Related projects → FAQ → CTA.
// Once Sanity schemas are live, pull `service` doc by slug and render the
// same structure. For now, content lives inline in this file.

const INCLUDED = [
  "Full-coverage drop cloths and plastic masking",
  "Wall prep: filling, sanding, priming as needed",
  "Trim, doors, ceilings, closets — whatever's in scope",
  "Two-coat finish standard, three if the color demands it",
  "Daily cleanup so your home stays livable",
  "Final walkthrough with a written project report",
];

const SURFACES = [
  "Walls — smooth, textured, and accent walls",
  "Ceilings — flat, vaulted, and beam-detailed",
  "Trim, baseboards, and crown moulding",
  "Doors, frames, and jambs",
  "Stair railings, spindles, and risers",
  "Closet interiors and built-in shelving",
  "Wallpaper removal and wall repair",
  "Color consultation and sample drawdowns",
];

const APPROACH = [
  {
    title: "We protect before we paint.",
    body: "Floors, furniture, fixtures — nothing painted accidentally, nothing dusty at the end. You'll notice on day one.",
  },
  {
    title: "Two coats is the baseline.",
    body: "We don't call a room 'done' because the roller ran over it once. Full, even coverage with proper dry time between coats.",
  },
  {
    title: "Low-VOC products by default.",
    body: "Benjamin Moore Aura, Sherwin-Williams Emerald, and similar premium lines — low odor, safe to sleep in the same night.",
  },
  {
    title: "Closeout you'll actually use.",
    body: "Every project ends with a document listing the exact products, colors, and sheens we used — so repairs or touch-ups, years later, aren't guesswork.",
  },
];

const PRODUCTS = [
  "Benjamin Moore",
  "Sherwin-Williams",
  "Sikkens",
  "Minwax",
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
    q: "What's included in the quote?",
    a: "Everything that goes into the project — prep, materials, labour, drop cloths, masking, two-coat finish, daily cleanup, and the final walkthrough. The proposal itemizes each room so you can see exactly what's covered. No vague lump sums.",
  },
  {
    q: "Do you move furniture?",
    a: "We move light-to-medium furniture to the center of the room and cover it. For large or fragile pieces we'll coordinate in advance — usually you move the antiques, we handle everything else.",
  },
  {
    q: "How do you handle color selection?",
    a: "We can test swatches on your walls and compare in your light. If you want outside help, we partner with a local color consultant who knows Sea-to-Sky light conditions. Either way, you'll see the colors on your wall before they go on the wall.",
  },
  {
    q: "What prep work is included before painting?",
    a: "Hole filling, sanding, spot-priming, caulking where needed, and protecting floors, furniture, and fixtures. Prep is where a paint job is won or lost — we don't shortcut it.",
  },
  {
    q: "What does the warranty cover?",
    a: "Peeling, flaking, and premature failure of the paint finish under normal interior conditions. Interior projects carry a 10-year written warranty when we apply approved products with standard prep.",
  },
  {
    q: "What happens at the final walkthrough?",
    a: "We walk the project with you room by room, address any touch-ups on the spot, and hand off a project report listing the exact products, colors, and sheens we used. So if you need to touch up years later, it's not guesswork.",
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
        subline="Walls, trim, ceilings, cabinets. A clean process that respects your home — and a finish that holds up."
        imageUrl="/stock-images/empty-dark-blue-wall-modern-living-room-mock-up-interior-contemporary-style-free-space-picture-poster-leather-sofa-armchair-fireplace-plant-3d-rendering_429124-1653.avif"
        imageAlt="Interior of a Whistler home mid-repaint"
      >
        <Button
          href="/contact"
          size="lg"
          className="!bg-background !text-navy hover:!bg-surface"
        >
          Get a Quote
        </Button>
      </Hero>

      {/* What we do */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">
                What we do
              </div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                The full interior, done properly.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Most homes we paint in Whistler are lived in — primary
                residences, long-term rentals, second homes used every weekend.
                That means the job has to be precise, low-disruption, and
                finished cleanly enough that the house is better than before
                we arrived.
              </p>
              <p className="mt-4 text-ink leading-relaxed">
                Whether it&rsquo;s a single accent wall or a whole-house repaint,
                the standard is the same.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">
                Included in every project
              </div>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-navy mt-0.5 flex-shrink-0"
                    />
                    <span className="text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Surfaces & details we finish */}
      <section className="pb-16 md:pb-24 border-t border-border/60 pt-16 md:pt-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">
                Surfaces & details
              </div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                Everything inside the house — from baseboards to vaulted ceilings.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Homeowners often ask if we&rsquo;ll paint the closet interiors,
                the stair spindles, or the inside of the door frames.
                The answer is yes — and we&rsquo;ll show you on the proposal
                exactly what&rsquo;s in scope so nothing gets skipped or
                surprises you on invoice day.
              </p>
              <p className="mt-4 text-ink leading-relaxed">
                If it&rsquo;s a finished surface and you want it painted, we
                paint it. If you&rsquo;re not sure whether something can be
                refinished, ask — we&rsquo;ll tell you honestly.
              </p>
            </div>
            <div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {SURFACES.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <Check size={18} className="text-alpine mt-0.5 flex-shrink-0" />
                    <span className="text-ink leading-relaxed text-[0.95rem]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">
              Our approach
            </div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              The details other painters skip.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div
                key={a.title}
                className="border border-border rounded-sm bg-surface p-6 md:p-7"
              >
                <h3 className="font-serif text-xl text-navy">{a.title}</h3>
                <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/process" variant="text">
              See our full process →
            </Button>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">
              Products we use
            </div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
              Premium lines, specified for the job.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              We don&rsquo;t upcharge for a brand name — we use the right
              product for the surface, the sheen, and the wear you&rsquo;ll put
              it through.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p}
                className="px-5 py-3 border border-border rounded-sm bg-surface font-serif text-navy"
              >
                {p}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related projects */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">
                Recent interior work
              </div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                A few projects we&rsquo;ve loved.
              </h2>
            </div>
            <Button href="/work" variant="text">
              See all work →
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Container size="prose">
          <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">
            Frequently asked
          </div>
          <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] mb-8">
            Interior painting questions.
          </h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        heading="A 10-year written warranty on interior painting."
        body="Standard on every interior project — covers peeling, flaking, and premature finish failure under normal conditions, when work is done with approved products."
      />

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready for a fresh interior?"
        subline="Tell us about your space — we'll come see it and quote it, usually the day of the visit."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
