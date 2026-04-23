import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { Check, DollarSign, Calendar, Users, MapPin, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Painter Jobs in Whistler — Careers at Alpenglow Painting",
  description:
    "Alpenglow Painting is hiring painters in Whistler and the Sea to Sky. Competitive pay ($25–40+/hr), 4-day weeks, performance bonuses, and a crew that shows up.",
  alternates: { canonical: "/careers" },
};

// Careers page — brief §7.6. Currently #2 trafficked page on the site.
// This needs to be honest and specific — painters have been burned by
// vague job postings. Real pay ranges, real schedule, real expectations.

const PERKS = [
  { icon: DollarSign, label: "Performance-based pay", detail: "$25–40+/hr depending on role and performance" },
  { icon: Calendar, label: "4-day work weeks", detail: "Standard schedule is Mon–Thu, long weekends standard" },
  { icon: Users, label: "Team that shows up", detail: "Professional crew, good culture, no drama" },
  { icon: MapPin, label: "Work in Whistler", detail: "Live and work in one of the best places in Canada" },
];

const PAY_TIERS = [
  {
    role: "Junior Painter",
    range: "$25–28/hr",
    description: "Some painting experience or strong willingness to learn. Reliable, shows up, follows direction well.",
  },
  {
    role: "Crew Lead",
    range: "$28–33/hr",
    description: "Experienced painter who can manage a small crew, communicate with clients on-site, and work independently.",
  },
  {
    role: "Top Performer",
    range: "$30–40+/hr",
    description: "Skilled, fast, and consistent. Performance bonuses apply. The ceiling moves with output.",
  },
];

const TRAITS = [
  "Shows up on time, every time — without being reminded",
  "Takes pride in the work, not just the paycheque",
  "Communicates clearly when something's wrong",
  "Respects the client's home the way you'd want someone to respect yours",
  "Can work independently and as part of a team",
];

const HIRING_STEPS = [
  { n: "01", label: "Apply", detail: "Submit the form below — a few questions to get things started." },
  { n: "02", label: "Virtual interview", detail: "15–20 minutes over video. We ask about your experience, you ask us whatever you want." },
  { n: "03", label: "Offer", detail: "If it's a fit, we send an offer with your start date, rate, and schedule." },
  { n: "04", label: "Start working", detail: "Orientation, gear, and intro to the crew. You're ready for your first day on the job." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=2000&q=85"
            alt="Painter working on a Whistler home exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/45" />
        </div>
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-background/70 mb-4">Join the team</div>
            <h1 className="font-serif text-background text-[2.25rem] md:text-[3.5rem] leading-[1.1]">
              Work hard. Paint well. Enjoy Whistler.
            </h1>
            <p className="mt-6 text-background/90 text-lg leading-relaxed max-w-lg">
              We hire a small crew of serious painters each season. If you take pride in your work and want a company that treats you like an adult, keep reading.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="https://forms.clickup.com/9017949262/f/8cr5z2e-737/2CCGPUOLREF04NSIZ2"
                size="lg"
                target="_blank"
                className="!bg-background !text-navy hover:!bg-surface"
              >
                Apply Now
              </Button>
              <Button href="#pay" variant="text" className="!text-background">
                See pay rates ↓
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Alpenglow */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Why Alpenglow</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              A crew worth being on.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              We don&rsquo;t hire everyone who applies. We hire people who fit a specific standard and pay them well for it. Small crew, strong culture, no tolerance for people who make everyone else&rsquo;s job harder.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {PERKS.map((p) => (
              <div key={p.label} className="border border-border rounded-sm bg-surface p-5 md:p-6">
                <p.icon size={20} className="text-navy mb-3" />
                <div className="font-serif text-lg text-navy">{p.label}</div>
                <div className="mt-1 text-sm text-ink">{p.detail}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pay structure */}
      <section id="pay" className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Pay structure</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Real numbers. No surprises.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Performance matters here. Base rates are competitive, and top performers earn more through our bonus structure. We also offer retention bonuses for painters who return for a second season and referral bonuses when you bring in someone good.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PAY_TIERS.map((tier) => (
              <div key={tier.role} className="border border-border rounded-sm bg-surface p-6 md:p-7">
                <div className="font-serif text-3xl text-navy tabular-nums">{tier.range}</div>
                <div className="mt-2 font-medium text-navy">{tier.role}</div>
                <p className="mt-3 text-sm text-ink leading-relaxed">{tier.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted max-w-xl">
            Rates reflect hourly base pay. Bonus potential, retention bonuses, and referral pay are on top of these numbers. We discuss specifics on the call.
          </p>
        </Container>
      </section>

      {/* What we look for */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">What we look for</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                The traits that actually matter.
              </h2>
              <p className="mt-4 text-ink leading-relaxed">
                Painting skill can be developed. Reliability, attitude, and respect for the work can&rsquo;t be trained. That&rsquo;s what we screen for.
              </p>
              <ul className="mt-6 space-y-3">
                {TRAITS.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check size={18} className="text-navy mt-0.5 flex-shrink-0" />
                    <span className="text-ink">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Life in Whistler</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                Not just a job.
              </h2>
              <p className="mt-4 text-ink leading-relaxed">
                Whistler is one of the best places in the country to live — skiing and boarding in winter, hiking and mountain biking in summer, and long evenings in between. If you&rsquo;re considering relocating, the lifestyle up here does it well.
              </p>
              <p className="mt-3 text-ink leading-relaxed">
                4-day weeks mean you get long weekends.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed job description callout */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="border border-navy/15 rounded-sm bg-surface p-6 md:p-8 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
            <div className="flex items-start gap-5 lg:gap-6 flex-1 min-w-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-navy/5 flex items-center justify-center">
                <FileText size={22} className="text-navy" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-2">Full job description</div>
                <h3 className="font-serif text-navy text-xl md:text-2xl leading-tight">
                  Prefer the full details up front?
                </h3>
                <p className="mt-2 text-ink leading-relaxed">
                  Read the complete job description — duties, expectations, schedule, benefits, and growth path — before you apply.
                </p>
              </div>
            </div>
            <div className="lg:flex-shrink-0">
              <Button
                href="/job-description/alpenglow-painter-job-description-2026.pdf"
                target="_blank"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto justify-center whitespace-nowrap"
              >
                Read Detailed Job Description
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Hiring process */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">How it works</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              The hiring process, start to finish.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {HIRING_STEPS.map((s) => (
              <div key={s.n} className="border-t border-navy/30 pt-4">
                <div className="font-serif text-navy text-sm tabular-nums">{s.n}</div>
                <div className="mt-2 font-medium text-navy">{s.label}</div>
                <p className="mt-1.5 text-sm text-ink leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application CTA */}
      <div id="apply">
        <CtaBlock
          eyebrow="Apply"
          heading={<>Interested? Let&rsquo;s talk.</>}
          subline="Fill out the application form — takes about 5 minutes. We respond within 24 hours."
          primaryLabel="Apply Now"
          primaryHref="https://forms.clickup.com/9017949262/f/8cr5z2e-737/2CCGPUOLREF04NSIZ2"
          primaryNewTab
          secondaryLabel="Read Detailed Job Description"
          secondaryHref="/job-description/alpenglow-painter-job-description-2026.pdf"
          secondaryNewTab
        />
      </div>
    </>
  );
}
