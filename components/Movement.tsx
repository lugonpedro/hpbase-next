"use client";

import { motion } from "framer-motion";

interface YAxisProps {
  label: string;
  animate: number[];
  className?: string;
}

export function YAxis({ label, animate, className }: YAxisProps) {
  return (
    <motion.span
      animate={{ y: animate }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
      className={className}
    >
      {label}
    </motion.span>
  );
}
