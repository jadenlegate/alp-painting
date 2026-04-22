import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Painting in Whistler",
  description:
    "Exterior painting across Whistler, Pemberton, and Squamish. Weather-tough finishes built for mountain climates. Up to 10-year warranty.",
};

const INCLUDED = [
  "Full pressure wash and surface prep before a single coat goes on",
  "Caulking, filling, and spot-priming all failing areas",
  "Window and door masking, landscaping protection",
  "Premium exterior coatings — Sikkens, Benjamin Moore Aura Exterior, Sherwin-Williams Duration",
  "Two full coats standard; three on weathered or bare surfaces",
  "Final inspection walkthrough with written project report",
];

const APPROACH = [
  {
    title: "Prep is 80% of the job.",
    body: "A beautiful coat over a failing substrate peels in a season. We pressure wash, scrape, sand, caulk, and prime before any finish coat touches the surface.",
  },
  {
    title: "Coatings rated for mountain weather.",
    body: "Whistler exteriors get UV, rain, freeze-thaw cycles, and heavy snow load. We specify products proven to handle it — not whatever's on sale.",
  },
  {
    title: "We work around your schedule.",
    body: "Exterior painting is weather-dependent. We plan buffer days into every project and communicate early if conditions force a change. No surprises.",
  },
  {
    title: "Cleanup like we were never there.",
    body: "Overspray masked, drop cloths down, landscaping protected. End of every day the site is tidy. End of the job, it's clean.",
  },
];

const PRODUCTS = ["Sikkens", "Benjamin Moore", "Sherwin-Williams", "Sansin", "Messmer's"];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-exterior",
    title: "Kadenwood chalet — full exterior",
    location: "Whistler",
    serviceTags: ["Exterior"],
    coverUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "pemberton-farmhouse-exterior",
    title: "Pemberton farmhouse — repaint",
    location: "Pemberton",
    serviceTags: ["Exterior"],
    coverUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "squamish-contemporary-exterior",
    title: "Squamish contemporary — cedar + trim",
    location: "Squamish",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
];

const FAQS = [
  {
    q: "What's the best time of year to paint exterior in Whistler?",
    a: "May through September is the window. We need temperatures above 10°C and dry conditions for at least 24 hours after application. We track forecasts closely and plan project windows that give us enough buffer days.",
  },
  {
    q: "How long does an exterior project take?",
    a: "A typical single-family home runs 4–8 working days depending on size, prep condition, and weather. We give you a day-range estimate in the proposal, not a vague 'a few weeks.'",
  },
  {
    q: "Do I need to be home while you're painting?",
    a: "Not unless you want to be. We go over site access on the walkthrough — most clients give us a code or key, and we lock up at the end of each day.",
  },
  {
    q: "How long will the paint last?",
    a: "With proper prep and premium products, 7–12 years is realistic on most Whistler exteriors. We back that with up to a 10-year warranty so you're not just taking our word for it.",
  },
  {
    q: "Do you do stucco and Hardi board as well as wood siding?",
    a: "Yes. We work on all common Whistler exterior substrates — cedar, Hardi, stucco, concrete board, and log. Product and prep vary by substrate; we spec this out on the site visit.",
  },
];

export default function ExteriorPaintingPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        headline="Exterior Painting"
        subline="Built for Whistler winters. Premium coatings, thorough prep, and a warranty that holds up when the weather does its worst."
        imageUrl="/Stock%20Images/organic-modern-mountain-home-living-stone-design-build-img~82c18bb90b1ed2a0_4-9760-1-d4cd6cb.jpg"
        imageAlt="Freshly painted home exterior with mountain backdrop"
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
                A finish that lasts — and a process that earns it.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Sea-to-Sky homes face conditions that expose every shortcut in an exterior paint job. High UV in summer, freeze-thaw in shoulder seasons, and heavy snow load on horizontal surfaces. The only way to get paint that lasts is to do the prep properly and use products rated for the climate.
              </p>
              <p className="mt-4 text-ink leading-relaxed">
                Every exterior project starts with a thorough assessment of what the surface needs before we open a can.
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
              Where most exterior jobs fail — and how we don't.
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
          <div className="mt-10">
            <Button href="/process" variant="text">See our full process →</Button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Products we use</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
              Rated for mountain climates.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              We don't use one product for every exterior. Sikkens for cedar, Sansin for log, Benjamin Moore Aura for painted siding. The right product for the substrate.
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
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Recent exterior work</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">Projects that hold up.</h2>
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
          <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] mb-8">Exterior painting questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        heading="Ready to repaint the exterior?"
        subline="Tell us about the project — we'll come take a look and quote it, usually the day of the visit."
      />
    </>
  );
}
