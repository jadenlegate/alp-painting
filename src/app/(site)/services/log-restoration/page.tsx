import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { WarrantyBanner } from "@/components/WarrantyBanner";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Log Home Restoration — Whistler, Pemberton & Squamish",
  description:
    "Log home restoration in the Sea to Sky: media blasting, borate treatment, checking and chinking repair, and penetrating log finishes. The full process, done properly, by Alpenglow Painting.",
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
    "Log home restoration across Whistler and the Sea to Sky: media blasting, borate treatment, checking and chinking repair, and penetrating log finishes specified for mountain exposure.",
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
    body: "Before anything else we read the building. Where is the finish failing and why — UV, water, or settling? We check moisture content, sound the logs for soft spots and rot, inspect corner notches and end grain, and note the checks (the long cracks that open as logs dry). The restoration plan comes out of what the logs actually need, not a standard package.",
  },
  {
    n: "02",
    title: "Media blasting back to bare wood",
    body: "Old, failing finish has to come off completely — a fresh coat over a dying one fails with it. We crushed-glass or corn-cob blast the logs back to clean, bright, bare wood. Blasting follows the round profile and reaches the chinking lines and checks that a sander can't, without gouging the soft summer growth. Where blasting isn't appropriate, we hand-sand.",
  },
  {
    n: "03",
    title: "Borate preservative treatment",
    body: "Bare wood is the one chance to treat the logs against rot and wood-boring insects. We apply a borate preservative that penetrates the wood and stays active inside it — cheap insurance that's impossible to add once the finish is on. Critical on the shaded, slow-drying north and forest-facing walls common up here.",
  },
  {
    n: "04",
    title: "Checking & chinking repair",
    body: "Upward-facing checks collect water and rot a log from the inside. We fill them with a flexible, paintable sealant so they shed water and still move as the log expands. Failed or missing chinking and corner caulking is cut out and replaced with a proper log-home sealant that flexes with seasonal movement instead of cracking.",
  },
  {
    n: "05",
    title: "Log repair & spot replacement",
    body: "Where rot has set in but the log is sound behind it, we consolidate and rebuild with structural epoxy. Where a section is gone, we cut it out and let in a matched piece. We're honest about the line between repair and a job for a log builder — if it's structural, we'll tell you and bring in the right trade.",
  },
  {
    n: "06",
    title: "Staining & finishing",
    body: "We back-brush a penetrating log finish into the wood so it bonds rather than sits on top — Sansin, Sikkens Cetol Log & Siding, or a Sashco system depending on the logs and exposure. Multiple coats, with extra build on the sun-punished south and west walls. The grain stays visible; the protection goes deep.",
  },
  {
    n: "07",
    title: "Maintenance coat schedule",
    body: "Log finishes are a system you maintain, not a one-time job. Your project report includes a re-coat window — usually a maintenance coat every 3–5 years on exposed elevations, longer on protected ones. A maintenance coat applied on schedule costs a fraction of a full strip-and-restore.",
  },
];

const APPROACH = [
  {
    title: "Logs aren't siding.",
    body: "Round profiles, exposed end grain, settling, and checks make a log home behave nothing like a clad wall. The prep, the sealants, and the application are all different — restoring logs well takes methods built for logs.",
  },
  {
    title: "Blasting where it counts.",
    body: "Media blasting strips a failing finish off the full round profile and out of the checks and chinking lines without the flat-spotting a sander leaves. It's the difference between a finish that bonds and one that lifts in two seasons.",
  },
  {
    title: "The finish is a system.",
    body: "Borate, then a penetrating stain, then a maintenance coat on schedule — each layer does a job the others can't. We restore the whole system, not just the part you can see.",
  },
  {
    title: "Water management is everything.",
    body: "Most log failure is water finding its way in — through an open check, a failed chink line, or a missing drip detail. We chase those down during restoration, because the best finish in the world can't outrun trapped moisture.",
  },
];

