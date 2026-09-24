"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Book, Code2, Terminal, Zap, Puzzle, Server, ArrowRight, Copy } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("npm install @adhive/sdk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -left-40 top-40 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-zinc-300 mb-6 backdrop-blur-md">
                <Terminal className="w-3.5 h-3.5" />
                v3.2 API Documentation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Build faster<br />with Adhive.
              </h1>
              <p className="text-lg text-zinc-400 max-w-xl mb-10">
                Integrate powerful visitor identification and marketing automation into your stack in minutes with our developer-first APIs and SDKs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-black font-semibold hover:bg-zinc-200 px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Read the Quickstart <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  API Reference
                </button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: 20, rotateY: -10 }} 
              animate={{ opacity: 1, x: 0, rotateY: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="perspective-1000"
            >
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">bash</div>
                </div>
                <div className="p-6 relative group">
                  <div className="flex justify-between items-start">
                    <pre className="text-sm font-mono text-zinc-300 leading-loose">
                      <span className="text-blue-400">npm</span> install @adhive/sdk<br/>
                      <br/>
                      <span className="text-purple-400">import</span> {'{'} Adhive {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@adhive/sdk'</span>;<br/>
                      <br/>
                      <span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> Adhive({'{'}<br/>
                      &nbsp;&nbsp;apiKey: process.env.<span className="text-yellow-400">ADHIVE_KEY</span><br/>
                      {'}'});<br/>
                      <br/>
                      <span className="text-zinc-500">// Identify visitor in real-time</span><br/>
                      <span className="text-blue-400">const</span> visitor = <span className="text-purple-400">await</span> client.identify(req);
                    </pre>
                    <button onClick={copyCode} className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors">
                      {copied ? <span className="text-xs font-semibold">Copied!</span> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Book, title: "Guides", desc: "Step-by-step tutorials on integrating Adhive with Next.js, React, and Vue." },
              { icon: Code2, title: "API Reference", desc: "Detailed endpoint documentation, request/response schemas, and rate limits." },
              { icon: Puzzle, title: "Integrations", desc: "Connect Adhive seamlessly with Salesforce, HubSpot, and Slack." },
              { icon: Server, title: "Webhooks", desc: "Listen to real-time events and trigger custom logic on your own servers." },
              { icon: Zap, title: "Edge Functions", desc: "Run personalization logic globally at the edge with zero latency." },
              { icon: Terminal, title: "CLI Tool", desc: "Manage your workspaces, API keys, and deployments from the terminal." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-zinc-400 mb-8">Our support team is full of engineers ready to help you debug and scale.</p>
          <button className="bg-white text-black font-semibold hover:bg-zinc-200 px-6 py-3 rounded-lg transition-colors">
            Contact Support
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
