"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  BarChart3,
  ArrowRight,
  Globe2,
  Server,
  LayoutDashboard,
  Activity,
  MousePointerClick,
  Filter,
  GitBranch,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";

const pipeline = [
  {
    index: "01",
    title: "Collect on the edge",
    desc: "Events are captured server-side at the edge — no third-party scripts, no cookie banners, no ad-blocker blind spots. Every session is tracked accurately.",
    tags: ["Edge functions", "Zero scripts", "Cookie-free"],
  },
  {
    index: "02",
    title: "Process in real time",
    desc: "Raw signals are deduplicated, joined with identity data, and rolled into metrics in under 10ms — so dashboards update the moment visitors move.",
    tags: ["<10ms latency", "Deduplication", "Identity join"],
  },
  {
    index: "03",
    title: "See it unified",
    desc: "Traffic, acquisition, behavior, and conversion surface in one live dashboard — filtered, segmented, and exportable to the tools you already use.",
    tags: ["Live dashboard", "Segments", "Exports"],
  },
];

const metrics = [
  {
    icon: Activity,
    title: "Real-time traffic",
    desc: "Live visitor counts, page views, and session depth — updated the second they happen, not at day's end.",
  },
  {
    icon: MousePointerClick,
    title: "Behavior & journeys",
    desc: "Follow the exact path each visitor takes: landing page, scroll depth, clicks, and where they drop off.",
  },
  {
    icon: Filter,
    title: "Acquisition & channels",
    desc: "Attribute every session to the channel, campaign, or referrer that actually drove it — no last-click guessing.",
  },
  {
    icon: GitBranch,
    title: "Funnels & conversion",
    desc: "Build multi-step funnels and watch identified prospects convert from first visit to booked demo.",
  },
  {
    icon: BarChart3,
    title: "A/B experiment results",
    desc: "Edge-served variants report back automatically, with statistically significant results shown side by side.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first compliance",
    desc: "No cookies, no PII leaking to third parties, GDPR and CCPA friendly by default. The data stays yours.",
  },
];

export default function AnalyticsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.06),transparent_55%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Real-time Analytics</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              See what&apos;s working.<br className="hidden md:block" />
              <span className="text-gradient-primary">In real time.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Privacy-first, cookie-free analytics processed on the edge. Get sub-millisecond reporting, accurate attribution, and the full visitor journey — without a single tracking script.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" onClick={() => router.push('/contact')}>Get Started</Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 group"
                onClick={() => router.push('/product/workflows')}
              >
                Explore Workflows <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              src="/images/server_analytics_1790228169919.png"
              alt="Adhive Real-time Analytics Dashboard"
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
              <Globe2 className="w-3.5 h-3.5 text-primary" />
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Analytics built <span className="text-gradient-primary">for the modern web.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A fully server-side stack that measures everything without slowing down a single page.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pipeline.map((step, i) => (
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
                      {i === 0 && <Globe2 className="w-5 h-5 text-zinc-700" />}
                      {i === 1 && <Server className="w-5 h-5 text-zinc-700" />}
                      {i === 2 && <LayoutDashboard className="w-5 h-5 text-zinc-700" />}
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

      {/* What you can measure */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-6">
              <BarChart3 className="w-3.5 h-3.5 text-primary" />
              What you can measure
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Every metric that matters, one dashboard.</h2>
            <p className="text-lg text-muted-foreground">
              From vanity metrics to revenue signal, everything is available with a single click.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="h-full group hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="w-11 h-11 bg-zinc-100 border border-border rounded-xl flex items-center justify-center mb-5 group-hover:bg-zinc-900 transition-colors">
                    <metric.icon className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{metric.desc}</p>
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
            { value: "0", label: "Cookies, ever" },
            { value: "<10ms", label: "Event processing time" },
            { value: "100%", label: "Sessions captured" },
            { value: "99.9%", label: "Global uptime" },
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
            <h2 className="text-4xl font-bold mb-4">Measure what matters.</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Stop guessing. Start shipping — with analytics you can actually trust.
            </p>
            <Button variant="primary" size="lg" onClick={() => router.push('/contact')}>Get Started</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}