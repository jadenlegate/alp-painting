import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { BulletList } from "@/components/BulletList";
import { MapPin, Clock, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: "Painter Job Description — Alpenglow Painting, Whistler",
  description:
    "Full job description for Junior Painter and Crew Lead roles at Alpenglow Painting in Whistler, BC — responsibilities, pay structure, schedule, and hiring process.",
  alternates: { canonical: "/careers/job-description" },
};

// Web version of the painter job description (replaces the 2026 PDF, which
// now 301s here). Keep pay figures in sync with PAY_TIERS on /careers.

const APPLY_URL =
  "https://forms.clickup.com/9017949262/f/8cr5z2e-737/2CCGPUOLREF04NSIZ2";

const FACTS = [
  { icon: MapPin, label: "Location", value: "Whistler, BC" },
  { icon: Clock, label: "Employment type", value: "Full-time, seasonal" },
  { icon: Banknote, label: "Compensation", value: "$26–40+/hour (performance-based)" },
];

const WHY_US = [
  {
    title: "Fast-paced, fun, positive work environment",
    body: "Join a dynamic and enthusiastic crew that values teamwork and camaraderie.",
  },
  {
    title: "Competitive wages",
    body: "Our performance-based pay structure ensures that your hard work directly translates into higher earnings.",
  },
  {
    title: "Bonuses and incentives",
    body: "We reward efficiency and quality with additional financial incentives.",
  },
  {
    title: "Opportunities to grow within the company",
    body: "Demonstrate your capabilities, and you can advance to roles with greater responsibility and pay.",
  },
  {
    title: "Work-hard, play-hard culture",
    body: "Our 4-day workweek allows you to dedicate time to your passions and enjoy a balanced lifestyle.",
  },
  {
    title: "Team appreciation events",
    body: "We regularly host events to show our gratitude for our team's hard work and dedication.",
  },
  {
    title: "Comprehensive training",
    body: "Even if you're new to painting, we provide training to ensure you have the skills needed to excel.",
  },
  {
    title: "Safety first",
    body: "Your safety is our priority. We provide all necessary protective equipment and training to ensure a safe working environment.",
  },
];

const JUNIOR_DUTIES = [
  ["Surface preparation", "Prepare surfaces for painting by cleaning, scraping, sanding, and priming as necessary to ensure proper adhesion."],
  ["Application of finishes", "Apply paint, stains, and other finishes to various surfaces using brushes, rollers, and spraying equipment, ensuring an even and professional coat."],
  ["Filling and caulking", "Fill and caulk holes and cracks to achieve a smooth and seamless finish."],
  ["Equipment use and maintenance", "Use and maintain painting equipment and tools, including brushes, rollers, sprayers, ladders, and scaffolding, ensuring they are in good working condition."],
  ["Safety compliance", "Follow safety protocols and use protective equipment to ensure a safe working environment for yourself and your team members."],
  ["Work area maintenance", "Maintain a clean and organized work area, ensuring that all materials are stored properly and that the site is left clean at the end of each day."],
  ["Team communication", "Communicate effectively with team members to complete tasks efficiently and to company standards."],
  ["Client interaction", "Interact politely and professionally with clients to address their painting needs and ensure their satisfaction."],
  ["Professional appearance", "Maintain a clean appearance and positive attitude, reflecting the professionalism and quality standards of Alpenglow Painting."],
] as const;

const LEAD_DUTIES = [
  ["Team coordination", "Assist in organizing and directing a small crew of painters, ensuring tasks are completed efficiently and to Alpenglow Painting's quality standards."],
  ["On-site leadership", "Act as the primary lead on-site when the production manager is not present, helping keep the team focused and productive."],
  ["Surface preparation oversight", "Ensure surfaces are properly prepped, including cleaning, scraping, sanding, caulking, and priming, before paint application."],
  ["Quality assurance", "Regularly check completed work to ensure it meets company standards and make minor corrections as needed."],
  ["Safety awareness", "Encourage safe work habits among the crew and ensure basic safety protocols are followed (e.g. proper ladder use, protective equipment)."],
  ["Communication with management", "Relay important updates to the production manager, such as job progress, material needs, or any issues that arise."],
  ["Equipment & site maintenance", "Help maintain a clean and organized job site, ensuring tools and materials are properly stored at the end of each day."],
] as const;

const PAY_EXAMPLES = [
  ["Finished on budget", "A project budgeted at 100 hours is completed in 100 hours — every painter is paid their regular hourly wage."],
  ["Finished under budget", "That same project is completed in 90 hours — every painter is paid their regular hourly wage, plus a share of the additional profit from the 10 hours saved, split across the crew based on time each person spent on the project."],
  ["Finished behind schedule", "The project takes 110 hours — every painter is still paid their regular hourly wage."],
] as const;

