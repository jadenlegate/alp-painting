import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Check, DollarSign, Calendar, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join Our Team",
  description:
    "Alpenglow Painting is hiring painters for the Whistler season. Competitive pay, 4-day weeks, performance bonuses, and life in one of the best places in Canada.",
};

// Careers page — brief §7.6. Currently #2 trafficked page on the site.
// This needs to be honest and specific — painters have been burned by
// vague job postings. Real pay ranges, real schedule, real expectations.

const PERKS = [
  { icon: DollarSign, label: "Performance-based pay", detail: "$25–40+/hr depending on role and output" },
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
  { n: "01", label: "Apply", detail: "Submit the form below — a few questions, no resume required if you'd rather just talk." },
  { n: "02", label: "Quick call", detail: "15–20 minutes. We ask about your experience, you ask us whatever you want." },
  { n: "03", label: "Trial day", detail: "Paid trial on a real job site so you can see how we work before committing." },
  { n: "04", label: "Offer", detail: "If it's a fit, we send an offer with your start date, rate, and schedule." },
  { n: "05", label: "Season start", detail: "Orientation, gear, and intro to the crew. First day of the season, you're ready." },
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
              <Button href="#apply" size="lg" className="bg-background !text-navy hover:bg-stone-light">
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
                We operate May through October. The shoulder seasons are some of the best conditions in the country — hiking, mountain biking, long evenings. If you&rsquo;re considering relocating for the season, Whistler does it well.
              </p>
              <p className="mt-3 text-ink leading-relaxed">
                4-day weeks mean you get long weekends, every week. We can help with referrals for housing if you&rsquo;re coming from out of town.
              </p>
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
          <div className="grid gap-6 md:grid-cols-5">
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
      <section id="apply" className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Apply</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Interested? Let&rsquo;s talk.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Fill out the application form — takes about 5 minutes. No formal resume required. We respond within 2 business days.
            </p>
            <div className="mt-8">
              {/* Link to ClickUp application form — update URL when form is ready */}
              <Button
                href="https://forms.clickup.com/alpenglow-painter-application"
                size="lg"
              >
                Apply Now
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted">
              Prefer to reach out directly?{" "}
              <a href="mailto:hello@alpenglowpainting.ca" className="text-navy underline underline-offset-4">
                hello@alpenglowpainting.ca
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
