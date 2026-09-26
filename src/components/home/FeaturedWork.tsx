"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const FeaturedWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial pop-in entrance animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. The criss-cross scrub animation on scroll
      // As the user scrolls through the section, the images move across each other
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // when the top of the section hits bottom of viewport
          end: "bottom top", // when the bottom of the section hits top of viewport
          scrub: 1, // smooth scrubbing (1 second delay for smoothness)
        },
      });

      // Left image moves from left edge towards the right
      tl.fromTo(
        leftImageRef.current,
        { x: "-20%", rotate: -8 },
        { x: "130%", rotate: 8, ease: "none" },
        0
      );

      // Right image moves from right edge towards the left
      tl.fromTo(
        rightImageRef.current,
        { x: "20%", rotate: 8 },
        { x: "-130%", rotate: -8, ease: "none" },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 md:py-40 lg:py-56 bg-zinc-50 overflow-hidden border-b border-zinc-200"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-zinc-50 to-zinc-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-30 mb-10 text-center flex flex-col items-center">
        <div ref={titleRef}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 mb-4">
            --- Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900">
            Sites shipped with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              engineering precision.
            </span>
          </h2>
          <p className="mt-6 text-zinc-600 max-w-xl mx-auto text-lg">
            Drag, drop, and publish world-class digital experiences.
          </p>
        </div>
      </div>

      {/* Criss-Cross Images Container */}
      <div className="relative w-full h-[400px] md:h-[600px] mt-16 max-w-[1400px] mx-auto">
        
        {/* Left Image (Moves Right) */}
        <div 
          ref={leftImageRef}
          className="absolute left-0 md:left-10 top-10 md:top-20 w-[60%] md:w-[45%] h-[280px] md:h-[450px] z-20"
        >
          <div className="w-full h-full relative group rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-zinc-200">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-60 duration-500" />
            <img 
              src="/images/featured_left_1790228521492.png" 
              alt="Digital Agency Design" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-white text-2xl font-bold mb-1">Nebula SaaS</h3>
              <p className="text-zinc-300 text-sm flex items-center gap-2">
                Marketing Site <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </p>
            </div>
          </div>
        </div>

        {/* Right Image (Moves Left) */}
        <div 
          ref={rightImageRef}
          className="absolute right-0 md:right-10 top-0 w-[60%] md:w-[45%] h-[280px] md:h-[450px] z-10"
        >
          <div className="w-full h-full relative group rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-zinc-200">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-60 duration-500" />
            <img 
              src="/images/featured_right_1790228583759.png" 
              alt="Abstract Website Interface" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 right-6 z-20 text-right">
              <h3 className="text-white text-2xl font-bold mb-1">Orbital Flow</h3>
              <p className="text-zinc-300 text-sm flex items-center justify-end gap-2">
                Commerce Landing <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};