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
            Solutions for <span className="text-gradient-primary">every scale.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Whether you're a lean startup or a global enterprise, Adhive adapts to your workflow to accelerate growth.
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
      <section className="py-24 bg-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="flex flex-col h-full" id="startups">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Startups</h3>
              <p className="text-muted-foreground mb-8">
                Move fast without breaking things. Launch professional marketing sites in days, not months, and start capturing intent immediately.
              </p>
              <Button variant="outline" className="mt-auto w-full group">
                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GlassCard>

            <GlassCard className="flex flex-col h-full ring-1 ring-primary/20 shadow-[0_0_30px_rgba(37,99,235,0.05)]" id="enterprise">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Enterprise</h3>
              <p className="text-muted-foreground mb-8">
                Uncompromising security, SOC 2 compliance, advanced SSO, and white-glove onboarding for massive scale and complex org charts.
              </p>
              <Button variant="primary" className="mt-auto w-full group">
                Contact Sales <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GlassCard>

            <GlassCard className="flex flex-col h-full" id="agencies">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-purple-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Agencies</h3>
              <p className="text-muted-foreground mb-8">
                Deliver stunning results to your clients faster. Manage multiple client workspaces from a single unified dashboard.
              </p>
              <Button variant="outline" className="mt-auto w-full group">
                Partner with us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { value: "4×", label: "Faster page shipping" },
            { value: "200ms", label: "Real-time visitor alerts" },
            { value: "12+", label: "Native integrations" },
            { value: "99.9%", label: "Global uptime" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

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

      {/* Quote */}
      <section className="py-24 relative overflow-hidden border-b border-border">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="w-10 h-10 text-zinc-300 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug mb-8">
              &ldquo;We replaced three disconnected tools with Adhive. Our team ships landing pages in hours,
              and sales sees the right accounts at exactly the right moment.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-zinc-900 text-white flex items-center justify-center font-semibold">
                DR
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Daniel Reyes</div>
                <div className="text-xs text-muted-foreground">CMO, Northbeam Systems</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to grow at your scale?</h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Whether you're a two-person startup or a thousand-person enterprise, Adhive meets you where you are.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-black hover:bg-zinc-200" size="lg" onClick={() => router.push('/contact')}>
                Get Started
              </Button>
              <Button className="bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800" size="lg">
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
