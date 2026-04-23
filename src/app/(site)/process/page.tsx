import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { Button } from "@/components/Button";
import {
  FileText, ShieldCheck, MessageSquare, Ruler, CalendarCheck,
  HardHat, Paintbrush, ClipboardCheck, BookOpen, HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process — How We Paint Your Whistler Home",
  description:
    "From first call to final walkthrough — the exact process Alpenglow Painting follows on every Whistler, Pemberton, and Squamish project.",
  alternates: { canonical: "/process" },
};

// Process page — editorial walkthrough per brief §7.4.
// The goal is risk reduction: a skeptical homeowner who's been let down
// by trades before should finish this page feeling like they know exactly
// what they're signing up for.

const STEPS: { n: string; title: string; body: string; detail: string | null; icon: LucideIcon }[] = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Request a quote",
    body: "Fill out the form on our contact page or call us directly. Tell us what you're thinking — rough scope, timing, location. We'll respond within 24 hours on weekdays.",
    detail: null,
  },
  {
    n: "02",
    icon: Ruler,
    title: "Site visit & proposal",
    body: "We come to the property to measure, look at the surfaces, and work through product and color options with you.",
    detail: "Most proposals are presented on the spot. For larger projects that need more calculation, we usually have it ready within a day. If we can't meet in person, we'll schedule a video call to walk through it together.",
  },
  {
    n: "03",
    icon: CalendarCheck,
    title: "Booking & scheduling",
    body: "If you want to move forward, we confirm the start date, collect a deposit, and send a project agreement. We'll confirm what you need to do to prep (furniture, access codes, pet logistics).",
    detail: "We build buffer days into every exterior project for weather. You'll know the realistic range upfront — not just a start date that slips.",
  },
  {
    n: "04",
    icon: HardHat,
    title: "Day one on site",
    body: "The crew arrives on time, in uniform, with everything they need. First order of business: protect what isn't being painted. Drop cloths, plastic masking, furniture moved. Nothing starts until the space is properly staged.",
    detail: "You'll meet the crew lead on day one. They're your main contact for the duration of the project.",
  },
  {
    n: "05",
    icon: Paintbrush,
    title: "During the project",
    body: "We work a clean, professional site. Daily tidying is standard — you shouldn't feel like your home has been taken over. If something unexpected comes up (hidden rot, a surface that needs extra prep), we tell you immediately and don't start work until you've approved the change.",
    detail: "We don't surprise you with extras at the end of the job. Anything outside the original scope gets a written change order first.",
  },
  {
    n: "06",
    icon: ClipboardCheck,
    title: "Final walkthrough",
    body: "When the work is done, we walk every inch of it with you. If something isn't right, we fix it before we leave. This isn't a five-minute courtesy check — it's a deliberate review of the finished product.",
    detail: "You sign off only when you're satisfied.",
  },
  {
    n: "07",
    icon: BookOpen,
    title: "The project report",
    body: "Every Alpenglow project closes with a written report documenting the exact products used (manufacturer, product line, color name, sheen), areas covered, and application method.",
    detail: "This document lives with the house. Years from now, when you need a touch-up or want to match a color, you'll know exactly what was used — instead of guessing.",
  },
  {
    n: "08",
    icon: HeartHandshake,
    title: "After the job",
    body: "If something comes up under warranty, contact us. We respond within 5 business days and schedule the repair promptly. The warranty isn't a legal escape hatch — it's a commitment that the work holds up.",
    detail: null,
  },
];

const WARRANTY_TIERS = [
  {
    years: "3",
    label: "Standard",
    description: "Included on all projects at no extra cost. Covers peeling, flaking, and premature finish failure under normal conditions.",
    highlight: false,
  },
  {
    years: "7",
    label: "Extended",
    description: "Available on most exterior and interior projects when premium products are specified. Requires a surface assessment at the time of quoting.",
    highlight: false,
  },
  {
    years: "10",
    label: "Maximum",
    description: "Available on select projects where surface conditions and product choice support it.",
    highlight: true,
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-stone-light/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Our process</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              From first call to final walkthrough — <span className="text-alpine">here&rsquo;s exactly what to expect</span>.
            </h1>
            <p className="mt-6 text-ink text-lg leading-relaxed">
              <strong className="text-navy font-semibold">We built our process around a simple idea:</strong> most homeowners have hired a contractor before and been let down. Every step below is designed to prevent the specific things that tend to go wrong.
            </p>
          </div>
        </Container>
      </section>

      {/* Step-by-step */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto space-y-0">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={`grid md:grid-cols-[96px_1fr] gap-6 md:gap-10 py-10 md:py-12 ${
                  i < STEPS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="w-12 h-12 rounded-sm bg-alpine/10 flex items-center justify-center">
                    <step.icon size={22} className="text-alpine" />
                  </div>
                  <div className="font-serif text-sm text-navy/30 tabular-nums">{step.n}</div>
                </div>
                <div>
                  <h2 className="font-serif text-navy text-2xl md:text-[1.75rem]">{step.title}</h2>
                  <p className="mt-3 text-ink leading-relaxed">{step.body}</p>
                  {step.detail && (
                    <p className="mt-3 text-muted leading-relaxed text-[0.95rem] italic">
                      {step.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Report callout */}
      <section className="py-16 md:py-20 bg-navy">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FileText size={28} className="mx-auto mb-5 text-alpine" />
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Every project</div>
            <h2 className="font-serif text-background font-bold text-[1.75rem] md:text-[2.5rem] leading-[1.1] tracking-tight">
              The Alpenglow Project Report
            </h2>
            <p className="mt-5 text-background/75 text-lg leading-relaxed">
              Every project closes with a written record: the products we used, color codes, sheens, areas covered, and care notes.
            </p>
            <p className="mt-4 text-background/65 leading-relaxed">
              It lives with the house. Years later, when you need a touch-up or sell the property, you&rsquo;ll know exactly what was used.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
                Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Warranty tiers */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Warranty</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Three, seven, or ten years.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Standard 3-year coverage is included on every project at no extra cost. Extended terms are available when the surface and product choice support it.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WARRANTY_TIERS.map((tier) => (
              <div
                key={tier.years}
                className={`rounded-sm border p-6 md:p-7 ${
                  tier.highlight
                    ? "border-navy bg-navy text-background"
                    : "border-border bg-surface"
                }`}
              >
                <div className={`flex items-baseline gap-1.5 mb-4`}>
                  <span className={`font-serif text-5xl tabular-nums ${tier.highlight ? "text-background" : "text-navy"}`}>
                    {tier.years}
                  </span>
                  <span className={`text-sm ${tier.highlight ? "text-background/70" : "text-muted"}`}>years</span>
                </div>
                <div className={`font-medium mb-2 ${tier.highlight ? "text-background" : "text-navy"}`}>
                  {tier.label}
                </div>
                <p className={`text-sm leading-relaxed ${tier.highlight ? "text-background/80" : "text-ink"}`}>
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-2 text-sm text-muted max-w-xl">
            <ShieldCheck size={16} className="text-navy mt-0.5 flex-shrink-0" />
            <span>Warranty covers peeling, flaking, and premature finish failure under normal use. Does not cover damage from impact, flooding, or structural movement.</span>
          </div>
          <div className="mt-8">
            <Button href="/warranty" variant="secondary">See full warranty details</Button>
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="Ready to get started?"
        eyebrow="Get in touch"
        subline="Most quotes are delivered the day of your site visit. The site visit is free."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
