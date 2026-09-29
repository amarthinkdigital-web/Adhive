"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  Zap,
  Heart,
  Globe,
  Shield,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  ArrowRight,
  Star,
  Sparkles,
  Target,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const team = [
  {
    name: "Aryan Sharma",
    role: "CEO & Co-founder",
    bio: "Former VP of Growth at Swiggy. 10+ years building B2B SaaS products that scale.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    gradient: "from-orange-400 to-blue-600",
  },
  {
    name: "Priya Nair",
    role: "CTO & Co-founder",
    bio: "Ex-Google AI researcher. Obsessed with privacy-first analytics and scalable ML pipelines.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    name: "Kabir Mehta",
    role: "Head of Product",
    bio: "Serial product builder with 3 exits. Turns complex workflows into delightfully simple UX.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "Rhea Joshi",
    role: "Head of Marketing",
    bio: "Drove 0→1M users at two funded startups. Passionate about storytelling through data.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    name: "Dev Kapoor",
    role: "Lead Engineer",
    bio: "Full-stack wizard. Built core infrastructure at Razorpay handling 100M+ transactions/day.",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    name: "Ananya Singh",
    role: "Head of Partnerships",
    bio: "Connected 500+ brands with the right creators globally. Relationship-first, results-always.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    gradient: "from-cyan-400 to-orange-600",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Radical Transparency",
    desc: "We show you exactly what's happening with your campaigns, your data, and your ROI. No black boxes, no hidden fees.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    desc: "We built Adhive from day one to be GDPR and CCPA compliant. Your customers' data is protected, always.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    desc: "Every product decision starts with one question: does this make our customers more successful? If not, we don't build it.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  {
    icon: Globe,
    title: "Global, Local Mindset",
    desc: "We serve brands in 60+ countries while staying deeply tuned into local market nuances and cultural contexts.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: Zap,
    title: "Move Fast, Stay Safe",
    desc: "We ship daily improvements while maintaining enterprise-grade stability. Speed and safety aren't trade-offs.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    icon: Target,
    title: "Outcome Driven",
    desc: "We measure ourselves by your success metrics, not vanity numbers. If you're not winning, we aren't either.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
];

const stats = [
  { value: "500+", label: "Brand Clients", icon: "🏢" },
  { value: "10M+", label: "Creator Database", icon: "🎯" },
  { value: "60+", label: "Countries", icon: "🌍" },
  { value: "$2B+", label: "Campaign Revenue Tracked", icon: "💰" },
];

const milestones = [
  { year: "2021", title: "Adhive Founded", desc: "Started in a Bengaluru garage with 3 people and a big idea." },
  { year: "2022", title: "Seed Round — $2M", desc: "Raised from top angels. Launched beta with 50 brands." },
  { year: "2023", title: "Series A — $12M", desc: "Scaled to 150+ brands. Launched AI-powered creator matching." },
  { year: "2024", title: "10,000+ Creators", desc: "Crossed 10,000 active creators. Expanded to SEA and EU markets." },
  { year: "2025", title: "Series B — $40M", desc: "Leading round from Sequoia. Launched enterprise tier." },
  { year: "2026", title: "Global Expansion", desc: "Now operating in 60+ countries with 500+ brand clients globally." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-orange-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-xs font-semibold text-orange-600 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Story
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.08]"
          >
            We&apos;re building the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-600 to-violet-600">
              future of influence.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Adhive was born from a simple frustration — influencer marketing was broken, opaque, and
            exhausting. We set out to fix it with AI, automation, and radical transparency.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-colors shadow-lg"
            >
              Join Our Journey <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/company"
              className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-50 transition-colors"
            >
              View Company Info
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team photo banner */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[16/6] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Adhive team collaborating"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all group"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/30 via-transparent to-transparent" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-zinc-300 mb-8">
              <Star className="w-3.5 h-3.5 text-amber-400" />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Make influence marketing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                measurable, fair, and scalable
              </span>{" "}
              for every brand.
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              We believe that any brand — from a D2C startup to a Fortune 500 — should be able to connect with the
              right creators, run campaigns that convert, and know exactly what&apos;s working. That&apos;s the world we&apos;re
              building, one campaign at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-xs font-semibold text-violet-600 mb-6">
              <Heart className="w-3.5 h-3.5" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
              What we stand for
            </h2>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto">
              These aren&apos;t just words on a wall. They shape every product decision, every hire, and every customer interaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`group p-8 rounded-3xl border ${v.border} ${v.bg} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white border ${v.border} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{v.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-32 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold text-amber-600 mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
              From garage to global
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-orange-400 via-violet-400 to-amber-400" />
            <div className="flex flex-col gap-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-orange-500 shadow-md shadow-orange-200 mt-1" />

                  <div className={`ml-20 md:ml-0 ${i % 2 === 0 ? "md:pr-16 md:text-right md:w-1/2" : "md:pl-16 md:w-1/2"}`}>
                    <div className="inline-block bg-zinc-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {m.year}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{m.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team */}
      {/* <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-xs font-semibold text-orange-600 mb-6">
              <Users className="w-3.5 h-3.5" />
              Meet the Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
              The people behind Adhive
            </h2>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto">
              World-class builders, marketers, and operators who have done it before and are doing it again.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative bg-white border border-zinc-100 rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} rounded-t-3xl`} />
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-5 ring-2 ring-zinc-100 group-hover:ring-orange-200 transition-all">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${member.gradient}`}>
                    {member.role}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-300 bg-white/60 text-xs font-semibold text-orange-700 mb-8 backdrop-blur-sm">
              <Award className="w-3.5 h-3.5" />
              We&apos;re Hiring
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
              Want to help us build the future?
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
              We&apos;re a team of ambitious people who love what we do. If that sounds like you, we&apos;d love to chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-colors shadow-xl"
              >
                See Open Roles <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center gap-2 border border-zinc-300 bg-white text-zinc-700 px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-50 transition-colors"
              >
                Our Company
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
