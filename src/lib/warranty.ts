// Single source of truth for the warranty coverage tiers. Both the
// /warranty page and the /process page render these via <WarrantyTiers>,
// so any edit here flows to both automatically.

export type WarrantyTier = {
  years: string;
  label: string;
  description: string;
};

export const WARRANTY_TIERS: WarrantyTier[] = [
  {
    years: "5",
    label: "Interior painting",
    description:
      "Walls, trim, ceilings, doors — every interior painting project. Covers peeling, flaking, and premature finish failure under normal interior conditions.",
  },
  {
    years: "5",
    label: "Exterior — solid finishes",
    description:
      "Solid paint and solid-body stain on siding, trim, and exterior wood. Covers peeling, flaking, and premature finish failure.",
  },
  {
    years: "2",
    label: "Exterior — semi-transparent & translucent stain",
    description:
      "Penetrating stains wear gracefully but faster than solid finishes — so the warranty matches how the product actually performs in mountain sun.",
  },
];
