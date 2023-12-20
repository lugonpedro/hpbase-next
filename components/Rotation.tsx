"use client";

import { motion } from "framer-motion";

interface RotationProps {
  label: string;
  className?: string;
}

export function Rotation({ label, className }: RotationProps) {
  return (
    <motion.span
      animate={{ rotate: [0, 20, 0] }}
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
