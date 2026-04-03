"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ParallaxMediaProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
};

export function ParallaxMedia({
  children,
  className,
  offset = 32,
}: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [offset, -offset]);

  return (
    <div className={className} ref={ref}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
