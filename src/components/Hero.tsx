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
    ? "min-h-[92vh] pt-28 pb-24 md:pt-36 md:pb-28"
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
                ? "bg-gradient-to-t from-black/75 via-black/40 to-black/30"
                : "bg-gradient-to-t from-black/60 via-black/25 to-black/30"
            }`}
          />
        </div>
      )}
      {!imageUrl && <div className="absolute inset-0 -z-10 bg-navy" />}

      <Container>
        <motion.div
          className={`${isHome ? "max-w-5xl" : "max-w-3xl"} ${alignClass}`}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {eyebrow && (
            <motion.div
              variants={item}
              className={`text-xs uppercase tracking-[0.2em] mb-5 ${
                imageUrl ? "text-alpine" : "text-alpine"
              }`}
            >
              {eyebrow}
            </motion.div>
          )}
          <motion.h1
            variants={item}
            className={`font-serif tracking-tight ${
              isHome
                ? "text-[2.75rem] md:text-[5rem] lg:text-[6rem] leading-[1.0] font-bold"
                : "text-[2rem] md:text-[2.75rem] leading-[1.1]"
            } ${imageUrl || !isHome ? "text-background" : "text-background"}`}
          >
            {headline}
          </motion.h1>
          {subline && (
            <motion.p
              variants={item}
              className={`mt-6 md:mt-7 text-base md:text-xl max-w-xl ${
                align === "center" ? "mx-auto" : ""
              } text-background/80`}
            >
              {subline}
            </motion.p>
          )}
          {children && (
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
