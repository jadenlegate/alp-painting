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
    <section className="border-b border-border bg-background">
      <Container>
        <div className="py-6 md:py-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-ink/75"
            >
              <Icon size={16} className="text-alpine flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
