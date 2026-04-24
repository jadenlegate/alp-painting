import { Fragment } from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { CtaBlock } from "@/components/CtaBlock";
import { FadeIn } from "@/components/FadeIn";
import { MessageSquare, UserCheck, ShieldCheck, Ruler, Paintbrush, BookOpen, ChevronRight, type LucideIcon } from "lucide-react";
import { SITE } from "@/lib/site";
import { BulletList } from "@/components/BulletList";

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
    blurb: "Weather-tough finishes built for Whistler winters. Sikkens, Benjamin Moore, Sherwin-Williams.",
    imageUrl: "/stock-images/exterior-painting-whistler.webp",
  },
  {
    title: "Wood Restoration & Staining",
    href: "/services/wood-restoration",
    blurb: "Cedar siding, decks, timber-frame beams. Restored, stained, sealed to last.",
    imageUrl: "/stock-images/wood-restoration-staining-whistler.jpg",
  },
  {
    title: "Cabinet Refinishing",
    href: "/services/cabinet-refinishing",
    blurb: "Factory-grade finishes without replacing the boxes. Spray-booth precision in your kitchen.",
    imageUrl: "/stock-images/tinted-coty2024-kitchen-1024x690.jpg",
  },
  {
    title: "Light Carpentry & Repair",
    href: "/services/light-carpentry",
    blurb: "Rot, trim, and fascia repair coordinated with your paint project — one team, one point of contact.",
    imageUrl: "/stock-images/light-carpentry-repair-whistler.jpg",
  },
  {
    title: "Commercial, Strata & Hotels",
    href: "/services/commercial",
    blurb: "Flexible scheduling around operations and residents. Clear communication, no drama.",
    imageUrl: "/stock-images/commercial-strata-hotel-painting-whistler.jpg",
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
    body: "Three years standard on every job. Up to ten on select projects. In writing — not just a handshake.",
  },
];

const PROCESS_STEPS: { n: string; label: string; icon: LucideIcon }[] = [
  { n: "01", icon: MessageSquare,  label: "Request a quote" },
  { n: "02", icon: Ruler,          label: "Proposal & walkthrough" },
  { n: "03", icon: Paintbrush,     label: "Paint — with your home protected" },
  { n: "04", icon: BookOpen,       label: "Final report & warranty" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        imageUrl="/stock-images/I_Blackcomb_Dusk_1-scaled.jpg"
        imageAlt="Blackcomb mountain at dusk — Whistler, BC"
        headline={SITE.tagline}
        subline={SITE.subline}
      >
        <Button href="/contact" size="lg" className="!bg-background !text-navy hover:!bg-surface">
          Get a Quote
        </Button>
        <Button href="/work" variant="text" className="!text-background/90 hover:!text-background">
          See our work →
        </Button>
      </Hero>

      <TrustBar />

      {/* Why Alpenglow — navy background */}
      <Section className="bg-navy">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Why Alpenglow</div>
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
            <div className="mb-10 md:mb-14">
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Services</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.1]">
                What we offer.
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.href} delay={i * 0.07}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured work */}
      <Section className="bg-surface">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Recent work</div>
                <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1] max-w-xl">
                  Projects across the Sea to Sky.
                </h2>
              </div>
              <Button href="/work" variant="text">See all work →</Button>
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
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Designed around you</div>
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
                      "A written 3-year warranty, with extensions on select projects",
                    ]}
                  />
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
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Our process</div>
              <h2 className="font-serif text-background text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                From first call to <span className="text-alpine">final walkthrough</span>.
              </h2>
              <p className="mt-4 text-background/70 text-lg leading-relaxed">
                <strong className="text-background font-semibold">Four stages, documented at every step.</strong> No surprises, no improvising.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start">
            {PROCESS_STEPS.map((s, i) => (
              <Fragment key={s.n}>
                <FadeIn delay={i * 0.08}>
                  <div className="border-t border-background/20 pt-5">
                    <div className="w-10 h-10 rounded-sm bg-background/10 flex items-center justify-center mb-4">
                      <s.icon size={20} className="text-background" />
                    </div>
                    <div className="text-background/40 text-xs tabular-nums mb-1">{s.n}</div>
                    <div className="text-background font-medium">{s.label}</div>
                  </div>
                </FadeIn>
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden md:flex items-center justify-center pt-8 text-background/30"
                    aria-hidden="true"
                  >
                    <ChevronRight size={20} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-12">
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
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">What clients say</div>
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
              <Button href="/reviews" variant="text">See all reviews →</Button>
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
