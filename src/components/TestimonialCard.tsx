import { Star } from "lucide-react";

// Review tile. Matches eventual Sanity `testimonial` doc shape.
export type Testimonial = {
  name: string;
  location?: string;
  rating?: number; // 1–5
  text: string;
};

export function TestimonialCard({ t }: { t: Testimonial }) {
  const stars = t.rating ?? 5;
  return (
    <figure className="h-full flex flex-col border border-border rounded-sm bg-surface p-6 md:p-7">
      <div className="flex items-center gap-0.5 text-navy mb-4" aria-label={`${stars} stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < stars ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <blockquote className="text-ink leading-relaxed flex-1">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="text-navy font-medium">{t.name}</span>
        {t.location && <span className="text-muted"> · {t.location}</span>}
      </figcaption>
    </figure>
  );
}
