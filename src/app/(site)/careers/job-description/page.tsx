import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Painter Job Description — Alpenglow Painting, Whistler",
  description:
    "Full job description for Junior Painter and Crew Lead roles at Alpenglow Painting in Whistler, BC — responsibilities, pay structure, schedule, and hiring process.",
  alternates: { canonical: "/careers/job-description" },
};

// Web version of the painter job description (replaces the 2026 PDF, which
// now 301s here). Deliberately document-styled — one compact sheet in the
// site's fonts/colours rather than a long marketing page — and print-friendly
// (see the @media print rules in globals.css).
// Keep pay figures in sync with PAY_TIERS on /careers.

const APPLY_URL =
  "https://forms.clickup.com/9017949262/f/8cr5z2e-737/2CCGPUOLREF04NSIZ2";

const WHY_US: readonly (readonly [string, string])[] = [
  ["Fast-paced, fun, positive work environment", "Join a dynamic and enthusiastic crew that values teamwork and camaraderie."],
  ["Competitive wages", "Our performance-based pay structure ensures that your hard work directly translates into higher earnings."],
  ["Bonuses and incentives", "We reward efficiency and quality with additional financial incentives."],
  ["Opportunities to grow within the company", "Demonstrate your capabilities, and you can advance to roles with greater responsibility and pay."],
  ["Work-hard, play-hard culture", "Our 4-day workweek allows you to dedicate time to your passions and enjoy a balanced lifestyle."],
  ["Team appreciation events", "We regularly host events to show our gratitude for our team's hard work and dedication."],
  ["Comprehensive training", "Even if you're new to painting, we provide training to ensure you have the skills needed to excel."],
  ["Safety first", "Your safety is our priority. We provide all necessary protective equipment and training to ensure a safe working environment."],
];

const JUNIOR_DUTIES: readonly (readonly [string, string])[] = [
  ["Surface preparation", "Prepare surfaces for painting by cleaning, scraping, sanding, and priming as necessary to ensure proper adhesion."],
  ["Application of finishes", "Apply paint, stains, and other finishes to various surfaces using brushes, rollers, and spraying equipment, ensuring an even and professional coat."],
  ["Filling and caulking", "Fill and caulk holes and cracks to achieve a smooth and seamless finish."],
  ["Equipment use and maintenance", "Use and maintain painting equipment and tools, including brushes, rollers, sprayers, ladders, and scaffolding, ensuring they are in good working condition."],
  ["Safety compliance", "Follow safety protocols and use protective equipment to ensure a safe working environment for yourself and your team members."],
  ["Work area maintenance", "Maintain a clean and organized work area, ensuring that all materials are stored properly and that the site is left clean at the end of each day."],
  ["Team communication", "Communicate effectively with team members to complete tasks efficiently and to company standards."],
  ["Client interaction", "Interact politely and professionally with clients to address their painting needs and ensure their satisfaction."],
  ["Professional appearance", "Maintain a clean appearance and positive attitude, reflecting the professionalism and quality standards of Alpenglow Painting."],
];

const LEAD_DUTIES: readonly (readonly [string, string])[] = [
  ["Team coordination", "Assist in organizing and directing a small crew of painters, ensuring tasks are completed efficiently and to Alpenglow Painting's quality standards."],
  ["On-site leadership", "Act as the primary lead on-site when the production manager is not present, helping keep the team focused and productive."],
  ["Surface preparation oversight", "Ensure surfaces are properly prepped, including cleaning, scraping, sanding, caulking, and priming, before paint application."],
  ["Quality assurance", "Regularly check completed work to ensure it meets company standards and make minor corrections as needed."],
  ["Safety awareness", "Encourage safe work habits among the crew and ensure basic safety protocols are followed (e.g. proper ladder use, protective equipment)."],
  ["Communication with management", "Relay important updates to the production manager, such as job progress, material needs, or any issues that arise."],
  ["Equipment & site maintenance", "Help maintain a clean and organized job site, ensuring tools and materials are properly stored at the end of each day."],
];

const LOOKING_FOR = [
  "Have a positive, can-do attitude",
  "Are physically capable of working 10+ hours per day",
  "Work well in a team-oriented environment",
  "Are eager to learn and improve",
  "Pay attention to fine details",
  "Must have a smartphone for communication",
];

const PAY_EXAMPLES: readonly (readonly [string, string])[] = [
  ["Finished on budget", "A project budgeted at 100 hours is completed in 100 hours — every painter is paid their regular hourly wage."],
  ["Finished under budget", "The same project is completed in 90 hours — every painter is paid their regular hourly wage, plus a share of the additional profit from the 10 hours saved, split across the crew based on time each person spent on the project."],
  ["Finished behind schedule", "The project takes 110 hours — every painter is still paid their regular hourly wage."],
];

