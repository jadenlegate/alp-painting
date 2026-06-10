import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Wood Restoration & Staining — Whistler, Pemberton & Squamish",
  description:
    "Cedar siding, decks, timber-frame beams, and fences. Wood restoration and staining across Whistler, Pemberton, and Squamish using Sansin, Sikkens, and Messmer's penetrating finishes.",
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
    "Wood restoration and staining for cedar siding, decks, timber-frame beams, and fences across Whistler and the Sea to Sky. Premium penetrating stains specified for mountain exposure.",
  url: "https://alpenglowpainting.ca/services/wood-restoration",
};

const INCLUDED = [
  "Full assessment: check for rot, raised grain, UV graying, and failing previous coatings",
  "Pressure wash and brightening to open the wood grain",
  "Spot repairs and sanding where needed",
  "Application of penetrating stain or film-forming finish — specified for the wood and exposure",
  "Two coats on all horizontal surfaces (decks, railings) for maximum durability",
  "Project report documenting products, application method, and re-coat schedule",
];

const SURFACES = [
  "Cedar siding and cedar shingles",
  "Decks, railings, and pickets",
  "Pergolas, gazebos, and arbours",
  "Timber-frame beams and exposed posts",
  "Fascia, soffits, and roof overhangs",
  "Pine ceilings and covered deck soffits",
  "Stairs, landings, and boardwalks",
  "Fences, gates, and garden structures",
];

const APPROACH = [
  {
    title: "Restoration before staining.",
    body: "Stain over weathered, gray wood doesn't penetrate properly. We clean and brighten the surface first so the product actually bonds with the wood, not just coats the top.",
  },
  {
    title: "Penetrating stains over film-formers on most applications.",
    body: "Film-forming finishes peel. Penetrating products absorb into the wood and fail gracefully — they don't crack or lift. On most Sea-to-Sky exteriors, that's the right call.",
  },
  {
    title: "We spec the right product for your species.",
    body: "Cedar, Douglas fir, pine, and pressure-treated all behave differently. Sansin for raw timber, Messmer's for smooth cedar, Sikkens for high-traffic decks. Not one-size-fits-all.",
  },
  {
    title: "Maintenance scheduling included.",
    body: "Your project report includes a recommended re-coat window — usually 3–5 years depending on exposure. Proactive maintenance costs a fraction of a full restoration.",
  },
];

