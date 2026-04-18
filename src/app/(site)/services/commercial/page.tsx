import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Check, Building2, Users, Clock, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial, Strata & Hotel Painting in Whistler",
  description:
    "Commercial painting for hotels, strata buildings, and property managers across Whistler and the Sea to Sky. Flexible scheduling, minimal disruption.",
};

const AUDIENCES = [
  {
    icon: Building2,
    title: "Strata councils & property managers",
    body: "Multi-unit projects require coordination with residents, clear communication to the council, and a crew that shows up professional. We've done it and know what strata work actually involves.",
  },
  {
    icon: Clock,
    title: "Hotels & commercial properties",
    body: "Your revenue doesn't stop for a paint job. We work around your operations — phased by floor, by wing, or by time of day. Night work available for high-priority areas.",
  },
  {
    icon: Users,
    title: "Custom home builders",
    body: "Deadline-driven, specification-precise, no drama. We integrate with your build schedule, hit our milestones, and communicate with your site super directly.",
  },
  {
    icon: CalendarCheck,
    title: "Property developers",
    body: "Pre-sale condition work, suite turns, common area refreshes. Fast turnarounds, consistent quality across multiple units, and documentation you can hand to buyers.",
  },
];

const INCLUDED = [
  "Pre-project walkthrough with strata manager or property owner",
  "Written scope and timeline — no vague 'a few weeks'",
  "Resident or guest notification coordination",
  "Phased scheduling to keep areas of the building functional",
  "Daily cleanup to professional standard",
  "Progress updates at agreed milestones",
  "Project report at close — products, areas covered, warranty terms",
];

const FAQS = [
  {
    q: "How do you handle occupied strata buildings?",
    a: "We plan the work in phases by floor or section, coordinate with the strata manager on resident notification, and keep common areas accessible at all times. We've done occupied multi-unit buildings and know how to minimize impact.",
  },
  {
    q: "Can you work outside regular hours for hotels?",
    a: "Yes. For guest-area work, we can shift to early morning, evening, or weekend schedules. This costs more but is often worth it to avoid revenue disruption. We talk through the options on the site visit.",
  },
  {
    q: "Do you provide references for commercial work?",
    a: "Yes. We can connect you with property managers and strata councils we've worked with. Commercial clients tend to want to speak directly to someone who's hired us before — we're happy to facilitate that.",
  },
  {
    q: "What's your insurance and WCB status for commercial sites?",
    a: "$5M commercial general liability insurance, full WorkSafeBC coverage for all workers. We can provide certificates of insurance for your records before the project starts.",
  },
  {
    q: "How do you handle deficiencies or callbacks?",
    a: "Formally, in writing, within 5 business days of substantial completion. If a deficiency shows up after that, contact us — we stand behind the work within the warranty period.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        headline="Commercial, Strata & Hotels"
        subline="Painting for buildings that can't stop running. Flexible scheduling, clear communication, and a crew that works to your timeline — not ours."
        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
        imageAlt="Commercial building interior hallway freshly painted"
      >
        <Button href="/contact" size="lg" className="bg-background !text-navy hover:bg-stone-light">
          Get a Quote
        </Button>
        <Button href="/contact" variant="text" className="!text-background">
          Request a site visit →
        </Button>
      </Hero>

      {/* Who we work with */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-widest text-navy mb-4">Who we work with</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              B2B clients have different needs. We plan around them.
            </h2>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Commercial painting isn't harder than residential — it's different. The scheduling is tighter, the communication has to be more formal, and the cost of disruption is higher. We've done the work to understand what that means in practice.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="border border-border rounded-sm bg-surface p-6 md:p-7">
                <a.icon size={22} className="text-navy" />
                <h3 className="mt-4 font-serif text-xl text-navy">{a.title}</h3>
                <p className="mt-2 text-ink leading-relaxed text-[0.95rem]">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 bg-stone-light/30">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
            <div>
              <div className="text-xs uppercase tracking-widest text-navy mb-4">What's standard on every commercial project</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.25rem] leading-[1.15]">
                The process that keeps B2B projects on track.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                The biggest frustration in commercial painting is miscommunication. Unclear scope, missed milestones, nobody to call when something's wrong. We address that with structure from day one.
              </p>
              <div className="mt-8">
                <Button href="/process" variant="secondary">See our full process</Button>
              </div>
            </div>
            <ul className="space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="text-navy mt-0.5 flex-shrink-0" />
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Insurance callout */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "$5M liability insurance", sub: "Certificates available on request" },
              { label: "Full WorkSafeBC coverage", sub: "All workers on every site" },
              { label: "Licensed contractor", sub: "Whistler Chamber · PCA member" },
            ].map((item) => (
              <div key={item.label} className="border border-border rounded-sm bg-surface p-6 text-center">
                <div className="font-serif text-xl text-navy">{item.label}</div>
                <div className="mt-1 text-sm text-muted">{item.sub}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container size="prose">
          <div className="text-xs uppercase tracking-widest text-navy mb-3">Frequently asked</div>
          <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15] mb-8">Commercial project questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        heading="Let's talk about your building."
        subline="Send us a brief description of the scope and we'll set up a site visit. No pressure, no vague quotes over the phone."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
