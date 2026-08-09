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

// Justified-rows gallery (the Flickr/Google-Photos layout): every photo keeps
// its NATIVE aspect ratio, and each row shares one height while stretching to
// the full container width (flex-grow proportional to aspect ratio). Because
// every row spans the full width, the gallery's bottom edge is always flush —
// no cropping, no ragged columns, regardless of photo count.
//
// Rows are packed at build time with a small DP linear partition that keeps
// the curated order and targets a "width sum" (Σ width/height) per row.
type Row = GalleryImage[];

function packRows(items: GalleryImage[], targetSum: number): Row[] {
  const n = items.length;
  const ar = items.map((i) => 1 / i.ratio); // width/height
  const dp = new Array<number>(n + 1).fill(Infinity);
  const cut = new Array<number>(n + 1).fill(0);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i - 1; j >= 0 && i - j <= 6; j--) {
      sum += ar[j];
      // The final row may run short of the target at reduced penalty — its
      // photos simply render a little larger, still filling the row.
      const weight = i === n ? 0.25 : 1;
      const cost = dp[j] + (sum - targetSum) ** 2 * weight;
      if (cost < dp[i]) {
        dp[i] = cost;
        cut[i] = j;
      }
    }
  }
  const rows: Row[] = [];
  for (let i = n; i > 0; i = cut[i]) rows.unshift(items.slice(cut[i], i));
  return rows;
}

const ROWS_DESKTOP = packRows(PORTFOLIO_GALLERY, 4.8); // ≈3 landscape photos per row
const ROWS_TABLET = packRows(PORTFOLIO_GALLERY, 3.2); // ≈2 landscape photos per row

function JustifiedRow({ row }: { row: Row }) {
  return (
    <div className="flex gap-4 md:gap-5">
      {row.map((img) => {
        const ar = (1 / img.ratio).toFixed(4); // width/height
        return (
          <div
            key={img.src}
            className="relative overflow-hidden rounded-sm bg-stone-light/40 border border-border"
            style={{ flex: `${ar} 1 0%`, aspectRatio: ar }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              quality={85}
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 55vw, 100vw"
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        );
      })}
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
          {/* Justified rows — native aspect ratios, flush bottom edge.
              Mobile: single stacked column (trivially flush). */}
          <div className="sm:hidden flex flex-col gap-4">
            {PORTFOLIO_GALLERY.map((img) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-sm bg-stone-light/40 border border-border"
                style={{ aspectRatio: (1 / img.ratio).toFixed(4) }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  quality={85}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Tablet: ~2-per-row justified rows */}
          <div className="hidden sm:flex lg:hidden flex-col gap-4 md:gap-5">
            {ROWS_TABLET.map((row, i) => (
              <JustifiedRow key={i} row={row} />
            ))}
          </div>

          {/* Desktop: ~3-per-row justified rows */}
          <div className="hidden lg:flex flex-col gap-5">
            {ROWS_DESKTOP.map((row, i) => (
              <JustifiedRow key={i} row={row} />
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
