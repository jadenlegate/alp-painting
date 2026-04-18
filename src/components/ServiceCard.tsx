import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Service tile used on home (§7.1 #4) and service overviews. Keep minimal:
// image, title, one-line blurb, terminal arrow. Hover lifts subtly.
type Props = {
  href: string;
  title: string;
  blurb: string;
  imageUrl?: string;
};

export function ServiceCard({ href, title, blurb, imageUrl }: Props) {
  return (
    <Link
      href={href}
      className="group block rounded-sm overflow-hidden border border-border bg-surface hover:border-navy/30 transition-colors"
    >
      <div className="aspect-[4/3] bg-stone-light/40 overflow-hidden">
        {imageUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone font-serif text-sm">
            {title}
          </div>
        )}
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl md:text-2xl text-navy">{title}</h3>
          <ArrowUpRight
            size={18}
            className="text-muted group-hover:text-navy transition-colors flex-shrink-0 mt-1"
          />
        </div>
        <p className="mt-2 text-sm text-ink/80 leading-relaxed">{blurb}</p>
      </div>
    </Link>
  );
}
