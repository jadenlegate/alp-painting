import { Check } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  tone?: "light" | "dark";
};

export function BulletList({ items, tone = "light" }: Props) {
  const textColor = tone === "dark" ? "text-background/85" : "text-ink";
  return (
    <ul className="space-y-3.5">
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
