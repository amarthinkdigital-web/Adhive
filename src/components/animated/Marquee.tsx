"use client";

import React from "react";
import { cn } from "@/lib/utils";

function Hex({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("h-3.5 w-3.5 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7L12 2.5Z" />
    </svg>
  );
}

export function Marquee({
  items,
  reverse = false,
  className,
  itemClassName,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((text, i) => (
        <li
          key={i}
          className={cn(
            "flex items-center gap-2 px-4 text-sm font-bold uppercase tracking-[0.18em] whitespace-nowrap sm:text-base",
            itemClassName
          )}
        >
          <Hex className="opacity-50" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("group relative flex w-full overflow-hidden mask-fade-x", className)}>
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]"
        )}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
