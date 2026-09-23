"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { LayoutTemplate, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Platform Overview</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              The engine behind <br className="hidden md:block" />
              <span className="text-gradient-primary">your next website.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Adhive combines an AI-powered page builder, real-time visitor identification, and automated workflows into a single, unified platform.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="lg">Start Building</Button>
              <Button variant="outline" size="lg">View Docs</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            <img 
              src="/images/product_hero.png" 
              alt="Adhive Platform Interface" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-24 bg-black/5">
        <div className="max-w-6xl mx-auto px-6 space-y-32">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <LayoutTemplate className="text-primary w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">AI Website Builder</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Don't start from scratch. Our AI engine generates structure, copy, and layout based on your brand guidelines. Edit visually or dive into the code.
              </p>
              <ul className="space-y-3">
                {["Deterministic generation (no hallucinations)", "React & Tailwind CSS output", "Full code ownership"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 glass-strong rounded-2xl h-80 border border-primary/20 flex items-center justify-center"
            >
              <span className="text-muted-foreground font-mono">Builder UI Mockup</span>
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl h-80 border border-accent/20 flex items-center justify-center"
            >
              <span className="text-muted-foreground font-mono">Analytics UI Mockup</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-accent w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Visitor Identification</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Turn anonymous traffic into actionable pipelines. Identify visiting companies, enrich data automatically, and route alerts to your sales team in real-time.
              </p>
              <Button variant="glass" className="gap-2 group">
                Explore Analytics <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-10 md:p-16 border border-primary/20"
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to build?</h2>
            <p className="text-xl text-muted-foreground mb-8">Join the platform that growth teams rely on.</p>
            <Button variant="primary" size="lg">Start Free Trial</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
