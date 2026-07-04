// Single source of truth for the service list. The Navbar (grouped
// dropdown) and Footer (flat list) both import from here so the two can
// never drift out of sync. Add or reorder a service in one place.

export type ServiceLink = { label: string; href: string; fullOnly?: boolean };
export type ServiceGroup = { heading: string; items: ServiceLink[]; fullOnly?: boolean };

// `fullOnly` marks services hidden in MVP mode (main branch) but fully
// intact in full mode (dev/preview) — see @/lib/flags.
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    heading: "Painting",
    items: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      { label: "Cabinet Refinishing", href: "/services/cabinet-refinishing", fullOnly: true },
    ],
  },
  {
    heading: "Wood & Restoration",
    items: [
      { label: "Wood Refinishing & Staining", href: "/services/wood-restoration" },
      { label: "Log Restoration", href: "/services/log-restoration", fullOnly: true },
      { label: "Deck & Fence Staining", href: "/services/deck-fence-staining" },
      { label: "Light Carpentry & Repair", href: "/services/light-carpentry" },
    ],
  },
  {
    heading: "Commercial & Trade",
    fullOnly: true,
    items: [
      { label: "New Construction & Renovation", href: "/services/new-construction" },
      { label: "Commercial, Strata & Hotels", href: "/services/commercial" },
    ],
  },
];

/** Service groups filtered for the current site mode. */
export function getServiceGroups(full: boolean): ServiceGroup[] {
  if (full) return SERVICE_GROUPS;
  return SERVICE_GROUPS.filter((g) => !g.fullOnly)
    .map((g) => ({ ...g, items: g.items.filter((s) => !s.fullOnly) }))
    .filter((g) => g.items.length > 0);
}

// Flattened list, in menu order — for the footer and anywhere a simple
// list is needed.
export const SERVICES: ServiceLink[] = SERVICE_GROUPS.flatMap((g) => g.items);