const EARN_MORE = [
  ["Work efficiently", "The faster and better you paint, the more you earn per hour."],
  ["Follow instructions carefully", "Doing the job right the first time avoids rework, keeping your pay high."],
  ["Improve your skills", "As you get better, you'll naturally become faster and make more money."],
  ["Advance to crew lead", "If you take on more responsibility and leadership, you can earn even higher rates."],
] as const;

const PAY_RATES = [
  { role: "Junior Painter", range: "$26–28/hr", note: "Starting pay" },
  { role: "Crew Lead", range: "$28–33/hr", note: "Starting pay" },
  { role: "Top Performer", range: "$30–40+/hr", note: "By improving speed and skill" },
];

const BONUSES = [
  "Retention bonuses paid out at 4, 8, and 12 months",
  "$50 bonus per 5-star Google review (if you worked on that project)",
  "$150 bonus for referring a booked project",
  "$150 bonus for referring another painter (who stays until the end of the painting season)",
  "And more…",
];

const EXPECTATIONS = [
  ["Work schedule", "We operate on a 4-day workweek (usually Monday–Thursday, 8 AM – 6 PM). This gives you a 3-day weekend every week, allowing for a better work-life balance. Occasionally, if a job has a tight deadline, we may ask you to work on a Friday, but this is rare (about once per month)."],
  ["Punctuality & reliability", "Being on time and ready to work at the start of the day is essential. Our team relies on each other to stay on schedule and complete projects efficiently."],
  ["Uniform requirement", "We provide a branded t-shirt, hoodie, and hat, as well as white painter pants and shorts. This uniform is required on all jobsites to maintain a professional company image."],
  ["Work environment & physical requirements", "This is a physically demanding job, requiring you to be on your feet for long periods, using ladders, and lifting paint buckets and equipment as needed. Lots of our work is outdoors, so we adjust schedules when necessary for extreme weather conditions (e.g. starting earlier on hot days, sometimes not working when it's pouring rain)."],
  ["Teamwork & professionalism", "We take pride in delivering high-quality work and maintaining respectful, professional interactions with both clients and team members. Communication, accountability, and a strong work ethic are key to success in this role."],
] as const;

const HIRING_STEPS = [
  ["01", "Complete the job application form"],
  ["02", "Attend an online video interview with our hiring team"],
  ["03", "Get hired"],
  ["04", "Complete our online training before starting on-site"],
  ["05", "Start working and get hands-on training on the job"],
] as const;

