"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Users,
  ArrowRight,
  Fingerprint,
  Database,
  Send,
  Building2,
  Target,
  Contact2,
  Gauge,
  BellRing,
  RefreshCw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  {
    index: "01",
    title: "Detect",
    desc: "Signature-level identification runs on every session — no cookies, no disruptive popups, no consent banners. We resolve anonymous traffic into a company in milliseconds.",
    tags: ["Reverse IP", "First-party data", "No cookies"],
  },
  {
    index: "02",
    title: "Enrich",
    desc: "Each identified account is automatically enriched with firmographics, technographics, and contact data, so your team sees the full picture without a single manual lookup.",
    tags: ["Firmographics", "Technographics", "Contacts"],
  },
  {
    index: "03",
    title: "Route",
    desc: "Matches are scored and pushed to the right pipeline in under 200ms — straight to your CRM, Slack, or email, tagged by account, stage, and buying intent.",
    tags: ["Lead scoring", "CRM push", "Real-time alerts"],
  },
];

const capabilities = [
  {
    icon: Building2,
    title: "Company detection",
    desc: "Identify the exact organization behind every visit — including shared IPs, VPNs, and mobile hotspots.",
  },
  {
    icon: Target,
    title: "Firmographics & technographics",
    desc: "Industry, size, location, and the exact tools an account runs, layered onto every enriched session.",
  },
  {
    icon: Contact2,
    title: "Contact enrichment",
    desc: "Resolve decision-makers and influencers at target accounts with verified roles and intent signals.",
  },
  {
    icon: Gauge,
    title: "Intent scoring",
    desc: "Every visit is scored by pages viewed, depth of engagement, and recency, so reps prioritize hot accounts.",
  },
  {
    icon: BellRing,
    title: "Real-time alerts",
    desc: "Get pinged in Slack or email the moment a high-value account lands on your site and starts exploring.",
  },
  {
    icon: RefreshCw,
    title: "CRM synchronization",
    desc: "Identified accounts flow into HubSpot, Salesforce, and 12+ tools with automatic deduplication and tagging.",
  },
];

export default function VisitorIdentificationPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06),transparent_55%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6">
              <Fingerprint className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Visitor Identification</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Know every company<br className="hidden md:block" />
              <span className="text-gradient-primary">before they know you.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Unmask the anonymous traffic on your site. Adhive identifies visiting companies in real time, enriches them in seconds, and pushes intent straight to the team that closes deals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" onClick={() => router.push('/contact')}>Get Started</Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 group"
                onClick={() => router.push('/product/analytics')}
              >
                Explore Analytics <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
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
              src="/images/visitor_identity_1790228153597.png"
              alt="Adhive Visitor Identification Dashboard"
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-black/5 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white text-xs font-semibold text-zinc-600 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Anonymous traffic, <span className="text-gradient-primary">three steps to revenue.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From the moment a visitor lands to the alert on your sales rep's screen, the entire pipeline runs automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-zinc-200">{step.index}</span>
                    <div className="w-11 h-11 bg-zinc-100 border border-border rounded-xl flex items-center justify-center">
                      {i === 0 && <Fingerprint className="w-5 h-5 text-zinc-700" />}
                      {i === 1 && <Database className="w-5 h-5 text-zinc-700" />}
                      {i === 2 && <Send className="w-5 h-5 text-zinc-700" />}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{step.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-50 border border-border text-[11px] font-semibold text-zinc-500"
                      >
                        <span className="w-1 h-1 rounded-full bg-zinc-300" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-6">
              <Users className="w-3.5 h-3.5 text-primary" />
              Platform capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Everything you need to sell to identified accounts.</h2>
            <p className="text-lg text-muted-foreground">
              A complete identity intelligence layer that works with the tools your revenue team already uses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="h-full group hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="w-11 h-11 bg-zinc-100 border border-border rounded-xl flex items-center justify-center mb-5 group-hover:bg-zinc-900 transition-colors">
                    <cap.icon className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-16 border-y border-border bg-black/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { value: "200ms", label: "Real-time account alerts" },
            { value: "85%+", label: "Traffic successfully resolved" },
            { value: "40+", label: "Enrichment data points per account" },
            { value: "12+", label: "Native integrations" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
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
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Turn visitors into pipeline.</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Start identifying every company that visits your site — today.
            </p>
            <Button variant="primary" size="lg" onClick={() => router.push('/contact')}>Get Started</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}