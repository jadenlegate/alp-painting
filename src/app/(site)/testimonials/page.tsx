import type { Metadata } from "next";
import { IS_FULL } from "@/lib/flags";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { CtaBlock } from "@/components/CtaBlock";
import { Star, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials — Whistler Painters with 5.0 Google Rating",
  description:
    "Testimonials from homeowners and property managers across Whistler, Pemberton, and Squamish. 5.0 on Google — see and hear what clients say about working with Alpenglow Painting.",
  alternates: { canonical: "/testimonials" },
};

// Testimonials page. Written testimonials are placeholders for live Google
// reviews. Video testimonials: drop a vertical (9:16) file into /public and
// set `src` (and an optional `poster` image) on the matching entry below —
// the card switches from the placeholder to a real player automatically.
type VideoTestimonial = { title: string; src?: string; poster?: string };

const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  { title: "Exterior painting project" },
  { title: "Wood restoration project" },
  { title: "Interior painting project" },
];

type Review = {
  name: string;
  rating: number;
  body: string;
};

// Ordered so side-by-side pairs in the 2-col grid have similar lengths —
// shorts up top, mediums in the middle, long-form reviews at the bottom.
const REVIEWS: Review[] = [
  {
    name: "Don W.",
    rating: 5,
    body: "Expert workmanship in at a fair price. Very good communication. I highly recommend Alpenglow Painting.",
  },
  {
    name: "Neil McK.",
    rating: 5,
    body: "Good communication, fair estimate and overdelivered on nice work with pleasant team. You can't ask for more. Highly recommend.",
  },
  {
    name: "David N.",
    rating: 5,
    body: "Excellent customer service and workmanship. They won't leave until you're satisfied with the end product.",
  },
  {
    name: "Robbie M.",
    rating: 5,
    body: "Very happy with quality of work, professionalism, quote break down and follow-up. Nice job!",
  },
  {
    name: "Adam N.",
    rating: 5,
    body: "Detailing proposal; value-added recommendations on approach and proactive communication. Well done.",
  },
  {
    name: "Sarah M.",
    rating: 5,
    body: "Great customer service and quick quote generation. Excellent communications throughout project and great results!",
  },
  {
    name: "Jen F.",
    rating: 5,
    body: "Excellent! They got back to me quickly, checked out the job and quickly offered a thorough quote that was fair and affordable. I would definitely recommend them for their attention to customer service.",
  },
  {
    name: "Wilf G.",
    rating: 5,
    body: "Jaden and his team at Alpenglow worked hard on the preparation of our house prior to the actual painting, which gives me confidence it will look great for many years to come. And that's exactly why we chose Alpenglow. Jaden made sure a few deficiencies were completed to our satisfaction. We chose Alpenglow partly because they pay their employees a living wage, who seemed happy and respectful in their work.",
  },
  {
    name: "Scott H.",
    rating: 5,
    body: "I had an excellent experience with Alpenglow Painting working on a project from start to finish. Communication was clear, prompt, and professional throughout the entire process. Jaden and his crew are outstanding! Friendly, respectful, and a pleasure to have around. They kept the worksite clean and tidy each day and showed real attention to detail in both their work and how they treated the house. I'd definitely recommend them for your painting needs!",
  },
  {
    name: "Lawrence N.",
    rating: 5,
    body: "Jayden and his crew at Alpenglow did a fantastic job of painting the exterior of my house at Whistler, including sanding down and staining all beams, posts and two large decks. I am very happy with the whole process and especially the end result. Jayden kept me well informed throughout the process. He and his crew are just really great guys. They are professional, reliable, trustworthy, courteous and personable. I would highly recommend them for your painting project.",
  },
  {
    name: "Cheryl W.",
    rating: 5,
    body: "Jaden was professional and efficient. He took the time to explain the process he would need to do to change colour from dark to light and varnished wood to white semi gloss window trim. He went out to his truck and put together our quote and brought it back to us right away. Price was good! His crew were friendly and flexible and did a great job. They worked around other contractors with ease as we prepared for our home to be listed and got the job done in time and at the price quoted. I highly recommend Alpenglow Painting.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-alpine text-alpine" : "text-border"}
        />
      ))}
    </div>
  );
}

function VideoCard({ video }: { video: VideoTestimonial }) {
  return (
    <div>
      <div className="relative aspect-[9/16] rounded-sm overflow-hidden border border-navy/15 bg-navy">
        {video.src ? (
          /* eslint-disable-next-line jsx-a11y/media-has-caption */
          <video
            src={video.src}
            poster={video.poster}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-alpine/15 flex items-center justify-center">
              <Play size={24} className="text-alpine translate-x-0.5" fill="currentColor" />
            </div>
            <span className="mt-4 text-background/45 text-[0.7rem] uppercase tracking-[0.2em]">
              Coming soon
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 font-serif text-navy text-lg leading-snug tracking-tight">
        {video.title}
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">Testimonials</Eyebrow>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              What clients say.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Homeowners and property managers from across the Sea to Sky. Every
              testimonial is from a real project.
            </p>
          </div>
        </Container>
      </section>

      {/* Video testimonials — hidden in MVP mode until real videos exist. @/lib/flags */}
      {IS_FULL && (
        <section className="pb-16 md:pb-20">
          <Container>
            <div className="max-w-2xl mb-10 md:mb-14">
              <Eyebrow className="mb-4">Hear it from clients</Eyebrow>
              <h2 className="font-serif text-navy text-[1.75rem] md:text-[2.5rem] leading-[1.15]">
                In their own words.
              </h2>
            </div>
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
              {VIDEO_TESTIMONIALS.map((v) => (
                <VideoCard key={v.title} video={v} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Stats bar */}
      <section className="border-y border-border py-8 md:py-10 bg-stone-light/30">
        <Container>
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div>
              <div className="font-serif text-4xl text-navy tabular-nums">{avgRating}</div>
              <div className="mt-1 text-sm text-muted">Average rating</div>
              <div className="mt-1.5">
                <StarRating rating={5} />
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl text-navy tabular-nums">25+</div>
              <div className="mt-1 text-sm text-muted">Reviews</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Written review grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <div key={i} className="border border-border rounded-sm bg-surface p-6 md:p-7">
                <StarRating rating={r.rating} />
                <p className="mt-4 text-ink leading-relaxed">&ldquo;{r.body}&rdquo;</p>
                <div className="mt-5 font-medium text-navy text-sm">{r.name}</div>
              </div>
            ))}
          </div>

          {/* Google reviews link */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted mb-3">These reviews are also on Google.</p>
            <a
              href="https://www.google.com/search?q=Alpenglow+Painting+Whistler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy underline underline-offset-4 hover:text-navy-dark"
            >
              See us on Google →
            </a>
          </div>
        </Container>
      </section>

      <CtaBlock
        eyebrow="Get in touch"
        heading="Ready to work with us?"
        subline="Most quotes are delivered the day of your site visit. The site visit is free."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
