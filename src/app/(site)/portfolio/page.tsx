import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { IS_FULL } from "@/lib/flags";
import { PORTFOLIO_GALLERY, type GalleryImage } from "@/lib/portfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio — Painting Projects in Whistler & Sea to Sky",
  description:
    "Portfolio of painting and restoration work across Whistler, Pemberton, and Squamish. Interior, exterior, wood restoration, cabinet refinishing, and commercial.",
  alternates: { canonical: "/portfolio" },
};

// Gallery images live in @/lib/portfolioGallery (auto-generated from the
// photo-library catalogue with real aspect ratios). The before/after slider
// section is full-mode only (see @/lib/flags) — it ships in a later revision
// while the MVP shows the flat gallery.

// Pre-computed column distribution, done at build time so the rendered
// columns are deterministic and SSR-friendly.
//
// ORDER-PRESERVING: items fill columns in curated PORTFOLIO_GALLERY order
// (each next photo goes to the currently-shortest column), so the sequence
// in portfolioGallery.ts controls what appears near the top of the wall.
// The last TAIL items are assigned by exhaustive search instead of greedily,
// which lands the column bottoms as flush as the discrete photo shapes allow.
// Each item also adds a fixed vertical gap (~20px against a ~370px column),
// included in the balance so columns with more items don't run taller.
const GAP_UNITS = 0.055;
const TAIL = 10; // 3^10 combos ≈ 59k — trivial at build time

function balanceColumns(items: GalleryImage[], cols: number): GalleryImage[][] {
  const columns: { items: GalleryImage[]; height: number }[] = Array.from(
    { length: cols },
    () => ({ items: [], height: 0 }),
  );
  const head = Math.max(0, items.length - TAIL);

  // Greedy in-order fill for the bulk of the wall.
  for (let i = 0; i < head; i++) {
    const target = columns.reduce((min, c) => (c.height < min.height ? c : min), columns[0]);
    target.items.push(items[i]);
    target.height += items[i].ratio + GAP_UNITS;
  }

  // Exhaustive assignment for the tail: pick the combination that minimizes
  // the spread between the tallest and shortest column.
  const tail = items.slice(head);
  let bestAssign: number[] | null = null;
  let bestSpread = Infinity;
  const combos = Math.pow(cols, tail.length);
  for (let m = 0; m < combos; m++) {
    const heights = columns.map((c) => c.height);
    let x = m;
    const assign: number[] = [];
    for (const item of tail) {
      const c = x % cols;
      x = (x - c) / cols;
      assign.push(c);
      heights[c] += item.ratio + GAP_UNITS;
    }
    const spread = Math.max(...heights) - Math.min(...heights);
    if (spread < bestSpread - 1e-9) {
      bestSpread = spread;
      bestAssign = assign;
    }
  }
  tail.forEach((item, i) => {
    const c = columns[bestAssign ? bestAssign[i] : 0];
    c.items.push(item);
    c.height += item.ratio + GAP_UNITS;
  });

  return columns.map((c) => c.items);
}

const GALLERY_3_COLS = balanceColumns(PORTFOLIO_GALLERY, 3);
const GALLERY_2_COLS = balanceColumns(PORTFOLIO_GALLERY, 2);

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
            <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">Portfolio</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              Our work, and the team at work.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Interior and exterior projects across Whistler and the Sea to Sky
              — fresh paint, restored wood, and the crew that makes it happen.
            </p>
          </div>
        </Container>
      </section>

      {/* Before / after sliders — full mode only (next site revision) */}
      {IS_FULL && (
        <section className="pb-16 md:pb-20">
          <Container>
            <div className="mb-10 md:mb-14 max-w-2xl">
              <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">Before &amp; after</div>
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
      )}

      {/* Photo gallery */}
      <section className="pb-24">
        <Container>
          {IS_FULL && (
            <div className="mb-10 md:mb-14 max-w-2xl">
              <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">Selected work</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                A broader look.
              </h2>
            </div>
          )}
          {/* Mobile: single stacked column (bottom is trivially flush) */}
          <div className="sm:hidden flex flex-col gap-4">
            {PORTFOLIO_GALLERY.map((img) => <GalleryImg key={img.src} img={img} />)}
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
