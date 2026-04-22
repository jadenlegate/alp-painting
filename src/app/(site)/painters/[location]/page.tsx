import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { Check } from "lucide-react";

// /painters/[location] — SEO landing pages for service areas.
// Generates static pages for Whistler, Pemberton, Squamish, and Squamish Valley.

type LocationData = {
  slug: string;
  name: string;
  region: string;
  headline: string;
  intro: string;
  details: string;
  imageUrl: string;
  services: string[];
  neighborhoods?: string[];
};

const LOCATIONS: LocationData[] = [
  {
    slug: "whistler",
    name: "Whistler",
    region: "Sea to Sky",
    headline: "Painting contractors in Whistler, BC",
    intro: "Alpenglow Painting is based in Whistler. We've worked on chalets in Kadenwood, ski-in/ski-out properties in Creekside, and family homes throughout the valley. We know the specific conditions that affect exterior paint jobs here — UV at altitude, condensation under the eaves, freeze-thaw cycles that start earlier than you'd expect.",
    details: "Most of our work is concentrated in Whistler, and we keep availability prioritized for local clients. Same-day response on quote requests. Site visits often same-week.",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=85",
    services: ["Exterior painting", "Interior painting", "Wood restoration and log homes", "Cabinet refinishing", "Strata and commercial"],
    neighborhoods: ["Creekside", "Village", "Whistler Cay", "Blueberry", "Kadenwood", "Alpine Meadows", "Emerald Estates", "Function Junction"],
  },
  {
    slug: "pemberton",
    name: "Pemberton",
    region: "Sea to Sky",
    headline: "Painting contractors in Pemberton, BC",
    intro: "We work regularly in Pemberton — farmhouses, rural properties, and the newer developments along Portage Road. Pemberton's climate is different from Whistler's: hotter summers, colder overnight lows, and more UV exposure in the valley. Exterior prep and product choice matter here.",
    details: "We schedule Pemberton jobs in blocks to minimize drive time and keep our crew efficient. If you're in the valley, we're usually out there at least once a week during peak season.",
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2000&q=85",
    services: ["Exterior painting", "Interior painting", "Wood restoration and deck staining", "Cabinet refinishing"],
    neighborhoods: ["Pemberton townsite", "Portage Road", "Birken", "Mount Currie"],
  },
  {
    slug: "squamish",
    name: "Squamish",
    region: "Sea to Sky",
    headline: "Painting contractors in Squamish, BC",
    intro: "Squamish has grown quickly, and the housing stock ranges from 40-year-old ranchers to new contemporary builds. We work across the full range — wood restoration on older homes, fresh exteriors on new construction, and cabinet refinishing for homeowners looking to update without a full renovation.",
    details: "Squamish is about an hour from Whistler — we batch our jobs there when possible. We have regular availability for Squamish clients throughout the season.",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2000&q=85",
    services: ["Exterior painting", "Interior painting", "Wood restoration", "Cabinet refinishing"],
    neighborhoods: ["Downtown Squamish", "Brackendale", "Garibaldi Highlands", "Dentville", "Valleycliffe"],
  },
  {
    slug: "squamish-valley",
    name: "Squamish Valley",
    region: "Sea to Sky",
    headline: "Painting contractors in Squamish Valley, BC",
    intro: "The Squamish Valley — from Brackendale north toward Mamquam — has a mix of rural properties, riverside homes, and acreage. We work out here for exterior and wood restoration projects, particularly for log homes and properties with significant wood exterior elements.",
    details: "For Squamish Valley projects, we schedule site visits on the same run as Brackendale and the Highlands. Turnaround on quotes is the same as our other service areas.",
    imageUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=2000&q=85",
    services: ["Exterior painting", "Wood restoration and log homes", "Deck staining"],
  },
];

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = LOCATIONS.find((l) => l.slug === location);
  if (!loc) return { title: "Location Not Found" };
  return {
    title: `${loc.headline}`,
    description: `Alpenglow Painting serves ${loc.name} and the ${loc.region}. Exterior, interior, wood restoration, and cabinet refinishing. Owner-operated, locally based.`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = LOCATIONS.find((l) => l.slug === location);
  if (!loc) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={loc.imageUrl}
            alt={`Painting in ${loc.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/40" />
        </div>
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-background/70 mb-4">
              {loc.region} · {loc.name}
            </div>
            <h1 className="font-serif text-background text-[2rem] md:text-[3rem] leading-[1.1]">
              {loc.headline}
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
                Get a Quote
              </Button>
              <Button href="tel:+16049384037" variant="text" className="!text-background">
                (604) 938-4037
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_360px] items-start">
            <div>
              <p className="text-ink text-lg leading-relaxed">{loc.intro}</p>
              <p className="mt-5 text-ink leading-relaxed">{loc.details}</p>

              <div className="mt-10">
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Services in {loc.name}</div>
                <ul className="space-y-2.5">
                  {loc.services.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <Check size={16} className="text-navy mt-0.5 flex-shrink-0" />
                      <span className="text-ink">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {loc.neighborhoods && (
                <div className="mt-10">
                  <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Areas we cover</div>
                  <p className="text-ink text-sm leading-relaxed">
                    {loc.neighborhoods.join(" · ")}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="border border-border rounded-sm bg-surface p-6">
                <div className="font-serif text-navy text-lg mb-1">Alpenglow Painting</div>
                <div className="text-sm text-muted mb-4">Based in Whistler · Serving the Sea to Sky</div>
                <div className="space-y-2 text-sm text-ink">
                  <div>(604) 938-4037</div>
                  <div>hello@alpenglowpainting.ca</div>
                  <div>Operating May – October</div>
                </div>
                <div className="mt-5">
                  <Button href="/contact" className="w-full text-center justify-center">
                    Get a Quote
                  </Button>
                </div>
              </div>

              <div className="border border-border rounded-sm bg-surface p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Response time</div>
                <div className="font-serif text-navy text-2xl">Same day</div>
                <p className="mt-1 text-sm text-muted">On quote requests, weekdays</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        heading={`Ready to get started in ${loc.name}?`}
        subline="The site visit is free. Most quotes are delivered the day of your site visit."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
