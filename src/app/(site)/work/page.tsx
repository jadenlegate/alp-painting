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
  { slug: "whistler-chalet-exterior", title: "Kadenwood chalet — full exterior", location: "Whistler", serviceTags: ["Exterior", "Wood restoration"], coverUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80" },
  { slug: "pemberton-farmhouse-interior", title: "Pemberton farmhouse interior", location: "Pemberton", serviceTags: ["Interior"], coverUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  { slug: "squamish-modern-cabinets", title: "Squamish modern — kitchen cabinets", location: "Squamish", serviceTags: ["Cabinet refinishing"], coverUrl: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=1200&q=80" },
  { slug: "whistler-log-home-restoration", title: "Whistler log home — full restoration", location: "Whistler", serviceTags: ["Wood restoration"], coverUrl: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200&q=80" },
  { slug: "pemberton-farmhouse-exterior", title: "Pemberton farmhouse — repaint", location: "Pemberton", serviceTags: ["Exterior"], coverUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80" },
  { slug: "whistler-family-home-repaint", title: "Whistler family home — full repaint", location: "Whistler", serviceTags: ["Interior"], coverUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80" },
  { slug: "squamish-contemporary-exterior", title: "Squamish contemporary — cedar + trim", location: "Squamish", serviceTags: ["Exterior", "Wood restoration"], coverUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80" },
  { slug: "whistler-chalet-kitchen", title: "Whistler chalet — kitchen cabinets", location: "Whistler", serviceTags: ["Cabinet refinishing"], coverUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80" },
  { slug: "pemberton-deck-staining", title: "Pemberton property — deck and fencing", location: "Pemberton", serviceTags: ["Wood restoration"], coverUrl: "https://images.unsplash.com/photo-1416339684178-3a239570f315?auto=format&fit=crop&w=1200&q=80" },
];

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-navy mb-4">Portfolio</div>
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
        variant="stone"
      />
    </>
  );
}
