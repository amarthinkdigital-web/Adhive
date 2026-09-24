"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageSquare, Users, Award, TrendingUp, Sparkles, Plus, Search } from "lucide-react";

const discussions = [
  {
    title: "Best practices for setting up Slack alerts?",
    author: "Alex Jenkins",
    replies: 24,
    views: "1.2k",
    tag: "Workflows",
    color: "bg-blue-100 text-blue-700",
    time: "2 hours ago"
  },
  {
    title: "How to exclude internal IP addresses from analytics",
    author: "Maria Garcia",
    replies: 8,
    views: "456",
    tag: "Analytics",
    color: "bg-purple-100 text-purple-700",
    time: "5 hours ago"
  },
  {
    title: "Feature Request: Export intent data to Google Sheets automatically",
    author: "Tom Chen",
    replies: 42,
    views: "3.4k",
    tag: "Feature Request",
    color: "bg-orange-100 text-orange-700",
    time: "1 day ago"
  },
  {
    title: "Showcase: How we built our personalized landing page",
    author: "Sarah Smith",
    replies: 156,
    views: "12k",
    tag: "Showcase",
    color: "bg-emerald-100 text-emerald-700",
    time: "2 days ago"
  },
  {
    title: "API Rate Limits on the Startup Plan",
    author: "DevTeam_Alpha",
    replies: 3,
    views: "120",
    tag: "API & Dev",
    color: "bg-zinc-100 text-zinc-700",
    time: "3 days ago"
  }
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-zinc-50 selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-white border-b border-border">
        {/* Floating Avatars Background */}
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[10%] w-12 h-12 rounded-full bg-blue-100 border-2 border-white shadow-lg flex items-center justify-center text-blue-600 font-bold"
        >
          JD
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-60 right-[15%] w-16 h-16 rounded-full bg-purple-100 border-2 border-white shadow-lg flex items-center justify-center text-purple-600 font-bold"
        >
          AS
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-20 left-[20%] w-10 h-10 rounded-full bg-emerald-100 border-2 border-white shadow-lg flex items-center justify-center text-emerald-600 font-bold text-xs"
        >
          MK
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-xs font-semibold text-blue-700 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Join 15,000+ Builders
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-zinc-900">
              Build together.
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10">
              The Adhive Community is the best place to ask questions, share your workflows, and learn how top companies are capturing intent.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search for answers, workflows, or topics..."
                className="w-full bg-white border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-lg shadow-zinc-200/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-colors">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-md shadow-blue-600/20 mb-8">
                <Plus className="w-4 h-4" /> New Discussion
              </button>
              
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Categories</h3>
              <ul className="space-y-1">
                {[
                  { name: "All Topics", icon: MessageSquare, active: true },
                  { name: "Announcements", icon: Sparkles, active: false },
                  { name: "Workflows & Automation", icon: TrendingUp, active: false },
                  { name: "API & Developers", icon: Users, active: false },
                  { name: "Showcase", icon: Award, active: false }
                ].map((cat, i) => (
                  <li key={i}>
                    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${cat.active ? 'bg-zinc-200/50 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'}`}>
                      <cat.icon className="w-4 h-4" /> {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Discussion List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-zinc-900">Recent Discussions</h2>
              <div className="flex gap-2">
                <select className="bg-white border border-zinc-200 text-zinc-600 text-sm rounded-lg px-3 py-2 focus:outline-none">
                  <option>Latest</option>
                  <option>Top</option>
                  <option>Unanswered</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {discussions.map((topic, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-zinc-200 rounded-2xl p-5 hover:border-zinc-300 hover:shadow-sm transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${topic.color}`}>
                        {topic.tag}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">{topic.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors leading-tight mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-medium">By {topic.author}</p>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-zinc-500 font-medium">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-zinc-900">{topic.replies}</span>
                      <span className="text-xs">Replies</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-zinc-900">{topic.views}</span>
                      <span className="text-xs">Views</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl transition-colors">
                Load More Discussions
              </button>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
