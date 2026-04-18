import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Painting in Whistler",
  description:
    "Interior painting across Whistler, Pemberton, and Squamish. Walls, trim, ceilings, doors. Clean crews, up to 10-year warranty.",
};

// Interior Painting service page — matches brief §7.2 template:
// Hero → What we do → Approach → Products → Related projects → FAQ → CTA.
// Once Sanity schemas are live, pull `service` doc by slug and render the
// same structure. For now, content lives inline in this file.

const INCLUDED = [
  "Full-coverage drop cloths and plastic masking",
  "Wall prep: filling, sanding, priming as needed",
  "Trim, doors, ceilings, closets — whatever's in scope",
  "Two-coat finish standard, three if the color demands it",
  "Daily cleanup so your home stays livable",
  "Final walkthrough with a written project report",
];

const APPROACH = [
  {
    title: "We protect before we paint.",
    body: "Floors, furniture, fixtures — nothing painted accidentally, nothing dusty at the end. You'll notice on day one.",
  },
  {
    title: "Two coats is the baseline.",
    body: "We don't call a room 'done' because the roller ran over it once. Full, even coverage with proper dry time between coats.",
  },
  {
    title: "Low-VOC products by default.",
    body: "Benjamin Moore Aura, Sherwin-Williams Emerald, and similar premium lines — low odor, safe to sleep in the same night.",
  },
  {
    title: "Closeout you'll actually use.",
    body: "Every project ends with a document listing the exact products, colors, and sheens we used — so repairs or touch-ups, years later, aren't guesswork.",
  },
];

const PRODUCTS = [
  "Benjamin Moore",
  "Sherwin-Williams",
  "Sikkens",
  "Minwax",
];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "pemberton-farmhouse-interior",
    title: "Pemberton farmhouse interior",
    location: "Pemberton",
    serviceTags: ["Interior"],
    coverUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "whistler-family-home-repaint",
    title: "Whistler family home — full repaint",
    location: "Whistler",
    serviceTags: ["Interior", "Trim"],
    coverUrl:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "squamish-townhome-interior",
    title: "Squamish townhome refresh",
    location: "Squamish",
    serviceTags: ["Interior"],
    coverUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
];

const FAQS = [
  {
    q: "How long does an interior project take?",
    a: "A typical three-bedroom repaint runs 3–5 working days depending on scope. We give you a specific day count in the proposal, not a vague range.",
  },
  {
    q: "Can we stay in the house while you paint?",
    a: "Almost always, yes. We use low-VOC products and work one area at a time so you have a clean, dry space to live in. We'll walk through the logistics on the site visit.",
  },
  {
    q: "Do you move furniture?",
    a: "We move light-to-medium furniture to the center of the room and cover it. For large or fragile pieces we'll coordinate in advance.",
  },
  {
    q: "How do you handle color selection?",
    a: "We can test swatches on your walls and compare in your light. If you want outside help, we partner with a local color consultant who knows Sea-to-Sky light conditions.",
  },
  {
    q: "What does the warranty cover?",
    a: "Peeling, flaking, and premature failure of the paint finish. Standard 3-year coverage, with 7- and 10-year tiers available on most interior projects.",
  },
];

export default function InteriorPaintingPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        headline="Interior Painting"
        subline="Walls, trim, ceilings, cabinets. A clean process that respects your home — and a finish that holds up."
        imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
        imageAlt="Interior of a Whistler home mid-repaint"
      >
        <Button
          href="/contact"
          size="lg"
          className="!bg-background !text-navy hover:!bg-surface"
        >
          Get a Quote
        </Button>
      </Hero>

      {/* What we do */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">
                What we do
              </div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                The full interior, done properly.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Most homes we paint in Whistler are lived in — primary
                residences, long-term rentals, second homes used every weekend.
                That means the job has to be precise, low-disruption, and
                finished cleanly enough that the house is better than before
                we arrived.
              </p>
              <p className="mt-4 text-ink leading-relaxed">
                Whether it&rsquo;s a single accent wall or a whole-house repaint,
                the standard is the same.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">
                Included in every project
              </div>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-navy mt-0.5 flex-shrink-0"
                    />
                    <span className="text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">
              Our approach
            </div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              The details other painters skip.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div
                key={a.title}
                className="border border-border rounded-sm bg-surface p-6 md:p-7"
              >
                <h3 className="font-serif text-xl text-navy">{a.title}</h3>
                <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/process" variant="text">
              See our full process →
            </Button>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">
              Products we use
            </div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
              Premium lines, specified for the job.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              We don&rsquo;t upcharge for a brand name — we use the right
              product for the surface, the sheen, and the wear you&rsquo;ll put
              it through.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p}
                className="px-5 py-3 border border-border rounded-sm bg-surface font-serif text-navy"
              >
                {p}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related projects */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">
                Recent interior work
              </div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                A few projects we&rsquo;ve loved.
              </h2>
            </div>
            <Button href="/work" variant="text">
              See all work →
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Container size="prose">
          <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">
            Frequently asked
          </div>
          <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] mb-8">
            Interior painting questions.
          </h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        heading="Ready for a fresh interior?"
        subline="Tell us about your space — we'll come see it and quote it, usually the same day."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
