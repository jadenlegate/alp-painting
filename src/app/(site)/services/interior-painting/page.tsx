import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";

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
    n: "01",
    title: "Walls — every room, every sheen.",
    body: "Bedrooms want flat. Kitchens and baths want a scrubbable eggshell. Accent walls want a finish that holds the saturated colour. We pick sheen by room, prep so the coat lays even, and roll two coats standard — three when the colour demands it. Lines stay sharp against trim, ceilings, and corners in any light.",
  },
  {
    n: "02",
    title: "Ceilings — including the vaulted ones.",
    body: "Ceilings get noticed when they're done wrong — roller spatter on the wall, an uneven line at the cornice, paint on the trim. We mask, sheet, and cut every edge by hand. Vaulted and beam-detailed ceilings get extra care to manage spray drift and protect timber. Done properly, the ceiling reads as part of the room.",
  },
  {
    n: "03",
    title: "Trim, baseboards & crown moulding.",
    body: "Trim is where careful painters separate from quick ones. We caulk every gap, sand previous coats so the new finish lays smooth, and hand-cut every line against wall and floor. Cabinet-grade alkyds on door casings, baseboards, and handrails — the surfaces you'll touch — so the finish stays hard and washable for years.",
  },
  {
    n: "04",
    title: "Doors, frames & jambs.",
    body: "Doors take more handling than any other interior surface, which means the finish has to hold. We remove doors when sensible, sand and prime the slab, and spray or hand-finish for a hardware-grade result. Frames and jambs get the same hard finish — they're the surfaces people brush past every day.",
  },
  {
    n: "05",
    title: "Stair railings, spindles & risers.",
    body: "Staircases are tedious and visible — exactly the kind of work that exposes a corner-cutting crew. We hand-sand every spindle, mask risers separately, and refinish handrails with a hard topcoat that takes daily contact. The result is the staircase the house wants to remember itself by.",
  },
  {
    n: "06",
    title: "Closets, repair & colour guidance.",
    body: "Closet interiors, drywall patches, water-damage repair, and on-wall colour testing are all included when they come up — we don't quote them separately at invoice time. If you want help picking a colour, we'll bring drawdowns and test them in your actual light, not under the showroom's.",
  },
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
    body: "Benjamin Moore Aura, Sherwin-Williams Emerald, and similar premium lines — low odour, safe to sleep in the same night.",
  },
  {
    title: "Closeout you'll actually use.",
    body: "Every project ends with a document listing the exact products, colours, and sheens we used — so repairs or touch-ups, years later, aren't guesswork.",
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
    q: "How do you handle colour selection?",
    a: "We can test swatches on your walls and compare in your light. If you want outside help, we partner with a local colour consultant who knows Sea-to-Sky light conditions. Either way, you'll see the colours on your wall before they go on the wall.",
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
    a: "We walk the project with you room by room, address any touch-ups on the spot, and hand off a project report listing the exact products, colours, and sheens we used. So if you need to touch up years later, it's not guesswork.",
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
        <Button
          href="/contact"
          size="lg"
          className="!bg-background !text-navy hover:!bg-surface"
        >
          Get a Quote
        </Button>
      </Hero>

      {/* Intro — editorial display + pillars */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid gap-12 md:gap-20 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                  Interior painting in the Sea to Sky
                </span>
              </div>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                The full interior,<br />done <em className="text-alpine not-italic font-medium">properly</em>.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Most homes we paint in Whistler are lived in — primary
                  residences, long-term rentals, second homes used every
                  weekend. That means the job has to be precise, low-disruption,
                  and finished cleanly enough that the house is better than
                  before we arrived.
                </p>
                <p>
                  Whether it&rsquo;s a single accent wall or a whole-house
                  repaint, the standard is the same.
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

            {/* Pillars — outlined editorial boxes */}
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium mb-5">
                What every project includes
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

      {/* Surfaces & details — 3x2 card grid */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                Surfaces & details
              </span>
            </div>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Everything inside the house — from baseboards to vaulted ceilings.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              Homeowners often ask if we&rsquo;ll paint the closet interiors,
              the stair spindles, or the inside of the door frames. The answer
              is yes — and the proposal will show you exactly what&rsquo;s in
              scope so nothing is skipped and nothing surprises you on invoice day.
            </p>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SURFACE_CARDS.map((c) => (
              <article
                key={c.n}
                className="group relative border border-navy/15 bg-background p-7 md:p-8 lg:p-9 transition-colors hover:border-navy/40"
              >
                <div className="h-px w-7 bg-alpine" aria-hidden />
                <h3 className="mt-4 font-serif text-navy text-[1.375rem] md:text-[1.5rem] leading-[1.15] tracking-tight font-medium">
                  {c.title}
                </h3>
                <p className="mt-4 text-ink leading-relaxed text-[0.95rem]">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                Our approach
              </span>
            </div>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              The details other painters skip.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div
                key={a.title}
                className="border-l-2 border-alpine bg-stone-light/40 p-6 md:p-8"
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
            <Button href="/process" variant="text">
              See our full process →
            </Button>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="grid gap-10 md:gap-16 md:grid-cols-[1fr_1.3fr] md:items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                  Products we use
                </span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.375rem] leading-[1.05] tracking-tight font-medium">
                Premium lines, specified for the job.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                We don&rsquo;t upcharge for a brand name. We use the right
                product for the surface, the sheen, and the wear you&rsquo;ll
                put it through — and document the exact specification in the
                project report.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {PRODUCTS.map((p) => (
                <div
                  key={p}
                  className="border border-navy/15 bg-background py-6 px-5 font-serif text-navy text-[1.0625rem] md:text-[1.125rem] text-center tracking-tight"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related projects */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                  Recent interior work
                </span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
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
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-alpine" aria-hidden />
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
              Frequently asked
            </span>
          </div>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">
            Interior painting questions.
          </h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        years="10"
        heading="Years on every interior painting project, in writing."
        body="Standard on every interior project — covers peeling, flaking, and premature finish failure under normal conditions, when work is done with approved products. If something fails inside the window, we come back and fix it. That's the whole deal."
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
