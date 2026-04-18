import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { CtaBlock } from "@/components/CtaBlock";
import { ArrowLeft } from "lucide-react";

// /work/[slug] — individual project detail page.
// Once Sanity is populated, fetch project by slug via GROQ and replace
// ALL_PROJECTS with a real data fetch. generateStaticParams should also
// pull slugs from Sanity.

type Project = {
  slug: string;
  title: string;
  location: string;
  serviceTags: string[];
  coverUrl: string;
  galleryUrls?: string[];
  description?: string;
  scope?: string[];
  year?: string;
};

const ALL_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-exterior",
    title: "Kadenwood chalet — full exterior",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=85",
    galleryUrls: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Full exterior repaint and wood restoration on a Kadenwood chalet. Included pressure washing, caulking all penetrations, two full coats of Sherwin-Williams Duration on siding, and Cabot Australian Timber Oil on all cedar trim and railings.",
    scope: ["Pressure washing and surface prep", "Caulking and gap filling", "Two coats exterior repaint (Sherwin-Williams Duration)", "Cedar trim — Cabot Australian Timber Oil", "Deck railings and fascia"],
    year: "2024",
  },
  {
    slug: "pemberton-farmhouse-interior",
    title: "Pemberton farmhouse interior",
    location: "Pemberton",
    serviceTags: ["Interior"],
    coverUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    galleryUrls: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Full interior repaint of a Pemberton farmhouse. Walls, ceilings, trim, and doors throughout. All furniture moved and protected; daily tidy maintained for the duration.",
    scope: ["Walls and ceilings throughout", "Trim and baseboards", "Interior doors", "Surface prep and patching"],
    year: "2024",
  },
  {
    slug: "squamish-modern-cabinets",
    title: "Squamish modern — kitchen cabinets",
    location: "Squamish",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1400&q=85",
    description: "Cabinet refinishing on a Squamish contemporary home. Doors removed, sanded, primed, and sprayed with two coats of Benjamin Moore Advance in satin finish. Hardware reinstalled.",
    scope: ["Door and drawer front removal", "Full sand and prime", "Two coats sprayed (Benjamin Moore Advance)", "Hardware reinstall"],
    year: "2024",
  },
  {
    slug: "whistler-log-home-restoration",
    title: "Whistler log home — full restoration",
    location: "Whistler",
    serviceTags: ["Wood restoration"],
    coverUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1400&q=85",
    description: "Log home restoration including media blasting to remove old finish, chinking repair, borate treatment, and two coats of Sikkens Cetol Log & Siding. First full restoration in 12 years.",
    scope: ["Media blast to raw wood", "Chinking inspection and repair", "Borate treatment", "Two coats Sikkens Cetol Log & Siding", "Trim and fascia refinishing"],
    year: "2024",
  },
  {
    slug: "pemberton-farmhouse-exterior",
    title: "Pemberton farmhouse — repaint",
    location: "Pemberton",
    serviceTags: ["Exterior"],
    coverUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=85",
    description: "Full exterior repaint on a Pemberton farmhouse. Two colors — body and trim — in Sherwin-Williams Emerald Exterior. Prep included scraping loose paint, spot priming bare wood, and caulking all window and door penetrations.",
    scope: ["Full scrape and prep", "Spot prime bare areas", "Caulking windows and doors", "Two coats Sherwin-Williams Emerald Exterior"],
    year: "2023",
  },
  {
    slug: "whistler-family-home-repaint",
    title: "Whistler family home — full repaint",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    description: "Interior repaint of a Whistler family home while occupants were on vacation. Completed in 5 days with minimal disruption. All rooms, trim, and ceilings.",
    scope: ["All rooms — walls and ceilings", "Trim, baseboards, and doors", "Patching and prep", "Color consultation"],
    year: "2023",
  },
  {
    slug: "squamish-contemporary-exterior",
    title: "Squamish contemporary — cedar + trim",
    location: "Squamish",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=85",
    description: "Exterior repaint on a Squamish contemporary home with extensive cedar cladding. Cedar treated with UV-protective oil finish; trim and fascia repainted in satin.",
    scope: ["Cedar cladding oil treatment", "Trim and fascia repaint", "Deck railing refinishing", "Surface prep throughout"],
    year: "2023",
  },
  {
    slug: "whistler-chalet-kitchen",
    title: "Whistler chalet — kitchen cabinets",
    location: "Whistler",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=85",
    description: "Kitchen cabinet refinishing in a Whistler chalet. Original maple finish replaced with painted finish in Benjamin Moore White Dove. Soft-close hardware upgraded during reinstall.",
    scope: ["Door and drawer front removal", "Strip and sand", "Primer coat", "Two finish coats (Benjamin Moore Advance)", "Hardware upgrade and reinstall"],
    year: "2023",
  },
  {
    slug: "pemberton-deck-staining",
    title: "Pemberton property — deck and fencing",
    location: "Pemberton",
    serviceTags: ["Wood restoration"],
    coverUrl: "https://images.unsplash.com/photo-1416339684178-3a239570f315?auto=format&fit=crop&w=1400&q=85",
    description: "Deck and perimeter fencing restoration on a Pemberton acreage property. Power washed, brightened, and stained with two coats of Armstrong Clark Semi-Transparent in natural tone.",
    scope: ["Power wash and wood brightener", "Spot sanding and nail set", "Two coats Armstrong Clark deck stain", "Fence posts and rails"],
    year: "2023",
  },
];

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Portfolio`,
    description: project.description ?? `${project.title} by Alpenglow Painting in ${project.location}.`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero image */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/35" />
        </div>
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-background/70 mb-3">
              {project.location} · {project.serviceTags.join(" · ")}
            </div>
            <h1 className="font-serif text-background text-[2rem] md:text-[3rem] leading-[1.1]">
              {project.title}
            </h1>
            {project.year && (
              <div className="mt-3 text-sm text-background/60">{project.year}</div>
            )}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_360px] items-start">
            <div>
              {project.description && (
                <p className="text-ink text-lg leading-relaxed">{project.description}</p>
              )}

              {/* Gallery */}
              {project.galleryUrls && project.galleryUrls.length > 0 && (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {project.galleryUrls.map((url, i) => (
                    <div key={i} className="aspect-[4/3] overflow-hidden rounded-sm bg-stone-light/40">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={url}
                        alt={`${project.title} — photo ${i + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-border rounded-sm bg-surface p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Project scope</div>
                {project.scope && (
                  <ul className="space-y-2">
                    {project.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink">
                        <span className="mt-[5px] w-1 h-1 rounded-full bg-navy flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border border-border rounded-sm bg-surface p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Details</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Location</span>
                    <span className="text-ink">{project.location}</span>
                  </div>
                  {project.year && (
                    <div className="flex justify-between">
                      <span className="text-muted">Year</span>
                      <span className="text-ink">{project.year}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted">Services</span>
                    <span className="text-ink text-right max-w-[180px]">{project.serviceTags.join(", ")}</span>
                  </div>
                </div>
              </div>

              <Button href="/contact" className="w-full text-center justify-center">
                Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Back to portfolio */}
      <section className="pb-16 md:pb-20">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-navy hover:underline underline-offset-4"
          >
            <ArrowLeft size={14} />
            See all projects
          </Link>
        </Container>
      </section>

      <CtaBlock
        heading="Like what you see?"
        subline="We'd love to hear about your project."
        variant="stone"
      />
    </>
  );
}
