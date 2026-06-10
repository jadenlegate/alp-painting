import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
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
    "Exterior painting contractors serving Whistler, Pemberton, and Squamish. Weather-tough finishes built for Sea to Sky climates — Sikkens, Benjamin Moore Aura, and Sherwin-Williams Duration. Up to a 10-year warranty.",
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
    "Exterior painting for homes and commercial buildings in Whistler and the Sea to Sky. Weather-tough finishes for mountain climates with premium Sikkens, Benjamin Moore, and Sherwin-Williams products.",
  url: "https://alpenglowpainting.ca/services/exterior-painting",
};

const PILLARS = [
  "Pressure wash & full prep",
  "Two coats standard",
  "Weather buffer days planned",
  "Landscaping protected",
  "Premium, climate-rated coatings",
  "5-year written warranty",
];

const SURFACE_CARDS = [
  {
    n: "01",
    title: "Full-home repaints.",
    body: "A full repaint is the right call when colour is fading, the finish is chalking, or wear is showing across multiple elevations at once. We assess each surface, prep what's failing, and apply two coats so the colour reads consistent from every angle and every elevation. The result holds for years, not seasons.",
  },
  {
    n: "02",
    title: "Trim, fascia & soffits.",
    body: "Trim and roofline details are where exterior painting either looks professional or rushed. Peeling fascia, tired soffits, and cracking edges around windows can make a freshly-painted home still look neglected. We prep these areas carefully and cut every line by hand — the eye naturally goes to the borders.",
  },
  {
    n: "03",
    title: "Doors, garage doors & shutters.",
    body: "Front doors, garage doors, and shutters are high-visibility features that take the most sun and handling on the house. We help homeowners choose finishes that suit the home's style — classic, understated, or a bolder accent that adds character. Hard finishes that hold up to daily contact.",
  },
  {
    n: "04",
    title: "Surface prep & priming.",
    body: "Prep isn't the extra step — it's the step that determines whether the finish holds up through Sea-to-Sky seasons. We address loose paint, raised grain, exposed wood, and failing areas, then prime where needed. Homeowners don't see prep once the job is done. They feel it later, in how long the finish lasts.",
  },
  {
    n: "05",
    title: "Caulking & sealing.",
    body: "Most exterior problems start small: a gap at a joint, a failing bead of caulk, a seam letting moisture in over winter. With freeze-thaw cycles, those gaps grow and paint failure follows. We seal and caulk where it matters — tightening the building envelope before the finish coat goes on.",
  },
  {
    n: "06",
    title: "Site protection & cleanup.",
    body: "Exterior painting happens in full view, and your property should still feel respected at the end of each day. We protect landscaping, keep materials organised, and maintain tidy site habits so your yard, walkways, and outdoor spaces don't feel like collateral damage from the project.",
  },
];

const APPROACH = [
  {
    title: "Prep is 80% of the job.",
    body: "A beautiful coat over a failing substrate peels in a season. We pressure wash, scrape, sand, caulk, and prime before any finish coat touches the surface.",
  },
  {
    title: "Coatings rated for mountain weather.",
    body: "Whistler exteriors get UV, rain, freeze-thaw cycles, and heavy snow load. We specify products proven to handle it — not whatever's on sale at the hardware store.",
  },
  {
    title: "We work around your schedule.",
    body: "Exterior painting is weather-dependent. We plan buffer days into every project and communicate early if conditions force a change. No surprises.",
  },
  {
    title: "Cleanup like we were never there.",
    body: "Overspray masked, drop cloths down, landscaping protected. End of every day the site is tidy. End of the job, it's clean.",
  },
];

