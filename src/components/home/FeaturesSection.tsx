"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayoutTemplate, Users, BarChart3, Zap } from "lucide-react";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: "Component Architecture",
    desc: "Build complex layouts using predefined primitives. No more hacking templates—just write standard React components and let Adhive handle the assembly.",
    icon: LayoutTemplate,
    image: "/images/component_architecture_1790228139430.png",
    colSpan: "lg:col-span-2",
    delay: 0,
  },
  {
    title: "Visitor Identity",
    desc: "Clearbit-level enrichment built directly into your analytics dashboard natively.",
    icon: Users,
    image: "/images/visitor_identity_1790228153597.png",
    colSpan: "lg:col-span-1",
    delay: 0.1,
  },
  {
    title: "Server-Side Analytics",
    desc: "Privacy-first, zero-cookie analytics processed on the edge for sub-millisecond reporting.",
    icon: BarChart3,
    image: "/images/server_analytics_1790228169919.png",
    colSpan: "lg:col-span-1",
    delay: 0.2,
  },
  {
    title: "Edge Routing",
    desc: "Serve variants and run A/B tests globally with zero latency. Powered by Next.js middleware and Vercel edge functions.",
    icon: Zap,
    image: "/images/edge_routing_1790228184493.png",
    colSpan: "lg:col-span-2",
    delay: 0.3,
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(cardsRef.current, { 
        y: 80, 
        opacity: 0,
        rotateX: -15,
        scale: 0.95
      });

      // Create scroll-triggered animation
      ScrollTrigger.batch(cardsRef.current, {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            stagger: 0.15,
            duration: 1,
            ease: "power4.out",
            overwrite: true
          });
        },
        start: "top 85%",
      });

      // Add elegant hover animations for each card
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        const img = card.querySelector(".feature-image");
        const iconWrapper = card.querySelector(".feature-icon-wrapper");
        
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, duration: 0.4, ease: "power2.out" });
          gsap.to(img, { scale: 1.05, duration: 0.6, ease: "power2.out" });
          gsap.to(iconWrapper, { scale: 1.1, rotate: 5, duration: 0.4, ease: "back.out(2)" });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
          gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
          gsap.to(iconWrapper, { scale: 1, rotate: 0, duration: 0.4, ease: "power2.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#09090b] text-white border-b border-[#27272a] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-zinc-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The complete platform.</h2>
          <p className="text-xl text-zinc-400">
            Everything you need to build, launch, and optimize your marketing presence in a single unified dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm ${feature.colSpan}`}
              style={{ perspective: "1000px" }}
            >
              {/* Image Container */}
              <div className="relative w-full h-48 md:h-64 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-zinc-900/40 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image w-full h-full object-cover transform-gpu"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1 z-20 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="feature-icon-wrapper mb-6 w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-xl">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{feature.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed max-w-md">
                  {feature.desc}
                </p>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
