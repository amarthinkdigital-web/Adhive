"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase, Layers, BarChart, Users2, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AgenciesPage() {
  const router = useRouter();
  
  // Horizontal scroll setup
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden bg-purple-950 text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/20 text-xs font-semibold text-purple-200 mb-6"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Adhive for Agencies
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Deliver stunning results <span className="text-purple-300">faster.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-purple-100/70 max-w-2xl mx-auto mb-10"
          >
            Manage multiple client workspaces from a single unified dashboard. Build high-converting campaigns and prove ROI with our agency-first platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8" onClick={() => router.push('/contact')}>
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="border-purple-700 text-white hover:bg-purple-800 px-8">
              Explore Agency Features
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Showcase */}
      <section ref={targetRef} className="relative h-[300vh] bg-purple-950">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden border-t border-purple-900/50">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-transparent pointer-events-none z-0" />
          
          <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex items-center">
            {/* Title fixed on the left */}
            <div className="w-1/3 shrink-0 pr-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Scale your operations.</h2>
              <p className="text-purple-200/70 text-lg">
                We give you the superpower to manage 10x more clients with half the effort.
              </p>
            </div>

            {/* Scrolling Cards */}
            <motion.div style={{ x }} className="flex gap-8 pl-8">
              {[
                { 
                  title: "Unified Command Center", 
                  desc: "Jump between client accounts instantly without sharing passwords or managing multiple logins.",
                  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                },
                { 
                  title: "White-labeled Client Reporting", 
                  desc: "Send beautiful, branded reports that automatically pull data and prove your value.",
                  img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                },
                { 
                  title: "Scalable Workflows", 
                  desc: "Copy high-performing campaigns and automation sequences from one client to another.",
                  img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                }
              ].map((item, idx) => (
                <div key={idx} className="w-[600px] shrink-0 group">
                  <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-purple-900/20 p-2 backdrop-blur-sm transition-colors hover:border-purple-500/50">
                    <div className="aspect-video overflow-hidden rounded-xl bg-purple-950">
                      <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-purple-200/80">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-tenant Features */}
      <section className="py-24 border-y border-border bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Built for multiple clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Stop juggling logins and fragmented data. Adhive gives you a single command center for all your client accounts.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Unified Dashboard", desc: "Switch between client workspaces instantly. Manage billing, permissions, and campaigns in one place." },
              { icon: BarChart, title: "White-labeled Reports", desc: "Generate beautiful, branded analytics reports that prove your agency's value automatically." },
              { icon: Users2, title: "Team Collaboration", desc: "Assign different team members to different client accounts with granular access controls." }
            ].map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <GlassCard className="h-full relative overflow-hidden group border-purple-100">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Partner with Adhive</h2>
          <p className="text-purple-100 text-lg mb-10">Expand your service offerings, prove ROI faster, and grow your agency revenue.</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-zinc-100 px-8" onClick={() => router.push('/contact')}>
            Apply to Partner Program
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
