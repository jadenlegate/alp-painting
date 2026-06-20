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
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Wood Refinishing & Staining — Whistler, Pemberton & Squamish",
  description:
    "Cedar siding, decks, timber-frame beams, and fences. Wood refinishing and staining across Whistler, Pemberton, and Squamish with penetrating finishes built for mountain exposure.",
  alternates: { canonical: "/services/wood-restoration" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wood Refinishing & Staining",
  serviceType: "Wood Refinishing and Staining",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Wood refinishing and staining for cedar siding, decks, timber-frame beams, and fences across Whistler and the Sea to Sky.",
  url: "https://alpenglowpainting.ca/services/wood-restoration",
};

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

// Drop a real photo in by adding `image` (+ `imageAlt`) to a step, e.g.
// image: "/working-images/wood-refinishing-step-washing-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Protection & furniture moving",
    body: "Before any prep starts, we clear and protect the work zone. Patio furniture, planters, BBQs, and anything moveable gets shifted well clear of the wood we're refinishing, and adjacent walkways and surfaces are covered. The goal is a clean, unobstructed work area — and your belongings back exactly where you left them when we're done.",
  },
  {
    n: "02",
    title: "Washing",
    body: "Weathered, greyed wood and old failing finish won't accept new stain, so everything starts with a thorough wash. We pressure wash and, where needed, apply a wood brightener to strip away dirt, mildew, and oxidized fibres and open the grain back up. This is what lets the new product actually penetrate instead of sitting on top. Then we let the wood dry fully to the right moisture content before moving on.",
  },
  {
    n: "03",
    title: "Sanding",
    body: "Once the wood is clean and dry, we sand to knock down raised grain, feather out any remaining finish, and leave a uniform surface that takes stain evenly. Horizontal surfaces like decks and railings get the most attention, since that's where wear shows first. Sanding is the difference between a finish that looks consistent and one that comes out blotchy. We vacuum and wipe down afterward so no dust contaminates the coat.",
  },
  {
    n: "04",
    title: "Protection — drop sheets & masking",
    body: "Right before finish goes on, we mask and sheet everything that isn't getting stained — siding, glass, hardware, stonework, and adjacent painted surfaces. Drop sheets protect decking, walkways, and landscaping below. This finer round of protection keeps the lines crisp and the overspray off everything else. A few minutes of masking saves hours of cleanup and gives a sharper result.",
  },
  {
    n: "05",
    title: "Premium application",
    body: "With the surface prepped and everything protected, we apply premium penetrating stain matched to your wood species and exposure. Horizontal, high-traffic surfaces get two coats for durability, and we back-brush where it counts so the product works into the grain rather than bridging over it. We watch conditions closely — temperature, humidity, and dry time all affect how the finish cures. The result is even colour and depth that holds up to mountain weather.",
  },
  {
    n: "06",
    title: "Clean-up & inspection",
    body: "When the final coat is down and cured enough to handle, we pull all the masking and drop sheets and return your space to how it was — furniture back, site swept, nothing left behind. Then we walk the whole project looking for missed spots, thin areas, or drips, and touch up anything that isn't right. We'd rather catch it ourselves than have you find it later.",
  },
  {
    n: "07",
    title: "Project close-out",
    body: "We finish with a walkthrough together so you can see the work up close and flag anything you'd like addressed. You also get a written project report documenting the exact products, colours, and the recommended re-coat window for each surface — so future maintenance isn't guesswork. Final payment happens once you're satisfied, and the wood is set for years with a clear plan to keep it that way.",
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
    q: "How do I know if my wood needs refinishing or just a re-stain?",
    a: "Grey, weathered wood with raised grain or peeling finish needs full refinishing first. Wood that's just fading but still sound usually needs a re-coat. We assess on the site visit and recommend accordingly.",
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

export default function WoodRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Wood Refinishing & Staining"
        subline="Cedar siding, decks, timber frames, fences. Properly cleaned, properly stained, and documented so you know when to come back."
        imageUrl="/stock-images/2beb0596b7d27d9ce6d5fac9d571f6bb--wood-stain-colors-deck-colors.jpg"
        imageAlt="Cedar siding and deck in natural mountain setting"
      >
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
      </Hero>

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

      <ProcessSteps
        eyebrow="How we do it"
        heading="The wood refinishing process, step by step."
        intro="Order matters on wood. Each step sets up the next — skip the prep and the finish fails early. Here's exactly how a project runs, start to finish."
        steps={PROCESS}
      />

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
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Refinishing we&rsquo;re proud of.</h2>
            </div>
            <Button href="/portfolio" variant="text">See all work →</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Wood refinishing questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Wood done right"
        heading="Time to refinish the wood?"
        subline="We'll assess the condition on-site and recommend what actually needs to be done — not just what's billable."
      />
    </>
  );
}
