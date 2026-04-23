"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeUrl: string;
  afterUrl: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  location?: string;
  aspectClass?: string;
};

export function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  beforeAlt,
  afterAlt,
  caption,
  location,
  aspectClass = "aspect-[4/3]",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in e ? e.touches[0]?.clientX ?? 0 : (e as MouseEvent).clientX;
      updateFromClientX(clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, updateFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <figure className="w-full">
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden rounded-sm border border-border bg-stone-light/40 select-none cursor-ew-resize ${aspectClass}`}
        onMouseDown={(e) => {
          setDragging(true);
          updateFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          setDragging(true);
          updateFromClientX(e.touches[0].clientX);
        }}
      >
        {/* After (base layer — always full width) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterUrl}
          alt={afterAlt}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Before (same layout as after, clipped by clip-path — no layout shift) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeUrl}
          alt={beforeAlt}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        {/* Corner labels */}
        <div className="absolute top-3 left-3 bg-navy/90 text-background text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm font-medium pointer-events-none">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-alpine/95 text-navy text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm font-medium pointer-events-none">
          After
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-background shadow-[0_0_0_1px_rgba(0,0,0,0.2)] pointer-events-none"
          style={{ left: `calc(${position}% - 1px)` }}
        />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={onKeyDown}
          onMouseDown={(e) => {
            e.stopPropagation();
            setDragging(true);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            setDragging(true);
          }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-background border-2 border-navy shadow-lg flex items-center justify-center text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-alpine cursor-ew-resize"
          style={{ left: `${position}%` }}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 15 12 9 6" transform="translate(-6,0)" />
          </svg>
        </button>
      </div>
      {(caption || location) && (
        <figcaption className="mt-3 text-sm text-muted flex flex-wrap items-center gap-x-3 gap-y-1">
          {caption && <span className="text-ink">{caption}</span>}
          {location && (
            <span className="text-xs uppercase tracking-widest text-alpine">
              {location}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
