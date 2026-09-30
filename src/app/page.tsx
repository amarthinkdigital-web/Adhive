"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  MapPin, Users, Target, DollarSign, ShieldCheck, Smartphone,
  ChevronDown, Briefcase, Share2, Sparkles, CheckCircle2, ArrowRight,
  TrendingUp, Clock, Star
} from "lucide-react";

/* ─────────────── Animated SVG Illustrations ─────────────── */
function HyperlocalSVG() {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Map base */}
      <rect x="40" y="40" width="320" height="240" rx="20" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5"/>
      {/* Grid lines */}
      {[80,120,160,200,240,280,320].map(x => <line key={x} x1={x} y1="40" x2={x} y2="280" stroke="#fde8cb" strokeWidth="0.8"/>)}
      {[80,120,160,200,240].map(y => <line key={y} x1="40" y1={y} x2="360" y2={y} stroke="#fde8cb" strokeWidth="0.8"/>)}
      {/* Location pin — center */}
      <motion.circle cx="200" cy="160" r="60" fill="rgba(249,115,22,0.08)" animate={{r:[58,68,58]}} transition={{repeat:Infinity,duration:2.5,ease:"easeInOut"}}/>
      <motion.circle cx="200" cy="160" r="40" fill="rgba(249,115,22,0.14)" animate={{r:[38,46,38]}} transition={{repeat:Infinity,duration:2.5,ease:"easeInOut",delay:0.3}}/>
      <circle cx="200" cy="160" r="22" fill="#f97316"/>
      <path d="M200 146 C193 146 186 152 186 160 C186 170 200 182 200 182 C200 182 214 170 214 160 C214 152 207 146 200 146Z" fill="white"/>
      <circle cx="200" cy="160" r="5" fill="#f97316"/>
      {/* Satellite pins */}
      {[
        {cx:130,cy:110},{cx:280,cy:115},{cx:140,cy:215},{cx:285,cy:210}
      ].map((p,i)=>(
        <motion.g key={i} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{delay:0.5+i*0.2,duration:0.4}}>
          <circle cx={p.cx} cy={p.cy} r="12" fill="white" stroke="#fed7aa" strokeWidth="1.5" filter="url(#shadow)"/>
          <circle cx={p.cx} cy={p.cy} r="4" fill="#f97316"/>
          <line x1={p.cx} y1={p.cy} x2="200" y2="160" stroke="#fdba74" strokeWidth="1" strokeDasharray="4 3"/>
        </motion.g>
      ))}
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1"/>
        </filter>
      </defs>
    </svg>
  );
}

function HowItWorksSVG({ type }: { type: "business" | "sharer" }) {
  const isBiz = type === "business";
  return (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-48">
      {isBiz ? (
        <>
          {/* Campaign dashboard mockup */}
          <rect x="20" y="20" width="260" height="160" rx="14" fill="white" stroke="#e4e4e7" strokeWidth="1.5"/>
          <rect x="20" y="20" width="260" height="36" rx="14" fill="#f97316"/>
          <rect x="20" y="44" width="260" height="12" rx="0" fill="#f97316"/>
          <circle cx="42" cy="38" r="6" fill="rgba(255,255,255,0.4)"/>
          <circle cx="58" cy="38" r="6" fill="rgba(255,255,255,0.4)"/>
          <circle cx="74" cy="38" r="6" fill="rgba(255,255,255,0.4)"/>
          <text x="110" y="42" fill="white" fontSize="11" fontWeight="bold">Campaign Dashboard</text>
          {/* progress bars */}
          {[{label:"Reach",w:180,y:75},{label:"Budget",w:130,y:100},{label:"Slots",w:160,y:125}].map((b,i)=>(
            <g key={i}>
              <text x="36" y={b.y+2} fill="#71717a" fontSize="9">{b.label}</text>
              <rect x="90" y={b.y-8} width="170" height="10" rx="5" fill="#f4f4f5"/>
              <motion.rect x="90" y={b.y-8} width={b.w} height="10" rx="5" fill="#f97316" initial={{width:0}} whileInView={{width:b.w}} transition={{delay:0.3+i*0.15,duration:0.8}}/>
            </g>
          ))}
          <rect x="36" y="148" width="80" height="18" rx="9" fill="#f97316"/>
          <text x="55" y="161" fill="white" fontSize="9" fontWeight="bold">Validate</text>
          <rect x="128" y="148" width="80" height="18" rx="9" fill="#fef3c7"/>
          <text x="143" y="161" fill="#92400e" fontSize="9" fontWeight="bold">Track</text>
        </>
      ) : (
        <>
          {/* Instagram-style story mockup */}
          <rect x="80" y="10" width="140" height="180" rx="20" fill="white" stroke="#e4e4e7" strokeWidth="1.5"/>
          {/* Story ring */}
          <motion.circle cx="150" cy="46" r="22" fill="none" stroke="url(#ig)" strokeWidth="2.5" strokeDasharray="120" animate={{strokeDashoffset:[120,0]}} transition={{duration:1.5,delay:0.5}}/>
          <circle cx="150" cy="46" r="18" fill="#f3f4f6"/>
          <circle cx="150" cy="46" r="14" fill="#d1d5db"/>
          <defs>
            <linearGradient id="ig" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316"/>
              <stop offset="100%" stopColor="#f59e0b"/>
            </linearGradient>
          </defs>
          <rect x="92" y="78" width="116" height="8" rx="4" fill="#f3f4f6"/>
          <rect x="100" y="93" width="100" height="8" rx="4" fill="#f3f4f6"/>
          <rect x="92" y="120" width="116" height="30" rx="8" fill="#fef3c7"/>
          <text x="115" y="139" fill="#92400e" fontSize="10" fontWeight="bold">₹ Earned!</text>
          <motion.g animate={{scale:[1,1.1,1]}} transition={{repeat:Infinity,duration:2}}>
            <circle cx="150" cy="175" r="10" fill="#22c55e"/>
            <text x="145" y="180" fill="white" fontSize="12">✓</text>
          </motion.g>
        </>
      )}
    </svg>
  );
}

