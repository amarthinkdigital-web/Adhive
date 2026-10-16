"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=";

export function TextScramble({
  text,
  className,
  autoPlayOnView = true,
}: {
  text: string;
  className?: string;
  autoPlayOnView?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);
  const raf = useRef<number | null>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const run = () => {
    if (reduce || !text) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    let iteration = 0;
    const tick = () => {
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < iteration) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 1 / 3;
      if (iteration < text.length) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        raf.current = null;
      }
    };
    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (autoPlayOnView && inView) run();
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, autoPlayOnView, reduce]);

  return (
    <span
      ref={ref}
      onMouseEnter={run}
      onFocus={run}
      aria-label={text}
      className={cn("inline-block", className)}
    >
      <span aria-hidden>{display}</span>
    </span>
  );
}