const PRODUCTS = ["Sansin", "Sikkens", "Messmer's", "Benjamin Moore"];

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
    a: "Gray, weathered wood with raised grain or previous finish peeling needs restoration first. Wood that's just fading but still structurally sound and clean usually just needs a re-coat. We assess this on the site visit and recommend accordingly.",
  },
  {
    q: "Can you match the original stain color?",
    a: "Usually yes, if you know the product and color. If not, we can bring samples and test patches on a less visible area to match closely. On very weathered wood the base color has shifted, which affects how new stain reads.",
  },
  {
    q: "Can you change the stain color — go darker or lighter?",
    a: "Going darker is straightforward. Going lighter is harder and usually requires stripping the previous finish back to bare wood before staining. We'll be honest at the site visit about what's realistic for your wood and what it'll cost.",
  },
  {
    q: "How long does a deck staining project take?",
    a: "A standard deck is typically 2–3 days — one day for prep and cleaning, one to two for staining with proper dry time between coats. Larger or more complex decks take longer.",
  },
  {
    q: "How long will the stain last?",
    a: "Horizontal surfaces (decks, handrails) take the most punishment and typically need re-coating every 2–4 years. Vertical surfaces like siding last 5–8 years with quality products. Your project report will include a recommended re-coat window for each surface.",
  },
  {
    q: "What does the warranty cover for stain work?",
    a: "Solid stains and paints carry a 5-year written warranty against peeling and finish failure. Semi-transparent and translucent stains carry a 2-year warranty — they wear gracefully but faster, which is the trade-off for keeping the wood grain visible.",
  },
  {
    q: "Do you do log homes?",
    a: "Yes. Log home restoration is a specialty — chinking inspection, checking for checking (splits), proper borate treatment if needed, and Sansin or similar penetrating finish. It's more involved than a standard exterior but we've done it.",
  },
  {
    q: "Can you stain pressure-treated lumber?",
    a: "Yes, but pressure-treated has to dry out first — usually 3–6 months after installation depending on the season. Staining wet PT traps moisture under the finish and causes peeling. If your deck is brand new, we'll tell you when it's ready.",
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

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">What we do</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                Wood that looks the way it should — and stays that way.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Wood is the defining material of Sea-to-Sky architecture. Cedar siding, exposed timber frames, wraparound decks — they're beautiful when maintained and problematic when they're not. UV graying, moisture damage, and failing previous finishes are all fixable, but only if the restoration is done in the right order.
              </p>
              <p className="mt-4 text-ink leading-relaxed">
                We work on cedar, Douglas fir, pine, pressure-treated, and log construction. Decks, siding, railings, fences, gazebos, and exterior timber framing.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Included in every project</div>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-navy mt-0.5 flex-shrink-0" />
                    <span className="text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Surfaces & details */}
      <section className="pb-16 md:pb-24 border-t border-border/60 pt-16 md:pt-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Surfaces & details</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                Every piece of exposed wood — siding, decks, beams, ceilings.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                If it&rsquo;s wood and it&rsquo;s exposed to weather (or air, in the case
                of covered ceilings and timber frames), we restore and finish it. Different
                species, exposures, and conditions call for different products
                — we&rsquo;ll spec each surface on the proposal.
              </p>
              <p className="mt-4 text-ink leading-relaxed">
                Not sure if your wood is salvageable? Ask us. The honest answer
                is sometimes &ldquo;replace it&rdquo; — and we&rsquo;ll tell you
                that on the site visit before you spend a dollar restoring.
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

      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Our approach</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Why wood restoration done right lasts twice as long.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div key={a.title} className="border border-border rounded-sm bg-surface p-6 md:p-7">
                <h3 className="font-serif text-xl text-navy">{a.title}</h3>
                <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Products we use</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
              Penetrating stains that last.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Sansin for raw and natural log work, Messmer's for smooth cedar, Sikkens for high-traffic horizontal surfaces. Product choice follows the wood — not the other way around.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {PRODUCTS.map((p) => (
              <div key={p} className="px-5 py-3 border border-border rounded-sm bg-surface font-serif text-navy">{p}</div>
            ))}
          </div>
        </Container>
      </section>

      {/* Before / after */}
      <section className="pb-16 md:pb-24 border-t border-border/60 pt-16 md:pt-24">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Before & after</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Drag to see the difference.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Real Whistler wood — stripped, sanded, and stained back to better than new. Slide the handle to compare.
            </p>
          </div>
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/cedar-ceiling-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/cedar-ceiling-after-whistler.jpg"
              beforeAlt="Weathered cedar ceiling before restoration, Whistler"
              afterAlt="Cedar ceiling after cleaning and re-staining, Whistler"
              caption="Old finish stripped, wood sanded smooth, 4 coats of spar urethane applied."
            />
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/cedar-deck-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/stained-cedar-exterior-whistler.jpg"
              beforeAlt="Weathered cedar deck before restoration, Whistler"
              afterAlt="Freshly stained cedar deck and rail, Whistler"
              caption="Pressure washed, sanded to bare, semi-solid stain applied in two coats."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Recent wood work</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">Restoration we're proud of.</h2>
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
          <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Frequently asked</div>
          <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] mb-8">Wood restoration questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        heading="5-year warranty on solid stain. 2 years on semi-transparent and translucent finishes."
        body="Penetrating stains wear gracefully but faster than solid finishes — so each product gets a warranty matched to how it performs in mountain weather. Documented in your project report."
      />

      <CtaBlock
        eyebrow="Wood done right"
        heading="Time to restore the wood?"
        subline="We'll assess the condition on-site and recommend what actually needs to be done — not just what's billable."
      />
    </>
  );
}
