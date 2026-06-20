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
  title: "Wood Restoration & Staining — Whistler, Pemberton & Squamish",
  description:
    "Cedar siding, decks, timber-frame beams, and fences. Wood restoration and staining across Whistler, Pemberton, and Squamish with penetrating finishes built for mountain exposure.",
  alternates: { canonical: "/services/wood-restoration" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wood Restoration & Staining",
  serviceType: "Wood Restoration and Staining",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Wood restoration and staining for cedar siding, decks, timber-frame beams, and fences across Whistler and the Sea to Sky.",
  url: "https://alpenglowpainting.ca/services/wood-restoration",
};

const PILLARS = [
  "Cleaned & brightened first",
  "Product matched to species",
  "Two coats on horizontals",
  "Penetrating finishes default",
  "Written re-coat schedule",
  "5-year warranty on solid",
];

const SURFACE_CARDS = [
  {
    title: "Cedar siding & shingles",
    body: "Cleaned, brightened, and stained back from grey — penetrating finishes that fail gracefully, not in sheets.",
  },
  {
    title: "Decks, railings & spindles",
    body: "Stripped and sanded, then two coats matched to traffic on the hardest-working wood on the house.",
  },
  {
    title: "Timber frames, beams & posts",
    body: "Checked for splits and finished to protect exposed timber without changing how it reads in the light.",
  },
  {
    title: "Pine ceilings & deck soffits",
    body: "Covered ceilings brought back from a yellowed cast to clean, natural grain.",
  },
  {
    title: "Fences, gates & garden structures",
    body: "Stripped, repaired where needed, and stained to a consistent colour again.",
  },
  {
    title: "Re-coat scheduling",
    body: "A written maintenance window so you refresh on time instead of starting over.",
  },
];

const APPROACH = [
  {
    title: "Restoration before staining.",
    body: "Stain over weathered grey wood doesn't bond. We clean and brighten first so the product penetrates.",
  },
  {
    title: "Penetrating finishes by default.",
    body: "Film-formers peel. Penetrating products absorb and fail gracefully — the right call on most exteriors here.",
  },
  {
    title: "Product matched to species.",
    body: "Cedar, fir, pine, and pressure-treated all behave differently. We spec to the wood, not one-size-fits-all.",
  },
  {
    title: "Maintenance scheduling included.",
    body: "Your report includes a re-coat window. Proactive maintenance costs a fraction of a full restoration.",
  },
];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-cedar-ceiling",
    title: "Covered deck — cedar ceiling restoration",
    location: "Whistler",
    serviceTags: ["Wood restoration"],
    coverUrl: "/stock-images/portfolio/cedar-ceiling-after-whistler.jpg",
  },
  {
    slug: "whistler-pine-deck-ceiling",
    title: "Pine deck ceiling — re-stained",
    location: "Whistler",
    serviceTags: ["Wood restoration"],
    coverUrl: "/stock-images/portfolio/pine-ceiling-covered-deck-whistler.jpg",
  },
  {
    slug: "whistler-stained-cedar-exterior",
    title: "Stained cedar exterior — full refresh",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "/stock-images/portfolio/stained-cedar-exterior-whistler.jpg",
  },
];

const FAQS = [
  {
    q: "How do I know if my wood needs restoration or just a re-stain?",
    a: "Grey, weathered wood with raised grain or peeling finish needs restoration first. Wood that's just fading but still sound usually needs a re-coat. We assess on the site visit and recommend accordingly.",
  },
  {
    q: "What products do you use?",
    a: "Penetrating stains matched to the wood and exposure — Sansin for raw and log work, Messmer's for smooth cedar, Sikkens for high-traffic surfaces. Product choice follows the wood, and we document the exact spec for future maintenance coats.",
  },
  {
    q: "Can you change the stain colour — go darker or lighter?",
    a: "Going darker is straightforward. Going lighter usually requires stripping back to bare wood first. We'll be honest at the site visit about what's realistic for your wood and what it'll cost.",
  },
  {
    q: "How long will the stain last?",
    a: "Horizontal surfaces (decks, handrails) typically need re-coating every 2–4 years; siding lasts 5–8 years with quality products. Your report includes a recommended re-coat window for each surface.",
  },
  {
    q: "What does the warranty cover?",
    a: "Solid stains carry a 5-year written warranty against peeling and finish failure. Semi-transparent and translucent stains carry 2 years — they wear gracefully but faster, the trade-off for keeping the grain visible.",
  },
  {
    q: "Do you do log homes?",
    a: "Yes — log restoration is a specialty of ours, with its own process for blasting, chinking, and log-specific finishes. See our dedicated Log Restoration page for the full breakdown.",
  },
];

export default function WoodRestorationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Wood Restoration & Staining"
        subline="Cedar siding, decks, timber frames, fences. Properly cleaned, properly stained, and documented so you know when to come back."
        imageUrl="/stock-images/2beb0596b7d27d9ce6d5fac9d571f6bb--wood-stain-colors-deck-colors.jpg"
        imageAlt="Cedar siding and deck in natural mountain setting"
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
              <Eyebrow className="mb-5">Wood restoration in the Sea to Sky</Eyebrow>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                Wood that looks the way <em className="text-alpine not-italic font-medium">it should</em> — and stays that way.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Wood is the defining material of Sea-to-Sky architecture — and
                  it&rsquo;s beautiful when maintained, problematic when
                  it&rsquo;s not. UV graying, moisture, and failing finishes are
                  all fixable, but only if the restoration is done in the right
                  order.
                </p>
                <p>
                  Cedar, fir, pine, pressure-treated, and log — siding, decks,
                  railings, fences, and exterior timber framing.
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
              <Eyebrow className="mb-5">What every wood project includes</Eyebrow>
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
            <Eyebrow className="mb-5">What we cover</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Every piece of exposed wood — siding to soffits.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              Different species, exposures, and conditions call for different
              products — we spec each surface on the proposal.
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
        title="Up to a 5-Year Finish Warranty"
        body="Solid stains are backed for 5 years; semi-transparent and translucent finishes for 2, matched to how penetrating products actually wear in mountain weather — documented with a re-coat schedule."
      />

      {/* Approach */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">Our approach</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Why wood restoration done right lasts twice as long.
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
              beforeUrl="/stock-images/portfolio/cedar-ceiling-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/cedar-ceiling-after-whistler.jpg"
              beforeAlt="Weathered cedar ceiling before restoration, Whistler"
              afterAlt="Cedar ceiling after cleaning and re-staining, Whistler"
              caption="Old finish stripped, wood sanded smooth, four coats of spar urethane."
            />
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/cedar-deck-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/stained-cedar-exterior-whistler.jpg"
              beforeAlt="Weathered cedar deck before restoration, Whistler"
              afterAlt="Freshly stained cedar deck and rail, Whistler"
              caption="Pressure washed, sanded to bare, semi-solid stain in two coats."
            />
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <Eyebrow className="mb-5">Recent wood work</Eyebrow>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Restoration we&rsquo;re proud of.</h2>
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
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Wood restoration questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Wood done right"
        heading="Time to restore the wood?"
        subline="We'll assess the condition on-site and recommend what actually needs to be done — not just what's billable."
      />
    </>
  );
}
