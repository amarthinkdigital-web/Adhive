"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Approach } from "@/components/home/Approach";
import { TalkToUs } from "@/components/home/TalkToUs";
import { LayoutTemplate, Users, BarChart3, Zap, GitBranch, MessageSquare, Workflow, Rocket, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-zinc-200">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Marquee (Subtle) */}
      <section className="py-12 border-b border-border bg-zinc-50/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Trusted by engineering-led marketing teams</p>
        </div>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-4 opacity-40 grayscale">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-xl font-bold tracking-tight text-foreground">ACME</span>
                <span className="text-xl font-bold tracking-tight text-foreground">GLOBAL</span>
                <span className="text-xl font-bold tracking-tight text-foreground">QUANTUM</span>
                <span className="text-xl font-bold tracking-tight text-foreground">NEXUS</span>
                <span className="text-xl font-bold tracking-tight text-foreground">HORIZON</span>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-50/50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-50/50 to-transparent pointer-events-none" />
        </div>
      </section>



      {/* How it works */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-6">
              <Workflow className="w-3.5 h-3.5 text-primary" />
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">From repository to live site in minutes.</h2>
            <p className="text-lg text-muted-foreground">
              Connect your stack, compose pages with reusable components, and deploy straight to the edge. No build queues, no waiting rooms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/home_how_it_works.png"
                alt="How Adhive works"
                className="w-full rounded-2xl border border-border shadow-xl"
              />
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  icon: GitBranch,
                  title: "Connect your repository",
                  desc: "Link your GitHub or GitLab repo. Adhive reads your components, tokens, and config to understand your design system instantly.",
                },
                {
                  icon: LayoutTemplate,
                  title: "Compose pages visually",
                  desc: "Drag, nest, and configure primitives in the dashboard. Every change maps directly to clean React and Tailwind output committed to your branch.",
                },
                {
                  icon: Rocket,
                  title: "Deploy to the edge",
                  desc: "Merge and hit deploy. Adhive triggers a Vercel build and serves your site globally with preview URLs for every pull request.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-border flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-zinc-700" />
                    </div>
                    {i < 2 && <div className="w-px flex-1 bg-border my-2" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      <span className="text-muted-foreground font-mono text-xs mr-2">0{i + 1}</span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <FeaturedWork />

      {/* Features Grid */}
      <FeaturesSection />



      {/* Approach */}
      <Approach />

      {/* Testimonials - Redesigned */}
      <section className="relative py-32 overflow-hidden bg-[#09090b]">
        {/* Background ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-violet-400 mb-6 backdrop-blur-sm">
              <MessageSquare className="w-3.5 h-3.5" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5">
              Loved by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                engineering-led teams.
              </span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Marketing teams that ship fast and keep their codebases clean rely on Adhive every day.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Chen",
                role: "Head of Growth",
                company: "Quantia",
                quote: "We replaced four tools with Adhive. Landing pages ship in hours instead of weeks, and our engineers finally trust the marketing output.",
                stars: 5,
                gradient: "from-violet-500 to-purple-600",
                accentColor: "violet",
              },
              {
                name: "Marcus Reid",
                role: "VP Marketing",
                company: "Orbit Software",
                quote: "The visitor identification alone pays for itself. We know exactly which companies are on our site, in real time, without creepy tracking.",
                stars: 5,
                gradient: "from-blue-500 to-cyan-500",
                accentColor: "blue",
                featured: true,
              },
              {
                name: "Priya Sharma",
                role: "Founder",
                company: "Loop & Co.",
                quote: "Clean React and Tailwind output means we can take over anything Adhive generates. It's the only builder that respects our codebase.",
                stars: 5,
                gradient: "from-pink-500 to-rose-500",
                accentColor: "pink",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative group rounded-3xl p-8 border transition-all duration-500 flex flex-col ${
                  (t as any).featured
                    ? "bg-white/[0.08] border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.12)]"
                    : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.07] hover:border-white/15"
                }`}
              >
                {/* Decorative quote mark */}
                <div className={`absolute top-6 right-6 text-8xl font-serif leading-none bg-gradient-to-br ${t.gradient} bg-clip-text text-transparent opacity-20 select-none pointer-events-none`}>
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className={`w-4 h-4 fill-current ${
                      t.accentColor === "violet" ? "text-violet-400" :
                      t.accentColor === "blue" ? "text-blue-400" : "text-pink-400"
                    }`} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-300 leading-relaxed text-[15px] flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shadow-lg shrink-0`}>
                    {t.name.split(" ").map((w: string) => w[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}, <span className="text-zinc-400">{t.company}</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/[0.08]"
          >
            {[
              { value: "4×", label: "Faster shipping" },
              { value: "200ms", label: "Visitor alerts" },
              { value: "12+", label: "Integrations" },
              { value: "99.9%", label: "Global uptime" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-8 bg-[#09090b] hover:bg-white/[0.03] transition-colors">
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <TalkToUs />

      <Footer />
    </main>
  );
}
