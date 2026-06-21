import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";
import { Building2, Users, Clock, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial, Strata & Hotel Painting — Whistler & Sea to Sky",
  description:
    "Commercial painting contractors for hotels, strata buildings, and property managers across Whistler, Pemberton, and Squamish. Flexible scheduling, $5M liability insurance, minimal disruption.",
  alternates: { canonical: "/services/commercial" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial, Strata & Hotel Painting",
  serviceType: "Commercial Painting",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Commercial, strata, and hotel painting across Whistler and the Sea to Sky corridor. Phased scheduling, resident and guest coordination, and $5M commercial general liability insurance.",
  url: "https://alpenglowpainting.ca/services/commercial",
};

const AUDIENCES = [
  {
    icon: Building2,
    title: "Strata councils & property managers",
    body: "Resident coordination, formal updates to the council, and a crew that shows up professional.",
  },
  {
    icon: Clock,
    title: "Hotels & commercial properties",
    body: "Phased by floor, wing, or time of day — night work available — so your revenue doesn't stop.",
  },
  {
    icon: Users,
    title: "Custom home builders",
    body: "Deadline-driven and spec-precise. We integrate with your build and hit our milestones.",
  },
  {
    icon: CalendarCheck,
    title: "Property developers",
    body: "Pre-sale work, suite turns, and common-area refreshes with documentation you can hand to buyers.",
  },
];

// Add a real photo to a step with image: "/working-images/commercial-step-phasing-whistler.jpg".
const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Pre-project walkthrough",
    body: "We meet the strata manager, property owner, or site contact to walk the building, confirm scope, and understand how the space is used. For occupied buildings, this is where we map out access, common-area constraints, and the parts of the property that can't go offline. The walkthrough is what lets us build a realistic plan instead of a guess.",
  },
  {
    n: "02",
    title: "Written scope & schedule",
    body: "You get a written scope and timeline — phases, dates, and milestones — not a vague 'a few weeks.' We document the spec, the areas covered, and the sequence so the council or owner knows exactly what's happening and when. Everyone's working from the same plan before a single drop cloth goes down.",
  },
  {
    n: "03",
    title: "Resident & guest notification",
    body: "Before each phase, we coordinate notification so residents and guests know what to expect — which areas, which days, and any temporary access changes. Clear, advance communication is the difference between a smooth project and a flood of complaints to the manager. We handle the messaging in whatever format your building uses.",
  },
  {
    n: "04",
    title: "Phased execution",
    body: "We work the building in phases — by floor, wing, or time of day — so it keeps running while we paint. Common areas stay accessible, hotel revenue keeps flowing, and residents keep their routines. Night and weekend work is available for high-traffic or guest-facing areas. The plan is built around your operations, not ours.",
  },
  {
    n: "05",
    title: "Daily cleanup & milestone updates",
    body: "The site is left clean and safe at the end of every shift, and you get progress updates at the agreed milestones — no chasing us for status. For multi-phase contracts, each phase closes with documentation so the council or owner always knows what's done and what's pending. Predictable communication is the whole point.",
  },
  {
    n: "06",
    title: "Walkthrough & deficiencies",
    body: "At substantial completion we walk the work with you and log any deficiencies formally, in writing. Items get addressed promptly — typically within five business days — so the painting line clears without lingering. Nothing is left to 'we'll get to it.' You sign off when the work meets the standard.",
  },
  {
    n: "07",
    title: "Project report & close-out",
    body: "Every commercial project closes with a written report: the exact products and colours used, the areas covered, and the warranty terms that apply. Insurance certificates are on file from the start. The documentation lives with the building, so the next manager or council inherits a clear record instead of a mystery.",
  },
];

const FAQS = [
  {
    q: "How do you handle occupied strata buildings?",
    a: "We plan the work in phases by floor or section, coordinate with the strata manager on resident notification, and keep common areas accessible at all times. We've done occupied multi-unit buildings and know how to minimize impact.",
  },
  {
    q: "How long does it take?",
    a: "It depends on the size and scope of the project, but we maintain a sizable crew and can scale up to meet tight deadlines when needed. We build a phased schedule into the proposal and coordinate closely so the work fits around your operations.",
  },
  {
    q: "Can you work outside regular hours for hotels?",
    a: "Yes. For guest-area work we can shift to early morning, evening, or weekend schedules. It costs more but is often worth it to avoid revenue disruption. We talk through the options on the site visit.",
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
    q: "What does your warranty look like for commercial work?",
    a: "The warranty matches the substrate. Interior painting: 5 years. Exterior solid finishes: 5 years. Exterior semi-transparent and translucent stains: 2 years. Same written terms as our residential work — we don't water it down for B2B.",
  },
  {
    q: "How do you handle deficiencies or callbacks?",
    a: "Formally, in writing, within 5 business days of substantial completion. If a deficiency shows up after that, contact us — we stand behind the work within the warranty period.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Commercial, Strata & Hotels"
        subline="Painting for buildings that can't stop running. Flexible scheduling, clear communication, and a crew that works to your timeline — not ours."
        imageUrl="/stock-images/whistler-village-spring-1-1024x676.jpg"
        imageAlt="Commercial building interior hallway freshly painted"
      >
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
      </Hero>

      {/* Who we work with */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Eyebrow className="mb-5">Who we work with</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Four B2B audiences. One approach.
            </h2>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2">
            {AUDIENCES.map((a) => (
              <article
                key={a.title}
                className="group relative border border-navy/15 bg-background p-7 md:p-9 transition-colors hover:border-navy/40"
              >
                <a.icon size={22} className="text-navy/50 mb-4" />
                <h3 className="font-serif text-navy text-[1.375rem] md:text-[1.5rem] leading-[1.15] tracking-tight font-medium">
                  {a.title}
                </h3>
                <p className="mt-3 text-ink leading-relaxed text-[0.95rem]">{a.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <WarrantyBanner
        title="Warranty Matched to the Substrate"
        body="Every commercial project is backed in writing — 5 years on interior and exterior solid finishes, 2 on exterior stains. The same terms as our residential work, documented in the project agreement."
      />

      <ProcessSteps
        eyebrow="How we do it"
        heading="Structure that keeps B2B projects on track."
        intro="The biggest frustration in commercial painting is miscommunication — unclear scope, missed milestones, nobody to call. We address that with structure from day one. Here's how a project runs, walkthrough to close-out."
        steps={PROCESS}
      />

      {/* Insurance callout */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-4 md:gap-5 md:grid-cols-3">
            {[
              { label: "$5M", sub: "Commercial general liability", note: "Certificates available on request" },
              { label: "WorkSafeBC", sub: "Full coverage", note: "Every worker, every site" },
              { label: "Licensed", sub: "Whistler Chamber · PCA member", note: "Insured & accountable" },
            ].map((item) => (
              <div key={item.label} className="border border-navy/15 bg-background p-7 md:p-8">
                <div className="font-serif text-navy text-[1.75rem] md:text-[2rem] leading-none tracking-tight font-medium">
                  {item.label}
                </div>
                <div className="mt-3 text-navy text-sm font-medium">{item.sub}</div>
                <div className="mt-1 text-sm text-muted">{item.note}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Commercial project questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Commercial inquiry"
        heading="Let's talk about your building."
        subline="Send us a brief description of the scope and we'll set up a site visit. No pressure, no vague quotes over the phone."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
