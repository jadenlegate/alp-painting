import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { Button } from "@/components/Button";
import { FileText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From first call to final walkthrough — here's exactly what working with Alpenglow Painting looks like, step by step.",
};

// Process page — editorial walkthrough per brief §7.4.
// The goal is risk reduction: a skeptical homeowner who's been let down
// by trades before should finish this page feeling like they know exactly
// what they're signing up for.

const STEPS = [
  {
    n: "01",
    title: "Request a quote",
    body: "Fill out the form on our contact page or call us directly. Tell us what you're thinking — rough scope, timing, location. We'll respond within 24 hours on weekdays, usually the same day.",
    detail: "For most projects we can give you a ballpark range before the site visit, so you're not walking in blind.",
  },
  {
    n: "02",
    title: "Site visit & proposal",
    body: "We come to you — or, for out-of-area clients, we can do a live video walkthrough. We measure, assess the surface conditions, discuss product and color options, and ask the questions that matter.",
    detail: "Within 1–2 business days of the site visit, you get a written proposal: itemized scope, product specs, timeline, and warranty terms. We present it in person or on a call — we don't just email a PDF and disappear.",
  },
  {
    n: "03",
    title: "Booking & scheduling",
    body: "If you want to move forward, we confirm the start date, collect a deposit, and send a project agreement. We'll confirm what you need to do to prep (furniture, access codes, pet logistics).",
    detail: "We build buffer days into every exterior project for weather. You'll know the realistic range upfront — not just a start date that slips.",
  },
  {
    n: "04",
    title: "Day one on site",
    body: "The crew arrives on time, in uniform, with everything they need. First order of business: protect what isn't being painted. Drop cloths, plastic masking, furniture moved. Nothing starts until the space is properly staged.",
    detail: "You'll meet the crew lead on day one. They're your main contact for the duration of the project.",
  },
  {
    n: "05",
    title: "During the project",
    body: "We work a clean, professional site. Daily tidying is standard — you shouldn't feel like your home has been taken over. If something unexpected comes up (hidden rot, a surface that needs extra prep), we tell you immediately and don't start work until you've approved the change.",
    detail: "We don't surprise you with extras at the end of the job. Anything outside the original scope gets a written change order first.",
  },
  {
    n: "06",
    title: "Final walkthrough",
    body: "When the work is done, we walk every inch of it with you. If something isn't right, we fix it before we leave. This isn't a five-minute courtesy check — it's a deliberate review of the finished product.",
    detail: "You sign off only when you're satisfied.",
  },
  {
    n: "07",
    title: "The project report",
    body: "Every Alpenglow project closes with a written report documenting the exact products used (manufacturer, product line, color name, sheen), areas covered, and application method.",
    detail: "This document lives with the house. Years from now, when you need a touch-up or want to match a color, you'll know exactly what was used — instead of guessing.",
  },
  {
    n: "08",
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
    description: "Available on select projects where surface conditions and product choice support it. Nobody else in the Sea to Sky offers this.",
    highlight: true,
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-stone-light/30">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-navy mb-4">Our process</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              From first call to final walkthrough — here&rsquo;s exactly what to expect.
            </h1>
            <p className="mt-6 text-ink text-lg leading-relaxed">
              We built our process around a simple idea: most homeowners have hired a contractor before and been let down. Every step below is designed to prevent the specific things that tend to go wrong.
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
                className={`grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-10 md:py-12 ${
                  i < STEPS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="font-serif text-3xl text-navy/30 tabular-nums">{step.n}</div>
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
      <section className="py-16 md:py-20 bg-navy text-background">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <FileText size={32} className="mx-auto mb-6 text-background/70" />
            <h2 className="font-serif text-background text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              The Alpenglow Project Report
            </h2>
            <p className="mt-5 text-background/85 text-lg leading-relaxed">
              Every project closes with a written document: the exact products used, colors applied (manufacturer name, color code, sheen), areas covered, and care instructions.
            </p>
            <p className="mt-4 text-background/85 leading-relaxed">
              Most painters hand you nothing when the job is done. We give you a record that lives with the house — so repairs and touch-ups years later aren&rsquo;t guesswork, and the next owner knows what they inherited.
            </p>
            <p className="mt-4 text-background/70 text-sm">Nobody else in the Sea to Sky does this.</p>
          </div>
        </Container>
      </section>

      {/* Warranty tiers */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-widest text-navy mb-3">Warranty</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Up to 10 years — and that&rsquo;s not a marketing line.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              We offer a warranty because we believe in the work. The standard 3-year coverage is included at no extra cost. Extended terms are available when the surface and product choice support it.
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
                  {tier.highlight && (
                    <span className="ml-2 text-xs uppercase tracking-widest opacity-70">Sea to Sky exclusive</span>
                  )}
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
        </Container>
      </section>

      <CtaBlock
        heading="Ready to get started?"
        subline="Most quotes are delivered same day. The site visit is free."
        primaryLabel="Get a Quote"
        secondaryLabel="Call us"
        secondaryHref="tel:+16049384037"
      />
    </>
  );
}
