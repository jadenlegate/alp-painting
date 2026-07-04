import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IS_FULL } from "@/lib/flags";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { ProcessSteps, type ProcessStep } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Log Home Restoration — Whistler, Pemberton & Squamish",
  description:
    "Log home restoration in the Sea to Sky: media blasting, borate treatment, checking and chinking repair, and penetrating log finishes. The full process, done properly.",
  alternates: { canonical: "/services/log-restoration" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Log Home Restoration",
  serviceType: "Log Home Restoration",
  provider: { "@type": "LocalBusiness", name: "Alpenglow Painting", "@id": "https://alpenglowpainting.ca/#business" },
  areaServed: [
    { "@type": "City", name: "Whistler" },
    { "@type": "City", name: "Pemberton" },
    { "@type": "City", name: "Squamish" },
  ],
  description:
    "Log home restoration across Whistler and the Sea to Sky: media blasting, borate treatment, checking and chinking repair, and penetrating log finishes.",
  url: "https://alpenglowpainting.ca/services/log-restoration",
};

const PROCESS: ProcessStep[] = [
  {
    n: "01",
    title: "Inspection & moisture assessment",
    body: "We read the building first — where the finish is failing and why, moisture content, soft spots and rot, corner notches, and the checks (cracks) that open as logs dry. The plan comes from what the logs need, not a standard package.",
  },
  {
    n: "02",
    title: "Media blasting back to bare wood",
    body: "Crushed-glass or corn-cob blasting strips the failing finish off the round profile and out of the checks and chinking lines a sander can't reach — without gouging the soft growth. We hand-sand where blasting isn't appropriate.",
  },
  {
    n: "03",
    title: "Borate preservative treatment",
    body: "Bare wood is the one chance to treat the logs against rot and insects. We apply a borate preservative that penetrates and stays active — cheap insurance that's impossible to add once the finish is on.",
  },
  {
    n: "04",
    title: "Checking & chinking repair",
    body: "Upward-facing checks collect water and rot a log from the inside; we fill them with a flexible sealant so they shed water and still move. Failed chinking and corner caulking is cut out and replaced with proper log-home sealant.",
  },
  {
    n: "05",
    title: "Log repair & spot replacement",
    body: "Where rot has set in but the log is sound behind it, we consolidate and rebuild with structural epoxy. Where a section is gone, we let in a matched piece. If it's structural, we bring in a log builder.",
  },
  {
    n: "06",
    title: "Staining & finishing",
    body: "We back-brush a penetrating log finish into the wood so it bonds rather than sits on top, with extra build on the sun-punished south and west walls. The grain stays visible; the protection goes deep.",
  },
  {
    n: "07",
    title: "Maintenance coat schedule",
    body: "Log finishes are a system you maintain. Your report includes a re-coat window — usually a maintenance coat every 3–5 years on exposed walls — which costs a fraction of a full strip-and-restore.",
  },
];

const RELATED_PROJECTS: Project[] = [
  {
    slug: "whistler-stained-cedar-exterior",
    title: "Stained cedar exterior — full refresh",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "/stock-images/portfolio/stained-cedar-exterior-whistler.jpg",
  },
  {
    slug: "whistler-chalet-exterior",
    title: "Whistler chalet — full exterior",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "/stock-images/portfolio/chalet-bay-window-after-whistler.jpg",
  },
  {
    slug: "whistler-cedar-fascia",
    title: "Cedar fascia and soffit restoration",
    location: "Whistler",
    serviceTags: ["Wood restoration"],
    coverUrl: "/stock-images/portfolio/cedar-fascia-finished-whistler.jpg",
  },
];

const FAQS = [
  {
    q: "Do you use sanding or blasting to remove existing finish?",
    a: "For most projects, grinding and sanding is our preferred method. Media blasting is another option. We'll discuss pros and cons with you at the site visit.",
  },
  {
    q: "What finishes do you use on logs?",
    a: "We use log-specific penetrating systems and flexible sealants built for round profiles and seasonal movement, including Sico ProLuxe (formerly Sikkens), Sansin, Sashco, and Perma-Chink, among other select products. We'll discuss coating systems with you at the site visit.",
  },
  {
    q: "Can you fix rotted logs without replacing the whole log?",
    a: "Often, yes. If the log is sound behind the damage, we consolidate and rebuild the rotted area with structural epoxy. If a section is too far gone or the rot is causing structural issues, we'll need to bring in a specialized carpentry service.",
  },
  {
    q: "How often does a log home need recoating?",
    a: "Plan on a maintenance coat every 3–5 years on sun- and weather-exposed walls, and longer on protected sides. We'll provide you with recoating recommendations so you can stay on top of maintenance and avoid having to start fresh again if it gets left too long.",
  },
];

export default function LogRestorationPage() {
  if (!IS_FULL) notFound(); // MVP: page hidden until launch-ready
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero
        eyebrow="Services"
        headline="Log Restoration"
        subline="Media blasting, borate treatment, chinking, and penetrating finishes — the full log restoration process, done in the right order."
        imageUrl="/stock-images/portfolio/dark-cedar-chalet-whistler.jpg"
        imageAlt="Dark-stained log and cedar chalet exterior in Whistler"
      >
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
      </Hero>

      <ProcessSteps
        eyebrow="The process, step by step"
        heading="How we restore a log home."
        intro="A log home is a system — bare-wood prep, preservative, sealing, finish, and a maintenance plan, not just the coat you can see. Order matters more here than on almost any surface; skip a step and the finish fails early. Here's the full sequence."
        steps={PROCESS}
      />

      <WarrantyBanner
        title="2-Year Log Finish Warranty"
        body="Penetrating log and semi-transparent finishes are backed for 2 years, matched to how they wear in mountain sun. The maintenance-coat schedule in your project report is what takes the finish the distance."
      />

      {/* Related — hidden in MVP mode, returning with tweaks in V2 */}
      {IS_FULL && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <Eyebrow className="mb-5">Recent wood & log work</Eyebrow>
                <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Wood we&rsquo;ve brought back.</h2>
              </div>
              <Button href="/portfolio" variant="text">See all work →</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {RELATED_PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container size="prose">
          <Eyebrow className="mb-5">Frequently asked</Eyebrow>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Log restoration questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <CtaBlock
        eyebrow="Log specialists"
        heading="Got a log home that needs work?"
        subline="We'll assess the logs on-site and lay out exactly what the restoration needs — and what it doesn't."
      />
    </>
  );
}
