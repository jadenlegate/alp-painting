import { Star, Shield, HardHat, MapPin, Award } from "lucide-react";
import { Container } from "./Container";

// Thin strip of trust signals directly under the hero. Per brief §7.1 —
// "subtle, just below hero" — use muted styling. Not loud.
const ITEMS = [
  { icon: Star, label: "5-star Google rated" },
  { icon: Shield, label: "$5M liability insured" },
  { icon: HardHat, label: "WorkSafeBC covered" },
  { icon: MapPin, label: "Locally owned" },
  { icon: Award, label: "Up to 10-year warranty" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-stone-light/30">
      <Container>
        <div className="py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs md:text-sm text-ink/80"
            >
              <Icon size={14} className="text-navy" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
