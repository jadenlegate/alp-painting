"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

// Simple accordion. Kept client-side (stateful open/close). One item open
// at a time for focus; pass `allowMultiple` to open several.
// Optional `link` renders an underlined "learn more" link below the answer.
export type FAQItem = { q: string; a: string; link?: { href: string; label: string } };

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
                <p>{item.a}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-3 inline-flex items-center gap-1 font-medium text-navy underline underline-offset-4 decoration-[0.5px] hover:decoration-2"
                  >
                    {item.link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
