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

// Mosaic gallery: the first (drone) photo renders as a full-width hero tile,
// and every following photo is a uniform 4:3 tile (object-cover crop). With
// 30 tiles after the hero, the grid divides evenly into both 2 columns (15
// rows) and 3 columns (10 rows), so the bottom edge lands perfectly flush at
// every breakpoint — no column balancing, no ragged whitespace.
// NOTE for future re-picks: keep (total − 1) divisible by 6 (i.e. 31, 37,
// 43 … photos) so the mosaic stays flush in both column counts.
const [HERO_TILE, ...MOSAIC_TILES] = PORTFOLIO_GALLERY;

function MosaicTile({
  img,
  className = "",
  sizes,
  priority = false,
}: {
  img: GalleryImage;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-sm bg-stone-light/40 border border-border ${className}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        quality={85}
        sizes={sizes}
        className="object-cover hover:scale-[1.02] transition-transform duration-500"
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
          {/* Mosaic: full-width hero tile, then uniform 4:3 tiles. 30 tiles
              divide evenly into 2 and 3 columns, so the bottom edge is flush
              at every breakpoint. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <MosaicTile
              img={HERO_TILE}
              className="sm:col-span-2 lg:col-span-3 aspect-[16/9] sm:aspect-[21/9]"
              sizes="100vw"
              priority
            />
            {MOSAIC_TILES.map((img) => (
              <MosaicTile
                key={img.src}
                img={img}
                className="aspect-[4/3]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
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