/* ─────────────── Animated Number ─────────────── */
function AnimatedNum({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const inView = useInView(ref, { once: true });
  useEffect(() => { if (inView) mv.set(target); }, [inView, mv, target]);
  useEffect(() => spring.on("change", (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; }), [spring, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

/* ─────────────── FAQ item ─────────────── */
function FAQ({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open ? "border-orange-300 shadow-[0_0_0_3px_rgba(249,115,22,0.06)]" : "border-zinc-200"}`}
    >
      <button
        className="flex justify-between items-center w-full p-5 text-left text-zinc-900 font-semibold hover:bg-orange-50/60 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-5 h-5 text-zinc-400" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 pt-4">{a}</div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────── Page ─────────────── */
export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ══ HERO ══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fafafa] border-b border-[#e4e4e7] pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)",
          }}
        />
        <div className="absolute top-[-80px] left-[-120px] w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-[-60px] right-[-100px] w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-6 pb-12 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-start max-w-xl pl-6 -mt-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-xs font-semibold text-orange-600 mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Launching Soon on Android & iOS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-zinc-900 mb-5">
              Hyperlocal Marketing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Without Burning Your Wallet.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative w-full h-[520px]"
            style={{ perspective: "1000px" }}
          >
            <motion.img animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="/images/product_hero.png" alt="adhive Platform"
              className="absolute top-10 right-0 w-[420px] h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 z-10 object-cover"
            />
            <motion.img animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              src="/images/home_integrations.png" alt="adhive Workflow"
              className="absolute -top-4 -left-12 w-[360px] h-auto rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/60 z-20 object-cover bg-white"
            />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #fafafa)" }} />
      </section>

      {/* ══ INTRO / CTA ══ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-xl md:text-2xl text-zinc-600 mb-10 leading-relaxed font-medium">
            adhive helps businesses promote their products and services through real people in their local community — while giving social media users a simple way to earn by sharing promotional content.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all shadow-[0_8px_32px_rgba(249,115,22,0.30)] group">
              Coming Soon | Join the Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ WHAT IS adhive ══ */}
      <section id="what-is-adhive" className="py-28 relative overflow-hidden border-t border-zinc-100 bg-zinc-950">
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(249,115,22,0.08) 0%, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — SVG + Stats bento */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-2xl mb-6">
                <HyperlocalSVG />
              </div>
              {/* 3-pillar summary from doc */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { emoji: "🏢", label: "Businesses", desc: "Local Reach" },
                  { emoji: "💰", label: "Sharers", desc: "Earn Money" },
                  { emoji: "🛍️", label: "Customers", desc: "Discover Local" }
                ].map((s, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-1">{s.emoji}</div>
                    <div className="text-sm font-bold text-white">{s.label}</div>
                    <div className="text-xs text-zinc-500 mt-1">{s.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — text + cards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/15 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20">
                <MapPin className="w-3.5 h-3.5" />
                Platform Overview
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">adhive?</span>
              </h2>
              <p className="text-xl text-zinc-300 mb-4 font-medium">
                adhive is a people-powered, hyperlocal advertising platform.
              </p>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                Traditional digital advertising puts your business in front of thousands who may never become customers. adhive takes a more local approach — reaching real people through real community members.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Briefcase, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20", title: "For Businesses", desc: "Businesses get precise local reach." },
                  { icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", title: "For Sharers", desc: "People earn by sharing promotional content." },
                  { icon: Users, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", title: "For Customers", desc: "Discover local businesses through community members." }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * i, duration: 0.5 }}
                    className={`flex items-center gap-4 p-5 rounded-2xl border ${item.bg} group hover:scale-[1.02] transition-transform cursor-default`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section id="how-it-works" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(249,115,22,0.05) 0%, transparent 55%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-5 border border-orange-100">
                <TrendingUp className="w-3.5 h-3.5" /> Simple Process
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">How adhive Works</h2>
              <p className="text-xl text-zinc-500 max-w-2xl mx-auto">A seamless workflow designed for businesses to reach locals, and for locals to earn.</p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* For Businesses */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mb-8">
                <HowItWorksSVG type="business" />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-zinc-900">For Businesses</h3>
              </div>
              <div className="space-y-5">
                {[
                  { n: "01", title: "Create Campaign", desc: "Define your promotional campaign, target location, audience requirements and content.", icon: Target },
                  { n: "02", title: "Set Budget & Slots", desc: "Choose the number of promotional slots and allocate your campaign budget.", icon: DollarSign },
                  { n: "03", title: "Monitor & Validate", desc: "Track participation in real-time and validate completed promotional activities with evidence.", icon: ShieldCheck }
                ].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                    className="flex gap-5 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0 group-hover:scale-110 transition-transform shadow-[0_4px_14px_rgba(249,115,22,0.35)]">
                        {s.n}
                      </div>
                      {i < 2 && <div className="flex-1 w-px bg-gradient-to-b from-orange-300 to-transparent mt-2 min-h-[32px]" />}
                    </div>
                    <div className="pb-4">
                      <h4 className="text-lg font-bold text-zinc-900 mb-1 flex items-center gap-2">
                        <s.icon className="w-4 h-4 text-orange-500" />
                        {s.title}
                      </h4>
                      <p className="text-zinc-500 leading-relaxed text-sm">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* For Sharers */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="mb-8">
                <HowItWorksSVG type="sharer" />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center">
                  <Share2 className="w-7 h-7 text-zinc-700" />
                </div>
                <h3 className="text-3xl font-bold text-zinc-900">For Sharers</h3>
              </div>
              <div className="space-y-5">
                {[
                  { n: "01", title: "Discover Campaigns", desc: "Find available campaigns in your local area and review the specific requirements.", icon: MapPin },
                  { n: "02", title: "Accept & Post", desc: "Accept the campaign opportunity and share the promotional content on your Instagram.", icon: Share2 },
                  { n: "03", title: "Earn Rewards", desc: "Complete all requirements successfully, get validated and receive your earnings.", icon: DollarSign }
                ].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                    className="flex gap-5 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-black shrink-0 group-hover:scale-110 transition-transform shadow-[0_4px_14px_rgba(24,24,27,0.25)]">
                        {s.n}
                      </div>
                      {i < 2 && <div className="flex-1 w-px bg-gradient-to-b from-zinc-300 to-transparent mt-2 min-h-[32px]" />}
                    </div>
                    <div className="pb-4">
                      <h4 className="text-lg font-bold text-zinc-900 mb-1 flex items-center gap-2">
                        <s.icon className="w-4 h-4 text-zinc-600" />
                        {s.title}
                      </h4>
                      <p className="text-zinc-500 leading-relaxed text-sm">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ WHY adhive ══ */}
      <section id="why-adhive" className="py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(249,115,22,0.07) 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-5 border border-orange-500/20">
                <Star className="w-3.5 h-3.5" /> Our Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Why adhive?</h2>
              <p className="text-xl text-zinc-500 max-w-2xl mx-auto">Designed from the ground up for real community-powered marketing.</p>
            </motion.div>
          </div>

          {/* Social proof image banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-14 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl"
          >
            <img
              src="/images/home_testimonials.png"
              alt="adhive community reach"
              className="w-full h-56 md:h-72 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <p className="text-orange-400 font-semibold text-sm mb-2 tracking-wide uppercase">Community-Powered</p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug max-w-sm">
                  Real People,<br />Real Local Impact.
                </h3>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Hyperlocal Reach", desc: "Target people within a specific geographic radius around your business.", accent: "from-orange-500/20 to-transparent" },
              { icon: Users, title: "Real People. Real Reach.", desc: "Put your brand in front of audiences through people who are part of the local community.", accent: "from-blue-500/20 to-transparent" },
              { icon: Target, title: "Audience-Based Campaigns", desc: "Define campaign requirements based on location and relevant audience characteristics.", accent: "from-purple-500/20 to-transparent" },
              { icon: DollarSign, title: "Cost-Conscious Marketing", desc: "Create campaigns based on your budget and the number of people you want to reach.", accent: "from-emerald-500/20 to-transparent" },
              { icon: ShieldCheck, title: "Evidence-Based Validation", desc: "Capture campaign participation and supporting evidence so businesses can track campaign completion.", accent: "from-yellow-500/20 to-transparent" },
              { icon: TrendingUp, title: "Monetize Your Social Reach", desc: "Sharers can turn eligible social media activity into an earning opportunity.", accent: "from-rose-500/20 to-transparent" },
              { icon: Smartphone, title: "Seamless & Secure", desc: "Simple campaign management, payments, validation and settlements in one platform.", accent: "from-pink-500/20 to-transparent" }
            ].map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative bg-zinc-900 border border-zinc-800 p-7 rounded-2xl overflow-hidden group cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOR BUSINESSES (Section 7) ══ */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 85% 50%, rgba(249,115,22,0.06) 0%, transparent 55%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-6 border border-orange-100">
                <Briefcase className="w-3.5 h-3.5" /> For Businesses
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
                Your Customers Are Already <span className="text-orange-500">Around You.</span>
              </h2>
              {/* Business visual image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative mb-8 rounded-2xl overflow-hidden border border-orange-100 shadow-lg"
              >
                <img
                  src="/images/featured_left_1790228521492.png"
                  alt="Local business campaign on adhive"
                  className="w-full h-44 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-white text-xs font-bold bg-orange-500 px-3 py-1 rounded-full">📍 Hyperlocal Campaigns</span>
                </div>
              </motion.div>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                Whether you're a restaurant, café, salon, gym, retail store, real-estate business, local service provider, coaching institute, event organizer, startup or D2C brand, adhive helps you create campaigns designed around where your customers are.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-[0_8px_24px_rgba(249,115,22,0.25)] group">
                  Create Your Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-sm text-zinc-400 font-medium">Coming Soon</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: "🏪", label: "Restaurants & Cafés" },
                { icon: "✂️", label: "Salons & Spas" },
                { icon: "🏋️", label: "Gyms & Fitness" },
                { icon: "🛍️", label: "Retail Stores" },
                { icon: "🏠", label: "Real Estate" },
                { icon: "📚", label: "Coaching Institutes" },
                { icon: "🎉", label: "Event Organizers" },
                { icon: "🚀", label: "Startups & D2C" }
              ].map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{b.icon}</span>
                  <span className="text-sm font-semibold text-zinc-700">{b.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FOR SHARERS (Section 8) ══ */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.08) 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — illustrated value props */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="grid gap-4"
            >
              {[
                { icon: MapPin, title: "Local Campaigns", desc: "Discover promotional campaigns available in your specific area.", c: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
                { icon: Share2, title: "Share on Instagram", desc: "Accept and post the promotional content through your Instagram presence.", c: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
                { icon: DollarSign, title: "Earn Rewards", desc: "Get paid after your campaign is successfully completed and validated.", c: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" }
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex items-center gap-5 p-6 rounded-2xl border ${item.bg} group hover:scale-[1.02] transition-transform`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                    <item.icon className={`w-7 h-7 ${item.c}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20">
                <Share2 className="w-3.5 h-3.5" /> For Sharers
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Your Social Reach <span className="text-orange-400">Has Value.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-4 leading-relaxed">
                Have an active Instagram presence?
              </p>
              <p className="text-zinc-500 mb-6 leading-relaxed">
                With adhive, eligible users can discover promotional opportunities from businesses looking to reach people in their area. Choose campaigns that interest you, complete the required activity and earn when the campaign requirements are successfully fulfilled and validated.
              </p>
              {/* Sharer earn image */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-8 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl"
              >
                <img
                  src="/images/featured_right_1790228583759.png"
                  alt="Sharers earning on adhive"
                  className="w-full h-44 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-white text-xs font-bold bg-emerald-600 px-3 py-1 rounded-full">💰 Earn From Your Reach</span>
                </div>
              </motion.div>
              <p className="text-lg font-bold text-orange-400 mb-10">Turn Your Social Reach Into an Opportunity.</p>
              <div className="flex items-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-[0_8px_24px_rgba(249,115,22,0.3)] group">
                  Start Earning
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-sm text-zinc-600 font-medium">Coming Soon</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ VALIDATION / VALUE PROP ══ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 60%, rgba(249,115,22,0.05) 0%, transparent 50%)" }} />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-sm font-semibold mb-6">
              <Clock className="w-3.5 h-3.5" /> Campaign Tracking
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
              More Than <span className="text-orange-500">Just a Share</span>
            </h2>
            <p className="text-lg text-zinc-500 mb-12 leading-relaxed max-w-2xl mx-auto">
              adhive is designed with campaign validation at its core. The platform tracks what was requested, who participated, and what was successfully completed.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-left max-w-2xl mx-auto">
              {["Campaign details", "Sharer participation", "Slot allocation", "Campaign status", "Social-media evidence", "Validation status", "Payment status", "Sharer earnings"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 py-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-sm text-zinc-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ COMING SOON + APP (Section 11 & 12) ══ */}
      <section className="py-24 bg-white border-t border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-8 border border-orange-100">
              <Sparkles className="w-4 h-4" /> adhive Is Coming Soon
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
              We're Building a Simpler Way for Businesses and <span className="text-orange-500">Local Communities to Connect.</span>
            </h2>
            <p className="text-xl text-zinc-500 mb-6">Be Ready for the Hive.</p>
            <p className="text-zinc-400 mb-12">Android & iOS coming soon.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-3 bg-zinc-950 text-white px-6 py-4 rounded-2xl w-full sm:w-auto justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M3.18 23.76c.28.15.59.24.93.24.5 0 .96-.18 1.33-.48L15.74 14l-3.32-3.32L3.18 23.76zm17.1-11.53-3.06-1.75-3.63 3.63 3.63 3.63 3.08-1.76c.87-.5.87-1.75-.02-2.25zM1.2.48C1.08.73 1 1.01 1 1.33v21.34c0 .32.08.6.2.85l.1.09 11.94-11.94v-.28L1.3.39 1.2.48zm13.54 11.43L5.44 2.6c-.37-.32-.84-.5-1.35-.5-.33 0-.65.09-.93.24l13.54 9.57z"/></svg>
                <div className="text-left">
                  <div className="text-xs text-zinc-400">Coming Soon</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-zinc-950 text-white px-6 py-4 rounded-2xl w-full sm:w-auto justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.3-2.17 3.87.03 3.06 2.65 4.08 2.67 4.09l-.05.16zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div className="text-left">
                  <div className="text-xs text-zinc-400">Coming Soon</div>
                  <div className="font-bold">App Store</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400">adhive will be available for download on Android and iOS. App availability may vary by region.</p>
          </motion.div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 50%)" }} />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-500 text-lg">Everything you need to know about adhive.</p>
          </motion.div>
          <div className="space-y-3 bg-white rounded-3xl p-6 shadow-2xl">
            {[
              { q: "What is adhive?", a: "adhive is a hyperlocal advertising platform connecting businesses with people in their local community through social media sharing." },
              { q: "Who can use adhive?", a: "Businesses can create promotional campaigns. Eligible individuals can participate as Sharers and earn by completing campaign requirements." },
              { q: "How does hyperlocal targeting work?", a: "Businesses define a geographic area around their location. Eligible Sharers within the applicable campaign area may receive the opportunity to participate." },
              { q: "How do Sharers earn?", a: "Sharers may earn when they accept and successfully complete eligible campaigns in accordance with campaign requirements and adhive's validation process." },
              { q: "Is every campaign guaranteed to generate customers?", a: "No. adhive facilitates promotional reach and campaign participation but does not guarantee a particular number of views, customers, sales, leads or conversions." },
              { q: "How are campaigns validated?", a: "adhive may use campaign information, participation records, social-media evidence and other available information to determine whether campaign requirements have been completed." },
              { q: "How are payments handled?", a: "Payments are processed through supported payment providers and are subject to adhive's applicable payment, refund, cancellation and settlement terms." }
            ].map((faq, i) => <FAQ key={i} q={faq.q} a={faq.a} i={i} />)}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
