import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import { MessageSquare, UserCheck, ShieldCheck, Ruler, CalendarCheck, HardHat, Paintbrush, ClipboardCheck, type LucideIcon } from "lucide-react";
import { SITE } from "@/lib/site";
import { BulletList } from "@/components/BulletList";
import { IS_FULL } from "@/lib/flags";

// `fullOnly` cards are hidden in MVP mode (main branch) — see @/lib/flags.
const SERVICES = [
  {
    title: "Interior Painting",
    href: "/services/interior-painting",
    blurb: "Walls, trim, ceilings, doors. Clean lines and a process that respects your home.",
    imageUrl: "/stock-images/interior-painting-whistler.jpg",
  },
  {
    title: "Exterior Painting",
    href: "/services/exterior-painting",
    blurb: "Painting and staining with premium prep and products to withstand harsh Sea-to-Sky weather.",
    imageUrl: "/stock-images/exterior-painting-whistler.webp",
  },
  {
    title: "Cabinet Refinishing",
    href: "/services/cabinet-refinishing",
    blurb: "Factory-grade coatings without the cost of replacement. Meticulous prep and stunning finishes.",
    imageUrl: "/stock-images/tinted-coty2024-kitchen-1024x690.jpg",
    fullOnly: true,
  },
  {
    title: "Wood Refinishing & Staining",
    href: "/services/wood-restoration",
    blurb: "Exterior and interior woodwork revitalized, refinished and stained to last.",
    imageUrl: "/working-images/wood-restoration-staining-cedar-whistler.jpg",
  },
  {
    title: "Log Restoration",
    href: "/services/log-restoration",
    blurb: "Full log home restoration: finish removal, sanding, rot repair, sealing and finishing.",
    imageUrl: "/stock-images/portfolio/dark-cedar-chalet-whistler.jpg",
    fullOnly: true,
  },
  {
    title: "Deck & Fence Staining",
    href: "/services/deck-fence-staining",
    blurb: "Decks, railings, and fences. Stripped, sanded, and stained to last.",
    imageUrl: "/stock-images/portfolio/stained-cedar-exterior-whistler.jpg",
  },
  {
    title: "Light Carpentry & Repair",
    href: "/services/light-carpentry",
    blurb: "Rot and trim repairs coordinated with your painting project. One point of contact for streamlined scheduling.",
    imageUrl: "/stock-images/light-carpentry-repair-whistler.jpg",
  },
  {
    title: "New Construction & Renovation",
    href: "/services/new-construction",
    blurb: "Schedule-integrated, spec-precise finishing for general contractors and custom home builders.",
    imageUrl: "/working-images/new-construction-painting-whistler.jpg",
    fullOnly: true,
  },
  {
    title: "Commercial, Strata & Hotels",
    href: "/services/commercial",
    blurb: "Flexible scheduling around operations and residents. Clear communication, no drama.",
    imageUrl: "/stock-images/commercial-strata-hotel-painting-whistler.jpg",
    fullOnly: true,
  },
];

const FEATURED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-exterior",
    title: "Whistler chalet — exterior restoration",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "/stock-images/portfolio/chalet-bay-window-after-whistler.jpg",
  },
  {
    slug: "whistler-chalet-interior",
    title: "Chalet interior — full repaint",
    location: "Whistler",
    serviceTags: ["Interior"],
    coverUrl: "/stock-images/portfolio/finished-interior-chandelier-whistler.jpg",
  },
  {
    slug: "whistler-cedar-deck-ceiling",
    title: "Covered deck — cedar ceiling restoration",
    location: "Whistler",
    serviceTags: ["Wood restoration"],
    coverUrl: "/stock-images/portfolio/cedar-ceiling-after-whistler.jpg",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Don W.",
    location: "Whistler",
    rating: 5,
    text: "Expert workmanship in at a fair price. Very good communication. I highly recommend Alpenglow Painting.",
  },
  {
    name: "David N.",
    location: "Whistler",
    rating: 5,
    text: "Excellent customer service and workmanship. They won't leave until you're satisfied with the end product.",
  },
  {
    name: "Neil McK.",
    location: "Whistler",
    rating: 5,
    text: "Good communication, fair estimate and overdelivered on nice work with pleasant team. You can't ask for more. Highly recommend.",
  },
];

