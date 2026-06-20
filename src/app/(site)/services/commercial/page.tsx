import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
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
  "WorkSafeBC coverage",
  "Resident & guest notification",
  "Warranty matched to substrate",
];

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
    a: "The warranty matches the substrate. Interior painting: 10 years. Exterior solid finishes: 5 years. Exterior semi-transparent and translucent stains: 2 years. Same written terms as our residential work — we don't water it down for B2B.",
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

      {/* Intro */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid gap-12 md:gap-20 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <Eyebrow className="mb-5">Commercial painting in the Sea to Sky</Eyebrow>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                B2B clients have different needs.<br />We plan around <em className="text-alpine not-italic font-medium">them</em>.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  Commercial painting isn&rsquo;t harder than residential —
                  it&rsquo;s different. Tighter scheduling, more formal
                  communication, and a higher cost of disruption.
                </p>
                <p>
                  Strata buildings, hotels, builders, developers — each runs on a
                  different rhythm. Our job is to fit into yours.
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
              <Eyebrow className="mb-5">What every commercial project includes</Eyebrow>
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
        body="Every commercial project is backed in writing — 10 years on interior painting, 5 on exterior solid finishes, 2 on exterior stains. The same terms as our residential work, documented in the project agreement."
      />

      {/* What's standard */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
            <div>
              <Eyebrow className="mb-5">Standard on every commercial project</Eyebrow>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.375rem] leading-[1.05] tracking-tight font-medium">
                Structure that keeps B2B projects on track.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                The biggest frustration in commercial painting is
                miscommunication — unclear scope, missed milestones, nobody to
                call. We address that with structure from day one.
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
