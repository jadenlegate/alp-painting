import { Check } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  tone?: "light" | "dark";
  /** 2 = split into two columns from md up (single column on mobile). */
  columns?: 1 | 2;
};

export function BulletList({ items, tone = "light", columns = 1 }: Props) {
  const textColor = tone === "dark" ? "text-background/85" : "text-ink";
  return (
    <ul className={columns === 2 ? "grid gap-y-3.5 md:grid-cols-2 md:gap-x-10" : "space-y-3.5"}>
      {items.map((item, i) => (
        <li key={i} className={`flex items-start gap-3 leading-relaxed ${textColor}`}>
          <span className="mt-1 w-5 h-5 rounded-full bg-alpine/15 flex items-center justify-center flex-shrink-0">
            <Check size={12} className="text-alpine" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