const VALUE_PROPS = [
  {
    icon: MessageSquare,
    title: "Clear communication",
    body: "We respond fast, show up when we say we will, and tell you if something changes. No surprises, no chasing us down.",
  },
  {
    icon: UserCheck,
    title: "Professional crews",
    body: "On time, in uniform, and careful with your home. Trades work the way it should be — but rarely is.",
  },
  {
    icon: ShieldCheck,
    title: "Work that lasts",
    body: "Up to a 5-year written warranty on interior and exterior finishes. Not just a handshake.",
  },
];

// Condensed teaser of the full process. Step titles mirror /process exactly —
// keep the two in sync if either changes.
const PROCESS_STEPS: { n: string; label: string; body: string; icon: LucideIcon }[] = [
  {
    n: "01",
    icon: MessageSquare,
    label: "Request a quote",
    body: "Tell us about your project online or by phone. We follow up soon to learn exactly what you have in mind.",
  },
  {
    n: "02",
    icon: Ruler,
    label: "Site visit & proposal",
    body: "We visit the property, talk through colours and products, and present a detailed written proposal.",
  },
  {
    n: "03",
    icon: CalendarCheck,
    label: "Booking & scheduling",
    body: "We confirm your start date, send a project agreement, and walk you through how to prep the space.",
  },
  {
    n: "04",
    icon: HardHat,
    label: "Day one on site",
    body: "The crew arrives on time and protects everything that isn't being painted before any work begins.",
  },
  {
    n: "05",
    icon: Paintbrush,
    label: "During the project",
    body: "Thorough professional preparation, then premium application — on a clean, tidy site with daily updates.",
  },
  {
    n: "06",
    icon: ClipboardCheck,
    label: "Final walkthrough",
    body: "We review every detail with you, handle any touch-ups, and close out with a written project report.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Previous hero image — swap back by restoring:
          imageUrl="/stock-images/I_Blackcomb_Dusk_1-scaled.jpg"
          imageAlt="Blackcomb mountain at dusk — Whistler, BC" */}
      <Hero
        variant="home"
        imageUrl="/photos/home-hero-green-chalet.jpg"
        imageAlt="Green-stained timber-frame chalet with cedar accents and stone base — Whistler, BC"
        headline={SITE.tagline}
        subline={SITE.subline}
      >
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
        <Button href="/portfolio" variant="text" className="!text-background/90 hover:!text-background">
          See our work →
        </Button>
      </Hero>

      <TrustBar />

      {/* Why Alpenglow — navy background */}
      <Section className="bg-navy">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-4">Why Alpenglow</div>
              <h2 className="font-serif text-background text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                We&rsquo;re not the biggest painter in the Sea to Sky. We&rsquo;re the one that takes <span className="text-alpine">the experience</span> seriously.
              </h2>
              <p className="mt-5 text-background/70 text-lg leading-relaxed">
                <strong className="text-background font-semibold">Any painter can roll paint on walls.</strong> What separates a good job from a bad one is everything else — showing up when you said you would, keeping the site clean, and actually following through on what was promised.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 md:mt-16 grid gap-5 md:grid-cols-3">
            {VALUE_PROPS.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="border border-background/10 rounded-sm bg-background/5 p-6 md:p-8 h-full">
                  <v.icon size={22} className="text-alpine" />
                  <h3 className="mt-4 font-serif text-xl text-background">{v.title}</h3>
                  <p className="mt-2 text-background/65 leading-relaxed text-[0.95rem]">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section>
        <Container>
          <FadeIn>
            <div className="mb-6 md:mb-8">
              <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">Services</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
                What we offer.
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((s) => IS_FULL || !s.fullOnly).map((s, i) => (
              <FadeIn key={s.href} delay={i * 0.07}>
                <ServiceCard title={s.title} href={s.href} blurb={s.blurb} imageUrl={s.imageUrl} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Button href="/contact">Get a Quote</Button>
              <Button href="/portfolio" variant="text">See recent work →</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Featured work */}
      <Section className="bg-surface">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">Recent work</div>
                <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1] max-w-xl">
                  Projects across the Sea to Sky.
                </h2>
              </div>
              <Button href="/portfolio" variant="text">See all work →</Button>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED_PROJECTS.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.1}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Designed around you — photo-paired benefits block */}
      <Section>
        <Container>
          <div className="grid gap-10 md:gap-16 md:grid-cols-2 md:items-stretch">
            <FadeIn direction="left" className="md:h-full">
              <div className="h-full min-h-[400px] md:min-h-0 rounded-sm overflow-hidden bg-stone-light/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/stock-images/6ModernMountainHomeStudioMcGee.jpg"
                  alt="A finished Alpenglow project"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">Designed around you</div>
                <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
                  A painting project should feel <span className="text-alpine">straightforward</span>, not stressful.
                </h2>
                <p className="mt-5 text-ink text-lg leading-relaxed font-semibold text-navy">
                  That belief shapes how we quote, schedule, and run every job.
                </p>
                <p className="mt-3 text-ink leading-relaxed">
                  Here&rsquo;s what you can count on from the moment you call us:
                </p>
                <div className="mt-7">
                  <BulletList
                    items={[
                      "A clear, itemized quote — no vague lump sums",
                      "Punctual starts and realistic timelines with weather buffer",
                      "A clean, protected work site throughout the project",
                      "Proactive updates so you always know what's happening",
                      "Fixed pricing that only moves if the scope actually changes",
                      "A thorough final walkthrough before you sign off",
                      "$5M liability insurance and full WorkSafeBC coverage",
                      "A written warranty — up to 5 years, matched to the service",
                    ]}
                  />
                </div>
                <div className="mt-8">
                  <Button href="/contact" size="lg">Get a Quote</Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Process teaser — navy background */}
      <Section className="bg-navy">
        <Container>
          <FadeIn>
            <div className="max-w-xl mb-12">
              <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">Our process</div>
              <h2 className="font-serif text-background text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                From first call to <span className="text-background">final walkthrough</span>.
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-alpine/15 flex items-center justify-center mb-5">
                    <s.icon size={26} className="text-alpine" strokeWidth={1.5} />
                  </div>
                  <div className="text-alpine text-[0.7rem] font-semibold tabular-nums tracking-[0.22em] mb-2">
                    STEP {s.n}
                  </div>
                  <h3 className="font-serif text-background text-lg md:text-xl leading-[1.2] tracking-tight font-medium">
                    {s.label}
                  </h3>
                  <p className="mt-2.5 max-w-[19rem] text-background/65 text-[0.95rem] leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-12 flex justify-center">
              <Button href="/process" size="lg" className="border !border-background/25 !bg-transparent !text-background hover:!bg-background/10">See how it works</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Reviews */}
      <Section>
        <Container>
          <FadeIn>
            <div className="max-w-xl mb-10 md:mb-14">
              <div className="text-sm uppercase tracking-[0.16em] font-semibold text-alpine mb-3">What clients say</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                <span className="text-alpine">5.0 on Google</span> — across the Sea to Sky.
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <TestimonialCard t={t} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Button href="/testimonials" variant="text">See all testimonials →</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <CtaBlock
        eyebrow="Next steps"
        heading="Ready to start?"
        subline="Most quotes are delivered the day of your site visit."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
      />
    </>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`py-16 md:py-24 ${className}`}>{children}</section>;
}
