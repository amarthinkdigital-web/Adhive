"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, FileText, Users, Search, ArrowRight, Clock } from "lucide-react";

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

      {/* Latest Articles */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold tracking-tight">Latest Articles</h2>
            <button className="flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer bg-white border border-border rounded-2xl overflow-hidden hover:shadow-md hover:border-zinc-300 transition-all duration-200"
              >
                {/* Card Banner — Real Image */}
                <div className="relative h-48 overflow-hidden bg-zinc-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${article.tagColor} border border-zinc-200`}>
                      {article.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 leading-snug group-hover:text-zinc-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ backgroundColor: article.avatarColor }}
                      >
                        {article.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-800 leading-tight">{article.author.name}</p>
                        <p className="text-xs text-zinc-400">{article.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
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

      <Footer />
    </main>
  );
}
