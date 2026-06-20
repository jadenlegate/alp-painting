import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";

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

const PILLARS = [
  "Media blasting or sanding",
  "Borate preservative treatment",
  "Checking & chinking repair",
  "Penetrating log finishes",
  "Back-brushed, multiple coats",
  "Written maintenance schedule",
];

const PROCESS = [
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

const APPROACH = [
  {
    title: "Logs aren't siding.",
    body: "Round profiles, exposed end grain, settling, and checks make a log home behave nothing like a clad wall. The methods are built for logs.",
  },
  {
    title: "Blasting where it counts.",
    body: "Blasting strips the full round profile and the checks and chinking lines without flat-spotting — the difference between a finish that bonds and one that lifts.",
  },
  {
    title: "The finish is a system.",
    body: "Borate, then a penetrating stain, then a maintenance coat on schedule — each layer does a job the others can't.",
  },
  {
    title: "Water management is everything.",
    body: "Most log failure is water finding its way in. We chase that down during restoration, because no finish outruns trapped moisture.",
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
    q: "Blasting or sanding — which do you use?",
    a: "Media blasting (crushed glass or corn cob) on most full restorations — it strips the failing finish off the round profile and out of the checks and chinking lines a sander can't reach, without flattening the wood. We hand-sand smaller areas and interior logs.",
  },
  {
    q: "What finishes do you use on logs?",
    a: "Log-specific penetrating systems and flexible sealants built for round profiles and seasonal movement — Sansin, Sikkens Cetol Log & Siding, Sashco, and Perma-Chink — not general exterior paint. We spec the system to your logs and exposure and document it for the maintenance coats.",
  },
  {
    q: "What is chinking, and do I need it?",
    a: "Chinking is the flexible sealant between logs and in corner notches and checks. It seals the building against air and water while flexing as the logs move. Failed or missing chinking is a common reason a log home leaks and rots — replacing it is a core part of restoration.",
  },
  {
    q: "Can you fix rotted logs without replacing the whole log?",
    a: "Often, yes. If the log is sound behind the damage, we consolidate and rebuild the rotted area with structural epoxy. If a section is too far gone, we let in a matched piece. If the rot is structural, we'll tell you honestly and bring in a log builder.",
  },
  {
    q: "How often does a log home need recoating?",
    a: "Plan on a maintenance coat every 3–5 years on sun- and weather-exposed walls, longer on protected sides. We give you a specific schedule — staying on it is far cheaper than letting the finish fail and starting over.",
  },
  {
    q: "Do you finish interior log walls too?",
    a: "Yes. Interior logs get a different finish — lower sheen, no UV package — but the same care with prep and back-brushing, and thorough masking since it's finishing work inside a lived-in home.",
  },
];

export default function LogRestorationPage() {
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

      {/* Intro */}
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid gap-12 md:gap-20 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <Eyebrow className="mb-5">Log home restoration in the Sea to Sky</Eyebrow>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                A log home is a <em className="text-alpine not-italic font-medium">system</em> — we restore all of it.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  A log home is one of the most beautiful — and most demanding —
                  structures to own in the mountains. The same logs that give it
                  character also check, settle, and shed their finish faster than
                  any clad wall.
                </p>
                <p>
                  We restore the whole system — bare-wood prep, preservative,
                  sealing, finish, and a maintenance plan — not just the coat you
                  can see.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button href="/contact" size="lg">Get a Quote</Button>
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
              <Eyebrow className="mb-5">What every log restoration includes</Eyebrow>
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

      {/* The process — numbered timeline (a genuine sequence) */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <Eyebrow className="mb-5">The process, step by step</Eyebrow>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              How we restore a log home.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              Order matters more on logs than almost any other surface. Each step
              sets up the next — skip one and the finish fails early.
            </p>
          </div>
          <div className="space-y-px bg-navy/10 border border-navy/10">
            {PROCESS.map((step) => (
              <div
                key={step.n}
                className="bg-stone-light/50 grid md:grid-cols-[88px_1fr] gap-4 md:gap-8 p-7 md:p-9"
              >
                <div className="font-serif text-navy/30 text-4xl md:text-5xl tabular-nums leading-none">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-serif text-navy text-[1.375rem] md:text-[1.625rem] leading-[1.15] tracking-tight font-medium">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-ink leading-relaxed max-w-3xl">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WarrantyBanner
        title="2-Year Log Finish Warranty"
        body="Penetrating log and semi-transparent finishes are backed for 2 years, matched to how they wear in mountain sun. The maintenance-coat schedule in your project report is what takes the finish the distance."
      />

      {/* Approach */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <Eyebrow className="mb-5">Why it&rsquo;s a specialty</Eyebrow>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Log work isn&rsquo;t just exterior painting.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div key={a.title} className="border-l-2 border-alpine bg-background p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-[1.375rem] text-navy leading-tight tracking-tight font-medium">{a.title}</h3>
                <p className="mt-3 text-ink leading-relaxed text-[0.95rem]">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <Eyebrow className="mb-5">Recent wood & log work</Eyebrow>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">Wood we&rsquo;ve brought back.</h2>
            </div>
            <Button href="/work" variant="text">See all work →</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RELATED_PROJECTS.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </Container>
      </section>

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
