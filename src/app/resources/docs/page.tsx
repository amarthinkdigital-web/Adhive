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
    <main className="min-h-screen bg-white text-foreground selection:bg-sky-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlNGU0ZTciLz48L3N2Zz4=')] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -left-40 top-40 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-6">
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                v3.2 API Documentation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-foreground">
                Build faster<br />with Adhive.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-10">
                Integrate powerful visitor identification and marketing automation into your stack in minutes with our developer-first APIs and SDKs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-zinc-900 text-white font-semibold hover:bg-zinc-800 px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                  Read the Quickstart <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-white border border-border hover:bg-zinc-50 text-zinc-900 font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm">
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
              <div className="rounded-xl overflow-hidden border border-border bg-white shadow-2xl shadow-zinc-900/5">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-zinc-50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">bash</div>
                </div>
                <div className="p-6 relative group">
                  <div className="flex justify-between items-start">
                    <pre className="text-sm font-mono text-zinc-800 leading-loose">
                      <span className="text-blue-600">npm</span> install @adhive/sdk<br/>
                      <br/>
                      <span className="text-purple-600">import</span> {'{'} Adhive {'}'} <span className="text-purple-600">from</span> <span className="text-green-600">'@adhive/sdk'</span>;<br/>
                      <br/>
                      <span className="text-blue-600">const</span> client = <span className="text-purple-600">new</span> Adhive({'{'}<br/>
                      &nbsp;&nbsp;apiKey: process.env.<span className="text-amber-600">ADHIVE_KEY</span><br/>
                      {'}'});<br/>
                      <br/>
                      <span className="text-zinc-400">// Identify visitor in real-time</span><br/>
                      <span className="text-blue-600">const</span> visitor = <span className="text-purple-600">await</span> client.identify(req);
                    </pre>
                    <button onClick={copyCode} className="p-2 rounded-md bg-white hover:bg-zinc-50 border border-border text-zinc-500 hover:text-zinc-900 transition-colors">
                      {copied ? <span className="text-xs font-semibold text-green-600">Copied!</span> : <Copy className="w-4 h-4" />}
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
                className="group p-6 rounded-2xl bg-white border border-border hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t border-border bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-8">Our support team is full of engineers ready to help you debug and scale.</p>
          <button className="bg-zinc-900 text-white font-semibold hover:bg-zinc-800 px-6 py-3 rounded-lg transition-colors shadow-sm">
            Contact Support
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
