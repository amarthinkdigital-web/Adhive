"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, FileText, Users, Search, ArrowRight, Clock, PlayCircle, Send, ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "How to increase conversion by 40% without more traffic",
    excerpt: "Most teams focus entirely on acquiring more visitors. But the fastest path to growth is converting the traffic you already have. Here's how Adhive's on-page personalization drove a 40% lift for one B2B team.",
    category: "Growth",
    readTime: "5 min read",
    date: "Sep 18, 2026",
    author: { name: "Priya Mehta", role: "Head of Growth" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    tag: "Popular",
    tagColor: "bg-white text-blue-700",
    avatarColor: "#3b82f6",
  },
  {
    title: "The ultimate guide to AI website builders in 2026",
    excerpt: "We benchmarked 12 AI website builders across design quality, code output, and integration depth. The results might surprise you — and one platform came out miles ahead on engineering standards.",
    category: "Guides",
    readTime: "12 min read",
    date: "Sep 12, 2026",
    author: { name: "James Keller", role: "Technical Writer" },
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop",
    tag: "Deep Dive",
    tagColor: "bg-white text-violet-700",
    avatarColor: "#7c3aed",
  },
  {
    title: "Case Study: How Acme Corp 3× their pipeline in 60 days",
    excerpt: "Acme Corp's marketing team was stuck using three disconnected tools. After switching to Adhive, they built a full visitor identification pipeline and watched inbound demos triple in just two months.",
    category: "Case Study",
    readTime: "8 min read",
    date: "Sep 5, 2026",
    author: { name: "Sarah Jenkins", role: "Customer Success" },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
    tag: "Featured",
    tagColor: "bg-white text-orange-700",
    avatarColor: "#f97316",
  },
  {
    title: "Understanding B2B Visitor Identification at scale",
    excerpt: "Intent data is only valuable if it is accurate and timely. This technical breakdown explains exactly how Adhive's enrichment pipeline works — from first-party signal collection to CRM push in under 200ms.",
    category: "Technical",
    readTime: "6 min read",
    date: "Aug 28, 2026",
    author: { name: "David Chen", role: "Staff Engineer" },
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop",
    tag: "Technical",
    tagColor: "bg-white text-teal-700",
    avatarColor: "#0d9488",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-zinc-200">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlNGU0ZTciLz48L3N2Zz4=')] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-500 mb-8">
              <BookOpen className="w-3.5 h-3.5" />
              Resources & Knowledge Base
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Knowledge is<br />your edge.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10">
              Guides, case studies, and technical deep-dives from the Adhive team to help you ship better marketing sites, faster.
            </p>
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search articles, guides, case studies..."
                className="w-full bg-white border border-border rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-400 transition-all shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-zinc-50 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {[
              { icon: BookOpen, label: "All Articles" },
              { icon: FileText, label: "Documentation" },
              { icon: Users, label: "Community" },
              { icon: Search, label: "Help Center" },
            ].map((item, i) => (
              <button key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all">
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Bento Grid Masterclasses (Replaces Horizontal Scroll) */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-xs font-semibold text-zinc-300 mb-6">
                  <PlayCircle className="w-3.5 h-3.5 text-blue-400" />
                  Featured Masterclasses
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Learn from the best.</h2>
                <p className="text-zinc-400 text-lg max-w-xl">
                  Exclusive insights, webinars, and growth tactics from industry leaders.
                </p>
              </motion.div>
            </div>
            <motion.button 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="group flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-lg transition-all"
            >
              Browse Library <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 h-auto md:h-[600px]">
            {/* Main Featured Card - Takes up 2 cols, 2 rows */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 min-h-[400px] md:min-h-0"
            >
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Main Masterclass" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">New Series</span>
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all cursor-pointer border border-white/20">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="max-w-md">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">B2B Growth Tactics for 2026</h3>
                  <p className="text-zinc-300 mb-5 text-sm md:text-base line-clamp-2">Elena V. shares how Acme scaled from $1M to $10M ARR in 18 months using intent data and automated outreach.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-zinc-400 flex items-center gap-1.5"><Clock className="w-4 h-4"/> 45 Mins</span>
                    <span className="text-sm font-semibold text-zinc-400">By Elena V.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top Right Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 min-h-[250px] md:min-h-0"
            >
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Small 1" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                 <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                    <PlayCircle className="w-5 h-5 text-white" />
                  </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">Conversion Optimization</h3>
                <p className="text-sm text-zinc-400">By David M. • 32 Mins</p>
              </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 min-h-[250px] md:min-h-0"
            >
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Small 2" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all cursor-pointer border border-white/10">
                    <PlayCircle className="w-5 h-5 text-white" />
                  </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">Sales Pipelines that Scale</h3>
                <p className="text-sm text-zinc-400">By Sarah J. • 55 Mins</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        {/* Abstract background blobs for aesthetics */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Blog & News</h2>
              <p className="text-muted-foreground text-lg">The latest insights from our team.</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold text-zinc-900 bg-white border border-zinc-200 px-4 py-2 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group cursor-pointer bg-white border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 flex flex-col"
              >
                {/* Card Banner */}
                <div className="relative h-56 overflow-hidden bg-zinc-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${article.tagColor} border border-zinc-200/20 backdrop-blur-md`}>
                      {article.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-inner"
                        style={{ backgroundColor: article.avatarColor }}
                      >
                        {article.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-900 leading-tight">{article.author.name}</p>
                        <p className="text-xs text-zinc-400 font-medium">{article.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md border border-zinc-100">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Newsletter / Community Section */}
      <section className="py-32 relative overflow-hidden bg-zinc-900 text-white">
        {/* Animated background elements */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full border border-white/5 border-dashed pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[600px] -right-[600px] w-[1200px] h-[1200px] rounded-full border border-white/5 border-dashed pointer-events-none"
        />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Stay ahead of the curve.</h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
              Join 50,000+ marketers and founders who receive our weekly insights on growth, engineering, and design.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-1 bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 py-4 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-zinc-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
