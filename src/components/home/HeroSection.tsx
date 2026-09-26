"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(
        [badgeRef.current, headlineRef.current, subRef.current, ctaRef.current, statsRef.current],
        { opacity: 0, y: 40 }
      );
      gsap.set(gridRef.current, { opacity: 0 });
      gsap.set([image1Ref.current, image2Ref.current], { 
        opacity: 0, 
        scale: 0.8, 
        rotateY: 45,
        rotateX: 15,
        z: -100
      });

      // Orb floating animation (continuous)
      gsap.to(orbRef.current, {
        y: -28,
        x: 14,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(orb2Ref.current, {
        y: 20,
        x: -18,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      // Main entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(gridRef.current, { opacity: 1, duration: 1.2 })
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.7")
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(image1Ref.current, { 
          opacity: 1, 
          scale: 1, 
          rotateY: -5,
          rotateX: 5,
          z: 0,
          duration: 1.2,
          ease: "back.out(1.2)"
        }, "-=0.6")
        .to(image2Ref.current, { 
          opacity: 1, 
          scale: 1, 
          rotateY: 5,
          rotateX: -5,
          z: 30,
          duration: 1.2,
          ease: "back.out(1.2)"
        }, "-=1.0")
        .to(statsRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.8");

      // Subtle floating for the images
      gsap.to(image1Ref.current, {
        y: -15,
        rotateY: -2,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });
      gsap.to(image2Ref.current, {
        y: 15,
        rotateY: 8,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa] border-b border-[#e4e4e7] pt-20"
    >
      {/* ── Animated grid background ── */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0,
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)",
        }}
      />

      {/* ── Gradient orbs ── */}
      <div
        ref={orbRef}
        className="absolute top-[-80px] left-[-120px] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-[-60px] right-[-100px] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16 pb-16 grid lg:grid-cols-[1fr_480px] gap-20 items-center">
        {/* LEFT: Text content */}
        <div className="flex flex-col items-start max-w-2xl">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold text-amber-700 mb-8 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            The #1 Influencer Marketing Platform
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] text-[#09090b] mb-6"
          >
            Connect brands with{" "}
            <span
              className="animate-[gradient-shift_4s_ease_infinite]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #fd9c01 0%, #ffce00 50%, #fc7f03 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
              }}
            >
              influencers
            </span>
            <br />
            that actually
            <br className="hidden md:block" />
            <span className="relative inline-block">
              convert.
              {/* Underline accent */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 8 C70 2, 160 12, 298 5"
                  stroke="url(#underlineGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underlineGrad" x1="0" y1="0" x2="300" y2="0">
                    <stop offset="0%" stopColor="#ffce00" />
                    <stop offset="100%" stopColor="#fc7f03" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* CTA row */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mt-12 mb-14">
            <Button
              variant="primary"
              size="lg"
              className="gap-2 group"
              onClick={() => router.push('/contact')}
              style={{
                background: "linear-gradient(135deg, #fd9c01, #fc7f03)",
                border: "none",
                boxShadow: "0 8px 32px rgba(253,156,1,0.30)",
              }}
            >
              Start a Campaign
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 hover:border-violet-300 hover:text-violet-700 transition-colors"
            >
              Explore Influencers
            </Button>
          </div>

          {/* Stats removed for minimalist look */}
        </div>

        {/* RIGHT: 2-Image Flip/Parallax Layout */}
        <div className="hidden lg:block relative w-full h-[520px] perspective-1000" style={{ perspective: "1000px" }}>
          
          {/* Background Image (Image 1) */}
          <img 
            ref={image1Ref}
            src="/images/product_hero.png"
            alt="Adhive Platform Features"
            className="absolute top-10 right-0 w-[420px] h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 z-10 object-cover"
            style={{ 
              transformOrigin: "center right",
              willChange: "transform"
            }}
          />

          {/* Foreground Image (Image 2) */}
          <img 
            ref={image2Ref}
            src="/images/home_how_it_works.png"
            alt="Adhive Workflow"
            className="absolute -top-4 -left-12 w-[380px] h-auto rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] border border-white/60 z-20 object-cover backdrop-blur-sm"
            style={{ 
              transformOrigin: "center left",
              willChange: "transform"
            }}
          />

          {/* Floating badge: "99ms" */}
          <div
            className="absolute top-4 -right-8 px-4 py-2 rounded-2xl text-xs font-bold shadow-xl z-30 animate-bounce"
            style={{
              background: "linear-gradient(135deg, #fd9c01, #fc7f03)",
              color: "#fff",
              boxShadow: "0 8px 24px rgba(253,156,1,0.5)",
              animationDuration: "3s"
            }}
          >
            ⚡ 99ms Deploy
          </div>
        </div>
      </div>

      {/* ── Bottom fade to white ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #fafafa)",
        }}
      />
    </section>
  );
};
