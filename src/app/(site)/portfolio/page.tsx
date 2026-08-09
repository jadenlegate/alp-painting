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

// Banded gallery — every photo at its NATIVE aspect ratio, zero cropping,
// flush bottom edge:
//   - landscapes pair up two per row (large), sharing the row height
//   - portraits emerge as rows of three, sized so a portrait's WIDTH equals
//     a landscape row's HEIGHT — portraits and landscapes cover roughly the
//     same screen area instead of portraits shrinking to slivers
// Every band stretches to the full container width (flex-grow ∝ aspect
// ratio), so the bottom edge is always flush regardless of photo count.
// Bands are emitted in curated order; portraits buffer until three arrive.
type Row = GalleryImage[];

function packBands(items: GalleryImage[]): Row[] {
  const bands: Row[] = [];
  let lBuf: GalleryImage[] = [];
  let pBuf: GalleryImage[] = [];
  for (const img of items) {
    if (img.ratio > 1) {
      pBuf.push(img);
      if (pBuf.length === 3) {
        bands.push(pBuf);
        pBuf = [];
      }
    } else {
      lBuf.push(img);
      if (lBuf.length === 2) {
        bands.push(lBuf);
        lBuf = [];
      }
    }
  }
  // Leftovers: fold a lone landscape into the previous landscape band (3-up);
  // fold trailing portraits into the previous portrait band (up to 4-up).
  if (lBuf.length) {
    const lastL = [...bands].reverse().find((b) => b[0].ratio <= 1);
    if (lastL && lastL.length === 2) lastL.push(...lBuf);
    else bands.push(lBuf);
  }
  if (pBuf.length) {
    const lastP = [...bands].reverse().find((b) => b[0].ratio > 1);
    if (lastP && lastP.length + pBuf.length <= 4) lastP.push(...pBuf);
    else bands.push(pBuf);
  }
  return bands;
}

const BANDS = packBands(PORTFOLIO_GALLERY);

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
              sizes="(min-width: 640px) 55vw, 100vw"
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

          {/* Tablet + desktop: banded rows (landscape pairs / portrait trios) */}
          <div className="hidden sm:flex flex-col gap-4 md:gap-5">
            {BANDS.map((row, i) => (
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
