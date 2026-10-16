import React from "react";
import { cn } from "@/lib/utils";

/**
 * Gradient text with a slow specular sheen sweeping across it.
 * The animation is CSS-driven so the global `prefers-reduced-motion`
 * rule freezes it automatically.
 */
export function ShimmerText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("text-shimmer animate-shimmer", className)}>
      {children}
    </span>
  );
}
