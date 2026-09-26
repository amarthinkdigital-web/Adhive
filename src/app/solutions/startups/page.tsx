"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Rocket, Zap, Target, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function StartupsPage() {
  const router = useRouter();
  
  // Horizontal scroll setup
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <main className="min-h-screen bg-white selection:bg-sky-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-xs font-semibold text-sky-600 mb-6"
          >
            <Rocket className="w-3.5 h-3.5" />
            Adhive for Startups
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Scale faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-amber-500">limited resources.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Stop guessing what works. Launch professional marketing campaigns, capture hidden intent, and turn traffic into paying customers on day one.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="px-8" onClick={() => router.push('/contact')}>
              Start Building Free
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              View Startup Pricing
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Showcase */}
      <section ref={targetRef} className="relative h-[300vh] bg-sky-50">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute inset-0 bg-sky-100/30 pointer-events-none" />
          
          <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex items-center">
            {/* Title fixed on the left */}
            <div className="w-1/3 shrink-0 pr-8">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">The Growth Engine.</h2>
              <p className="text-sky-700/70 text-lg">
                See how Adhive transforms your startup's workflow from day one to series A and beyond.
              </p>
            </div>

            {/* Scrolling Cards */}
            <motion.div style={{ x }} className="flex gap-8 pl-8">
              {[
                { 
                  title: "Actionable Dashboards", 
                  desc: "Identify your most active visitors and turn them into warm leads.",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                },
                { 
                  title: "Real-time Analytics", 
                  desc: "Watch your campaigns perform in real-time without writing SQL.",
                  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                },
                { 
                  title: "Automated Outreach", 
                  desc: "Trigger Slack alerts and emails when high-intent accounts visit.",
                  img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
                }
              ].map((item, idx) => (
                <div key={idx} className="w-[600px] shrink-0 group">
                  <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-white/50 p-2 backdrop-blur-sm transition-colors hover:border-sky-400">
                    <div className="aspect-video overflow-hidden rounded-xl bg-zinc-100">
                      <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                      <p className="text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Adhive for Startups */}
      <section className="py-24 bg-zinc-50 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Everything a growing startup needs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We know you are moving fast. We built a platform that keeps up with your speed without breaking the bank.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast Launch", desc: "Deploy campaigns in minutes, not days. Focus on your product while we handle the marketing tech." },
              { icon: Target, title: "High-Intent Capture", desc: "Identify anonymous visitors from your target accounts and alert your sales team immediately." },
              { icon: TrendingUp, title: "Data-Driven Growth", desc: "Built-in analytics that show you exactly which channels are driving real revenue, not just clicks." }
            ].map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <GlassCard className="h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
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
      <section className="py-24 bg-sky-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to accelerate your startup?</h2>
          <p className="text-sky-50 text-lg mb-10">Join thousands of founders who use Adhive to build their marketing engine from day one.</p>
          <Button size="lg" className="bg-white text-sky-600 hover:bg-zinc-50 px-8" onClick={() => router.push('/contact')}>
            Start For Free Today
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
