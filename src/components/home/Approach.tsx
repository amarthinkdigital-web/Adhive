"use client";

import React from "react";
import { motion } from "framer-motion";
import { Waypoints, ArrowUpRight } from "lucide-react";

const steps = [
  {
    index: "01",
    title: "Design",
    desc: "We map your tokens, components, and brand into a system you can reuse everywhere. Every primitive maps to clean, typed React.",
    tags: ["Research", "Wireframes", "UI / UX"],
  },
  {
    index: "02",
    title: "Build",
    desc: "Compose pages visually and get deterministic React and Tailwind written straight into your repository. No spaghetti, no locked templates.",
    tags: ["React", "Tailwind", "Edge render"],
  },
  {
    index: "03",
    title: "Optimize",
    desc: "Ship, measure, and iterate. Visitor identity, server-side analytics, and A/B variants run globally at sub-millisecond latency.",
    tags: ["Analytics", "A/B tests", "SEO"],
  },
];

export const Approach = () => {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-9 h-9 rounded-lg bg-zinc-100 border border-border flex items-center justify-center">
              <Waypoints className="w-4 h-4 text-zinc-700" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Our approach
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Creative development
            <br />
            studio.
          </h2>
        </motion.div>

        <div className="border-t border-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-8 py-10 lg:py-12 border-b border-border items-start group"
            >
              <div className="lg:col-span-1">
                <span className="text-3xl lg:text-4xl font-bold text-zinc-200 transition-colors duration-300 group-hover:text-zinc-300">
                  {step.index}
                </span>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{step.title}</h3>
              </div>

              <div className="lg:col-span-4">
                <p className="text-muted-foreground leading-relaxed text-[15px]">{step.desc}</p>
              </div>

              <div className="lg:col-span-3 flex flex-wrap gap-2 content-start">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-zinc-50 text-[11px] font-semibold uppercase tracking-wider text-zinc-600"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="lg:col-span-1 lg:justify-self-end">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground hover:text-zinc-600 transition-colors"
                >
                  Details
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};