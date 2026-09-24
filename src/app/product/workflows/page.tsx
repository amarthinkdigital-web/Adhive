"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Workflow,
  ArrowRight,
  Radar,
  Filter,
  Send,
  Gauge,
  Sparkles,
  RefreshCw,
  ShieldCheck,
  Plug2,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  {
    index: "01",
    title: "Trigger",
    desc: "Every workflow starts with an event: an identified company visits a pricing page, a prospect opens an email, or a lead hits a score threshold.",
    tags: ["Visitor identity", "Email opens", "Score rules"],
  },
  {
    index: "02",
    title: "Segment",
    desc: "Incoming triggers are matched against your audience logic — industry, account tier, page viewed, recency — so only the right people move forward.",
    tags: ["Audiences", "Conditions", "Account tiering"],
  },
  {
    index: "03",
    title: "Act",
    desc: "The matched lead is routed immediately: notify the right rep, enqueue an email, queue a personalized variant, or create a CRM task. Done.",
    tags: ["Delegation", "Email", "CRM tasks"],
  },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Visual workflow builder",
    desc: "Compose automation from a drag-and-drop canvas — triggers, conditions, and actions link together with zero code.",
  },
  {
    icon: Gauge,
    title: "Intent-based lead scoring",
    desc: "Combine visit frequency, depth, and fit with firmographics to score accounts and act when scores spike.",
  },
  {
    icon: Send,
    title: "Multi-channel outreach",
    desc: "Deliver the right message through email, chat, ads, or in-app — automated sequences tailored per account.",
  },
  {
    icon: Sparkles,
    title: "Personalized by default",
    desc: "Every generated message is personalized with account context, page visited, and the buying stage detected.",
  },
  {
    icon: RefreshCw,
    title: "Two-way CRM sync",
    desc: "Workflows read from and write to your CRM — status changes, scores, and tasks always stay in sync.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails & throttling",
    desc: "Rate limits, quiet hours, and approval flows keep automation fast without ever spamming your buyers.",
  },
];

const integrations = [
  "HubSpot",
  "Salesforce",
  "Slack",
  "Gmail",
  "LinkedIn",
  "Intercom",
  "Marketo",
  "Segment",
  "Pipedrive",
  "Zapier",
  "Stripe",
  "Notion",
];

export default function WorkflowsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.06),transparent_55%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6">
              <Workflow className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Automated Workflows</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Turn visits into<br className="hidden md:block" />
              <span className="text-gradient-primary">outreach on autopilot.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Trigger personalized outreach the moment a high-intent account engages. Adhive routes the right message to the right rep — automatically, in real time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" onClick={() => router.push('/contact')}>Get Started</Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 group"
                onClick={() => router.push('/product/visitor-identification')}
              >
                Explore Visitor ID <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              src="/images/edge_routing_1790228184493.png"
              alt="Adhive Automated Workflows"
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
              <Zap className="w-3.5 h-3.5 text-primary" />
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              From signal to action <span className="text-gradient-primary">in three steps.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Build once, run forever. Every trigger, condition, and action is configurable on a visual canvas.
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
                      {i === 0 && <Radar className="w-5 h-5 text-zinc-700" />}
                      {i === 1 && <Filter className="w-5 h-5 text-zinc-700" />}
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
              <Workflow className="w-3.5 h-3.5 text-primary" />
              What you can automate
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Automation your revenue team will actually trust.</h2>
            <p className="text-lg text-muted-foreground">
              Predictable, safe, and auditable — workflows that act fast without going rogue.
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

      {/* Integrations */}
      <section className="py-24 bg-black/5 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white text-xs font-semibold text-zinc-600 mb-6">
              <Plug2 className="w-3.5 h-3.5 text-primary" />
              Integrations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Plays nicely with your stack.</h2>
            <p className="text-lg text-muted-foreground">
              Workflows connect to the tools your team already lives in — no rip and replace required.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-5 py-2.5 rounded-full bg-white border border-border text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:shadow-sm transition-all cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Set it. Forget it. Close it.</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Automate the follow-up your team keeps missing.
            </p>
            <Button variant="primary" size="lg" onClick={() => router.push('/contact')}>Get Started</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}