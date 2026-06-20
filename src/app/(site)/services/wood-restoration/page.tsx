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
    n: "01",
    title: "Cedar siding & shingles.",
    body: "Sea-to-Sky cedar tells you exactly how long it's been since the last finish — UV graying, raised grain, peeling stain over weathered substrate. We clean and brighten first so new stain bonds with the wood, not just sits on top. Penetrating finishes for most applications because they fail gracefully, not in sheets.",
  },
  {
    n: "02",
    title: "Decks, railings & spindles.",
    body: "Decks take the most punishment of any wood on the house — sun, foot traffic, snow load, pooling water. We strip back failing finishes, sand to a clean surface, and apply two coats of product matched to traffic and exposure. Most horizontal surfaces re-coat every 2–4 years, and we tell you when.",
  },
  {
    n: "03",
    title: "Timber frames, beams & posts.",
    body: "Exposed timber frames are the defining detail of mountain architecture — and the most expensive to replace if they fail. We assess for checking, raised grain, and previous finish behaviour, then specify Sansin or a similar penetrating finish that protects the wood without changing how it reads in natural light.",
  },
  {
    n: "04",
    title: "Pine ceilings & deck soffits.",
    body: "Covered ceilings — pine T&G, cedar V-joint, deck soffits — develop a yellow-to-orange cast with age that most homeowners want to refresh. We assess, sand back where needed, and apply a finish that maintains the wood's natural grain. Spar urethane where durability matters; penetrating stains where appearance does.",
  },
  {
    n: "05",
    title: "Fences, gates & garden structures.",
    body: "Fences age fast and inconsistently — exposed pickets gray while sheltered sections stay sound. We strip and brighten the failing wood, replace boards where needed, and finish with a stain matched to the original — or shifted intentionally if you want a different look. Most fences need a refresh every 3–5 years.",
  },
  {
    n: "06",
    title: "Re-coat scheduling & maintenance.",
    body: "Wood restoration done once doesn't stay done forever. Every project closes with a written maintenance schedule in your final report. Most penetrating finishes hold 2–5 years depending on exposure; proactive re-coats cost a fraction of a full restoration. We tell you when to call us back.",
  },
];

const APPROACH = [
  {
    title: "Restoration before staining.",
    body: "Stain over weathered, gray wood doesn't penetrate properly. We clean and brighten the surface first so the product actually bonds with the wood — not just coats the top.",
  },
  {
    title: "Penetrating finishes by default.",
    body: "Film-forming finishes peel. Penetrating products absorb into the wood and fail gracefully — they don't crack or lift. On most Sea-to-Sky exteriors, that's the right call.",
  },
  {
    title: "Product matched to species.",
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
    q: "Can you match the original stain colour?",
    a: "Usually yes, if you know the product and colour. If not, we can bring samples and test patches on a less visible area to match closely. On very weathered wood the base colour has shifted, which affects how new stain reads.",
  },
  {
    q: "Can you change the stain colour — go darker or lighter?",
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

      {/* Intro */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid gap-12 md:gap-20 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                  Wood restoration in the Sea to Sky
                </span>
              </div>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                Wood that looks the way <em className="text-alpine not-italic font-medium">it should</em> — and stays that way.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Wood is the defining material of Sea-to-Sky architecture.
                  Cedar siding, exposed timber frames, wraparound decks —
                  they&rsquo;re beautiful when maintained and problematic when
                  they&rsquo;re not. UV graying, moisture damage, and failing
                  previous finishes are all fixable, but only if the restoration
                  is done in the right order.
                </p>
                <p>
                  We work on cedar, Douglas fir, pine, pressure-treated, and log
                  construction. Decks, siding, railings, fences, gazebos, and
                  exterior timber framing.
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
                What every wood project includes
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

      {/* Surfaces */}
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
              Every piece of exposed wood — siding to soffits.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              If it&rsquo;s wood and it&rsquo;s exposed to weather (or air, in
              the case of covered ceilings and timber frames), we restore and
              finish it. Different species, exposures, and conditions call for
              different products — we&rsquo;ll spec each surface on the proposal.
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
          <div className="max-w-2xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Our approach</span>
            </div>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Why wood restoration done right lasts twice as long.
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
                Penetrating stains that last.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Sansin for raw and natural log work, Messmer&rsquo;s for smooth
                cedar, Sikkens for high-traffic horizontal surfaces. Product
                choice follows the wood — not the other way around.
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
              Real Whistler wood — stripped, sanded, and stained back to better
              than new. Slide the handle to compare.
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

      {/* Related */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Recent wood work</span>
              </div>
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
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-alpine" aria-hidden />
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Frequently asked</span>
          </div>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Wood restoration questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        years="5"
        heading="Years on solid stain. Two on semi-transparent and translucent finishes."
        body="Penetrating stains wear gracefully but faster than solid finishes — so each product gets a warranty matched to how it actually performs in mountain weather. Documented in your project report so you know what's covered, and for how long."
      />

      <CtaBlock
        eyebrow="Wood done right"
        heading="Time to restore the wood?"
        subline="We'll assess the condition on-site and recommend what actually needs to be done — not just what's billable."
      />
    </>
  );
}
