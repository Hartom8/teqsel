import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

/**
 * Section heading block with eyebrow, title, and subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="mt-5 text-base text-muted-foreground sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}