"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { LayoutTemplate, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const router = useRouter();
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-sky-50 mb-6">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span className="text-sm font-medium text-sky-700">Platform Overview</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              The engine behind <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-amber-500">your next website.</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-8">
              A unified platform to build, identify visitors, and automate workflows.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="lg" className="bg-sky-500 hover:bg-sky-600 border-none text-white shadow-[0_8px_32px_rgba(14,165,233,0.3)]" onClick={() => router.push('/contact')}>Get Started</Button>
              <Button variant="outline" size="lg" className="border-sky-200 text-sky-700 hover:bg-sky-50">View Docs</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full pointer-events-none" />
            <img 
              src="/images/product_hero.png" 
              alt="Adhive Platform Interface" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-40 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 space-y-32">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                <LayoutTemplate className="text-sky-500 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">AI Website Builder</h2>
              <p className="text-zinc-600 text-lg mb-6">
                Generate structure, copy, and layout based on your brand guidelines.
              </p>
              {/* Removed list for simpler look */}
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
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-amber-500 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Visitor Identification</h2>
              <p className="text-zinc-600 text-lg mb-6">
                Turn anonymous traffic into actionable pipelines in real-time.
              </p>
              <Button variant="outline" className="gap-2 group border-amber-200 text-amber-700 hover:bg-amber-50">
                Explore Analytics <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 md:p-16 border border-sky-100 bg-sky-50/50 backdrop-blur-sm"
          >
            <Shield className="w-12 h-12 text-sky-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-zinc-900">Ready to build?</h2>
            <p className="text-xl text-zinc-600 mb-8">Join the platform that growth teams rely on.</p>
            <Button variant="primary" size="lg" className="bg-sky-500 hover:bg-sky-600 border-none text-white shadow-lg shadow-sky-500/30" onClick={() => router.push('/contact')}>Get Started</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
