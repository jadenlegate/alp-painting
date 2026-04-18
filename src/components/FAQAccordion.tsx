"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Simple accordion. Kept client-side (stateful open/close). One item open
// at a time for focus; pass `allowMultiple` to open several.
export type FAQItem = { q: string; a: string };

type Props = {
  items: FAQItem[];
  allowMultiple?: boolean;
};

export function FAQAccordion({ items, allowMultiple = false }: Props) {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-6 py-5 text-left hover:text-navy transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-navy">
                {item.q}
              </span>
              <span className="text-muted flex-shrink-0">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-10 text-ink leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
