"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, LayoutTemplate, Users, BarChart3, Zap, Code2, Globe, GitBranch, MessageSquare, Workflow, Rocket, Star } from "lucide-react";

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-background selection:bg-zinc-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden border-b border-border">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlNGU0ZTciLz48L3N2Zz4=')] opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="flex flex-col items-center">
            
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Adhive 2.0 is now available
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground">
              Ship marketing sites <br className="hidden md:block" />
              with engineering precision.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Adhive gives your team the building blocks to create, iterate, and analyze marketing websites without sacrificing code quality or relying on templates.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" className="gap-2">
                Start Building
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Read the Docs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Marquee (Subtle) */}
      <section className="py-12 border-b border-border bg-zinc-50/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Trusted by engineering-led marketing teams</p>
        </div>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-4 opacity-40 grayscale">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-xl font-bold tracking-tight text-foreground">ACME</span>
                <span className="text-xl font-bold tracking-tight text-foreground">GLOBAL</span>
                <span className="text-xl font-bold tracking-tight text-foreground">QUANTUM</span>
                <span className="text-xl font-bold tracking-tight text-foreground">NEXUS</span>
                <span className="text-xl font-bold tracking-tight text-foreground">HORIZON</span>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-50/50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-50/50 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Code vs UI Section (How it works alternative) */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Code is the source of truth.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Forget visual builders that spit out spaghetti code. Adhive writes clean, deterministic React and Tailwind CSS that lives directly in your repository.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Deterministic Output", desc: "No AI hallucinations. The layout maps exactly to your design tokens." },
                { title: "Git Integrated", desc: "Push changes directly to your GitHub repository and trigger Vercel deployments." },
                { title: "Component Based", desc: "Everything is a reusable React component, not a fixed template." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500 shrink-0 mt-1">
                    0{i+1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-zinc-950 shadow-xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="mx-auto text-xs font-mono text-zinc-500">src/components/Hero.tsx</div>
            </div>
            <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
              <span className="text-pink-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-200">Hero</span>() {'{\n'}
              {'  '} <span className="text-blue-400">return</span> (\n
              {'    '}&lt;<span className="text-green-400">section</span> <span className="text-blue-300">className</span>=<span className="text-orange-300">"py-20 bg-white"</span>&gt;\n
              {'      '}&lt;<span className="text-green-400">div</span> <span className="text-blue-300">className</span>=<span className="text-orange-300">"max-w-5xl mx-auto"</span>&gt;\n
              {'        '}&lt;<span className="text-green-400">h1</span> <span className="text-blue-300">className</span>=<span className="text-orange-300">"text-5xl font-bold"</span>&gt;\n
              {'          '}Scale your startup.\n
              {'        '}&lt;/<span className="text-green-400">h1</span>&gt;\n
              {'      '}&lt;/<span className="text-green-400">div</span>&gt;\n
              {'    '}&lt;/<span className="text-green-400">section</span>&gt;\n
              {'  '});\n
              {'}'}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-6">
              <Workflow className="w-3.5 h-3.5 text-primary" />
              How it works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">From repository to live site in minutes.</h2>
            <p className="text-lg text-muted-foreground">
              Connect your stack, compose pages with reusable components, and deploy straight to the edge. No build queues, no waiting rooms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/home_how_it_works.png"
                alt="How Adhive works"
                className="w-full rounded-2xl border border-border shadow-xl"
              />
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  icon: GitBranch,
                  title: "Connect your repository",
                  desc: "Link your GitHub or GitLab repo. Adhive reads your components, tokens, and config to understand your design system instantly.",
                },
                {
                  icon: LayoutTemplate,
                  title: "Compose pages visually",
                  desc: "Drag, nest, and configure primitives in the dashboard. Every change maps directly to clean React and Tailwind output committed to your branch.",
                },
                {
                  icon: Rocket,
                  title: "Deploy to the edge",
                  desc: "Merge and hit deploy. Adhive triggers a Vercel build and serves your site globally with preview URLs for every pull request.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-border flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-zinc-700" />
                    </div>
                    {i < 2 && <div className="w-px flex-1 bg-border my-2" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      <span className="text-muted-foreground font-mono text-xs mr-2">0{i + 1}</span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">The complete platform.</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build, launch, and optimize your marketing presence in a single unified dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard className="lg:col-span-2">
              <div className="mb-8 p-3 bg-zinc-100 rounded-lg w-fit border border-border">
                <LayoutTemplate className="w-5 h-5 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Component Architecture</h3>
              <p className="text-muted-foreground text-sm max-w-md">
                Build complex layouts using predefined primitives. No more hacking templates—just write standard React components and let Adhive handle the assembly.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="mb-8 p-3 bg-zinc-100 rounded-lg w-fit border border-border">
                <Users className="w-5 h-5 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visitor Identity</h3>
              <p className="text-muted-foreground text-sm">
                Clearbit-level enrichment built directly into your analytics dashboard natively.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="mb-8 p-3 bg-zinc-100 rounded-lg w-fit border border-border">
                <BarChart3 className="w-5 h-5 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Server-Side Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Privacy-first, zero-cookie analytics processed on the edge for sub-millisecond reporting.
              </p>
            </GlassCard>

            <GlassCard className="lg:col-span-2">
              <div className="mb-8 p-3 bg-zinc-100 rounded-lg w-fit border border-border">
                <Zap className="w-5 h-5 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Edge Routing</h3>
              <p className="text-muted-foreground text-sm max-w-md">
                Serve variants and run A/B tests globally with zero latency. Powered by Next.js middleware and Vercel edge functions.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Integrations (Clean Icon Grid) */}
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-6">
              <Globe className="w-3.5 h-3.5 text-primary" />
              Integrations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Fits perfectly in your stack</h2>
            <p className="text-lg text-muted-foreground mb-6">Connect your repository, CRM, and communication tools effortlessly.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <img
              src="/images/home_integrations.png"
              alt="Adhive integrations with your stack"
              className="w-full rounded-2xl border border-border shadow-xl"
            />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[GitBranch, MessageSquare, Globe, Code2, Users, LayoutTemplate].map((Icon, i) => (
              <div key={i} className="w-20 h-20 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-zinc-400 hover:text-primary hover:border-zinc-300 transition-colors">
                <Icon className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-primary" />
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Loved by engineering-led teams.</h2>
            <p className="text-lg text-muted-foreground">
              Marketing teams that ship fast and keep their codebases clean rely on Adhive every day.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/home_testimonials.png"
                alt="Customer testimonials"
                className="w-full rounded-2xl border border-border shadow-xl"
              />
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  name: "Sarah Chen",
                  role: "Head of Growth, Quantia",
                  quote: "We replaced four tools with Adhive. Landing pages ship in hours instead of weeks, and our engineers finally trust the marketing output.",
                  stars: 5,
                },
                {
                  name: "Marcus Reid",
                  role: "VP Marketing, Orbit Software",
                  quote: "The visitor identification alone pays for itself. We know exactly which companies are on our site, in real time, without creepy tracking.",
                  stars: 5,
                },
                {
                  name: "Priya Sharma",
                  role: "Founder, Loop & Co.",
                  quote: "Clean React and Tailwind output means we can take over anything Adhive generates. It's the only builder that respects our codebase.",
                  stars: 5,
                },
              ].map((t, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-zinc-800 fill-zinc-800" />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 border border-border flex items-center justify-center text-sm font-semibold text-zinc-700">
                      {t.name.split(" ").map((w) => w[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Deploy your next site today.</h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Join the engineering-led marketing teams building on Adhive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-black hover:bg-zinc-200" size="lg">
                Start Building Free
              </Button>
              <Button className="bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800" size="lg">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