const PAY_RATES: readonly (readonly [string, string])[] = [
  ["Junior Painter starting pay", "$26–28/hour"],
  ["Crew Lead starting pay", "$28–33/hour"],
  ["Top performers", "$30–40+/hour by improving speed and skill"],
];

const EARN_MORE: readonly (readonly [string, string])[] = [
  ["Work efficiently", "The faster and better you paint, the more you earn per hour."],
  ["Follow instructions carefully", "Doing the job right the first time avoids rework, keeping your pay high."],
  ["Improve your skills", "As you get better, you'll naturally become faster and make more money."],
  ["Advance to crew lead", "If you take on more responsibility and leadership, you can earn even higher rates."],
];

const BONUSES = [
  "Retention bonuses paid out at 4, 8, and 12 months",
  "$50 bonus per 5-star Google review (if you worked on that project)",
  "$150 bonus for referring a booked project",
  "$150 bonus for referring another painter (who stays until the end of the painting season)",
  "And more…",
];

const EXPECTATIONS: readonly (readonly [string, string])[] = [
  ["Work schedule", "We operate on a 4-day workweek (usually Monday–Thursday, 8 AM – 6 PM). This gives you a 3-day weekend every week, allowing for a better work-life balance. Occasionally, if a job has a tight deadline, we may ask you to work on a Friday, but this is rare (about once per month)."],
  ["Punctuality & reliability", "Being on time and ready to work at the start of the day is essential. Our team relies on each other to stay on schedule and complete projects efficiently."],
  ["Uniform requirement", "We provide a branded t-shirt, hoodie, and hat, as well as white painter pants and shorts. This uniform is required on all jobsites to maintain a professional company image."],
  ["Work environment & physical requirements", "This is a physically demanding job, requiring you to be on your feet for long periods, using ladders, and lifting paint buckets and equipment as needed. Lots of our work is outdoors, so we adjust schedules when necessary for extreme weather conditions (e.g. starting earlier on hot days, sometimes not working when it's pouring rain)."],
  ["Teamwork & professionalism", "We take pride in delivering high-quality work and maintaining respectful, professional interactions with both clients and team members. Communication, accountability, and a strong work ethic are key to success in this role."],
];

const HIRING_STEPS = [
  "Complete the job application form.",
  "Attend an online video interview with our hiring team.",
  "Get hired.",
  "Complete our online training before starting on-site.",
  "Start working and get hands-on training on the job.",
];

/* — Document primitives: tight spacing, site fonts, PDF-like rhythm — */

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="doc-h2 font-serif text-navy text-[1.25rem] md:text-[1.375rem] leading-snug mt-8 mb-2.5 pb-1.5 border-b border-alpine/40">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-navy text-[1.0625rem] mt-5 mb-1.5">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-ink text-[0.9rem] leading-[1.6]">{children}</p>;
}

/** Bulleted "**Term** — detail" list, the PDF's core pattern. */
function TermList({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <ul className="mt-2.5 space-y-1.5">
      {items.map(([term, detail]) => (
        <li key={term} className="relative pl-4 text-ink text-[0.9rem] leading-[1.6]">
          <span className="absolute left-0 top-[0.55em] w-1 h-1 rounded-full bg-alpine" aria-hidden />
          <span className="font-semibold text-navy">{term}</span>
          {": "}
          {detail}
        </li>
      ))}
    </ul>
  );
}

