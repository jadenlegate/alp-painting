import { Star } from "lucide-react";

// Review tile. Matches eventual Sanity `testimonial` doc shape.
// Visual format is kept identical to the testimonials page cards
// (border, alpine stars, quote, name — no location).
export type Testimonial = {
  name: string;
  location?: string;
  rating?: number; // 1–5
  text: string;
};

export function TestimonialCard({ t }: { t: Testimonial }) {
  const stars = t.rating ?? 5;
  return (
    <div className="border border-border rounded-sm bg-surface p-6 md:p-7">
      <div className="flex gap-0.5" aria-label={`${stars} stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < stars ? "fill-alpine text-alpine" : "text-border"}
          />
        ))}
      </div>
      <p className="mt-4 text-ink leading-relaxed">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-5 font-medium text-navy text-sm">{t.name}</div>
    </div>
  );
}
