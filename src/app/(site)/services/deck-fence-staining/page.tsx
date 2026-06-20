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
  title: "Deck & Fence Staining — Whistler, Pemberton & Squamish",
  description:
    "Deck and fence staining across Whistler and the Sea to Sky. Stripped, sanded, and stained with products matched to foot traffic and mountain weather — plus a re-coat schedule so it lasts.",
  alternates: { canonical: "/services/deck-fence-staining" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deck & Fence Staining",
  serviceType: "Deck and Fence Staining",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Deck and fence staining for homes across Whistler and the Sea to Sky. Stripping, sanding, brightening, and penetrating stains matched to foot traffic and exposure.",
  url: "https://alpenglowpainting.ca/services/deck-fence-staining",
};

const PILLARS = [
  "Stripped & sanded to bare",
  "Cleaned & brightened",
  "Product matched to traffic",
  "Two coats on walking surfaces",
  "Railings & pickets included",
  "Re-coat schedule provided",
];

const SURFACE_CARDS = [
  {
    title: "Deck boards & walking surfaces",
    body: "The hardest-working wood on the property — sun, foot traffic, furniture, and pooling water all at once. We strip the old finish, sand the boards back to a sound surface, and apply two coats of a stain matched to how the deck gets used. Done right, the colour stays even and the boards stop going grey at the ends.",
  },
  {
    title: "Railings, pickets & balusters",
    body: "The fiddly, time-consuming part most people dread — and where a rushed job shows worst. We hand-work each picket and rail so the finish is even on every face, not just the ones you see from the chair. Hand rails get a harder topcoat because they take constant contact.",
  },
  {
    title: "Privacy fences & gates",
    body: "Fences age unevenly — exposed tops and posts grey out while sheltered sections stay sound. We clean and brighten the whole run, replace any boards too far gone, and stain to a consistent colour so the fence reads as one piece again. Gates get extra attention at the hardware and end grain.",
  },
  {
    title: "Pergolas & shade structures",
    body: "Pergolas, arbours, and shade structures are exposed on every face and tricky to coat evenly. We mask surrounding surfaces, work the overhead members properly, and finish the posts and beams to match the deck or fence they sit with.",
  },
  {
    title: "Stairs, landings & boardwalks",
    body: "Exterior stairs and landings take the same punishment as decking with the added wear of constant footfall on the nosings. We prep and finish treads, risers, and stringers, and spec a finish with enough grip and durability for a surface people use every day.",
  },
  {
    title: "Cleaning, brightening & re-coats",
    body: "Not every deck needs a full strip. If the finish is just tired but still sound, a clean, brighten, and maintenance coat restores it for a fraction of the cost. We'll tell you honestly at the site visit which one your deck actually needs.",
  },
];

const APPROACH = [
  {
    title: "Strip and sand first.",
    body: "Stain over a failing finish or grey, weathered wood doesn't bond — it sits on top and peels. We take the wood back to a sound, open surface so the new stain actually penetrates.",
  },
  {
    title: "Product matched to the traffic.",
    body: "A walked-on deck, a hand rail, and a privacy fence all wear differently. We don't use one stain for all of it — each surface gets a product matched to the abuse it takes.",
  },
  {
    title: "Timed around weather and use.",
    body: "Stain needs dry wood and a dry window after. We plan the job around the forecast and around your summer — nobody wants their deck off-limits on the one sunny weekend in August.",
  },
  {
    title: "Maintenance you can plan for.",
    body: "Horizontal surfaces need re-coating more often than siding — usually every 2–4 years. Your project report tells you when, so you can refresh on schedule instead of waiting for a full failure.",
  },
];

const PRODUCTS = ["Sansin", "Sikkens", "Messmer's", "Benjamin Moore"];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-stained-cedar-exterior",
    title: "Stained cedar deck & exterior",
    location: "Whistler",
    serviceTags: ["Wood restoration"],
    coverUrl: "/stock-images/portfolio/stained-cedar-exterior-whistler.jpg",
  },
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
];

