import React from "react";
import { cn } from "@/lib/utils";

/**
 * TEQSEL Button — premium CTA with solar-gold shimmer hover.
 * variant: "primary" | "gold" | "outline" | "ghost"
 * size: "sm" | "md" | "lg"
 */
const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
  gold: "bg-accent text-accent-foreground hover:brightness-105 shadow-lg shadow-accent/30 btn-shimmer",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary/40 hover:bg-secondary",
  ghost: "text-foreground hover:bg-secondary",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export default function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}