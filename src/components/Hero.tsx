"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";

type Props = {
  eyebrow?: string;
  headline: ReactNode;
  subline?: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  children?: ReactNode;
  variant?: "home" | "inner";
  align?: "left" | "center";
};

const EASE = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

export function Hero({
  eyebrow,
  headline,
  subline,
  imageUrl,
  imageAlt = "",
  children,
  variant = "inner",
  align = "left",
}: Props) {
  const isHome = variant === "home";
  const heightClass = isHome
    ? "min-h-[88vh] pt-28 pb-20 md:pt-32 md:pb-24"
    : "pt-28 pb-12 md:pt-36 md:pb-16";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <section className={`relative w-full overflow-hidden ${heightClass} flex items-end`}>
      {imageUrl && (
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
          <div
            className={`absolute inset-0 ${
              isHome
                ? "bg-gradient-to-t from-black/60 via-black/30 to-black/40"
                : "bg-gradient-to-t from-black/55 via-black/25 to-black/35"
            }`}
          />
        </div>
      )}
      {!imageUrl && <div className="absolute inset-0 -z-10 bg-stone-light/40" />}

      <Container>
        <motion.div
          className={`max-w-3xl ${alignClass}`}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {eyebrow && (
            <motion.div
              variants={item}
              className={`text-xs uppercase tracking-[0.2em] mb-5 ${
                imageUrl ? "text-background/80" : "text-navy/70"
              }`}
            >
              {eyebrow}
            </motion.div>
          )}
          <motion.h1
            variants={item}
            className={`font-serif leading-[1.1] ${
              isHome ? "text-[2.25rem] md:text-[3.5rem]" : "text-[2rem] md:text-[2.75rem]"
            } ${imageUrl ? "text-background" : "text-navy"}`}
          >
            {headline}
          </motion.h1>
          {subline && (
            <motion.p
              variants={item}
              className={`mt-5 md:mt-6 text-base md:text-lg max-w-xl ${
                align === "center" ? "mx-auto" : ""
              } ${imageUrl ? "text-background/90" : "text-ink"}`}
            >
              {subline}
            </motion.p>
          )}
          {children && (
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
