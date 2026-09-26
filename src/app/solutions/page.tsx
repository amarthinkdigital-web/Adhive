"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Building2, Rocket, Briefcase, ArrowRight, TrendingUp, ShieldCheck, Gauge, Handshake, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SolutionsPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-amber-500">every scale.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10"
          >
            Adhive adapts to your workflow to accelerate growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <img 
              src="/images/solutions_hero.png" 
              alt="Scalable Solutions" 
              className="w-full max-w-4xl rounded-3xl shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-40 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="flex flex-col h-full" id="startups">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="text-sky-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Startups</h3>
              <p className="text-zinc-600 mb-8">
                Move fast. Launch professional sites in days and start capturing intent.
              </p>
              <Button variant="outline" className="mt-auto w-full group">
                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GlassCard>

            <GlassCard className="flex flex-col h-full ring-1 ring-primary/20 shadow-[0_0_30px_rgba(37,99,235,0.05)]" id="enterprise">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-amber-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Enterprise</h3>
              <p className="text-zinc-600 mb-8">
                Security, compliance, and onboarding for massive scale.
              </p>
              <Button variant="primary" className="mt-auto w-full group">
                Contact Sales <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GlassCard>

            <GlassCard className="flex flex-col h-full" id="agencies">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-orange-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Agencies</h3>
              <p className="text-zinc-600 mb-8">
                Deliver stunning results to clients faster from a unified dashboard.
              </p>
              <Button variant="outline" className="mt-auto w-full group">
                Partner with us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats removed for cleaner look */}

      {/* What you get */}
      <section className="py-24 bg-zinc-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Platform advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Built for how your team actually ships.</h2>
            <p className="text-lg text-muted-foreground">
              Every plan includes the same engineering-grade foundation. What changes is the scale, control, and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Intent leads, pipelined",
                desc: "Visitor identification enriches every session and pushes warm accounts straight to your CRM.",
              },
              {
                icon: Gauge,
                title: "Edge-fast websites",
                desc: "Sites built on Adhive are served globally with sub-100ms TTFB and automatic A/B variants.",
              },
              {
                icon: ShieldCheck,
                title: "Enterprise-grade security",
                desc: "SOC 2 Type II, SSO/SAML, granular roles, and data never used to train foundation models.",
              },
              {
                icon: Handshake,
                title: "White-glove onboarding",
                desc: "Dedicated experts set up your workspace, design tokens, and integrations with you.",
              },
              {
                icon: CheckCircle2,
                title: "Deterministic output",
                desc: "Every page is clean React and Tailwind in your repo — no lock-in, no generated spaghetti.",
              },
              {
                icon: Building2,
                title: "Multi-workspace control",
                desc: "Manage client sites, brands, and permissions from one unified dashboard.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard className="h-full group hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="w-11 h-11 bg-zinc-100 border border-border rounded-xl flex items-center justify-center mb-5 group-hover:bg-zinc-900 transition-colors">
                    <item.icon className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote removed for minimalism */}

      {/* CTA */}
      <section className="py-40 relative overflow-hidden bg-sky-50 text-zinc-900 border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to grow at your scale?</h2>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
              Whether you're a startup or enterprise, Adhive meets you where you are.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-sky-500 text-white hover:bg-sky-600 border-none shadow-[0_8px_32px_rgba(14,165,233,0.3)]" size="lg" onClick={() => router.push('/contact')}>
                Get Started
              </Button>
              <Button className="bg-white border border-sky-200 text-sky-700 hover:bg-sky-50" size="lg">
                Talk to Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
