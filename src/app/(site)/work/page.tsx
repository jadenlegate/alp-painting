import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { CtaBlock } from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Portfolio of painting and restoration projects across Whistler, Pemberton, and Squamish. Interior, exterior, wood restoration, cabinets, and commercial.",
};

// /work — Portfolio gallery. Once Sanity is populated, this should fetch
// projects via GROQ and replace the placeholder data below.
// Filter tabs (by service and location) are wired up client-side.

// Placeholder projects — replace with Sanity fetch once content is loaded.
const ALL_PROJECTS: Project[] = [
  { slug: "whistler-chalet-exterior", title: "Kadenwood chalet — full exterior", location: "Whistler", serviceTags: ["Exterior", "Wood restoration"], coverUrl: "/stock-images/mountaincottage-1-1080x675-1.jpg" },
  { slug: "pemberton-farmhouse-interior", title: "Pemberton farmhouse interior", location: "Pemberton", serviceTags: ["Interior"], coverUrl: "/stock-images/pexels-terry-magallanes-2635038.jpg" },
  { slug: "squamish-modern-cabinets", title: "Squamish modern — kitchen cabinets", location: "Squamish", serviceTags: ["Cabinet refinishing"], coverUrl: "/stock-images/pexels-mark-2724749.jpg" },
  { slug: "whistler-log-home-restoration", title: "Whistler log home — full restoration", location: "Whistler", serviceTags: ["Wood restoration"], coverUrl: "/stock-images/Mountain-House-Style.webp" },
  { slug: "pemberton-farmhouse-exterior", title: "Pemberton farmhouse — repaint", location: "Pemberton", serviceTags: ["Exterior"], coverUrl: "/stock-images/vacation-home-design-mountains.jpg" },
  { slug: "whistler-family-home-repaint", title: "Whistler family home — full repaint", location: "Whistler", serviceTags: ["Interior"], coverUrl: "/stock-images/6ModernMountainHomeStudioMcGee.jpg" },
  { slug: "squamish-contemporary-exterior", title: "Squamish contemporary — cedar + trim", location: "Squamish", serviceTags: ["Exterior", "Wood restoration"], coverUrl: "/stock-images/contemporary-home-exterior-colorful-sunset-600nw-2116568516.webp" },
  { slug: "whistler-chalet-kitchen", title: "Whistler chalet — kitchen cabinets", location: "Whistler", serviceTags: ["Cabinet refinishing"], coverUrl: "/stock-images/tinted-coty2024-kitchen-1024x690.jpg" },
  { slug: "pemberton-deck-staining", title: "Pemberton property — deck and fencing", location: "Pemberton", serviceTags: ["Wood restoration"], coverUrl: "/stock-images/2beb0596b7d27d9ce6d5fac9d571f6bb--wood-stain-colors-deck-colors.jpg" },
];

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Portfolio</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Projects across the Sea to Sky.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Interior, exterior, wood restoration, and cabinet refinishing. From Whistler chalets to Squamish contemporary homes.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ALL_PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        heading="Like what you see?"
        subline="We'd love to hear about your project."
      />
    </>
  );
}
