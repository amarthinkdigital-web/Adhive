"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const plans = [
  {
    name: "Free",
    description: "With generous usage limits.",
    period: "/mo",
    cta: "Get Started",
    ctaVariant: "outline" as const,
    subtitle: "800 credits / day (2,000 max)",
    features: [
      "Custom domains",
      "Google Workspace integrations",
      "Enriched traffic data",
      "Add collaborators",
      "GitHub sync",
      "Ad integrations",
      "CRM integrations",
    ],
  },
  {
    name: "Starter",
    description: "For solo builders going beyond the free tier.",
    price: "$50",
    period: "/mo",
    cta: "Start with Starter",
    ctaVariant: "primary" as const,
    subtitle: "4,000 credits / month",
    features: [
      "Custom domains",
      "Google Workspace integrations",
      "Enriched traffic data (Preview)",
      "Add collaborators",
      "GitHub sync",
      "Ad integrations",
      "CRM integrations",
    ],
  },
  {
    name: "Pro",
    badge: "Most popular",
    description: "More credits and the integrations active teams use.",
    price: "$300",
    period: "/mo",
    cta: "Start with Pro",
    ctaVariant: "primary" as const,
    subtitle: "24,000 credits / month",
    features: [
      "Custom domains",
      "Google integrations",
      "Enriched traffic data",
      "Add collaborators",
      "GitHub sync",
      "Ad integrations",
      "CRM integrations (HubSpot, Attio)",
    ],
  },
  {
    name: "Enterprise",
    description: "For organizations that need security, control, and a hands-on partner.",
    price: "Custom",
    period: "",
    cta: "Talk to sales",
    ctaVariant: "outline" as const,
    subtitle: "Custom credit volume",
    features: [
      "Salesforce CRM integration",
      "White-glove onboarding",
      "Done-for-you setup",
      "Enterprise terms (no training on data)",
      "Higher visitor enrichment limits",
      "SOC 2 Type II",
      "SSO / SAML (Coming soon)",
    ],
  },
];

export default function PricingPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Pay for what <br /> <span className="text-gradient-primary">you build.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Start free. Upgrade for more credits, visitor enrichment, or integrations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button variant="primary" size="lg" onClick={() => router.push('/contact')}>Get Started</Button>
            <Button variant="glass" size="lg">Talk to sales</Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className={`h-full flex flex-col ${plan.badge ? 'border-primary/50 shadow-[0_0_30px_rgba(37,99,235,0.1)] ring-1 ring-primary/20' : ''}`}>
                {plan.badge && (
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 h-10">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <Button variant={plan.ctaVariant} className="w-full mb-8" onClick={() => router.push('/contact')}>{plan.cta}</Button>
                
                <div className="text-sm font-medium mb-4 pb-4 border-b border-border">
                  {plan.subtitle}
                </div>
                
                <ul className="flex flex-col gap-3 mt-auto">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How Credits Work */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How credits work</h2>
          <p className="text-lg text-muted-foreground">
            Credits are the fuel for the work Adhive does. They're spent while Adhive is actively building or editing — a workspace that's just live and serving traffic uses next to nothing.
          </p>
        </div>
        
        <div className="space-y-12">
          {[
            {
              title: "Professional websites cost more to build",
              desc: "Adhive may consume more credits while building a polished, AI website builder for marketing teams. The work is real engineering and design — not a template fill — so heavier builds draw more."
            },
            {
              title: "A slurp extracts your brand, then credits make it real",
              desc: "A slurp isn't a 100% clone. It's a best-effort, deterministic (no-AI) pass that pulls your brand's soul — structure, identity, design tokens. Credits then turn that into professional-grade code and populate your design system — work that costs thousands of dollars with a development team."
            },
            {
              title: "One balance, unified across everything",
              desc: "Image generation, code generation, document generation, planning, and visitor enrichment all draw from the same credit balance. No separate meters to track."
            },
            {
              title: "Built to get radically more efficient",
              desc: "We're building Adhive to be 100× more time- and cost-efficient than the old way of shipping marketing sites — and we're constantly improving credit efficiency as the platform gets smarter."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit text-primary">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-black/5 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Every plan, side by side.</h2>
            <p className="text-lg text-muted-foreground">Get started, upgrade when you outgrow it.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-semibold text-muted-foreground w-1/3">Feature</th>
                  <th className="p-4 font-bold text-lg">Free</th>
                  <th className="p-4 font-bold text-lg">Starter</th>
                  <th className="p-4 font-bold text-lg">Pro</th>
                  <th className="p-4 font-bold text-lg">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Monthly price", values: ["$0/mo", "$50/mo", "$300/mo", "Custom"] },
                  { label: "Credits", values: ["2,000 included", "4,000 / mo", "24,000 / mo", "Custom"] },
                  { label: "Visitor enrichment", values: ["-", "50 / mo", "1,000 / mo", "Custom"] },
                  { label: "Custom domains", values: [true, true, true, true] },
                  { label: "Google integrations", values: [true, true, true, true] },
                  { label: "HubSpot & Attio", values: [false, false, true, true] },
                  { label: "Salesforce", values: [false, false, false, true] },
                  { label: "SOC 2 Type II", values: [false, false, false, true] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-black/5 transition-colors">
                    <td className="p-4 font-medium">{row.label}</td>
                    {row.values.map((val, idx) => (
                      <td key={idx} className="p-4">
                        {typeof val === 'boolean' ? (
                          val ? <Check className="w-5 h-5 text-primary" /> : <span className="text-muted-foreground">-</span>
                        ) : (
                          <span className="text-foreground/80">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ship your site.</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get started in minutes — no card required. Bring your brand, and Adhive builds the rest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" size="lg" className="gap-2 group" onClick={() => router.push('/contact')}>
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">Talk to sales</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
