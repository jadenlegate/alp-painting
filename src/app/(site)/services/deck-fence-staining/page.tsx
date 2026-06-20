import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Deck & Fence Staining — Whistler, Pemberton & Squamish",
  description:
    "Deck and fence staining across Whistler and the Sea to Sky. Stripped, sanded, and stained with products matched to foot traffic and mountain weather, plus a re-coat schedule.",
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

const SURFACE_CARDS = [
  {
    title: "Deck boards & walking surfaces",
    body: "Stripped, sanded, and two-coated in a stain matched to how the deck actually gets used.",
  },
  {
    title: "Railings, pickets & balusters",
    body: "Hand-worked so the finish is even on every face, with a harder topcoat where hands go.",
  },
  {
    title: "Privacy fences & gates",
    body: "Cleaned, brightened, and stained to a consistent colour — boards replaced where needed.",
  },
  {
    title: "Pergolas & shade structures",
    body: "Every face finished evenly and matched to the deck or fence it sits with.",
  },
  {
    title: "Stairs, landings & boardwalks",
    body: "Treads, risers, and stringers finished with the grip and durability a daily-use surface needs.",
  },
  {
    title: "Cleaning, brightening & re-coats",
    body: "If the finish is just tired, a refresh restores it for a fraction of a full strip.",
  },
];

// Add a real photo to a step with image: "/working-images/deck-step-staining-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Protection",
    body: "Before any prep, we protect what surrounds the deck or fence. Plants and gardens close to the work get covered, adjacent siding and stonework gets shielded, and we clear the area of furniture and anything moveable. Decks and fences sit right in the middle of your yard, so a clean setup matters. The work zone is staged so the rest of your outdoor space stays untouched.",
  },
  {
    n: "02",
    title: "Cleaning & brightening",
    body: "Old finish, grey weathering, mildew, and dirt all stop new stain from bonding, so we deep-clean the wood first. Where the wood has gone grey or fuzzy, a brightener restores the natural tone and reopens the grain. This step is what lets the stain soak in rather than sit on the surface and peel. We then let the wood dry to the right moisture content before going further.",
  },
  {
    n: "03",
    title: "Stripping & sanding",
    body: "Any failing finish gets stripped, and the boards are sanded to remove splinters, raised grain, and the last of the old coating. Deck surfaces and handrails get the most attention since that's where wear and feet land. Sanding leaves a smooth, even surface that takes stain consistently instead of blotching. We vacuum and wipe down so the finish goes onto clean wood.",
  },
  {
    n: "04",
    title: "Masking & drop sheets",
    body: "Right before staining, we mask off the house, posts, hardware, and anything adjacent that isn't being stained, and lay drop sheets to protect surfaces below and around the work. This finer round of protection keeps lines crisp and overspray contained. It's a few minutes that saves a lot of cleanup — and gives a sharper edge where the deck meets the house.",
  },
  {
    n: "05",
    title: "Stain application",
    body: "We apply a penetrating stain matched to the wood and how the surface gets used — two coats on walking surfaces and high-wear areas for durability. We back-brush so the product works into the grain rather than puddling on top, and we finish every face of the pickets and rails, not just the ones you see from the chair. Conditions are watched closely, since dry time and temperature shape how the stain cures.",
  },
  {
    n: "06",
    title: "Clean-up & inspection",
    body: "Once the stain has set enough to handle, we pull the masking and drop sheets, uncover the plants, and return your yard to how it was. Then we walk the whole project looking for thin spots, lap marks, and drips, and touch up anything that isn't right. The deck should look better than the day it was built, with nothing left behind.",
  },
  {
    n: "07",
    title: "Re-coat schedule & close-out",
    body: "We walk the finished deck or fence with you and hand off a written report listing the exact product, colour, and — importantly — the recommended re-coat window for each surface. Horizontal surfaces typically need a refresh every 2–4 years, and staying on that schedule is far cheaper than a full strip-and-restore. Final payment happens once you're satisfied, with a clear plan to keep the wood protected.",
  },
];

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
    a: "If the existing finish is failing, peeling, or the wood has greyed, we strip and sand back to bare — coating over a dying finish just fails with it. If the finish is sound but tired, a clean-and-brighten plus a maintenance coat is enough. We assess which on the site visit.",
  },
  {
    q: "What products do you use?",
    a: "Penetrating and semi-solid stains rated for horizontal, walked-on surfaces — Sansin, Sikkens, Messmer's, and similar — matched to the wood, the wear, and the look you want. Not whatever's cheapest by the gallon.",
  },
  {
    q: "How long does a deck take?",
    a: "A standard deck is typically 2–3 days — a day for stripping, sanding, and cleaning, then one to two for staining with dry time between coats. Railings and intricate balusters add time; fences depend on length.",
  },
  {
    q: "How long will the stain last before it needs redoing?",
    a: "Walking surfaces take the most punishment and typically need a re-coat every 2–4 years; vertical fence boards and railings last longer. Your report includes a recommended re-coat window so you can plan maintenance.",
  },
  {
    q: "Can you change the colour of my deck or fence?",
    a: "Going darker is straightforward once we've stripped to bare. Going much lighter is harder and depends on the wood's condition. We test a sample area so you see the real colour on your actual boards first.",
  },
  {
    q: "Can I use the deck while you work?",
    a: "We work in sections where we can, but freshly stained boards need dry time before foot traffic. We'll map out the schedule so you know which areas are off-limits and when, and time the job to disrupt your summer as little as possible.",
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

      {/* Surfaces */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Eyebrow className="mb-5">What we stain</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Every part of the deck and fence — not just the easy faces.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              The difference between a great deck job and a rushed one is in the
              pickets, the rail undersides, and the end grain. We finish all of it.
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

      <ProcessSteps
        bg="white"
        eyebrow="How we do it"
        heading="The deck & fence staining process, step by step."
        intro="A deck that holds its finish is built in order — clean, strip, sand, then stain. Skip the prep and it peels by next summer. Here's exactly how a project runs."
        steps={PROCESS}
      />

      {/* Before / after */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">Before & after</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Drag to see the difference.
            </h2>
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

      {/* Related */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <Eyebrow className="mb-5">Recent deck & wood work</Eyebrow>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Decks we&rsquo;re proud of.</h2>
            </div>
            <Button href="/portfolio" variant="text">See all work →</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Deck & fence questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to bring the deck back?"
        subline="We'll assess the wood on-site and tell you whether it needs a full strip or just a refresh — and quote it the day of the visit."
      />
    </>
  );
}
