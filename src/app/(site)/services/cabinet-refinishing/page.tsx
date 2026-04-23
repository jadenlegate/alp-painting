import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Cabinet Refinishing in Whistler",
  description:
    "Kitchen and bathroom cabinet refinishing across Whistler, Pemberton, and Squamish. Factory-grade spray finish without replacing your boxes.",
};

const INCLUDED = [
  "Full degloss, clean, and sand of all cabinet surfaces",
  "Door and drawer removal, labelled and tracked",
  "Grain filling on MDF or wood doors where needed",
  "Spray-applied primer — no brush marks, no roller texture",
  "Two coats of premium finish in your chosen sheen",
  "Reinstallation, adjustment, and final inspection",
  "Project report with exact product and color for future touch-ups",
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
    title: "Color consultation included.",
    body: "Cabinet color is a big decision. We bring samples and can test small patches in your actual kitchen light before committing to the full project.",
  },
];

const PRODUCTS = ["Benjamin Moore", "Sherwin-Williams", "Minwax"];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "squamish-modern-cabinets",
    title: "Squamish modern — kitchen cabinets",
    location: "Squamish",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "whistler-chalet-kitchen",
    title: "Whistler chalet — kitchen refresh",
    location: "Whistler",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pemberton-bathroom-vanity",
    title: "Pemberton — bathroom vanity repaint",
    location: "Pemberton",
    serviceTags: ["Cabinet refinishing", "Interior"],
    coverUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
  },
];

const FAQS = [
  {
    q: "Is refinishing worth it vs. replacing?",
    a: "Almost always yes, if the cabinet boxes are structurally sound. Refinishing runs a fraction of replacement cost and gets you a like-new finish. If the boxes are damaged, warped, or you want a layout change, replacement makes more sense — we'll tell you honestly on the site visit.",
  },
  {
    q: "What finishes and sheens do you offer?",
    a: "Matte, eggshell, satin, and semi-gloss — all available. Satin is most popular for kitchens (easy to wipe, not too shiny). We can discuss what works best for your space.",
  },
  {
    q: "How long does cabinet refinishing take?",
    a: "Most kitchens are done in 3–5 working days. Day one is prep and door removal; days two through four are spray and dry cycles; day five is reinstallation and touch-up.",
  },
  {
    q: "Can you do just the upper or lower cabinets?",
    a: "Yes. Some clients do a phased approach — uppers first, lowers later. Color matching is easy when you document exactly what product and color was used, which we always do.",
  },
  {
    q: "How durable is a refinished cabinet?",
    a: "With proper prep and premium products, refinished cabinets hold up for 8–12 years under normal kitchen use. The key is surface prep — without it, even good paint fails in high-traffic areas within a couple of years.",
  },
];

export default function CabinetRefinishingPage() {
  return (
    <>
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

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">What we do</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                New kitchen, fraction of the cost.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Cabinet replacement is one of the most disruptive and expensive renovations in a home. Refinishing gets you 90% of the visual result for 10–20% of the cost — and you're back in your kitchen within a week.
              </p>
              <p className="mt-4 text-ink leading-relaxed">
                We work on painted wood, MDF, thermofoil (delamination permitting), and factory-finished cabinets. If the boxes are solid and the layout works, refinishing is almost always the right call.
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

      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Our approach</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Why our cabinet finish looks different from a brushed repaint.
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
              Premium cabinet finishes only.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              We use cabinet-specific alkyd and waterborne finishes designed for high-traffic surfaces — harder, more washable, and more chip-resistant than standard wall paint.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {PRODUCTS.map((p) => (
              <div key={p} className="px-5 py-3 border border-border rounded-sm bg-surface font-serif text-navy">{p}</div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Recent cabinet work</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">Before and after.</h2>
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
          <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] mb-8">Cabinet refinishing questions.</h2>
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
