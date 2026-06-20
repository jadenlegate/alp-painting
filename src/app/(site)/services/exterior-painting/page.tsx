import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Painters — Whistler, Pemberton & Squamish",
  description:
    "Exterior painting contractors serving Whistler, Pemberton, and Squamish. Weather-tough finishes built for Sea to Sky climates, with up to a 5-year warranty.",
  alternates: { canonical: "/services/exterior-painting" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Exterior Painting",
  serviceType: "Exterior Painting",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Exterior painting for homes and commercial buildings in Whistler and the Sea to Sky. Weather-tough finishes for mountain climates.",
  url: "https://alpenglowpainting.ca/services/exterior-painting",
};

const PILLARS = [
  "Pressure wash & full prep",
  "Two coats standard",
  "Weather buffer days planned",
  "Landscaping protected",
  "Climate-rated coatings",
  "5-year written warranty",
];

const SURFACE_CARDS = [
  {
    title: "Full-home repaints",
    body: "Assessed, prepped, and two-coated so the colour reads consistent across every elevation.",
  },
  {
    title: "Trim, fascia & soffits",
    body: "The roofline details that make an exterior look sharp or neglected — prepped and cut by hand.",
  },
  {
    title: "Doors, garage doors & shutters",
    body: "High-visibility, high-contact features finished to take the sun and the handling.",
  },
  {
    title: "Surface prep & priming",
    body: "Loose paint, raised grain, and bare wood addressed and primed first — where the job is won.",
  },
  {
    title: "Caulking & sealing",
    body: "Gaps, seams, and failing caulk sealed to keep water out before freeze-thaw does its damage.",
  },
  {
    title: "Site protection & cleanup",
    body: "Landscaping protected and the site tidy at the end of every day — your yard isn't collateral.",
  },
];

const APPROACH = [
  {
    title: "Prep is 80% of the job.",
    body: "A beautiful coat over a failing substrate peels in a season. We wash, scrape, sand, caulk, and prime first.",
  },
  {
    title: "Coatings rated for mountain weather.",
    body: "UV, rain, freeze-thaw, and snow load — we spec products proven to handle it, not whatever's on sale.",
  },
  {
    title: "We work around the weather.",
    body: "Buffer days are planned into every project, and we tell you early if conditions force a change.",
  },
  {
    title: "Cleanup like we were never there.",
    body: "Overspray masked, drop cloths down, landscaping protected. Tidy daily, clean at the end.",
  },
];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-exterior",
    title: "Whistler chalet — full exterior",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "/stock-images/portfolio/chalet-bay-window-after-whistler.jpg",
  },
  {
    slug: "whistler-family-home-repaint",
    title: "Family home — exterior repaint",
    location: "Whistler",
    serviceTags: ["Exterior"],
    coverUrl: "/stock-images/portfolio/exterior-repaint-finished-whistler.jpg",
  },
  {
    slug: "whistler-cedar-fascia",
    title: "Cedar fascia and soffit restoration",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "/stock-images/portfolio/cedar-fascia-finished-whistler.jpg",
  },
];

const FAQS = [
  {
    q: "What's the best time of year to paint exterior in Whistler?",
    a: "Late spring through early fall is the typical window — we need temperatures above 10°C and dry conditions for at least 24 hours after application. We track forecasts and plan project windows with buffer days.",
  },
  {
    q: "How long does an exterior project take?",
    a: "A typical single-family home runs 4–8 working days depending on size, prep condition, and weather. We give you a day-range in the proposal, not a vague 'a few weeks.'",
  },
  {
    q: "What products do you use?",
    a: "We don't use one product for every exterior — Sikkens for cedar, Sansin for log, Benjamin Moore Aura and Sherwin-Williams Duration for painted siding. The right coating for the substrate and exposure, specified on the site visit and documented in your project report.",
  },
  {
    q: "How long will the paint last?",
    a: "With proper prep and premium products, 7–12 years is realistic on most Whistler exteriors. Solid finishes carry a 5-year written warranty; semi-transparent and translucent stains carry 2 years because they wear differently in the sun.",
  },
  {
    q: "What prep do you actually do?",
    a: "Pressure wash, scrape failing paint, sand to feather the edges, caulk gaps and seams, spot-prime bare wood, and mask windows, doors, lights, and landscaping. Prep is 80% of an exterior job — we don't skip it to come in cheap.",
  },
  {
    q: "What if the weather doesn't cooperate?",
    a: "We plan buffer days into every project. If a forecast shifts and we lose a window, we tell you the same day and reshuffle — we don't paint into rain or below-spec temperatures just to keep moving.",
  },
];

export default function ExteriorPaintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Exterior Painting"
        subline="Built for Whistler winters. Premium coatings, thorough prep, and a warranty that holds up when the weather does its worst."
        imageUrl="/stock-images/organic-modern-mountain-home-living-stone-design-build-img~82c18bb90b1ed2a0_4-9760-1-d4cd6cb.jpg"
        imageAlt="Freshly painted home exterior with mountain backdrop"
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
              <Eyebrow className="mb-5">Exterior painting in the Sea to Sky</Eyebrow>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                A finish that <em className="text-alpine not-italic font-medium">lasts</em><br />— and a process that earns it.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Sea-to-Sky homes face conditions that expose every shortcut —
                  high UV, freeze-thaw, and heavy snow load. The only way to get
                  paint that lasts is proper prep and products rated for the
                  climate.
                </p>
                <p>
                  Every exterior project starts with a real assessment of what
                  the surface needs before we open a can.
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
              <Eyebrow className="mb-5">What every exterior includes</Eyebrow>
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
            <Eyebrow className="mb-5">What we cover</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Every part of the exterior — siding to soffits.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              Most homes here are a mix of cedar, Hardie, stucco, and timber —
              each with its own prep and product. The proposal lists every surface.
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
        title="Up to a 5-Year Exterior Warranty"
        body="Solid paint and stain finishes are backed for 5 years; semi-transparent and translucent stains for 2, since they wear faster in the sun. In writing, on every exterior project."
      />

      {/* Approach */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">Our approach</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Where most exterior jobs fail — and how we don&rsquo;t.
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
          <div className="mt-10">
            <Button href="/process" variant="text">See our full process →</Button>
          </div>
        </Container>
      </section>

      {/* Before / after */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">Before & after</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Drag to see the difference.
            </h2>
          </div>
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/cedar-chalet-exterior-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/cedar-chalet-exterior-whistler.jpg"
              beforeAlt="Faded cedar chalet exterior before repaint, Whistler"
              afterAlt="Cedar chalet exterior after full repaint, Whistler"
              caption="Pressure washed, scraped and sanded, two coats of premium solid stain."
            />
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/family-home-exterior-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/exterior-repaint-finished-whistler.jpg"
              beforeAlt="Faded family home exterior before repaint, Whistler"
              afterAlt="Family home after full exterior repaint, Whistler"
              caption="Two-tone solid finish over a full prep — siding, trim, and fascia."
            />
          </div>
        </Container>
      </section>

      {/* Related projects */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <Eyebrow className="mb-5">Recent exterior work</Eyebrow>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Projects that hold up.</h2>
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
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Exterior painting questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to repaint the exterior?"
        subline="Tell us about the project — we'll come take a look and quote it, usually the day of the visit."
      />
    </>
  );
}