const FAQS = [
  {
    q: "Do you strip the old stain or just coat over it?",
    a: "If the existing finish is failing, peeling, or the wood has greyed, we strip and sand back to bare wood — coating over a dying finish just fails with it. If the finish is sound but tired, a clean-and-brighten plus a maintenance coat is enough. We assess which on the site visit.",
  },
  {
    q: "How long does a deck take?",
    a: "A standard deck is typically 2–3 days — a day for stripping, sanding, and cleaning, then one to two for staining with proper dry time between coats. Railings and intricate balusters add time. Fences depend on length. We give you a day-range in the proposal.",
  },
  {
    q: "How long will the stain last before it needs redoing?",
    a: "Walking surfaces take the most punishment and typically need a re-coat every 2–4 years. Vertical surfaces like fence boards and railings last longer. Your project report includes a recommended re-coat window so you can plan maintenance instead of being caught out.",
  },
  {
    q: "Can you change the colour of my deck or fence?",
    a: "Going darker is straightforward once we've stripped to bare wood. Going much lighter is harder and depends on the wood's condition. We test a sample area so you see the real colour on your actual boards before committing to the whole project.",
  },
  {
    q: "Can I use the deck while you work?",
    a: "We work in sections where we can, but freshly stained boards need dry time before foot traffic. We'll map out the schedule so you know which areas are off-limits and when — and we time the job to disrupt your summer as little as possible.",
  },
  {
    q: "What does the warranty cover?",
    a: "Solid stains carry a 5-year written warranty. Semi-transparent and translucent finishes — and any horizontal, walked-on surface like a deck — carry a 2-year warranty, because foot traffic and standing water wear them faster than vertical surfaces. It's all in writing.",
  },
];

export default function DeckFenceStainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Deck & Fence Staining"
        subline="Stripped, sanded, and stained to last — decks, railings, and fences finished with products matched to mountain weather and daily use."
        imageUrl="/stock-images/portfolio/stained-cedar-exterior-whistler.jpg"
        imageAlt="Freshly stained cedar deck and railing in Whistler"
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
                  Deck & fence staining in the Sea to Sky
                </span>
              </div>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                The hardest-working wood on your property, <em className="text-alpine not-italic font-medium">protected</em>.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Decks and fences take more abuse than any other wood on a
                  home — direct sun, foot traffic, snow load, and standing water,
                  often all on the same boards. They&rsquo;re also the first
                  thing to look tired when the finish gives out.
                </p>
                <p>
                  We strip them back, prep them properly, and stain them with
                  products matched to how they actually get used — then tell you
                  exactly when to refresh.
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

      {/* Surfaces */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                What we stain
              </span>
            </div>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Every part of the deck and fence — not just the easy faces.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              The difference between a deck job that looks great and one that
              looks rushed is in the pickets, the rail undersides, and the end
              grain. We finish all of it.
            </p>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SURFACE_CARDS.map((c) => (
              <article
                key={c.title}
                className="group relative border border-navy/15 bg-background p-7 md:p-8 lg:p-9 transition-colors hover:border-navy/40"
              >
                <div className="h-px w-7 bg-alpine" aria-hidden />
                <h3 className="mt-4 font-serif text-navy text-[1.375rem] md:text-[1.5rem] leading-[1.15] tracking-tight font-medium">
                  {c.title}
                </h3>
                <p className="mt-4 text-ink leading-relaxed text-[0.95rem]">{c.body}</p>
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
              Why our deck stain outlasts a quick re-coat.
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

      {/* Before / after */}
      <section className="py-16 md:py-24 bg-stone-light/50">
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
              A weathered cedar deck, stripped to bare and re-stained. Slide the
              handle to compare.
            </p>
          </div>
          <div className="max-w-3xl">
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/cedar-deck-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/stained-cedar-exterior-whistler.jpg"
              beforeAlt="Weathered grey cedar deck before restoration, Whistler"
              afterAlt="Freshly stained cedar deck and railing, Whistler"
              caption="Pressure washed, sanded to bare, two coats of semi-solid stain."
            />
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:gap-16 md:grid-cols-[1fr_1.3fr] md:items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Products we use</span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.375rem] leading-[1.05] tracking-tight font-medium">
                Stains built for foot traffic.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Penetrating and semi-solid stains rated for horizontal, walked-on
                surfaces — not whatever&rsquo;s cheapest by the gallon. The right
                product for the wood, the wear, and the look you want.
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

      {/* Related */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Recent deck & wood work</span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Decks we&rsquo;re proud of.</h2>
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
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Deck & fence questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        years="5"
        heading="Years on solid stain. Two on semi-transparent and walked-on surfaces."
        body="Solid stains carry a 5-year written warranty. Semi-transparent finishes and horizontal walked-on surfaces like decks carry 2 years, because foot traffic and standing water wear them faster. Always documented with a re-coat schedule."
      />

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to bring the deck back?"
        subline="We'll assess the wood on-site and tell you whether it needs a full strip or just a refresh — and quote it the day of the visit."
      />
    </>
  );
}
