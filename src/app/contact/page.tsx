"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/animated/Reveal";
import { TextScramble } from "@/components/animated/TextScramble";
import { Building2, HelpCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero / Header ── */}
      <section className="relative pt-[130px] sm:pt-[140px] pb-8 sm:pb-10 overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-white border-b border-zinc-100">
        {/* Decorative background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold mb-5 border border-orange-100">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              We&apos;d love to hear from you
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight leading-tight">
              <TextScramble text="Contact adHive" />
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
              Have a question, partnership opportunity or need help? We&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="py-4 sm:py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Get in Touch heading */}
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4 sm:mb-8">
              Get in Touch
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">

            {/* General Enquiries & Support card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="group relative bg-white border border-zinc-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-[0_8px_32px_rgba(249,115,22,0.10)] transition-all duration-300"
            >
              <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-100 transition-colors">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base mb-1">
                General Enquiries &amp; Support
              </h3>
              <a
                href="mailto:contact@adhiveglobal.com"
                className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors break-all"
              >
                contact@adhiveglobal.com
              </a>
            </motion.div>

            {/* Company Information card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="group relative bg-white border border-zinc-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-[0_8px_32px_rgba(249,115,22,0.10)] transition-all duration-300"
            >
              <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-100 transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-zinc-900 text-base mb-1">
                Company Information
              </h3>
              <p className="text-sm text-zinc-500 mb-0.5">Legal Business Name</p>
              <p className="text-sm font-semibold text-zinc-800">
                Adhive Technocrats LLP
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