const PRODUCTS = ["Sikkens", "Benjamin Moore", "Sherwin-Williams", "Sansin", "Messmer's"];

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
    a: "Late spring through early fall is the typical window — we need temperatures above 10°C and dry conditions for at least 24 hours after application. We track forecasts closely and plan project windows that give us enough buffer days.",
  },
  {
    q: "How long does an exterior project take?",
    a: "A typical single-family home runs 4–8 working days depending on size, prep condition, and weather. We give you a day-range in the proposal, not a vague 'a few weeks.'",
  },
  {
    q: "Do I need to be home while you're painting?",
    a: "Not unless you want to be. We go over site access on the walkthrough — most clients give us a code or key, and we lock up at the end of each day.",
  },
  {
    q: "How long will the paint last?",
    a: "With proper prep and premium products, 7–12 years is realistic on most Whistler exteriors. Solid paint and stain finishes carry a 5-year written warranty; semi-transparent and translucent stains carry a 2-year warranty because they wear differently in the sun.",
  },
  {
    q: "Do you do stucco and Hardie as well as wood siding?",
    a: "Yes. We work on all common Whistler exterior substrates — cedar, Hardie, stucco, concrete board, and log. Product and prep vary by substrate; we spec this out on the site visit.",
  },
  {
    q: "What prep do you actually do?",
    a: "Pressure wash the whole structure, scrape any failing paint, sand to feather the edges, caulk gaps and seams, spot-prime bare wood, and mask windows, doors, lights, and landscaping. Prep is 80% of an exterior job — we don't skip it to come in cheap.",
  },
  {
    q: "What if the weather doesn't cooperate?",
    a: "We plan buffer days into every project. If a forecast shifts and we lose a window, we tell you the same day and reshuffle — we don't paint into rain or below-spec temperatures just to keep moving. Exterior work that's rushed onto a bad surface fails in the first season.",
  },
  {
    q: "Do you protect plants and landscaping?",
    a: "Yes — drop cloths and breathable masking on plants close to the house, plus pre-job photos so we know what was there before. Anything fragile we'd rather move than mask gets coordinated with you at the walkthrough.",
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

      {/* Intro — editorial display + pillars */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid gap-12 md:gap-20 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                  Exterior painting in the Sea to Sky
                </span>
              </div>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                A finish that <em className="text-alpine not-italic font-medium">lasts</em><br />— and a process that earns it.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Sea-to-Sky homes face conditions that expose every shortcut in
                  an exterior paint job. High UV in summer, freeze-thaw in
                  shoulder seasons, heavy snow load on horizontal surfaces. The
                  only way to get paint that lasts is to do the prep properly
                  and use products rated for the climate.
                </p>
                <p>
                  Every exterior project starts with a thorough assessment of
                  what the surface needs before we open a can.
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
              <div className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium mb-5">
                What every exterior includes
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
                What we cover
              </span>
            </div>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Every part of the exterior — siding to soffits.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              A full exterior is rarely one substrate. Most Whistler homes are
              a mix of cedar, Hardie, stucco, and exposed timber — each with its
              own prep and product. The proposal lists every surface so you
              know exactly what&rsquo;s included.
            </p>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SURFACE_CARDS.map((c) => (
              <article
                key={c.n}
                className="group relative border border-navy/15 bg-background p-7 md:p-8 lg:p-9 transition-colors hover:border-navy/40"
              >
                <div className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium tabular-nums">
                  {c.n}
                </div>
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
          <div className="max-w-2xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                Our approach
              </span>
            </div>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Where most exterior jobs fail — and how we don&rsquo;t.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div
                key={a.title}
                className="border-l-2 border-alpine bg-stone-light/40 p-6 md:p-8"
              >
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

      {/* Products */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="grid gap-10 md:gap-16 md:grid-cols-[1fr_1.3fr] md:items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Products we use</span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.375rem] leading-[1.05] tracking-tight font-medium">
                Rated for mountain climates.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                We don&rsquo;t use one product for every exterior. Sikkens for
                cedar, Sansin for log, Benjamin Moore Aura for painted siding.
                The right product for the substrate — documented in the project
                report.
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

      {/* Before / after */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Before & after</span>
            </div>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Drag to see the difference.
            </h2>
            <p className="mt-5 text-ink leading-relaxed">
              Two recent exteriors — full prep, premium product, no shortcuts.
              Slide the handle to compare.
            </p>
          </div>
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/cedar-chalet-exterior-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/cedar-chalet-exterior-whistler.jpg"
              beforeAlt="Faded cedar chalet exterior before repaint, Whistler"
              afterAlt="Cedar chalet exterior after full repaint, Whistler"
              caption="Pressure washed, flaking paint scraped and sanded, 2 coats of premium solid stain."
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
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Recent exterior work</span>
              </div>
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
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-alpine" aria-hidden />
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Frequently asked</span>
          </div>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Exterior painting questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        years="5"
        heading="Years on solid exterior finishes. Two on semi-transparent stains."
        body="Different surfaces wear differently in mountain sun, so each finish gets a warranty matched to the product. Solid paint and stain hold the longest; penetrating stains wear gracefully but faster. Both in writing, on every project."
      />

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to repaint the exterior?"
        subline="Tell us about the project — we'll come take a look and quote it, usually the day of the visit."
      />
    </>
  );
}
