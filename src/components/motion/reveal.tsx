"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  amount?: number;
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
};

export function Reveal({
  amount = 0.2,
  children,
  className,
  delay = 0,
  once = true,
  y = 28,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount, once }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