function PlainList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-2.5 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="relative pl-4 text-ink text-[0.9rem] leading-[1.6]">
          <span className="absolute left-0 top-[0.55em] w-1 h-1 rounded-full bg-alpine" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function JobDescriptionPage() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-stone-light/40">
      <Container size="prose">
        <article className="doc-sheet bg-background border border-border rounded-sm px-7 py-9 md:px-12 md:py-12 shadow-[0_1px_3px_rgba(21,35,74,0.06)]">
          {/* Letterhead */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Alpenglow Logo Blue.svg" alt="Alpenglow Painting" className="h-9 w-auto" />

          <h1 className="mt-7 font-serif text-navy text-[1.625rem] md:text-[2rem] leading-tight">
            Junior Painter &amp; Crew Lead
          </h1>

          <dl className="mt-4 space-y-1 text-[0.9rem] leading-[1.6]">
            {[
              ["Location", "Whistler, BC"],
              ["Employment type", "Full-time, seasonal"],
              ["Compensation", "$26–40+/hour (performance-based pay)"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-wrap gap-x-2">
                <dt className="font-semibold text-navy">{label}:</dt>
                <dd className="text-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <H2>Join one of Whistler&rsquo;s top-rated painting companies</H2>
          <P>
            Alpenglow Painting is a professional, high-quality painting company based in{" "}
            <strong className="font-semibold text-navy">Whistler, BC</strong>. We take pride in delivering exceptional
            service, and our <strong className="font-semibold text-navy">5-star rating on Google</strong> reflects our
            commitment to craftsmanship, professionalism, and customer satisfaction. Our team values integrity, clear
            communication, punctuality, and attention to detail — we&rsquo;re here to set a higher standard in the
            painting industry.
          </P>
          <P>
            We believe in creating a positive, team-oriented work environment where hard work is rewarded and employees
            have opportunities to grow. If you&rsquo;re looking for a company that values its people, provides a
            structured and rewarding pay system, and gives you more time to enjoy the Sea to Sky lifestyle, this is the
            place for you.
          </P>

          <H2>Why work with us?</H2>
          <P>At Alpenglow Painting, we believe that a satisfied team leads to satisfied clients. Here&rsquo;s what we offer:</P>
          <TermList items={WHY_US} />
          <P>
            By joining Alpenglow Painting, you&rsquo;re not just taking a job; you&rsquo;re becoming part of a team that
            values quality, professionalism, and personal growth.
          </P>

          <H2>Job responsibilities</H2>
          <H3>As a Junior Painter</H3>
          <TermList items={JUNIOR_DUTIES} />
          <H3>As a Crew Lead — additional responsibilities</H3>
          <TermList items={LEAD_DUTIES} />

          <H2>What we look for</H2>
          <P>We&rsquo;re looking for hard-working, reliable, and detail-oriented individuals who:</P>
          <PlainList items={LOOKING_FOR} />
          <P>
            Previous painting or trades experience (construction, landscaping, window washing, etc.) is an asset but not
            required. Having a vehicle is a plus but not mandatory.
          </P>

          <H2>Compensation and pay structure</H2>
          <P>
            At Alpenglow Painting, we believe hard work and efficiency should be rewarded. That&rsquo;s why we use a{" "}
            <strong className="font-semibold text-navy">performance-based pay system</strong>, which means you get paid
            based on the amount of work you complete — not just the hours you put in.
          </P>
          <H3>How it works</H3>
          <P>
            Each job has a <strong className="font-semibold text-navy">budgeted time</strong> — an estimate of how long it
            should take to complete. Painters are paid a regular hourly wage for all hours worked, but if the project is
            finished faster than the budgeted time, a bonus is paid out to you from the additional profit.
          </P>
          <TermList items={PAY_EXAMPLES} />
          <P>
            This system rewards painters who work hard, follow instructions, and become more efficient — so you can earn{" "}
            <strong className="font-semibold text-navy">$26–40+/hour</strong> depending on your speed and skill.
            Productivity is regularly assessed and feedback is given to help you improve as you go.
          </P>

          <H3>&ldquo;If I finish something faster, do I get to go home early?&rdquo;</H3>
          <P>
            No — you always work a full day. If you complete your budgeted work early, you move on to more work, so you
            keep increasing your earnings per hour. Faster, more efficient painters can make more while still working the
            same hours.
          </P>

          <H3>How you can earn more</H3>
          <TermList items={EARN_MORE} />

          <H3>Compensation</H3>
          <TermList items={PAY_RATES} />

          <H3>Other bonuses and incentives</H3>
          <PlainList items={BONUSES} />
          <P>
            This system ensures that you&rsquo;re in control of your earnings — the more skilled and efficient you become,
            the more you can make.
          </P>

          <H2>Schedule &amp; work expectations</H2>
          <TermList items={EXPECTATIONS} />

          <H2>Hiring process</H2>
          <ol className="mt-2.5 space-y-1.5">
            {HIRING_STEPS.map((step, i) => (
              <li key={step} className="relative pl-6 text-ink text-[0.9rem] leading-[1.6]">
                <span className="absolute left-0 top-0 font-semibold text-alpine tabular-nums">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>

          {/* Document footer */}
          <div className="mt-10 pt-4 border-t border-border flex flex-wrap gap-x-3 gap-y-1 text-[0.8rem] text-muted">
            <span>alpenglowpainting.ca</span>
            <span aria-hidden>|</span>
            <span>{SITE.phone}</span>
            <span aria-hidden>|</span>
            <span>{SITE.email}</span>
          </div>
        </article>

        {/* Actions — not part of the document, hidden when printing */}
        <div className="print-hide mt-8 flex flex-wrap items-center gap-4">
          <Button href={APPLY_URL} size="lg" target="_blank">
            Apply Now
          </Button>
          <Button href="/careers" variant="text">
            Back to Careers
          </Button>
        </div>
      </Container>
    </section>
  );
}
