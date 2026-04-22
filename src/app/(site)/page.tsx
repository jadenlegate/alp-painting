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
import { MessageSquare, UserCheck, ShieldCheck, MapPin, Ruler, Paintbrush, BookOpen, ChevronRight, type LucideIcon } from "lucide-react";
import { SITE } from "@/lib/site";
import { BulletList } from "@/components/BulletList";

const SERVICES = [
  {
    title: "Interior Painting",
    href: "/services/interior-painting",
    blurb: "Walls, trim, ceilings, doors. Clean lines and a process that respects your home.",
    imageUrl: "/Stock%20Images/stock-photo-bright-living-room-interior-trendy-blue-color-simple-modern-style.jpg",
  },
  {
    title: "Exterior Painting",
    href: "/services/exterior-painting",
    blurb: "Weather-tough finishes built for Whistler winters. Sikkens, Benjamin Moore, Sherwin-Williams.",
    imageUrl: "/Stock%20Images/new-contemporary-style-luxury-home-600nw-2400351577.webp",
  },
  {
    title: "Wood Restoration & Staining",
    href: "/services/wood-restoration",
    blurb: "Cedar siding, decks, timber-frame beams. Restored, stained, sealed to last.",
    imageUrl: "/Stock%20Images/wood-beams-13-111517455.jpg",
  },
  {
    title: "Cabinet Refinishing",
    href: "/services/cabinet-refinishing",
    blurb: "Factory-grade finishes without replacing the boxes. Spray-booth precision in your kitchen.",
    imageUrl: "/Stock%20Images/tinted-coty2024-kitchen-1024x690.jpg",
  },
  {
    title: "Light Carpentry & Repair",
    href: "/services/light-carpentry",
    blurb: "Rot, trim, and fascia repair done in-house — so your paint job doesn't stall waiting on another trade.",
    imageUrl: "/Stock%20Images/CornCobBlastingSideHouse.0063-67b24c93.webp",
  },
  {
    title: "Commercial, Strata & Hotels",
    href: "/services/commercial",
    blurb: "Flexible scheduling around operations and residents. Clear communication, no drama.",
    imageUrl: "/Stock%20Images/karpiel-steindel-architektura-bachleda-club-residence-rchitonic-pu-bachleda-hotel-022-04-arcit18.jpg",
  },
];

const FEATURED_PROJECTS: Project[] = [
  {
    slug: "whistler-chalet-exterior",
    title: "Kadenwood chalet — full exterior",
    location: "Whistler",
    serviceTags: ["Exterior", "Wood restoration"],
    coverUrl: "/Stock%20Images/old-mountain-house-m-serhat-sezgin-turkey-03.jpg",
  },
  {
    slug: "pemberton-farmhouse-interior",
    title: "Pemberton farmhouse interior",
    location: "Pemberton",
    serviceTags: ["Interior"],
    coverUrl: "/Stock%20Images/pexels-binyamin-mellish-106399.jpg",
  },
  {
    slug: "squamish-modern-cabinets",
    title: "Squamish modern — kitchen cabinets",
    location: "Squamish",
    serviceTags: ["Cabinet refinishing"],
    coverUrl: "/Stock%20Images/pexels-max-rahubovskiy-7031408.jpg",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Nico G.",
    location: "Whistler",
    rating: 5,
    text: "Jaden did two painting jobs for us. Both were done with great attention to detail and the end product was great. He's professional in his work and communication throughout. His team also did a good job cleaning up after themselves.",
  },
  {
    name: "David R.",
    location: "Whistler",
    rating: 5,
    text: "What really stood out was the communications. We were always informed of when they were coming to work and when they were not due to weather. Would recommend Jaden and his team for any residential painting job.",
  },
  {
    name: "Jane B.",
    location: "Whistler",
    rating: 5,
    text: "The best customer service from Jaden and his crew. He was so professional, on time and looked after every detail.",
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
        imageUrl="/Stock%20Images/I_Blackcomb_Dusk_1-scaled.jpg"
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
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Services</div>
                <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1] max-w-xl">
                  Residential, commercial, <span className="text-alpine">and everything in between</span>.
                </h2>
              </div>
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
          <div className="grid gap-10 md:gap-16 md:grid-cols-2 md:items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-stone-light/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Stock%20Images/6ModernMountainHomeStudioMcGee.jpg"
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
                <p className="mt-5 text-ink text-lg leading-relaxed">
                  <strong className="text-navy font-semibold">That belief shapes how we quote, schedule, and run every job.</strong> Here&rsquo;s what you can count on from the moment you call us:
                </p>
                <div className="mt-7">
                  <BulletList
                    items={[
                      "A clear, itemized estimate — no vague lump sums",
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

      {/* Service area */}
      <Section className="bg-surface">
        <Container>
          <FadeIn>
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-3">Service area</div>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.75rem] leading-[1.1]">
                Based in <span className="text-alpine">Whistler</span>.
              </h2>
              <p className="mt-4 text-ink text-lg leading-relaxed">
                <strong className="text-navy font-semibold">We&rsquo;re a Whistler operation.</strong> Most of our work is in the valley — occasionally we take on something further out when the project is the right fit.
              </p>
            </div>
          </FadeIn>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {SITE.serviceAreas.map((area, i) => (
              <FadeIn key={area} delay={i * 0.07}>
                <div className="flex items-center gap-2.5 bg-background border border-border rounded-sm p-4">
                  <MapPin size={15} className="text-alpine flex-shrink-0" />
                  <span className="text-ink text-sm font-medium">{area}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBlock
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
