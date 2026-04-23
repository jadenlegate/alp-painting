import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Our Work — Painting Projects in Whistler & Sea to Sky",
  description:
    "Portfolio of painting and restoration work across Whistler, Pemberton, and Squamish. Interior, exterior, wood restoration, cabinet refinishing, and commercial.",
  alternates: { canonical: "/work" },
};

// ratio = height / width (the image's rendered aspect, EXIF-aware).
// Used so each image can set CSS `aspect-ratio: width / height` and render
// at its native proportions with no cropping. Ratios are also used by the
// column distribution below to balance column heights so the bottom of
// the gallery lands close to flush across all three columns.
type GalleryImage = { src: string; alt: string; ratio: number };

const PORTRAIT = 4 / 3; // iPhone portrait, rendered height/width
const LAND_43 = 3 / 4; // iPhone landscape
const LAND_32 = 2 / 3; // DSLR 3:2 landscape

const GALLERY: GalleryImage[] = [
  { src: "/stock-images/portfolio/finished-interior-chandelier-whistler.jpg", alt: "Freshly painted interior with chandelier, Whistler", ratio: PORTRAIT },
  { src: "/stock-images/portfolio/cedar-fascia-finished-whistler.jpg", alt: "Freshly stained cedar fascia against blue sky, Whistler", ratio: LAND_43 },
  { src: "/stock-images/portfolio/living-room-chalet-whistler.jpg", alt: "Whistler chalet living room with stone fireplace", ratio: LAND_32 },
  { src: "/stock-images/portfolio/master-bedroom-chalet-whistler.jpg", alt: "Whistler chalet master bedroom after repaint", ratio: LAND_32 },
  { src: "/stock-images/portfolio/cedar-soffit-finished-whistler.jpg", alt: "Finished cedar soffit with stain, Whistler", ratio: LAND_43 },
  { src: "/stock-images/portfolio/cedar-ceiling-detail-whistler.jpg", alt: "Detail of freshly stained cedar ceiling, Whistler", ratio: PORTRAIT },
  { src: "/stock-images/portfolio/black-garage-door-finished-whistler.jpg", alt: "Glossy black garage door, freshly painted, Whistler", ratio: PORTRAIT },
  { src: "/stock-images/portfolio/pine-ceiling-covered-deck-whistler.jpg", alt: "Pine ceiling of a covered deck after staining, Whistler", ratio: PORTRAIT },
  { src: "/stock-images/portfolio/alpenglow-painter-exterior-prep-whistler.jpg", alt: "Alpenglow painter prepping exterior trim", ratio: PORTRAIT },
  { src: "/stock-images/portfolio/master-bedroom-detail-whistler.jpg", alt: "Master bedroom painted walls with wood accents, Whistler", ratio: LAND_32 },
  { src: "/stock-images/portfolio/alpenglow-painter-ladder-window-whistler.jpg", alt: "Alpenglow painter on a ladder painting window trim", ratio: PORTRAIT },
  { src: "/stock-images/portfolio/guest-bedroom-chalet-whistler.jpg", alt: "Guest bedroom in a Whistler chalet with blue walls", ratio: LAND_32 },
  { src: "/stock-images/portfolio/interior-painting-in-progress-whistler.jpg", alt: "Interior painting in progress with drop cloths, Whistler", ratio: LAND_43 },
  { src: "/stock-images/portfolio/dark-cedar-chalet-whistler.jpg", alt: "Dark-stained cedar chalet exterior, Whistler", ratio: LAND_43 },
];

// Pre-computed 3-column distribution: LPT-balanced so column heights
// (sum of aspect ratios per column) come out as close to equal as the
// discrete item sizes allow. Done at build time so the rendered columns
// are deterministic and SSR-friendly.
function balanceColumns(items: GalleryImage[], cols: number): GalleryImage[][] {
  const columns: { items: GalleryImage[]; height: number }[] = Array.from(
    { length: cols },
    () => ({ items: [], height: 0 }),
  );
  // Longest Processing Time first: largest aspect ratios placed first so
  // the shorter tail items can fine-tune the final balance.
  const sorted = [...items]
    .map((item, idx) => ({ item, idx }))
    .sort((a, b) => b.item.ratio - a.item.ratio || a.idx - b.idx);
  for (const { item } of sorted) {
    const target = columns.reduce((min, c) => (c.height < min.height ? c : min), columns[0]);
    target.items.push(item);
    target.height += item.ratio;
  }
  return columns.map((c) => c.items);
}

const GALLERY_3_COLS = balanceColumns(GALLERY, 3);
const GALLERY_2_COLS = balanceColumns(GALLERY, 2);

