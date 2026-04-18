import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About Alpenglow Painting",
  description:
    "Alpenglow Painting is a Whistler-based residential and commercial painting company. Owner-operated, locally owned, and focused on the experience — not just the paint.",
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
    body: "Up to 10-year warranty, honored without friction. If something fails within the warranty period, we come back and fix it. That's the whole deal.",
  },
];

const MEMBERSHIPS = [
  { name: "Whistler Chamber of Commerce", role: "Member" },
  { name: "Painting Contractors Association (PCA)", role: "Member" },
  { name: "AMPP", role: "Member" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=85"
            alt="Alpenglow Painting crew at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
        </div>
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-background/70 mb-4">Our story</div>
            <h1 className="font-serif text-background text-[2rem] md:text-[3rem] leading-[1.1]">
              A painting company built around the experience — not just the paint.
            </h1>
          </div>
        </Container>
      </section>

      {/* Founder story — placeholder for Jaden's content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_1fr] items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">The founder</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                Jaden Legate, Owner
              </h2>
              {/* Jaden: replace this placeholder with your actual story via Sanity */}
              <div className="mt-5 space-y-4 text-ink leading-relaxed">
                <p>
                  Alpenglow Painting started because I kept seeing the same thing: homeowners who had been through enough bad trades experiences that they approached every new contractor with their guard up. They weren&rsquo;t wrong to. The industry earned that skepticism.
                </p>
                <p>
                  I started Alpenglow to build something different — a company where the process itself is a reason to hire us, not just the finished wall. Clear communication, professional crews, documentation at every step.
                </p>
                <p>
                  We&rsquo;re based in Whistler and work across the Sea to Sky corridor. Seasonal operation, May through October, so we can do the work properly instead of rushing a calendar year.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-stone-light/40">
              {/* Replace with Jaden's portrait photo via Sanity */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Jaden Legate — owner of Alpenglow Painting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">How we work</div>
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

      {/* Team — placeholder, populate via Sanity */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl mb-10 md:mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">The team</div>
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

      {/* Community */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Community</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                Locally owned. Locally invested.
              </h2>
              <p className="mt-4 text-ink leading-relaxed">
                We live and work in the Sea to Sky. The clients we serve are our neighbors. That matters to how we operate — we&rsquo;re not a franchise or a regional chain. Every job has our name on it.
              </p>
              <p className="mt-3 text-ink leading-relaxed">
                We donate 1% of annual profits to local environmental and community organizations. It&rsquo;s a small thing — we mention it once, not loudly.
              </p>
              <div className="mt-6">
                <Button href="/giving-back" variant="text">Learn more →</Button>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Memberships</div>
              <div className="space-y-3">
                {MEMBERSHIPS.map((m) => (
                  <div key={m.name} className="flex items-center justify-between border border-border rounded-sm bg-surface px-5 py-3.5">
                    <span className="text-ink">{m.name}</span>
                    <span className="text-xs text-muted">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="Want to work with us?"
        subline="Get a quote — or check out our careers page if you're a painter looking for a good crew."
        primaryLabel="Get a Quote"
        secondaryLabel="Join the team"
        secondaryHref="/careers"
      />
    </>
  );
}
