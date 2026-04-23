import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Our Work — Painting Projects in Whistler & Sea to Sky",
  description:
    "Portfolio of painting and restoration work across Whistler, Pemberton, and Squamish. Interior, exterior, wood restoration, cabinet refinishing, and commercial.",
  alternates: { canonical: "/work" },
};

type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

// Flat portfolio gallery. Two before/after sliders are rendered in dedicated
// spots; the rest is a masonry-style grid of single images.
const GALLERY: GalleryImage[] = [
  { src: "/stock-images/portfolio/finished-interior-chandelier-whistler.jpg", alt: "Freshly painted interior with chandelier, Whistler", span: "wide" },
  { src: "/stock-images/portfolio/cedar-fascia-finished-whistler.jpg", alt: "Freshly stained cedar fascia against blue sky, Whistler" },
  { src: "/stock-images/portfolio/cedar-soffit-finished-whistler.jpg", alt: "Finished cedar soffit with stain, Whistler" },
  { src: "/stock-images/portfolio/living-room-chalet-whistler.jpg", alt: "Whistler chalet living room with stone fireplace" },
  { src: "/stock-images/portfolio/master-bedroom-chalet-whistler.jpg", alt: "Whistler chalet master bedroom after repaint", span: "tall" },
  { src: "/stock-images/portfolio/cedar-ceiling-detail-whistler.jpg", alt: "Detail of freshly stained cedar ceiling, Whistler" },
  { src: "/stock-images/portfolio/black-garage-door-finished-whistler.jpg", alt: "Glossy black garage door, freshly painted, Whistler" },
  { src: "/stock-images/portfolio/stained-cedar-exterior-whistler.jpg", alt: "Stained cedar exterior with rail detail, Whistler" },
  { src: "/stock-images/portfolio/pine-ceiling-covered-deck-whistler.jpg", alt: "Pine ceiling of a covered deck after staining, Whistler" },
  { src: "/stock-images/portfolio/alpenglow-painter-exterior-prep-whistler.jpg", alt: "Alpenglow painter prepping exterior trim" },
  { src: "/stock-images/portfolio/cedar-siding-installation-whistler.jpg", alt: "Cedar siding installation and finish, Whistler" },
  { src: "/stock-images/portfolio/cedar-chalet-exterior-whistler.jpg", alt: "Cedar shake chalet exterior in Whistler" },
  { src: "/stock-images/portfolio/master-bedroom-detail-whistler.jpg", alt: "Master bedroom painted walls with wood accents, Whistler" },
  { src: "/stock-images/portfolio/alpenglow-painter-ladder-window-whistler.jpg", alt: "Alpenglow painter on a ladder painting window trim" },
  { src: "/stock-images/portfolio/guest-bedroom-chalet-whistler.jpg", alt: "Guest bedroom in a Whistler chalet with blue walls" },
  { src: "/stock-images/portfolio/interior-painting-in-progress-whistler.jpg", alt: "Interior painting in progress with drop cloths, Whistler" },
  { src: "/stock-images/portfolio/dark-cedar-chalet-whistler.jpg", alt: "Dark-stained cedar chalet exterior, Whistler" },
  { src: "/stock-images/portfolio/garage-door-prep-masking-whistler.jpg", alt: "Garage door masked off for prep, Whistler" },
  { src: "/stock-images/portfolio/exterior-repaint-finished-whistler.jpg", alt: "Exterior repaint on a family home, Whistler" },
];

const spanClass = (span: GalleryImage["span"]) =>
  span === "wide"
    ? "md:col-span-2"
    : span === "tall"
      ? "md:row-span-2 aspect-[3/4]"
      : "aspect-[4/3]";

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Portfolio</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              A look at the work.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Interior and exterior projects across Whistler and the Sea to Sky — fresh paint, restored wood, new cedar, and the before-and-after stories that make the work worth showing.
            </p>
          </div>
        </Container>
      </section>

      {/* Before / after sliders */}
      <section className="pb-16 md:pb-20">
        <Container>
          <div className="mb-10 md:mb-14 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Before &amp; after</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              Drag to see the difference.
            </h2>
            <p className="mt-4 text-ink leading-relaxed">
              The clearest way to judge our work is with your own eyes. Slide the handle left or right to compare.
            </p>
          </div>
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            <BeforeAfterSlider
              beforeUrl="/stock-images/portfolio/cedar-ceiling-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/cedar-ceiling-after-whistler.jpg"
              beforeAlt="Weathered cedar ceiling before restoration, Whistler"
              afterAlt="Cedar ceiling after cleaning and re-staining, Whistler"
              caption="Covered deck cedar ceiling — cleaned, brightened, and re-stained."
              location="Whistler"
            />
            <BeforeAfterSlider
              beforeUrl="/stock-images/portfolio/chalet-bay-window-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/chalet-bay-window-after-whistler.jpg"
              beforeAlt="Weathered dark cedar chalet bay window before restoration, Whistler"
              afterAlt="Cedar chalet bay window after full exterior restoration, Whistler"
              caption="Chalet exterior — bay window and siding, fully restored."
              location="Whistler"
            />
          </div>
        </Container>
      </section>

      {/* Flat gallery */}
      <section className="pb-24">
        <Container>
          <div className="mb-10 md:mb-14 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Selected work</div>
            <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
              A broader look.
            </h2>
          </div>
          <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-auto">
            {GALLERY.map((img) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-sm bg-stone-light/40 border border-border ${spanClass(img.span)}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Start a project"
        heading="Like what you see?"
        subline="Tell us about your project — most quotes are delivered the day of the site visit."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
      />
    </>
  );
}