function GalleryImg({ img }: { img: GalleryImage }) {
  // Width/height are in "ratio units" — next/image uses them only to compute
  // aspect ratio, so the intrinsic values don't need to be pixel-accurate.
  const w = img.ratio >= 1 ? 1000 : Math.round(1000 / img.ratio);
  const h = img.ratio >= 1 ? Math.round(1000 * img.ratio) : 1000;
  return (
    <div className="overflow-hidden rounded-sm bg-stone-light/40 border border-border">
      <Image
        src={img.src}
        alt={img.alt}
        width={w}
        height={h}
        loading="lazy"
        quality={85}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="block w-full h-auto hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
  );
}

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
          {/* Portrait-oriented pairs */}
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-10">
            <BeforeAfterSlider
              aspectClass="aspect-[3/4]"
              beforeUrl="/stock-images/portfolio/cedar-ceiling-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/cedar-ceiling-after-whistler.jpg"
              beforeAlt="Weathered cedar ceiling before restoration, Whistler"
              afterAlt="Cedar ceiling after cleaning and re-staining, Whistler"
              caption="Old finish stripped, wood sanded smooth, and 4 coats of spar urethane applied."
            />
            <BeforeAfterSlider
              aspectClass="aspect-[3/4]"
              beforeUrl="/stock-images/portfolio/chalet-bay-window-after-whistler.jpg"
              afterUrl="/stock-images/portfolio/chalet-bay-window-before-whistler.jpg"
              beforeAlt="Weathered dark cedar chalet bay window before restoration, Whistler"
              afterAlt="Cedar chalet bay window after full exterior restoration, Whistler"
              caption="Old flaking stain chemically stripped instead of sanded off to keep roughsawn wood grain. 2 coats of premium oil-based stain applied."
            />
            <BeforeAfterSlider
              aspectClass="aspect-[3/4]"
              beforeUrl="/stock-images/portfolio/cedar-deck-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/stained-cedar-exterior-whistler.jpg"
              beforeAlt="Weathered cedar deck before restoration, Whistler"
              afterAlt="Freshly stained cedar deck and rail, Whistler"
              caption="Deck pressure washed, wood sanded to bare, semi-solid stain applied."
            />
          </div>
          {/* Landscape-oriented pairs */}
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 max-w-5xl mx-auto">
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/cedar-chalet-exterior-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/cedar-chalet-exterior-whistler.jpg"
              beforeAlt="Faded chalet exterior before full repaint, Whistler"
              afterAlt="Chalet exterior after full repaint, Whistler"
              caption="Pressure washed, flaking paint scraped and sanded off, 2 coats of premium solid stain applied."
            />
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/garage-door-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/garage-door-after-whistler.jpg"
              beforeAlt="Weathered garage door siding before repaint, Whistler"
              afterAlt="Freshly painted garage door siding, Whistler"
              caption="Wood sanded to bare, semi-solid stain applied."
            />
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/cedar-siding-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/cedar-siding-installation-whistler.jpg"
              beforeAlt="Deck and siding before cedar installation, Whistler"
              afterAlt="Fresh cedar siding and trim installed, Whistler"
              caption="Old finish removed, 3 coats of premium oil-based finish applied."
            />
            <BeforeAfterSlider
              aspectClass="aspect-[4/3]"
              beforeUrl="/stock-images/portfolio/family-home-exterior-before-whistler.jpg"
              afterUrl="/stock-images/portfolio/exterior-repaint-finished-whistler.jpg"
              beforeAlt="Faded family home exterior before repaint, Whistler"
              afterAlt="Family home after full exterior repaint, Whistler"
              caption="Pressure washed, flaking paint scraped and sanded off, 2 coats of premium solid stain applied."
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
          {/* Mobile: single stacked column (bottom is trivially flush) */}
          <div className="sm:hidden flex flex-col gap-4">
            {GALLERY.map((img) => <GalleryImg key={img.src} img={img} />)}
          </div>

          {/* Tablet: 2-column LPT-balanced columns */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 md:gap-5">
            {GALLERY_2_COLS.map((col, i) => (
              <div key={i} className="flex flex-col gap-4 md:gap-5">
                {col.map((img) => <GalleryImg key={img.src} img={img} />)}
              </div>
            ))}
          </div>

          {/* Desktop: 3-column LPT-balanced columns */}
          <div className="hidden lg:grid grid-cols-3 gap-5">
            {GALLERY_3_COLS.map((col, i) => (
              <div key={i} className="flex flex-col gap-5">
                {col.map((img) => <GalleryImg key={img.src} img={img} />)}
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
