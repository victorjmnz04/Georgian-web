"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        exit={reducedMotion ? undefined : { filter: "blur(8px)", opacity: 0, y: 18 }}
        initial={reducedMotion ? undefined : { filter: "blur(10px)", opacity: 0, y: 18 }}
        key={pathname}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
