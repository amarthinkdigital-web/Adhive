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
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Trusted by leading brands & agencies</p>
        </div>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-4 opacity-40 grayscale">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-xl font-bold tracking-tight text-foreground">ZARA</span>
                <span className="text-xl font-bold tracking-tight text-foreground">BOSCH</span>
                <span className="text-xl font-bold tracking-tight text-foreground">SAMSUNG</span>
                <span className="text-xl font-bold tracking-tight text-foreground">L'ORÉAL</span>
                <span className="text-xl font-bold tracking-tight text-foreground">ADIDAS</span>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-50/50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-50/50 to-transparent pointer-events-none" />
        </div>
      </section>



      {/* How it works - Redesigned */}
      <section className="py-40 bg-sky-50/60 text-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-xs font-semibold text-sky-600 mb-6 backdrop-blur-sm">
              <Workflow className="w-3.5 h-3.5" />
              Deployment Pipeline
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-zinc-900">How Adhive works.</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              From finding the right influencer to measuring campaign ROI — all in one place.
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
              className="hidden lg:block absolute top-[120px] left-0 h-[2px] bg-gradient-to-r from-sky-400 via-amber-400 to-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.4)] z-0" 
            />

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  icon: GitBranch,
                  title: "Discover",
                  desc: "Find the perfect influencer from our database of 10M+ creators. Filter by niche, audience size, engagement rate, and location.",
                  color: "text-sky-500",
                  bg: "bg-sky-500/10",
                  borderColor: "border-sky-300",
                  img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
                },
                {
                  icon: LayoutTemplate,
                  title: "Collaborate",
                  desc: "Send briefs, manage contracts, approve content, and communicate with influencers — all within Adhive's workspace.",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  borderColor: "border-purple-500/30",
                  img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
                },
                {
                  icon: Rocket,
                  title: "Track & Grow",
                  desc: "Monitor impressions, reach, conversions, and ROI in real-time. Identify top performers and scale winning campaigns fast.",
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                  borderColor: "border-emerald-500/30",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative group bg-white border border-zinc-200 rounded-3xl p-8 backdrop-blur-md hover:bg-zinc-50 transition-all hover:-translate-y-2 shadow-xl"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden mb-10 relative border border-zinc-100">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                    <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl ${step.bg} ${step.borderColor} border flex items-center justify-center backdrop-blur-xl shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                      <step.icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                  </div>
                  <div className="text-center mt-10">
                    <div className="text-xs font-bold text-sky-500 tracking-widest uppercase mb-3">Step 0{i + 1}</div>
                    <h3 className="text-2xl font-bold mb-4 text-zinc-900 group-hover:text-sky-600 transition-colors">{step.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{step.desc}</p>
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
      {/* <FeaturesSection /> */}



      {/* Approach */}
      <Approach />

      {/* Testimonials - Redesigned */}
      <section className="relative py-40 overflow-hidden bg-white">
        {/* Background ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-28"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-xs font-semibold text-sky-600 mb-6 backdrop-blur-sm">
              <MessageSquare className="w-3.5 h-3.5" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
              Loved by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                brands & creators.
              </span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-xl mx-auto">
              Trusted by 500+ brands and 10,000+ influencers worldwide.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Riya Kapoor",
                role: "Brand Manager",
                company: "GlowCo Beauty",
                quote: "Adhive helped us find micro-influencers with 8× better engagement than the big names. Our last campaign saw a 3× ROI in just 30 days.",
                stars: 5,
                gradient: "from-violet-500 to-purple-600",
                accentColor: "violet",
              },
              {
                name: "Arjun Mehta",
                role: "Head of Growth",
                company: "FitFuel India",
                quote: "The real-time analytics dashboard is a game-changer. We can see exactly which influencer is driving sales and double down instantly.",
                stars: 5,
                gradient: "from-blue-500 to-cyan-500",
                accentColor: "blue",
                featured: true,
              },
              {
                name: "Sneha Verma",
                role: "Founder",
                company: "StyleHive",
                quote: "We ran 20 influencer campaigns in a month. Adhive's workflow automation saved us weeks of manual work and cut our campaign cost by 40%.",
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
                className={`relative group rounded-3xl p-10 border transition-all duration-500 flex flex-col ${
                  (t as any).featured
                    ? "bg-zinc-50 border-amber-200 shadow-[0_0_60px_rgba(245,158,11,0.12)]"
                    : "bg-white border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm"
                }`}
              >
                {/* Decorative quote mark */}
                <div className={`absolute top-6 right-6 text-8xl font-serif leading-none bg-gradient-to-br ${t.gradient} bg-clip-text text-transparent opacity-10 select-none pointer-events-none`}>
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-700 leading-relaxed text-[16px] flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold shadow-md shrink-0`}>
                    {t.name.split(" ").map((w: string) => w[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900 text-sm">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}, <span className="text-zinc-600">{t.company}</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats removed for a cleaner look */}
        </div>
      </section>

      {/* CTA */}
      <TalkToUs />

      <Footer />
    </main>
  );
}
