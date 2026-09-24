"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const caseStudies = [
  {
    company: "Acme Corp",
    logo: "AC",
    title: "How Acme Corp 3× their pipeline in 60 days",
    metric: "+300%",
    metricLabel: "Inbound Pipeline",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    color: "bg-blue-500",
  },
  {
    company: "Global Tech",
    logo: "GT",
    title: "Reducing customer acquisition cost by 45%",
    metric: "-45%",
    metricLabel: "CAC",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    color: "bg-purple-500",
  },
  {
    company: "Beta Startup",
    logo: "BS",
    title: "Scaling from Seed to Series A with intent data",
    metric: "$10M",
    metricLabel: "Series A Raised",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    color: "bg-emerald-500",
  }
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-zinc-50 border-b border-border">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-zinc-900">
              Customer <span className="text-gradient-primary">Stories.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              See how the fastest-growing companies use Adhive to uncover hidden intent and drive massive revenue.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
               <GlassCard className="p-6 bg-white border border-zinc-200 shadow-sm text-center">
                 <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                 <div className="text-3xl font-bold text-zinc-900 mb-1">$2B+</div>
                 <div className="text-sm text-zinc-500 font-medium">Pipeline Generated</div>
               </GlassCard>
               <GlassCard className="p-6 bg-white border border-zinc-200 shadow-sm text-center">
                 <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                 <div className="text-3xl font-bold text-zinc-900 mb-1">50M+</div>
                 <div className="text-sm text-zinc-500 font-medium">Visitors Identified</div>
               </GlassCard>
               <GlassCard className="p-6 bg-white border border-zinc-200 shadow-sm text-center">
                 <Target className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                 <div className="text-3xl font-bold text-zinc-900 mb-1">4.8/5</div>
                 <div className="text-sm text-zinc-500 font-medium">Average ROI Rating</div>
               </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-32">
            {caseStudies.map((study, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                
                {/* Image Side with Parallax */}
                <div className="flex-1 w-full h-[500px] rounded-3xl overflow-hidden relative shadow-2xl group">
                  <motion.img 
                    style={{ y: yImage }}
                    src={study.image} 
                    alt={study.company} 
                    className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content Side */}
                <div className="flex-1">
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-12 h-12 rounded-xl text-white font-bold flex items-center justify-center text-lg shadow-md ${study.color}`}>
                        {study.logo}
                      </div>
                      <span className="text-lg font-semibold text-zinc-500">{study.company}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-zinc-900">
                      {study.title}
                    </h2>

                    <div className="flex items-center gap-6 mb-10 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <div className={`text-5xl font-black ${study.color.replace('bg-', 'text-')}`}>
                        {study.metric}
                      </div>
                      <div className="text-lg font-medium text-zinc-600 leading-tight">
                        {study.metricLabel}
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-lg font-semibold text-zinc-900 hover:text-blue-600 transition-colors group">
                      Read full case study 
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to be our next success story?</h2>
          <p className="text-zinc-400 text-lg mb-10">Start identifying visitors and closing more deals today.</p>
          <button className="bg-white text-black font-semibold hover:bg-zinc-200 px-8 py-4 rounded-xl transition-colors">
            Get a Personalized Demo
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
