"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  // "up" is the standard fade-slide-up; "left"/"right" for horizontal reveals
  direction?: "up" | "left" | "right";
};

const offsets = {
  up:    { y: 28, x: 0 },
  left:  { y: 0,  x: -24 },
  right: { y: 0,  x: 24 },
};

export function FadeIn({ children, className, delay = 0, direction = "up" }: Props) {
  const { x, y } = offsets[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.div>
  );
}
