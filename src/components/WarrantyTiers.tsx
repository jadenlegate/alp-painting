import { WARRANTY_TIERS } from "@/lib/warranty";

// Shared 3-up warranty coverage cards (all-navy). Used on both /warranty
// and /process so the two never drift. Data lives in @/lib/warranty.
export function WarrantyTiers() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {WARRANTY_TIERS.map((tier) => (
        <div key={tier.label} className="rounded-sm bg-navy text-background p-7 md:p-8">
          <div className="flex items-baseline gap-1.5 mb-4">
            <span className="font-serif text-5xl tabular-nums text-background">
              {tier.years}
            </span>
            <span className="text-sm text-background/70">years</span>
          </div>
          <div className="font-medium mb-2 leading-snug text-background">
            {tier.label}
          </div>
          <p className="text-sm leading-relaxed text-background/80">
            {tier.description}
          </p>
        </div>
      ))}
    </div>
  );
}
