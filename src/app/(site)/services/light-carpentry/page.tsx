import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BulletList } from "@/components/BulletList";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Light Carpentry & Repair in Whistler",
  description:
    "Rot repair, trim replacement, fascia, soffits, and exterior carpentry repairs handled as part of your painting project — so the work is coordinated and finished properly.",
};

const SCOPES = [
  "Rotted siding boards and trim replacement",
  "Fascia, soffit, and rake board repair",
  "Window and door trim rebuilds",
  "Deck board, railing, and balustrade replacement",
  "Small cedar and Hardie repairs",
  "Caulking, flashing, and weatherproofing touch-ups",
];

const OUT_OF_SCOPE = [
  "New decks, pergolas, or outdoor structures built from scratch",
  "Framing, structural, or load-bearing work",
  "Interior cabinetry, built-ins, or finish carpentry",
  "Roofing repairs",
];

const APPROACH = [
  {
    title: "Coordinated through one point of contact.",
    body: "You work with Alpenglow start to finish. We handle the scheduling, the trades, and the hand-off between carpentry and paint so you're not chasing multiple contractors to keep a project moving.",
  },
  {
    title: "Identified during the quote, not as a surprise.",
    body: "On the site visit we look for rot, soft spots, and failing trim before we write the proposal. If we find it, it's in the quote. If we miss something that only shows up once prep starts, we tell you before spending a dollar.",
  },
  {
    title: "Matched to the surrounding materials.",
    body: "Repairs are done with the same siding species, profile, and finish as the rest of the house — cedar with cedar, Hardie with Hardie — so the work blends in once the paint or stain goes on, not a patch that stands out from across the yard.",
  },
  {
    title: "Paired with paint, not sold alone.",
    body: "We do this work because it's almost always needed before painting. We don't take standalone carpentry jobs — if you need a builder or finish carpenter, we'll point you to one we trust.",
  },
];

const FAQS = [
  {
    q: "Is carpentry priced inside the paint quote, or separate?",
    a: "Usually separate. The paint quote covers prep and painting; repair work is its own line item based on the materials and time needed. You'll see both on the proposal with a clear breakdown — nothing is buried.",
  },
  {
    q: "What if you find more rot once you start prepping?",
    a: "We stop and tell you immediately. Nothing gets built or billed without a written change order. Hidden rot is one of the most common reasons exterior projects go over budget — we'd rather pause and re-scope than push through and surprise you.",
  },
  {
    q: "Do you do interior carpentry too?",
    a: "Only incidental — baseboard and trim swaps as part of an interior paint job, for example. We don't take on cabinetry, built-ins, or finish carpentry as standalone work.",
  },
  {
    q: "Is the repair work covered under your warranty?",
    a: "The workmanship on the carpentry repair is covered. Wood that fails later due to moisture, structural movement, or defects outside our control isn't — same exclusions that apply to any exterior work. Details are in our full warranty page.",
  },
  {
    q: "Can you just do the carpentry and we'll paint it ourselves?",
    a: "We prefer to pair the two — and there's a real reason for it. A big part of the value of fixing rot or trim before a paint job is making sure the repair is sealed and protected properly, which happens in the way the paint or stain is applied right after. When both sides are handled by the same team, the repair blends in, the warranty stays clean, and you get one crew accountable for the result. If a carpentry-only job is really what you need, we're happy to recommend someone in the corridor.",
  },
];

export default function LightCarpentryPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        headline="Light Carpentry & Repair"
        subline="Rot repair, trim replacement, and exterior carpentry handled as part of your painting project — so the work is coordinated and the finish holds up."
        imageUrl="/stock-images/CornCobBlastingSideHouse.0063-67b24c93.webp"
        imageAlt="Exterior home under preparation — siding and trim repair"
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
                Repair-level carpentry to support <span className="text-alpine">painting and restoration</span> projects.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                <strong className="text-navy font-semibold">Rot, rotted trim, and failing fascia don&rsquo;t wait for the painter.</strong> On Sea-to-Sky homes, moisture and freeze-thaw cycles quietly undo exterior surfaces year after year — and if you paint over compromised wood, the paint fails. So we fix it first.
              </p>
              <p className="mt-4 text-ink leading-relaxed">
                This is scope we coordinate as part of painting and wood restoration projects. Small-to-medium repair work: siding boards, trim, fascia, soffits, deck boards, railings, and the weatherproofing details that surround them.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">What&rsquo;s in scope</div>
              <BulletList items={SCOPES} />

              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-xs uppercase tracking-[0.2em] text-muted mb-4">What&rsquo;s not</div>
                <ul className="space-y-3">
                  {OUT_OF_SCOPE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted leading-relaxed text-[0.95rem]">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">How we approach it</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Repair work that disappears — not patches that announce themselves.
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

      {/* Honest callout */}
      <section className="py-16 md:py-20 bg-navy">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle size={24} className="mx-auto mb-5 text-alpine" />
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Honest about scope</div>
            <h2 className="font-serif text-background font-bold text-[1.75rem] md:text-[2.5rem] leading-[1.1] tracking-tight">
              If the repair is big enough to be its own project, we&rsquo;ll say so.
            </h2>
            <p className="mt-5 text-background/75 text-lg leading-relaxed">
              There&rsquo;s a line where a repair becomes a build — and on the other side of that line, you&rsquo;re better served by a dedicated carpenter or GC. We won&rsquo;t take on work we can&rsquo;t do at the same standard as our painting. If your project needs more than repair-level carpentry, we&rsquo;ll tell you at the site visit and recommend someone in the corridor we&rsquo;d use ourselves.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container size="prose">
          <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Frequently asked</div>
          <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] mb-8">Light carpentry questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        heading="Got rot or failing trim?"
        eyebrow="Get a site visit"
        subline="We&rsquo;ll flag everything that needs repair on the quote — so painting day isn&rsquo;t the day you find out."
        primaryLabel="Get a Quote"
        secondaryLabel="Call (604) 938-4037"
        secondaryHref="tel:+16049384037"
      />
    </>
  );
}
