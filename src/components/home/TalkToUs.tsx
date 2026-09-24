"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export const TalkToUs = () => {
  const router = useRouter();

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-zinc-950 text-white">
      <div
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute bottom-[-140px] right-[-120px] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)",
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 mb-8">
            --- Let&apos;s talk
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Let&apos;s talk about it.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            We will collaborate to find the right answer and bring progress to
            your business and to the world — starting with a site that ships in hours.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Button
              size="lg"
              className="gap-2 group bg-white text-black hover:bg-zinc-200"
              onClick={() => router.push('/contact')}
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800"
            >
              View Documentation
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-mono text-zinc-500">
            <span>hello@adhive.app</span>
            <span className="hidden sm:inline text-zinc-800">/</span>
            <span>+1 (415) 555-0138</span>
            <span className="hidden sm:inline text-zinc-800">/</span>
            <span>San Francisco, CA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};