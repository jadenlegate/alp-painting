import type { Metadata } from "next";
import { IS_FULL } from "@/lib/flags";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Interior Painters — Whistler, Pemberton & Squamish",
  description:
    "Professional interior painters serving Whistler, Pemberton, and Squamish. Walls, trim, ceilings, and doors with clean crews, premium finishes, and a 5-year warranty.",
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
    "Interior painting for homes and businesses across Whistler and the Sea to Sky. Walls, trim, ceilings, and doors with a clean-crew process and a 5-year warranty.",
  url: "https://alpenglowpainting.ca/services/interior-painting",
};

const SURFACE_CARDS = [
  {
    title: "Walls",
    body: "Bedrooms, kitchens, baths, accent walls — sheen matched to the room, two coats standard, lines cut sharp.",
  },
  {
    title: "Ceilings",
    body: "Flat, vaulted, and beam-detailed, masked and cut by hand so nothing lands on the walls or trim.",
  },
  {
    title: "Trim, baseboards & crown",
    body: "Caulked, sanded, and hand-finished in a hard, washable coat built for daily contact.",
  },
  {
    title: "Doors, frames & jambs",
    body: "Removed where it makes sense and finished smooth — the surfaces you touch every day, done right.",
  },
  {
    title: "Stair railings & spindles",
    body: "Hand-sanded spindles and a hard-wearing handrail finish — the tedious work most crews rush.",
  },
  {
    title: "Closets, repair & colour",
    body: "Closet interiors, drywall patches, and on-wall colour testing — included, not billed as extras.",
  },
];

// Add a real photo to a step with image: "/working-images/interior-step-prep-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Protection & furniture moving",
    body: "Before anything else, we make your space safe to work in. We move furniture to the centre of each room (or out, for larger pieces), cover everything with clean drop cloths and plastic, and mask floors, fixtures, and hardware. Nothing gets painted by accident, and nothing comes back dusty. The room is fully staged before a brush is opened.",
  },
  {
    n: "02",
    title: "Surface prep",
    body: "This is where a lasting finish is won. We fill nail holes and dents, sand rough spots and old drips smooth, scrape any failing paint, and caulk gaps along trim and corners. Problem areas — water stains, cracks, bad previous patches — get addressed properly, not painted over. Walls come out flat and uniform so the colour reads evenly.",
  },
  {
    n: "03",
    title: "Priming",
    body: "We spot-prime patches, repairs, and bare drywall, and full-prime when you're making a big colour change or covering stains. Primer gives the topcoat something consistent to grip, prevents flashing, and stops old stains from bleeding through. Skipping it is the most common reason a repaint looks blotchy a month later. We don't skip it.",
  },
  {
    n: "04",
    title: "Premium application",
    body: "We apply two full coats of premium, low-VOC paint in your chosen sheen — cutting in edges by hand and rolling walls for an even finish. Trim, doors, and ceilings each get the right product and technique for the surface. We hold proper dry time between coats rather than rushing a second pass onto a wet first. The result is full, even coverage with crisp lines.",
  },
  {
    n: "05",
    title: "Daily clean-up",
    body: "We tidy the site at the end of every day — tools away, debris removed, walkways clear — so your home stays livable while we work. Low-odour products mean you can usually sleep in a freshly painted room the same night. You shouldn't feel like the house has been taken over. If we hit anything unexpected, you hear about it before we proceed.",
  },
  {
    n: "06",
    title: "Final walkthrough & touch-ups",
    body: "When the work is done, we walk every room with you in good light and look for anything that isn't perfect — a thin spot, a missed edge, a stray mark. We fix it on the spot, before we pack up. This isn't a quick courtesy glance; it's a deliberate review of the finished result. You sign off only when you're happy.",
  },
  {
    n: "07",
    title: "Project close-out",
    body: "We do a final clean, reset the furniture, and hand off a written project report listing the exact products, colours, and sheens used in each room. That record lives with the house, so a touch-up years from now isn't a guessing game. Final payment happens once you're satisfied — and the space is ready to live in.",
  },
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
    a: "Interior painting projects can last anywhere from one day to several weeks, depending on the scope, amount of prep required, and access requirements, among other factors. We'll give you a timeline with your written proposal.",
  },
  {
    q: "Can we stay in the house while you paint?",
    a: "Almost always, yes. Many clients prefer to leave while we paint their interior, but you're welcome to stay at home while we paint too.",
  },
  {
    q: "What happens with my furniture when the house is being painted?",
    a: "We move all furniture to the centre of the room and cover it with plastic sheeting to protect it.",
  },
  {
    q: "What products do you use?",
    a: "We use the best interior paint products from Sherwin-Williams, Benjamin Moore, and other select brands, matched for the specific surface and application to ensure we achieve your preferred look and the best longevity.",
  },
  {
    q: "How do you handle colour selection?",
    a: "We test swatches on your walls and compare them in your light so you're 100% happy with the colour before we start. We also offer complimentary AI colour visualisation so you can envision what it will look like beforehand.",
  },
  {
    q: "What prep work is included before painting?",
    a: "Hole filling, sanding, spot-priming, caulking where needed, and protecting floors, furniture, and fixtures. Prep is the most important step to a successful interior painting project.",
  },
  {
    q: "Do you do drywall repairs?",
    a: "We do some minor drywall repairs, but extensive drywall work would need to be coordinated through a dedicated drywalling subcontractor, which we can coordinate to ensure a smooth project experience.",
  },
  {
    q: "When should I hire a professional painter vs doing it myself?",
    a: "DIY painting can work for small, simple projects like freshening up a single room if you have the tools, time, and patience. But for large areas, high ceilings, tricky prep work, specialty finishes, or when you want a long-lasting, flawless result, hiring a professional is the smarter choice. A pro saves you time, ensures quality, and handles safety concerns.",
    // Blog is hidden in MVP mode — only link to the article when it exists.
    ...(IS_FULL ? { link: { href: "/blog/diy-vs-hiring-a-professional-painter", label: "Read this article to learn more" } } : {}),
  },
  {
    q: "What does the warranty cover?",
    a: "Peeling, flaking, and premature failure of the paint finish under normal interior conditions. Interior projects carry a 5-year written warranty when we apply approved products with standard prep.",
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
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
      </Hero>

      {/* Surfaces & details */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Eyebrow className="mb-5">Surfaces & details</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Everything inside the house — from baseboards to vaulted ceilings.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              If it&rsquo;s a finished surface and you want it painted, we paint
              it — and the proposal shows exactly what&rsquo;s in scope.
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
        title="5-Year Interior Painting Warranty"
        body="Every interior project is backed in writing against peeling, flaking, and premature finish failure under normal conditions. If it fails inside the window, we come back and fix it."
      />

      <ProcessSteps
        eyebrow="How we do it"
        heading="The interior painting process, step by step."
        intro="A clean, predictable process is what keeps a lived-in home livable through a repaint. Here's exactly how a project runs, from the first drop cloth to the final walkthrough."
        steps={PROCESS}
      />

      {/* Related projects — hidden in MVP mode, returning with tweaks in V2 */}
      {IS_FULL && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div className="max-w-xl">
                <Eyebrow className="mb-5">Recent interior work</Eyebrow>
                <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
                  A few projects we&rsquo;ve loved.
                </h2>
              </div>
              <Button href="/portfolio" variant="text">See all work →</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {RELATED_PROJECTS.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">
            Interior painting questions.
          </h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready for a fresh interior?"
        subline="Tell us about your space — we'll come see it and quote it, usually the day of the visit."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
