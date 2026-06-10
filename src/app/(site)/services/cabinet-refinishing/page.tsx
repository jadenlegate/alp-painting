import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cabinet Refinishing — Whistler, Pemberton & Squamish",
  description:
    "Kitchen and bathroom cabinet refinishing across Whistler, Pemberton, and Squamish. Factory-grade spray finish without replacing your boxes. Premium conversion varnishes and lacquers.",
  alternates: { canonical: "/services/cabinet-refinishing" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cabinet Refinishing",
  serviceType: "Cabinet Refinishing",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Cabinet refinishing across Whistler and the Sea to Sky. Spray-applied, factory-grade finishes for kitchen and bathroom cabinets without replacing the boxes.",
  url: "https://alpenglowpainting.ca/services/cabinet-refinishing",
};

const PILLARS = [
  "Doors sprayed in shop",
  "Boxes prepped on-site",
  "Cabinet-grade finishes",
  "Phased so kitchen stays usable",
  "Colour samples on real doors",
  "Documented for touch-ups",
];

const SURFACE_CARDS = [
  {
    n: "01",
    title: "Kitchen cabinets — uppers, lowers, islands.",
    body: "The full kitchen, sprayed in our shop for a factory-smooth finish you can't get with brush or roller. Doors and drawer fronts come off, get prepped and finished off-site; boxes get spray-prepped on-site with HVLP and full masking. We phase the work so the sink, stove, and fridge stay accessible throughout.",
  },
  {
    n: "02",
    title: "Bathroom vanities & medicine cabinets.",
    body: "Bathrooms get humidity, daily contact, and the most concentrated wear of any room. Vanity refinishing uses cabinet-grade waterborne or alkyd finishes that take the abuse — hard, washable, and resistant to chipping at the door pulls. A refinished vanity reads as new without the cost of replacement.",
  },
  {
    n: "03",
    title: "Built-ins, bookcases & media units.",
    body: "Built-in bookcases, desks, and media units are usually high-detail pieces that benefit from a controlled finish. Doors and removable elements come off; fixed pieces get masked and finished in place. The result is a built-in that reads custom — not refinished — and matches whatever else is being painted in the room.",
  },
  {
    n: "04",
    title: "Closet built-ins & wardrobes.",
    body: "Walk-in built-ins, mudroom storage, and freestanding wardrobes all refinish the same way as kitchens, just in different scale. We pick a finish appropriate to the use — washable for mudrooms, soft-sheen for primary closets — and document the exact products so future touch-ups are easy.",
  },
  {
    n: "05",
    title: "Mantels & fireplace surrounds.",
    body: "Mantels and fireplace surrounds are focal-point woodwork most homeowners hesitate to touch because they're afraid of changing the room's character. We test colour and sheen on samples first, then refinish using high-heat-tolerant finishes where appropriate. The fireplace stays the room's anchor.",
  },
  {
    n: "06",
    title: "Colour consultation & drawdowns.",
    body: "Cabinet colour is the biggest decision in any kitchen project, and the hardest to undo. We bring sample drawdowns and test them on a removed door in your actual kitchen light before committing to the full project. Better to spend an extra day picking than two years living with the wrong colour.",
  },
];

const APPROACH = [
  {
    title: "Spray, not brush.",
    body: "Brushed or rolled cabinet finishes show in raking light. We spray every door and drawer face off-site, giving you a flat, smooth finish that reads like factory-new.",
  },
  {
    title: "Proper prep every time.",
    body: "Cabinets take more abuse than walls. Grease, humidity, and daily contact means adhesion prep matters. We degrease, sand, and prime before a drop of finish goes on.",
  },
  {
    title: "Stay in your kitchen.",
    body: "We work in phases so you're never without a functional kitchen for more than a day or two. Doors come off in sections, get sprayed, and go back before the next section comes down.",
  },
  {
    title: "Colour consultation included.",
    body: "Cabinet colour is a big decision. We bring samples and can test small patches in your actual kitchen light before committing to the full project.",
  },
];

