"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export const TalkToUs = () => {
  const router = useRouter();

  return (
    <section className="py-40 lg:py-48 relative overflow-hidden bg-white text-zinc-900">
      <div
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(253,156,1,0.18) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute bottom-[-140px] right-[-120px] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,206,0,0.14) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 mb-8">
            --- Let&apos;s talk
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Launch your next influencer campaign.
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's find the right creators for your brand and start driving real results from day one.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Button
              size="lg"
              className="gap-2 group bg-amber-500 text-white hover:bg-amber-600 shadow-[0_8px_32px_rgba(253,156,1,0.30)] border-none"
              onClick={() => router.push('/contact')}
            >
              Start a Campaign
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="bg-white border border-sky-200 text-sky-700 hover:bg-sky-50"
            >
              Find Influencers
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-mono text-amber-700">
            <span>hello@adhive.app</span>
            <span className="hidden sm:inline text-amber-200">/</span>
            <span>+1 (415) 555-0138</span>
            <span className="hidden sm:inline text-amber-200">/</span>
            <span>San Francisco, CA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};