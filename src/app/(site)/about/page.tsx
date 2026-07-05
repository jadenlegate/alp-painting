import type { Metadata } from "next";
import { IS_FULL } from "@/lib/flags";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "About — Whistler Painting Company",
  description:
    "Alpenglow Painting is a Whistler-based residential and commercial painting company serving the Sea to Sky corridor. Owner-operated, locally owned, and focused on the experience — not just the paint.",
  alternates: { canonical: "/about" },
};

// About page — brief §7.5.
// Placeholder content for the founder story and team sections.
// Jaden provides his own story and team photos via Sanity once the CMS is live.

const VALUES = [
  {
    title: "We show up — and show up prepared.",
    body: "On time, in uniform, with everything needed to start work immediately. Showing up right is the first signal a client reads. We take it seriously.",
  },
  {
    title: "We communicate before there's a problem.",
    body: "If something changes — weather, a surface issue, a timeline shift — you hear from us before it affects you. Not after. Proactive communication is a skill most trades don't practice.",
  },
  {
    title: "We document everything.",
    body: "Every project closes with a written report. What we used, where we used it, how to maintain it. The kind of record that adds value to a home instead of leaving questions.",
  },
  {
    title: "We stand behind the work.",
    body: "Up to a 5-year warranty, honoured without friction. If something fails within the warranty period, we come back and fix it. That's the whole deal.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — flat editorial header, left-aligned like Portfolio/Testimonials
          so it lines up with the founder section below */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-stone-light/30">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">Our Story</Eyebrow>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              A painting company built around the experience — not just the paint.
            </h1>
          </div>
        </Container>
      </section>

      {/* Founder story */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-[1.3fr_1fr] items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">The founder</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                Jaden Legate, Owner
              </h2>
              <div className="mt-5 space-y-4 text-ink leading-relaxed">
                <p>
                  Alpenglow Painting&rsquo;s founder, Jaden, is a born-and-raised Whistler local. Combining operational experience from running a student painting franchise in Whistler with business acumen gained in the Commerce program at UBC&rsquo;s Sauder School of Business, he started Alpenglow Painting.
                </p>
                <p>
                  Jaden recognized a need to not only provide clients with a great finished product, but to provide an excellent overall experience throughout each project &mdash; from the first time you reach out to the final walkthrough.
                </p>
              </div>
            </div>
            <div className="mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-stone-light/40 ring-1 ring-navy/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Jaden Alpenglow Headshot-2.jpg"
                alt="Jaden Legate — owner of Alpenglow Painting"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">How we work</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Values stated as behaviors — not platitudes.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="border border-border rounded-sm bg-surface p-6 md:p-7">
                <h3 className="font-serif text-xl text-navy">{v.title}</h3>
                <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team — hidden in MVP mode until real crew photos exist. @/lib/flags */}
      {IS_FULL && (
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">The team</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              The people on your job site.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              Every painter on our crew is vetted, trained, and shows up like a professional. We don&rsquo;t rotate strangers through your home. You&rsquo;ll know who to expect before day one.
            </p>
          </div>
          {/* Team cards — to be populated from Sanity teamMember documents */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Jaden Legate", role: "Owner & Lead Painter", fact: "Whistler local, 10+ years painting" },
              { name: "Team Member", role: "Crew Lead", fact: "Add via Sanity CMS" },
              { name: "Team Member", role: "Painter", fact: "Add via Sanity CMS" },
            ].map((member, i) => (
              <div key={i} className="border border-border rounded-sm bg-surface overflow-hidden">
                <div className="aspect-square bg-stone-light/40" />
                <div className="p-4">
                  <div className="font-serif text-navy">{member.name}</div>
                  <div className="text-sm text-muted mt-0.5">{member.role}</div>
                  <div className="text-xs text-ink/70 mt-2 italic">{member.fact}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      )}

      <CtaBlock
        eyebrow="Work with us"
        heading="Want to work with us?"
        subline="Get a quote — or check out our careers page if you're a painter looking for a good crew."
        primaryLabel="Get a Quote"
        secondaryLabel="Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