const PRODUCTS = ["Benjamin Moore", "Sherwin-Williams", "Minwax"];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-kitchen",
    title: "Whistler chalet — kitchen refresh",
    location: "Whistler",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "/stock-images/tinted-coty2024-kitchen-1024x690.jpg",
  },
  {
    slug: "whistler-chalet-living",
    title: "Chalet living room — paint and trim",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/living-room-chalet-whistler.jpg",
  },
  {
    slug: "whistler-master-suite",
    title: "Master suite — finish carpentry refresh",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/master-bedroom-detail-whistler.jpg",
  },
];

const FAQS = [
  {
    q: "Is refinishing worth it vs. replacing?",
    a: "Almost always yes, if the cabinet boxes are structurally sound. Refinishing runs a fraction of replacement cost and gets you a like-new finish. If the boxes are damaged, warped, or you want a layout change, replacement makes more sense — we'll tell you honestly on the site visit.",
  },
  {
    q: "What finishes and sheens do you offer?",
    a: "Matte, eggshell, satin, and semi-gloss — all available. Satin is most popular for kitchens (easy to wipe, not too shiny). We can bring samples and test patches in your actual kitchen light before you commit.",
  },
  {
    q: "How long does cabinet refinishing take?",
    a: "Most kitchens are done in 3–5 working days. Day one is prep and door removal; days two through four are spray and dry cycles; day five is reinstallation and touch-up.",
  },
  {
    q: "Can we use the kitchen during the project?",
    a: "Yes, in most cases. We phase the work so the boxes stay in place and one section stays functional at a time. You'll be without certain doors and drawers for a few days, but the sink, stove, and fridge stay accessible throughout.",
  },
  {
    q: "Can you do just the upper or lower cabinets?",
    a: "Yes. Some clients do a phased approach — uppers first, lowers later. Colour matching is easy because we document the exact product and colour in your project report.",
  },
  {
    q: "Will the finish hold up to daily use?",
    a: "Cabinet-specific waterborne and alkyd finishes are harder, more washable, and more chip-resistant than wall paint. Properly prepped and sprayed, refinished cabinets hold up for 8–12 years under normal use.",
  },
  {
    q: "Do you spray on-site or in a shop?",
    a: "Doors and drawer fronts go to our shop where they're sprayed in a controlled environment — no dust, even airflow, factory-level finish. Boxes get spray-prepped on-site with masking and an HVLP setup so overspray stays contained. Best of both.",
  },
];

export default function CabinetRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Cabinet Refinishing"
        subline="A factory-smooth finish on your existing cabinets. No replacement, no renovation chaos — just a kitchen that looks new."
        imageUrl="/stock-images/WKP-53Constitution-HR-10.jpeg.webp"
        imageAlt="Freshly refinished white kitchen cabinets"
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
                  Cabinet refinishing in the Sea to Sky
                </span>
              </div>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                New kitchen,<br />a <em className="text-alpine not-italic font-medium">fraction</em> of the cost.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Cabinet replacement is one of the most disruptive and
                  expensive renovations in a home. Refinishing gets you 90% of
                  the visual result for 10–20% of the cost — and you&rsquo;re
                  back in your kitchen within a week.
                </p>
                <p>
                  We work on painted wood, MDF, thermofoil (delamination
                  permitting), and factory-finished cabinets. If the boxes are
                  solid and the layout works, refinishing is almost always the
                  right call.
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
                What every cabinet project includes
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
                What we refinish
              </span>
            </div>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Cabinets, vanities, built-ins — anywhere there&rsquo;s a casework finish.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              Most clients come to us about kitchens, but the same spray process
              works on anything with a finished surface — bathroom vanities,
              mudroom benches, walk-in closet built-ins, mantels, and laundry
              room storage. A coordinated refinish across the house can
              transform the look without renovating a single box.
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
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Our approach</span>
            </div>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Why our cabinet finish looks different from a brushed repaint.
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
                Premium cabinet finishes only.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Cabinet-specific alkyd and waterborne finishes designed for
                high-traffic surfaces — harder, more washable, and more
                chip-resistant than standard wall paint.
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
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Recent cabinet work</span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Before and after.</h2>
            </div>
            <Button href="/work" variant="text">See all work →</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-alpine" aria-hidden />
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Frequently asked</span>
          </div>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Cabinet refinishing questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Want to see what your kitchen could look like?"
        subline="We'll take a look at the cabinets on-site and give you an honest assessment — and a quote the day of the visit."
      />
    </>
  );
}
