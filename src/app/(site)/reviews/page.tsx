import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews — Whistler Painters with 5.0 Google Rating",
  description:
    "Reviews from homeowners and property managers across Whistler, Pemberton, and Squamish. 5.0 on Google — see what clients say about working with Alpenglow Painting.",
  alternates: { canonical: "/reviews" },
};

// Reviews page. Placeholder reviews — replace with live Google reviews embed
// or structured review data pulled from Google Business Profile API.

type Review = {
  name: string;
  location: string;
  rating: number;
  body: string;
};

const REVIEWS: Review[] = [
  {
    name: "Lawrence N.",
    location: "Whistler",
    rating: 5,
    body: "Jayden and his crew at Alpenglow did a fantastic job of painting the exterior of my house at Whistler, including sanding down and staining all beams, posts and two large decks. I am very happy with the whole process and especially the end result. Jayden kept me well informed throughout the process. He and his crew are just really great guys. They are professional, reliable, trustworthy, courteous and personable. I would highly recommend them for your painting project.",
  },
  {
    name: "Cheryl W.",
    location: "Whistler",
    rating: 5,
    body: "Jaden was professional and efficient. He took the time to explain the process he would need to do to change colour from dark to light and varnished wood to white semi gloss window trim. He went out to his truck and put together our quote and brought it back to us right away. Price was good! His crew were friendly and flexible and did a great job. They worked around other contractors with ease as we prepared for our home to be listed and got the job done in time and at the price quoted. I highly recommend Alpenglow Painting.",
  },
  {
    name: "Wilf G.",
    location: "Whistler",
    rating: 5,
    body: "Jaden and his team at Alpenglow worked hard on the preparation of our house prior to the actual painting, which gives me confidence it will look great for many years to come. And that's exactly why we chose Alpenglow. Jaden made sure a few deficiencies were completed to our satisfaction. We chose Alpenglow partly because they pay their employees a living wage, who seemed happy and respectful in their work.",
  },
  {
    name: "Don W.",
    location: "Whistler",
    rating: 5,
    body: "Expert workmanship in at a fair price. Very good communication. I highly recommend Alpenglow Painting.",
  },
  {
    name: "Neil McK.",
    location: "Whistler",
    rating: 5,
    body: "Good communication, fair estimate and overdelivered on nice work with pleasant team. You can't ask for more. Highly recommend.",
  },
  {
    name: "Adam N.",
    location: "Whistler",
    rating: 5,
    body: "Detailing proposal; value-added recommendations on approach and proactive communication. Well done.",
  },
  {
    name: "Robbie M.",
    location: "Whistler",
    rating: 5,
    body: "Very happy with quality of work, professionalism, quote break down and follow-up. Nice job!",
  },
  {
    name: "David N.",
    location: "Whistler",
    rating: 5,
    body: "Excellent customer service and workmanship. They won't leave until you're satisfied with the end product.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-navy text-navy" : "text-border"}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16">
        <Container>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-alpine mb-4">Reviews</div>
            <h1 className="font-serif text-navy text-[2rem] md:text-[3rem] leading-[1.1]">
              What clients say.
            </h1>
            <p className="mt-5 text-ink text-lg leading-relaxed">
              Homeowners and property managers from across the Sea to Sky. Every review is from a real project.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border py-8 md:py-10">
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

      {/* Review grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <div key={i} className="border border-border rounded-sm bg-surface p-6 md:p-7">
                <StarRating rating={r.rating} />
                <p className="mt-4 text-ink leading-relaxed">&ldquo;{r.body}&rdquo;</p>
                <div className="mt-5">
                  <div className="font-medium text-navy text-sm">{r.name}</div>
                  <div className="text-xs text-muted mt-0.5">{r.location}</div>
                </div>
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
        eyebrow="Join the list"
        heading="Ready to work with us?"
        subline="Most quotes are delivered the day of your site visit. The site visit is free."
        primaryLabel="Get a Quote"
      />
    </>
  );
}
