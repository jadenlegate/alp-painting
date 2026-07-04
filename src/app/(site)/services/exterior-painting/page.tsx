import type { Metadata } from "next";
import { IS_FULL } from "@/lib/flags";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";

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

// Add a real photo to a step with image: "/working-images/exterior-step-washing-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Protection & masking",
    body: "Before any prep begins, we protect everything that isn't being painted. Windows, doors, lights, and hardware get masked; drop cloths and breathable covers go over landscaping, decks, and walkways. We photograph the property first so nothing fragile is overlooked. The goal is a finish on the house and your plants, patio, and pathways exactly as we found them.",
  },
  {
    n: "02",
    title: "Pressure washing",
    body: "Paint will not bond to dirt, chalk, mildew, or spider webs, so the whole structure gets a thorough pressure wash. Where needed we follow with a cleaner to kill mildew and cut through built-up grime. This strips away everything loose and gives the coating clean substrate to grip. We then let the surface dry fully before any prep or paint goes on.",
  },
  {
    n: "03",
    title: "Scraping & sanding",
    body: "Any failing or peeling paint is scraped back to a sound edge, and those edges are feather-sanded so the repair won't telegraph through the topcoat. Bare and weathered wood gets sanded to accept the finish. This is the slow, unglamorous work that separates a paint job that lasts a decade from one that peels in a season. We don't rush it.",
  },
  {
    n: "04",
    title: "Caulking & priming",
    body: "We caulk gaps, seams, and joints to seal out the water that drives most exterior failure, and spot- or full-prime bare wood and stained areas. Priming locks down the surface, blocks tannin bleed, and gives the finish coats a uniform base. On Sea-to-Sky homes, sealing the envelope before painting is what keeps freeze-thaw from getting behind the coating. Then the surface is ready for finish.",
  },
  {
    n: "05",
    title: "Premium application",
    body: "We apply two full coats of premium, climate-rated coating — sprayed, back-rolled, or brushed depending on the surface — in your chosen colour and sheen. Trim, fascia, doors, and siding each get the right product and technique. We work to the weather window, holding proper dry time between coats rather than forcing the schedule. The result is even, durable coverage built for mountain exposure.",
  },
  {
    n: "06",
    title: "Clean-up & inspection",
    body: "Once the final coat has set, we pull all the masking and covers, sweep up, and return the property to how it was — landscaping uncovered, walkways clear, nothing left behind. Then we walk the full exterior looking for thin spots, missed edges, and drips, and touch up anything that isn't right. We'd rather catch it on the ladder than have you spot it from the driveway.",
  },
  {
    n: "07",
    title: "Project close-out",
    body: "We finish with a walkthrough together so you can see the work up close and flag anything you'd like addressed. You get a written project report listing the exact products, colours, and the warranty that applies to each finish. Final payment happens once you're satisfied — and the exterior is set to hold up through the seasons ahead.",
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
    a: "We complete most exterior projects between May and September. For most projects we need temperatures above 10°C and dry conditions during painting and staining. Prep work and painting sheltered surfaces can be done on rain days, but exposed surfaces are left for dry days. We track forecasts daily to ensure we're completing work in adequate weather conditions to ensure longevity for your project.",
  },
  {
    q: "How long does an exterior project take?",
    a: "Exterior project duration depends on the scope and type of project. Projects can last anywhere from one day to several weeks, depending on the scope, amount of prep required, weather, and access requirements, among other factors. We'll give you an approximate timeline with your written proposal.",
  },
  {
    q: "What products do you use?",
    a: "We specify the best products to use to ensure a great finish, your desired look, and the best longevity. We use the highest quality products from Sherwin-Williams, Benjamin Moore, Sico ProLuxe (formerly Sikkens), and Sansin, among other select brands. We'll tell you exactly what we're using, why, and what the expected lifespan is.",
  },
  {
    q: "How long will the paint last?",
    a: "The longevity of a project is highly dependent on the substrate, products used, weather exposure (UV, rain, snow, moisture, etc.), and most importantly, thorough preparation. Exterior solid finishes typically last 8–12 years or more. Exterior semi-transparent and translucent finishes typically last 3–10 years. Decks typically last 2–5 years. We'll discuss longevity and maintenance schedules with you at the site visit.",
  },
  {
    q: "What prep do you actually do?",
    a: "Prep required depends on the type of substrate, current surface condition, and products being used. Standard prep includes a combination of pressure washing, soft washing, scraping and sanding failing paint/stain, caulking gaps and seams, spot priming, and masking windows, doors, lights, and covering landscaping and furniture. Proper prep takes up between 30% and 80% of an exterior job.",
  },
  {
    q: "What if the weather doesn't cooperate?",
    a: "Prep work and painting sheltered surfaces can be done on rain days, but exposed surfaces are left for dry days. We track forecasts daily, including temperature, precipitation, humidity, and dew point, so that we're completing work in adequate weather conditions that ensure longevity for your project.",
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

      <ProcessSteps
        eyebrow="How we do it"
        heading="The exterior painting process, step by step."
        intro="A finish that lasts is built in order — wash, prep, seal, then coat. Skip a step and the weather finds it. Here's exactly how an exterior project runs."
        steps={PROCESS}
      />

      {/* Before/after + Related — hidden in MVP mode, returning with tweaks in V2 */}
      {IS_FULL && (
        <>
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
                <Button href="/portfolio" variant="text">See all work →</Button>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {RELATED_PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
              </div>
            </Container>
          </section>
        </>
      )}

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