const PRODUCTS = ["Sansin", "Sikkens Cetol", "Sashco", "Perma-Chink"];

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
    a: "Media blasting (crushed glass or corn cob) on most full restorations. It strips a failing finish off the round log profile and out of the checks and chinking lines that a sander physically can't reach, without flattening the wood. We hand-sand smaller areas, interior logs, and anywhere blasting isn't the right call.",
  },
  {
    q: "What is chinking, and do I need it?",
    a: "Chinking is the flexible sealant between logs (and the caulking in corner notches and checks). It seals the building against air and water while flexing as the logs move seasonally. Failed, cracked, or missing chinking is one of the most common reasons a log home leaks and rots — replacing it is a core part of restoration.",
  },
  {
    q: "Can you fix rotted logs without replacing the whole log?",
    a: "Often, yes. If the log is structurally sound behind the damage, we consolidate and rebuild the rotted area with structural epoxy. If a section is too far gone, we cut it out and let in a matched piece. If the rot is structural, we'll tell you honestly and bring in a log builder rather than paint over a problem.",
  },
  {
    q: "How often does a log home need recoating?",
    a: "Plan on a maintenance coat every 3–5 years on sun- and weather-exposed elevations, and longer on protected sides. We give you a specific schedule in your project report. Staying on that schedule is far cheaper than letting the finish fail and starting over with a full strip.",
  },
  {
    q: "Can you change the colour of my logs?",
    a: "Within reason. Going to a richer or darker tone is straightforward once the logs are blasted to bare wood. Going dramatically lighter is harder and depends on how the wood has aged. We test on a sample area first so you see the real result before we commit the whole home.",
  },
  {
    q: "Do you finish interior log walls too?",
    a: "Yes. Interior logs get a different finish than exterior — lower sheen, no UV package needed — but the same care with prep and back-brushing. We mask and protect the interior thoroughly since this is finishing work inside a lived-in home.",
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
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                  Log home restoration in the Sea to Sky
                </span>
              </div>
              <h2 className="font-serif text-navy text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.02] tracking-tight font-medium">
                A log home is a <em className="text-alpine not-italic font-medium">system</em> — we restore all of it.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-ink leading-relaxed text-[1.0625rem]">
                <p>
                  A log home is one of the most beautiful — and most demanding —
                  structures to own in the mountains. The same round logs that
                  give it character also check, settle, and shed their finish
                  faster than any clad wall. Restored properly, they last
                  generations. Neglected, they rot from the inside.
                </p>
                <p>
                  We restore the whole system — bare-wood prep, preservative,
                  sealing, finish, and a maintenance plan — not just the coat
                  you can see.
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
              <div className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium mb-5">
                What every log restoration includes
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

      {/* The process — numbered timeline (a genuine sequence) */}
      <section className="py-16 md:py-28 bg-stone-light/50">
        <Container>
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">
                The process, step by step
              </span>
            </div>
            <h2 className="font-serif text-navy text-[2rem] md:text-[2.875rem] leading-[1.05] tracking-tight font-medium">
              How we restore a log home.
            </h2>
            <p className="mt-6 text-ink leading-relaxed text-[1.0625rem] max-w-2xl">
              Order matters more on logs than almost any other surface. Each
              step sets up the next — skip one and the finish fails early. Here&rsquo;s
              the full sequence, start to finish.
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

      {/* Approach */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-alpine" aria-hidden />
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Why it&rsquo;s a specialty</span>
            </div>
            <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium">
              Log work isn&rsquo;t just exterior painting.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {APPROACH.map((a) => (
              <div key={a.title} className="border-l-2 border-alpine bg-stone-light/40 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-[1.375rem] text-navy leading-tight tracking-tight font-medium">{a.title}</h3>
                <p className="mt-3 text-ink leading-relaxed text-[0.95rem]">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 bg-stone-light/50">
        <Container>
          <div className="grid gap-10 md:gap-16 md:grid-cols-[1fr_1.3fr] md:items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Products we use</span>
              </div>
              <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.375rem] leading-[1.05] tracking-tight font-medium">
                Log-specific systems only.
              </h2>
              <p className="mt-5 text-ink leading-relaxed">
                Penetrating log finishes and flexible sealants built for round
                profiles and seasonal movement — not general exterior paint. We
                spec the system to your logs and exposure, and document it for
                the maintenance coats down the road.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {PRODUCTS.map((p) => (
                <div
                  key={p}
                  className="border border-navy/15 bg-background py-6 px-5 font-serif text-navy text-[1.0625rem] md:text-[1.125rem] text-center tracking-tight"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-alpine" aria-hidden />
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Recent wood & log work</span>
              </div>
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
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-alpine" aria-hidden />
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-alpine font-medium">Frequently asked</span>
          </div>
          <h2 className="font-serif text-navy text-[1.875rem] md:text-[2.625rem] leading-[1.05] tracking-tight font-medium mb-10">Log restoration questions.</h2>
          <FAQAccordion items={FAQS} />
        </Container>
      </section>

      <WarrantyBanner
        years="2"
        heading="Years on penetrating log finishes — and a maintenance plan to go further."
        body="Penetrating log and semi-transparent finishes carry a 2-year written warranty, matched to how they wear in mountain sun. The maintenance-coat schedule in your project report is what takes the finish the distance."
      />

      <CtaBlock
        eyebrow="Log specialists"
        heading="Got a log home that needs work?"
        subline="We'll assess the logs on-site and lay out exactly what the restoration needs — and what it doesn't."
      />
    </>
  );
}
