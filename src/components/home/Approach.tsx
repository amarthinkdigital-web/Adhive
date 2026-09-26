"use client";

import React from "react";
import { motion } from "framer-motion";
import { Waypoints, ArrowUpRight } from "lucide-react";

const steps = [
  {
    index: "01",
    title: "Design",
    desc: "We analyze your brand identity, target audience, and campaign goals to match you with the most relevant creator profiles.",
    tags: [],
  },
  {
    index: "02",
    title: "Build",
    desc: "Create campaign briefs, send proposals, review content, and manage deliverables in one unified workspace.",
    tags: [],
  },
  {
    index: "03",
    title: "Optimize",
    desc: "Track real-time performance, measure ROI, and scale winning influencer partnerships automatically.",
    tags: [],
  },
];

export const Approach = () => {
  return (
    <section className="py-32 lg:py-48 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
              <Waypoints className="w-4 h-4 text-amber-600" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600/80">
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
                <span className="text-3xl lg:text-5xl font-bold text-amber-100 transition-colors duration-300 group-hover:text-amber-300">
                  {step.index}
                </span>
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{step.title}</h3>
              </div>

              <div className="lg:col-span-4">
                <p className="text-muted-foreground leading-relaxed text-[15px]">{step.desc}</p>
              </div>

              {/* Tags removed for a cleaner look */}

              <div className="lg:col-span-1 lg:justify-self-end">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground hover:text-amber-600 transition-colors"
                >
                  Details
                  <ArrowUpRight className="w-4 h-4 text-amber-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};