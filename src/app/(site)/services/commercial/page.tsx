import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SITE } from "@/lib/site";
import { Check, Building2, Users, Clock, CalendarCheck, Phone } from "lucide-react";

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

const PILLARS = [
  "Phased to keep buildings running",
  "Strata coordination included",
  "$5M liability insurance",
  "WorkSafeBC coverage on every worker",
  "Resident & guest notification",
  "Warranty matched to substrate",
];

const AUDIENCES = [
  {
    n: "01",
    icon: Building2,
    title: "Strata councils & property managers.",
    body: "Multi-unit projects require coordination with residents, clear communication to the council, and a crew that shows up professional. We've done strata work and know what it actually involves — scheduling around moves, keeping common areas accessible, formal progress updates at council meetings.",
  },
  {
    n: "02",
    icon: Clock,
    title: "Hotels & commercial properties.",
    body: "Your revenue doesn't stop for a paint job. We work around your operations — phased by floor, by wing, or by time of day. Night work is available for high-priority guest areas. We've delivered work in occupied hotel buildings without disrupting check-ins or housekeeping rhythms.",
  },
  {
    n: "03",
    icon: Users,
    title: "Custom home builders.",
    body: "Deadline-driven, specification-precise, no drama. We integrate with your build schedule, hit our milestones, and communicate with your site super directly. Several Sea-to-Sky builders use us as their go-to painting partner because we don't slip and we don't surprise them.",
  },
  {
    n: "04",
    icon: CalendarCheck,
    title: "Property developers.",
    body: "Pre-sale condition work, suite turns, common area refreshes. Fast turnarounds, consistent quality across multiple units, and documentation you can hand to buyers. Multi-building and multi-phase contracts handled with progress documentation at every close.",
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
    q: "What does your warranty look like for commercial work?",
    a: "The warranty matches the substrate. Interior painting: 10 years. Exterior solid finishes: 5 years. Exterior semi-transparent and translucent stains: 2 years. Same written terms as our residential work — we don't water it down for B2B.",
  },
  {
    q: "How do you handle deficiencies or callbacks?",
    a: "Formally, in writing, within 5 business days of substantial completion. If a deficiency shows up after that, contact us — we stand behind the work within the warranty period.",
  },
  {
    q: "Do you work directly with general contractors?",
    a: "Yes. For new builds and major renovations we integrate with the GC's schedule, hit our painting milestones, and provide invoicing and progress updates in whatever format the GC's accounting needs. We've worked under several Sea-to-Sky builders.",
  },
  {
    q: "Can you handle multi-building or multi-phase contracts?",
    a: "Yes. We've delivered phased multi-building work for strata clients and property developers, with documentation handed back at each phase close so the client always knows what's been completed and what's pending.",
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

      {/* Intro */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid gap-12 md:gap-20 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                  Commercial painting in the Sea to Sky
                </span>
              </div>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                B2B clients have different needs.<br />We plan around <em className="text-alpine not-italic font-medium">them</em>.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Commercial painting isn&rsquo;t harder than residential —
                  it&rsquo;s different. The scheduling is tighter, the
                  communication has to be more formal, and the cost of
                  disruption is higher. We&rsquo;ve done the work to understand
                  what that means in practice.
                </p>
                <p>
                  Strata buildings, hotels, builders, developers — each
                  one runs on a different rhythm. Our job is to fit into yours.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href="/contact" size="lg">Get in Touch</Button>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-navy text-sm font-medium hover:text-alpine transition-colors"
                >
                  <Phone size={15} />
                  {SITE.phone}
                </a>
              </div>
            </div>

            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium mb-5">
                What every commercial project includes
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {PILLARS.map((p) => (
                  <div
                    key={p}
                    className="border border-navy/15 bg-background p-5 md:p-6 hover:border-navy/35 transition-colors"
                  >
                    <div className="h-px w-7 bg-alpine mb-3.5" aria-hidden />
                    <div className="font-serif text-navy text-[1rem] md:text-[1.0625rem] leading-[1.25] tracking-tight">
                      {p}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who we work with — audience cards */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                Who we work with
              </span>
            </div>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              Four B2B audiences. One approach.
            </h2>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2">
            {AUDIENCES.map((a) => (
              <article
                key={a.n}
                className="group relative border border-navy/15 bg-background p-7 md:p-9 transition-colors hover:border-navy/40"
              >
                <a.icon size={22} className="text-navy/50 mb-4" />
                <h3 className="font-serif text-navy text-[1.375rem] md:text-[1.5rem] leading-[1.15] tracking-tight font-medium">
                  {a.title}
                </h3>
                <p className="mt-4 text-ink leading-relaxed text-[0.95rem]">
                  {a.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* What's standard */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Standard on every commercial project</span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.375rem] leading-[1.05] tracking-tight font-medium">
                Structure that keeps B2B projects on track.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                The biggest frustration in commercial painting is
                miscommunication. Unclear scope, missed milestones, nobody to
                call when something&rsquo;s wrong. We address that with
                structure from day one.
              </p>
              <div className="mt-8">
                <Button href="/process" variant="secondary">See our full process</Button>
              </div>
            </div>
            <ul className="space-y-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-4 border-l-2 border-alpine pl-5 py-1">
                  <Check size={18} className="text-navy mt-0.5 flex-shrink-0" />
                  <span className="text-ink leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Insurance callout */}
      <section className="py-12 md:py-16 bg-stone-light/50">
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

      <section className="py-16 md:py-24">
        <Container size="prose">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-alpine" aria-hidden />
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Frequently asked</span>
          </div>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Commercial project questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        years="10"
        heading="Years on interior. Five on exterior solid. Two on exterior stain."
        body="Written warranty on every commercial project, matched to the substrate. Same terms as our residential work — we don't water it down for B2B. Documented in the project agreement."
      />

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