function DutyList({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map(([term, detail]) => (
        <li key={term} className="border-l-2 border-alpine/40 pl-4">
          <span className="font-medium text-navy">{term}</span>
          <span className="text-ink"> — {detail}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">{eyebrow}</div>
      <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15] tracking-tight font-medium">
        {children}
      </h2>
    </div>
  );
}

export default function JobDescriptionPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-stone-light/30">
        <Container size="prose">
          <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">Job description</div>
          <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
            Junior Painter &amp; Crew Lead
          </h1>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {FACTS.map((f) => (
              <div key={f.label}>
                <div className="flex items-center gap-2 text-muted">
                  <f.icon size={15} className="text-alpine flex-shrink-0" />
                  <span className="text-xs uppercase tracking-widest">{f.label}</span>
                </div>
                <div className="mt-1.5 text-navy font-medium">{f.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <Button href={APPLY_URL} size="lg" target="_blank">
              Apply Now
            </Button>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20">
        <Container size="prose">
          <SectionHeading eyebrow="About us">
            Join one of Whistler&rsquo;s top-rated painting companies.
          </SectionHeading>
          <div className="space-y-4 text-ink leading-relaxed">
            <p>
              Alpenglow Painting is a professional, high-quality painting company based in{" "}
              <strong className="text-navy font-semibold">Whistler, BC</strong>. We take pride in delivering exceptional
              service, and our <strong className="text-navy font-semibold">5-star rating on Google</strong> reflects our
              commitment to craftsmanship, professionalism, and customer satisfaction. Our team values integrity, clear
              communication, punctuality, and attention to detail — we&rsquo;re here to set a higher standard in the
              painting industry.
            </p>
            <p>
              We believe in creating a positive, team-oriented work environment where hard work is rewarded and employees
              have opportunities to grow. If you&rsquo;re looking for a company that values its people, provides a
              structured and rewarding pay system, and gives you more time to enjoy the Sea to Sky lifestyle, this is the
              place for you.
            </p>
          </div>
        </Container>
      </section>

      {/* Why work with us */}
      <section className="py-16 md:py-20 bg-stone-light/30">
        <Container size="prose">
          <SectionHeading eyebrow="Why work with us">What we offer.</SectionHeading>
          <p className="text-ink leading-relaxed">
            At Alpenglow Painting, we believe that a satisfied team leads to satisfied clients. Here&rsquo;s what we offer:
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {WHY_US.map((b) => (
              <div key={b.title} className="border border-border rounded-sm bg-background p-5">
                <div className="font-medium text-navy">{b.title}</div>
                <p className="mt-1.5 text-ink text-[0.95rem] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-ink leading-relaxed">
            By joining Alpenglow Painting, you&rsquo;re not just taking a job; you&rsquo;re becoming part of a team that
            values quality, professionalism, and personal growth.
          </p>
        </Container>
      </section>

      {/* Responsibilities */}
      <section className="py-16 md:py-20">
        <Container size="prose">
          <SectionHeading eyebrow="Responsibilities">What the job involves.</SectionHeading>
          <h3 className="font-serif text-navy text-xl md:text-2xl">As a Junior Painter</h3>
          <DutyList items={JUNIOR_DUTIES} />
          <h3 className="mt-12 font-serif text-navy text-xl md:text-2xl">
            As a Crew Lead — additional responsibilities
          </h3>
          <DutyList items={LEAD_DUTIES} />
        </Container>
      </section>

      {/* What we look for */}
      <section className="py-16 md:py-20 bg-stone-light/30">
        <Container size="prose">
          <SectionHeading eyebrow="What we look for">Who thrives here.</SectionHeading>
          <p className="text-ink leading-relaxed mb-7">
            We&rsquo;re looking for hard-working, reliable, and detail-oriented individuals who:
          </p>
          <BulletList
            items={[
              "Have a positive, can-do attitude",
              "Are physically capable of working 10+ hours per day",
              "Work well in a team-oriented environment",
              "Are eager to learn and improve",
              "Pay attention to fine details",
              "Must have a smartphone for communication",
            ]}
          />
          <p className="mt-7 text-ink leading-relaxed">
            Previous painting or trades experience (construction, landscaping, window washing, etc.) is an asset but not
            required. Having a vehicle is a plus but not mandatory.
          </p>
        </Container>
      </section>

      {/* Compensation */}
      <section className="py-16 md:py-20">
        <Container size="prose">
          <SectionHeading eyebrow="Compensation">How the pay structure works.</SectionHeading>
          <div className="space-y-4 text-ink leading-relaxed">
            <p>
              At Alpenglow Painting, we believe hard work and efficiency should be rewarded. That&rsquo;s why we use a{" "}
              <strong className="text-navy font-semibold">performance-based pay system</strong>, which means you get paid
              based on the amount of work you complete — not just the hours you put in.
            </p>
            <p>
              Each job has a <strong className="text-navy font-semibold">budgeted time</strong> — an estimate of how long
              it should take to complete. Painters are paid a regular hourly wage for all hours worked, but if the project
              is finished faster than the budgeted time, a bonus is paid out to you from the additional profit.
            </p>
          </div>

          <h3 className="mt-10 font-serif text-navy text-xl md:text-2xl">Examples</h3>
          <DutyList items={PAY_EXAMPLES} />

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {PAY_RATES.map((tier) => (
              <div key={tier.role} className="border border-navy/15 bg-background p-6">
                <div className="font-serif text-2xl md:text-3xl text-navy tabular-nums">{tier.range}</div>
                <div className="mt-2 font-medium text-navy">{tier.role}</div>
                <div className="mt-1 text-sm text-muted">{tier.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-border rounded-sm bg-surface p-6">
            <div className="font-serif text-navy text-lg">
              &ldquo;If I finish something faster, do I get to go home early?&rdquo;
            </div>
            <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">
              No — you always work a full day. If you complete your budgeted work early, you move on to more work, so you
              keep increasing your earnings per hour. Faster, more efficient painters can make more while still working
              the same hours.
            </p>
          </div>

          <h3 className="mt-12 font-serif text-navy text-xl md:text-2xl">How you can earn more</h3>
          <DutyList items={EARN_MORE} />

          <h3 className="mt-12 font-serif text-navy text-xl md:text-2xl">Other bonuses and incentives</h3>
          <div className="mt-6">
            <BulletList items={BONUSES} />
          </div>
          <p className="mt-8 text-ink leading-relaxed">
            This system ensures that you&rsquo;re in control of your earnings — the more skilled and efficient you become,
            the more you can make.
          </p>
        </Container>
      </section>

      {/* Schedule & expectations */}
      <section className="py-16 md:py-20 bg-stone-light/30">
        <Container size="prose">
          <SectionHeading eyebrow="Schedule &amp; expectations">What to expect day to day.</SectionHeading>
          <DutyList items={EXPECTATIONS} />
        </Container>
      </section>

      {/* Hiring process */}
      <section className="py-16 md:py-20">
        <Container size="prose">
          <SectionHeading eyebrow="Hiring process">From application to first day.</SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2">
            {HIRING_STEPS.map(([n, label]) => (
              <div key={n} className="border-t border-navy/30 pt-4">
                <div className="font-serif text-navy text-sm tabular-nums">{n}</div>
                <div className="mt-1.5 text-ink">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Apply"
        heading={<>Ready to join the crew?</>}
        subline="Fill out the application form — takes about 5 minutes. We'll be in touch soon."
        primaryLabel="Apply Now"
        primaryHref={APPLY_URL}
        primaryNewTab
        secondaryLabel="Back to Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
