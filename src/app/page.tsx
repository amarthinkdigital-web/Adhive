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



      {/* How it works - Redesigned */}
      <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-blue-400 mb-6 backdrop-blur-sm">
              <Workflow className="w-3.5 h-3.5" />
              Deployment Pipeline
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">From repository to live in minutes.</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Connect your stack, compose pages with reusable components, and deploy straight to the edge. No build queues, no waiting rooms.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden lg:block absolute top-[120px] left-0 w-full h-px bg-white/10" />
            
            {/* Animated glowing line */}
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden lg:block absolute top-[120px] left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-0" 
            />

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  icon: GitBranch,
                  title: "Connect",
                  desc: "Link your GitHub or GitLab repo. Adhive reads your components, tokens, and config to understand your design system instantly.",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  borderColor: "border-blue-500/30",
                  img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2000&auto=format&fit=crop"
                },
                {
                  icon: LayoutTemplate,
                  title: "Compose",
                  desc: "Drag, nest, and configure primitives in the dashboard. Every change maps directly to clean React and Tailwind output.",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  borderColor: "border-purple-500/30",
                  img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
                },
                {
                  icon: Rocket,
                  title: "Deploy",
                  desc: "Merge and hit deploy. Adhive triggers a Vercel build and serves your site globally with preview URLs for every pull request.",
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                  borderColor: "border-emerald-500/30",
                  img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative group bg-[#09090b] border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:bg-white/5 transition-all hover:-translate-y-2 shadow-2xl"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative border border-white/5">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
                    <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl ${step.bg} ${step.borderColor} border flex items-center justify-center backdrop-blur-xl shadow-lg shadow-black/50 group-hover:scale-110 transition-transform`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <div className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-2">Step 0{i + 1}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
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
