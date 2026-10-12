"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Fades content up as it scrolls into view. Reduced-motion users get a plain
// fade (no movement) via <MotionConfig reducedMotion="user"> in Providers.
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
