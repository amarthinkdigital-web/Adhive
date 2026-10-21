"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion, MotionConfig } from "framer-motion";
import gsap from "gsap";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/animated/Marquee";
import { ShimmerText } from "@/components/animated/ShimmerText";
import Link from "next/link";
import {
  MapPin, Users, Target, DollarSign, ShieldCheck, Smartphone,
  ChevronDown, Briefcase, Share2, Sparkles, CheckCircle2, ArrowRight,
  TrendingUp, Clock, Star, Flame
} from "lucide-react";

/* ─────────────── Animated SVG Illustrations ─────────────── */
function AdhiveMarkSVG() {
  const sparks = [
    { x: 92, y: 96, s: 1 },
    { x: 312, y: 110, s: 0.85 },
    { x: 78, y: 216, s: 0.7 },
    { x: 322, y: 222, s: 0.9 },
    { x: 200, y: 46, s: 0.6 },
  ];
  const hex = (x: number, y: number, s: number) =>
    `M${x} ${y - 14 * s} L${x + 13 * s} ${y - 7 * s} L${x + 13 * s} ${y + 7 * s} L${x} ${y + 14 * s} L${x - 13 * s} ${y + 7 * s} L${x - 13 * s} ${y - 7 * s} Z`;
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="amark-grad" x1="200" y1="72" x2="200" y2="244">
          <stop offset="0%" stopColor="#fd9c01" />
          <stop offset="100%" stopColor="#fc7f03" />
        </linearGradient>
        <filter id="amark-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="10" stdDeviation="18" floodColor="#f97316" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Pulse rings */}
      {[0, 1].map(i => (
        <motion.circle
          key={i} cx="200" cy="158" fill="none" stroke="#f97316" strokeWidth="2"
          animate={{ r: [70, 152], opacity: [0.35, 0] }}
          transition={{ repeat: Infinity, duration: 3.2, delay: i * 1.6, ease: "easeOut" }}
        />
      ))}

      {/* Floating hexagon sparks */}
      {sparks.map((p, i) => (
        <motion.g
          key={i}
          animate={{ y: [0, -6, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.4, ease: "easeInOut" }}
        >
          <path d={hex(p.x, p.y, p.s)} fill="none" stroke="#fdba74" strokeWidth="1.5" />
        </motion.g>
      ))}

      {/* Mega adhive "a" mark */}
      <motion.g
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "200px 158px" }}
        filter="url(#amark-glow)"
      >
        <path d="M200 72 L272 114 L272 202 L200 244 L128 202 L128 114 Z" fill="url(#amark-grad)" />
        <text x="200" y="192" textAnchor="middle" fill="#ffffff" fontSize="104" fontWeight="800">a</text>
      </motion.g>
    </svg>
  );
}

/* Hero illustration — app welcome screen */
function WelcomeScreenSVG() {
  const sharers = [
    { x: 110, y: 158, c: "#fb923c" },
    { x: 250, y: 160, c: "#f59e0b" },
    { x: 118, y: 224, c: "#fdba74" },
    { x: 242, y: 222, c: "#22c55e" },
  ];
  return (
    <svg viewBox="0 0 360 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
      <rect x="56" y="16" width="248" height="392" rx="36" fill="#18181b" />
      <rect x="68" y="28" width="224" height="368" rx="28" fill="#ffffff" />
      <rect x="150" y="38" width="60" height="8" rx="4" fill="#3f3f46" />

      <text x="86" y="62" fill="#a1a1aa" fontSize="8" fontWeight="700">9:41</text>
      <rect x="246" y="56" width="12" height="7" rx="2" fill="#d4d4d8" />
      <rect x="262" y="56" width="9" height="7" rx="2" fill="#d4d4d8" />

      <path d="M180 76 L199 87 L199 109 L180 120 L161 109 L161 87 Z" fill="url(#ws-mark)" />
      <text x="180" y="105" textAnchor="middle" fill="#ffffff" fontSize="19" fontWeight="800">a</text>
      <path d="M214 78 L221 82 L221 90 L214 94 L207 90 L207 82 Z" fill="none" stroke="#fdba74" strokeWidth="1.6" />
      <path d="M228 92 L235 96 L235 104 L228 108 L221 104 L221 96 Z" fill="none" stroke="#fed7aa" strokeWidth="1.6" />

      <rect x="84" y="134" width="192" height="112" rx="16" fill="url(#ws-illus)" />

      {sharers.map((s, i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}>
          <line x1={s.x} y1={s.y} x2="180" y2="190" stroke="#fdba74" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx={s.x} cy={s.y} r="10" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.6" />
          <circle cx={s.x} cy={s.y} r="5" fill={s.c} />
        </motion.g>
      ))}

      <motion.g animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}>
        <image href="/images/welcome_boys_sticker.png" x="121" y="136" width="118" height="104" preserveAspectRatio="xMidYMid meet" />
      </motion.g>

      <text x="180" y="272" textAnchor="middle" fill="#18181b" fontSize="15" fontWeight="800">Welcome to adHive</text>
      <text x="180" y="292" textAnchor="middle" fill="#71717a" fontSize="9.5" fontWeight="600">Hyperlocal marketing, made simple.</text>
      <text x="180" y="305" textAnchor="middle" fill="#71717a" fontSize="9.5" fontWeight="600">Reach locals. Earn by sharing.</text>

      <circle cx="163" cy="326" r="3" fill="#fc7f03" />
      <circle cx="180" cy="326" r="3" fill="#e4e4e7" />
      <circle cx="197" cy="326" r="3" fill="#e4e4e7" />

      <rect x="100" y="340" width="160" height="38" rx="19" fill="#fc7f03" />
      <text x="180" y="364" textAnchor="middle" fill="#ffffff" fontSize="12.5" fontWeight="800">Get Started</text>

      <rect x="150" y="390" width="60" height="4" rx="2" fill="#e4e4e7" />

      <defs>
        <linearGradient id="ws-mark" x1="180" y1="76" x2="180" y2="120">
          <stop offset="0%" stopColor="#fd9c01" />
          <stop offset="100%" stopColor="#fc7f03" />
        </linearGradient>
        <linearGradient id="ws-illus" x1="84" y1="134" x2="276" y2="246">
          <stop offset="0%" stopColor="#fff7ed" />
          <stop offset="100%" stopColor="#fde3c4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Hero illustration — share &amp; earn */
function ShareEarnSVG() {
  const avatars = [
    { x: 92, y: 300, c: "#f97316" },
    { x: 128, y: 300, c: "#fb923c" },
    { x: 164, y: 300, c: "#f59e0b" },
    { x: 200, y: 300, c: "#22c55e" },
  ];
  return (
    <svg viewBox="0 0 360 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
      <rect x="56" y="16" width="248" height="392" rx="36" fill="#18181b" />
      <rect x="68" y="28" width="224" height="368" rx="28" fill="#ffffff" />
      <rect x="150" y="38" width="60" height="8" rx="4" fill="#3f3f46" />

      <rect x="84" y="62" width="192" height="196" rx="18" fill="#ffffff" stroke="#e4e4e7" />
      <rect x="96" y="74" width="168" height="112" rx="12" fill="url(#se-post)" />
      <circle cx="120" cy="98" r="13" fill="#ffffff" />
      <circle cx="120" cy="98" r="7.5" fill="#fb923c" />
      <rect x="140" y="90" width="72" height="8" rx="4" fill="rgba(255,255,255,0.9)" />
      <rect x="140" y="103" width="46" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
      <rect x="96" y="198" width="120" height="9" rx="4.5" fill="#e4e4e7" />
      <rect x="96" y="214" width="88" height="9" rx="4.5" fill="#e4e4e7" />

      <motion.g animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <path d="M110 260 C103 253 96 247 96 240 C96 233 102 229 108 232 C110 233 110 235 110 236 C110 235 111 233 113 232 C119 229 125 233 125 240 C125 247 118 253 110 260 Z" fill="#f97316" />
      </motion.g>
      <text x="134" y="252" fill="#71717a" fontSize="11" fontWeight="600">1.2k shares</text>
      <rect x="216" y="234" width="50" height="22" rx="11" fill="#fff7ed" stroke="#fed7aa" />
      <text x="226" y="249" fill="#f97316" fontSize="10" fontWeight="700">+38%</text>

      <rect x="96" y="274" width="168" height="52" rx="16" fill="#f97316" />
      <text x="112" y="298" fill="#ffffff" fontSize="12" fontWeight="700">Sharer Earnings</text>
      <text x="112" y="315" fill="rgba(255,255,255,0.85)" fontSize="10">this week</text>
      <text x="196" y="305" fill="#ffffff" fontSize="12" fontWeight="800">₹2,480</text>

      {avatars.map((a, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}>
          <circle cx={a.x} cy={a.y} r="13" fill="#ffffff" stroke="#fed7aa" strokeWidth="2" />
          <circle cx={a.x} cy={a.y} r="7" fill={a.c} />
        </motion.g>
      ))}
      <text x="238" y="305" fill="#71717a" fontSize="10.5" fontWeight="600">+126 nearby</text>

      {[0, 1, 2, 3].map((i) => (
        <motion.circle key={"p" + i} cx={104 + i * 46} cy={374} r={4 + (i % 2)} fill="#fb923c" animate={{ y: [0, -42, -92], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.7, ease: "easeOut" }} />
      ))}

      <defs>
        <linearGradient id="se-post" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* For Sharers — Sharer Dashboard app screen (same phone shell as WelcomeScreenSVG) */
function SharerEarningsSVG() {
  const activity = [
    { brand: "Zudio", sub: "Time left 4h 29m", amt: "₹500", amtColor: "#f97316", dot: "#f97316", live: true },
    { brand: "Zudio", sub: "Completed · 12 Aug", amt: "₹500", amtColor: "#16a34a", dot: "#22c55e", live: false },
    { brand: "Zudio", sub: "Posting time expired", amt: "Expired", amtColor: "#a1a1aa", dot: "#a1a1aa", live: false },
  ];
  return (
    <svg viewBox="0 0 360 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
      <defs>
        <linearGradient id="se2-grad" x1="84" y1="110" x2="276" y2="168">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      {/* Phone shell — same as welcome screen */}
      <rect x="56" y="16" width="248" height="392" rx="36" fill="#18181b" />
      <rect x="68" y="28" width="224" height="368" rx="28" fill="#ffffff" />
      <rect x="150" y="38" width="60" height="8" rx="4" fill="#3f3f46" />

      <text x="86" y="62" fill="#a1a1aa" fontSize="8" fontWeight="700">9:41</text>
      <rect x="246" y="56" width="12" height="7" rx="2" fill="#d4d4d8" />
      <rect x="262" y="56" width="9" height="7" rx="2" fill="#d4d4d8" />

      {/* Header */}
      <text x="84" y="84" fill="#a1a1aa" fontSize="7.5" fontWeight="700">Sharer Dashboard</text>
      <text x="84" y="100" fill="#18181b" fontSize="13" fontWeight="800">Hello, John</text>
      <circle cx="270" cy="88" r="11" fill="#fde3c4" />
      <circle cx="270" cy="85" r="4" fill="#fb923c" />
      <path d="M264 94 C264 89 276 89 276 94 Z" fill="#fb923c" />

      {/* Total earned card */}
      <rect x="84" y="110" width="192" height="58" rx="16" fill="url(#se2-grad)" />
      <text x="98" y="130" fill="rgba(255,255,255,0.85)" fontSize="8" fontWeight="600">Total Earned</text>
      <text x="98" y="153" fill="#ffffff" fontSize="20" fontWeight="800">₹1.2K</text>
      <rect x="212" y="122" width="52" height="21" rx="10.5" fill="rgba(255,255,255,0.22)" />
      <text x="238" y="136" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="700">Earn more</text>
      <text x="266" y="160" textAnchor="end" fill="rgba(255,255,255,0.85)" fontSize="7" fontWeight="600">Switch Profile ›</text>

      {/* Tabs */}
      <rect x="84" y="180" width="86" height="26" rx="13" fill="#f97316" />
      <text x="127" y="197" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="700">Active Ads</text>
      <rect x="176" y="180" width="100" height="26" rx="13" fill="#f4f4f5" stroke="#e4e4e7" />
      <text x="226" y="197" textAnchor="middle" fill="#71717a" fontSize="8.5" fontWeight="700">Browse Ads</text>
      <text x="84" y="228" fill="#a1a1aa" fontSize="8" fontWeight="600">3 Ads Available</text>

      {/* Recent activity */}
      <text x="84" y="246" fill="#18181b" fontSize="9.5" fontWeight="800">Recent Activity</text>
      {activity.map((a, i) => {
        const y = 254 + i * 34;
        return (
          <g key={i}>
            <rect x="84" y={y} width="192" height="30" rx="10" fill="#ffffff" stroke="#e4e4e7" />
            {a.live ? (
              <motion.circle cx="98" cy={y + 15} r="9" fill={a.dot}
                animate={{ opacity: [1, 0.55, 1] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} />
            ) : (
              <circle cx="98" cy={y + 15} r="9" fill={a.dot} />
            )}
            <text x="98" y={y + 18} textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">Z</text>
            <text x="114" y={y + 13} fill="#18181b" fontSize="9" fontWeight="700">{a.brand}</text>
            <text x="114" y={y + 24} fill="#a1a1aa" fontSize="7" fontWeight="600">{a.sub}</text>
            <text x="268" y={y + 19} textAnchor="end" fill={a.amtColor} fontSize="9.5" fontWeight="800">{a.amt}</text>
          </g>
        );
      })}

      <text x="84" y="372" fill="#f97316" fontSize="8" fontWeight="700">14 Ads Completed</text>
      <text x="276" y="372" textAnchor="end" fill="#a1a1aa" fontSize="8" fontWeight="700">View All ›</text>

      {/* Home indicator */}
      <rect x="150" y="388" width="60" height="4" rx="2" fill="#e4e4e7" />
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

/* What is adhive — mobile app splash / start screen */
function WhatIsAdhiveSVG() {
  const reduced = !!useReducedMotion();
  const uiFont = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

  return (
    <svg viewBox="0 0 360 452" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="ph-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#fff7ed" />
          <stop offset="100%" stopColor="#ffedd5" />
        </linearGradient>
        <radialGradient id="ph-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="card-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="card-grad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.10" />
        </linearGradient>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <clipPath id="ph-screen-clip">
          <rect x="54" y="16" width="252" height="400" rx="48" />
        </clipPath>
        <filter id="ph-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#000000" floodOpacity="0.45" />
        </filter>
        <filter id="orange-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#f97316" floodOpacity="0.7" />
        </filter>
        <filter id="soft-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f97316" floodOpacity="0.4" />
        </filter>
      </defs>

      <motion.g
        initial={reduced ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduced ? 0 : 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "180px 226px" }}
      >
        <motion.g
          animate={reduced ? undefined : { y: [0, -8, 0] }}
          transition={reduced ? undefined : { repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Outer rotating dashed rings */}
          <motion.circle cx="180" cy="216" r="150"
            stroke="url(#ring-grad)" strokeWidth="1" fill="none" strokeDasharray="8 6" opacity="0.3"
            animate={reduced ? undefined : { rotate: [0, 360] }}
            transition={reduced ? undefined : { repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ transformOrigin: "180px 216px" }}
          />
          <motion.circle cx="180" cy="216" r="172"
            stroke="url(#ring-grad)" strokeWidth="0.5" fill="none" strokeDasharray="4 12" opacity="0.15"
            animate={reduced ? undefined : { rotate: [360, 0] }}
            transition={reduced ? undefined : { repeat: Infinity, duration: 40, ease: "linear" }}
            style={{ transformOrigin: "180px 216px" }}
          />

          {/* Floating ambient particles */}
          {[
            { cx: 28, cy: 118, r: 4, delay: 0 },
            { cx: 40, cy: 282, r: 3, delay: 0.8 },
            { cx: 322, cy: 138, r: 3.5, delay: 0.4 },
            { cx: 336, cy: 308, r: 4, delay: 1.2 },
            { cx: 68, cy: 398, r: 2.5, delay: 1.6 },
            { cx: 302, cy: 392, r: 3, delay: 0.6 },
          ].map((p, i) => (
            <motion.circle key={i} cx={p.cx} cy={p.cy} r={p.r}
              fill="#f97316" opacity="0.55"
              animate={reduced ? undefined : { opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.4, 0.8] }}
              transition={reduced ? undefined : { repeat: Infinity, duration: 3 + i * 0.5, delay: p.delay, ease: "easeInOut" }}
              style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
            />
          ))}

          {/* Phone frame */}
          <g filter="url(#ph-shadow)">
            <rect x="54" y="16" width="252" height="400" rx="48" fill="url(#ph-screen)" />
          </g>
          {/* Orange border accent */}
          <rect x="54" y="16" width="252" height="400" rx="48" fill="none" stroke="url(#ring-grad)" strokeWidth="1.5" opacity="0.45" />

          <g clipPath="url(#ph-screen-clip)">
            {/* Splash backdrop glow */}
            <circle cx="180" cy="150" r="140" fill="url(#ph-glow)" />
            <circle cx="180" cy="80" r="80" fill="#f97316" opacity="0.05" />

            {/* Status bar */}
            <text x="92" y="64" fontFamily={uiFont} fontSize="12" fontWeight="700" fill="#18181b">9:41</text>
            <g fill="#18181b">
              <rect x="244" y="58" width="3" height="4" rx="0.8" />
              <rect x="248" y="55" width="3" height="7" rx="0.8" />
              <rect x="252" y="52" width="3" height="10" rx="0.8" />
              <rect x="256" y="49" width="3" height="13" rx="0.8" />
            </g>
            <rect x="266" y="52" width="22" height="11" rx="3" stroke="#18181b" strokeWidth="1.2" fill="none" />
            <rect x="288" y="55" width="2" height="5" rx="1" fill="#18181b" />
            <rect x="268" y="54" width="15" height="7" rx="1.5" fill="#18181b" />

            {/* Decorative honeycomb hexagons */}
            {[
              { d: "M96 108 l16 9.2 v18.4 l-16 9.2 l-16 -9.2 v-18.4 Z", delay: 0 },
              { d: "M265 118 l14 8 v16 l-14 8 l-14 -8 v-16 Z", delay: 0.7 },
              { d: "M72 178 l10 5.7 v11.6 l-10 5.7 l-10 -5.7 v-11.6 Z", delay: 1.4 },
              { d: "M288 185 l10 5.7 v11.6 l-10 5.7 l-10 -5.7 v-11.6 Z", delay: 0.4 },
            ].map((h, i) => (
              <motion.path key={i} d={h.d}
                stroke="#f97316" strokeWidth="1.2" fill="#f97316" fillOpacity="0.07" strokeOpacity="0.25"
                animate={reduced ? undefined : { opacity: [0.4, 1, 0.4] }}
                transition={reduced ? undefined : { repeat: Infinity, duration: 3 + i * 0.7, ease: "easeInOut", delay: h.delay }}
              />
            ))}

            {/* Adhive hex badge — glowing logo center */}
            <motion.g filter="url(#orange-glow)"
              animate={reduced ? undefined : { scale: [1, 1.07, 1] }}
              transition={reduced ? undefined : { repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              style={{ transformOrigin: "180px 144px" }}
            >
              <path d="M180 104 L212 122 L212 162 L180 180 L148 162 L148 122 Z" fill="url(#card-grad)" />
              <path d="M180 104 L212 122 L212 162 L180 180 L148 162 L148 122 Z" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
              <text x="180" y="156" textAnchor="middle" fontFamily={uiFont} fontSize="34" fontWeight="900" fill="#ffffff">a</text>
            </motion.g>

            {/* Pulsing orange rings from badge */}
            {[0, 1].map(i => (
              <motion.circle key={i} cx="180" cy="142" r="38" fill="none" stroke="#f97316" strokeWidth="1.5"
                animate={reduced ? undefined : { r: [38, 82], opacity: [0.5, 0] }}
                transition={reduced ? undefined : { repeat: Infinity, duration: 2.5, delay: i * 1.25, ease: "easeOut" }}
              />
            ))}

            {/* Wordmark */}
            <text x="180" y="214" textAnchor="middle" fontFamily={uiFont} fontSize="34" fontWeight="900" letterSpacing="-0.5" fill="#18181b">adHive</text>

            {/* Tagline */}
            <text x="180" y="234" textAnchor="middle" fontFamily={uiFont} fontSize="11" fontWeight="500" fill="#78716c">Hyperlocal ads, powered by people</text>

            {/* Orange divider */}
            <line x1="120" y1="248" x2="240" y2="248" stroke="url(#ring-grad)" strokeWidth="1" opacity="0.4" />

            {/* Stat cards */}
            <rect x="76" y="258" width="88" height="46" rx="13" fill="url(#card-grad2)" stroke="#f97316" strokeOpacity="0.3" strokeWidth="0.8" />
            <text x="120" y="278" textAnchor="middle" fontFamily={uiFont} fontSize="17" fontWeight="800" fill="#f97316">500+</text>
            <text x="120" y="295" textAnchor="middle" fontFamily={uiFont} fontSize="8.5" fontWeight="600" fill="#a8a29e">Businesses</text>

            <rect x="196" y="258" width="88" height="46" rx="13" fill="url(#card-grad2)" stroke="#f97316" strokeOpacity="0.3" strokeWidth="0.8" />
            <text x="240" y="278" textAnchor="middle" fontFamily={uiFont} fontSize="17" fontWeight="800" fill="#f97316">₹2.4K</text>
            <text x="240" y="295" textAnchor="middle" fontFamily={uiFont} fontSize="8.5" fontWeight="600" fill="#a8a29e">Avg Earn</text>

            {/* Orange gradient CTA button */}
            <rect x="100" y="318" width="160" height="38" rx="19" fill="url(#card-grad)" filter="url(#soft-glow)" />
            <text x="180" y="342" textAnchor="middle" fontFamily={uiFont} fontSize="13" fontWeight="800" fill="#ffffff">Get Started →</text>

            {/* Animated page indicator dots */}
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={168 + i * 12}
                cy={370}
                r="3.5"
                fill={i === 0 ? "#f97316" : "#e4e4e7"}
                animate={reduced ? undefined : { opacity: i === 0 ? [1, 0.4, 1] : [0.3, 0.7, 0.3] }}
                transition={reduced ? undefined : { repeat: Infinity, duration: 1.4, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}

            {/* Home indicator */}
            <rect x="150" y="388" width="60" height="5" rx="2.5" fill="#18181b" opacity="0.75" />
          </g>

          {/* Dynamic island */}
          <rect x="146" y="40" width="68" height="18" rx="9" fill="#1c1917" />
        </motion.g>
      </motion.g>
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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = contentRef.current;
    if (!el) return;

    gsap.set(el, { height: 0, opacity: 0, overflow: "hidden" });

    if (open) {
      if (reduceMotion) {
        gsap.to(el, { height: "auto", opacity: 1, duration: 0, ease: "none" });
      } else {
        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          { height: el.scrollHeight, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
        );
      }
    } else {
      if (reduceMotion) {
        gsap.to(el, { height: 0, opacity: 0, duration: 0, ease: "none" });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.25, ease: "power2.in" });
      }
    }
  }, [open]);

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
      <div ref={contentRef} className="overflow-hidden">
        <div className="px-5 pb-5 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 pt-4">{a}</div>
      </div>
    </motion.div>
  );
}

/* ─────────────── GSAP Headline Animation ─────────────── */
function AnimatedHeading({ children, className = "", tag = "h2", delay = 0 }: {
  children: React.ReactNode; className?: string; tag?: "h1" | "h2" | "h3"; delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    gsap.fromTo(el,
      { opacity: 0, y: 36, skewY: 1.5 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.85, delay, ease: "expo.out" }
    );
  }, [inView, delay]);
  const Tag = tag as React.ElementType;
  return <Tag ref={ref} className={className} style={{ opacity: 0 }}>{children}</Tag>;
}

function AnimatedWords({ text, className = "", delay = 0 }: {
  text: string; className?: string; delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: delay + i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >{word}</motion.span>
      ))}
    </span>
  );
}

function GlowLine() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="h-px w-24 mx-auto mt-5 origin-left"
      style={{ background: "linear-gradient(90deg, #f97316, #f59e0b, transparent)" }}
    />
  );
}

/* ─────────────── Page ─────────────── */
export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };
  const wordAnim = {
    hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } }
  };


  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-white overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <Navbar />

      {/* ══ HERO ══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-x-clip overflow-hidden bg-[#fafafa] border-b border-[#e4e4e7] pt-32 sm:pt-28 lg:pt-20">
        <div className="absolute top-[-80px] left-[-120px] w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-[-60px] right-[-100px] w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-4 pb-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-28 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-start max-w-xl pl-0 sm:pl-6 mt-0 lg:-mt-16">
            <motion.div variants={wordAnim} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-xs font-semibold text-orange-600 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Launching Soon on Android & iOS
            </motion.div>
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-zinc-900 mb-4"
            >
              <motion.span variants={wordAnim} className="block">Hyperlocal Marketing.</motion.span>
              <motion.span variants={wordAnim} className="text-shimmer animate-shimmer block">
                Without Burn
                <span className="relative inline-block align-baseline">
                  ı
                  <Flame
                    fill="currentColor"
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 -top-[0.05em] w-[0.5em] h-[0.5em] text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                  />
                </span>
                ng Your Wallet.
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex w-full items-end justify-center gap-3 sm:gap-4 lg:block lg:h-[520px] overflow-x-clip"
            style={{ perspective: "1000px" }}
          >
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-20 w-[44%] max-w-[160px] sm:w-[46%] sm:max-w-[230px] shrink-0 overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:absolute lg:-left-4 lg:-top-4 lg:w-[360px] lg:max-w-none lg:shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            >
              <WelcomeScreenSVG />
            </motion.div>
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="relative z-10 w-[44%] max-w-[160px] sm:w-[46%] sm:max-w-[230px] shrink-0 overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:absolute lg:right-0 lg:top-10 lg:w-[360px] lg:max-w-none"
            >
              <ShareEarnSVG />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #fafafa)" }} />
      </section>

      {/* ══ KEYWORD MARQUEE ══ */}
      <section
        aria-label="adhive highlights"
        className="relative overflow-hidden border-y border-orange-500/20 bg-zinc-950 py-5"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(249,115,22,0.10), transparent 30%, transparent 70%, rgba(249,115,22,0.10))" }}
        />
        <Marquee
          items={[
            "Hyperlocal Reach",
            "Real People",
            "Instagram Sharing",
            "Earn Rewards",
            "Local Businesses",
            "Community Powered",
            "Cost-Conscious",
            "Evidence-Based",
          ]}
          className="text-orange-400"
        />
      </section>

      {/* ══ INTRO / CTA ══ */}
      <section className="pt-16 sm:pt-20 lg:pt-28 pb-12 lg:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-base sm:text-xl md:text-2xl text-zinc-600 mb-8 leading-relaxed font-medium">
            adHive helps businesses promote their products and services through real people in their local community — while giving social media users a simple way to earn by sharing promotional content.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex justify-center">
            <a
              href="https://www.instagram.com/adhive.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow adHive on Instagram"
              className="inline-flex items-center gap-3 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:opacity-90 hover:scale-105 transition-all shadow-[0_8px_32px_rgba(220,39,67,0.30)] group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow Us on Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ WHAT IS adhive ══ */}
      <section id="what-is-adhive" className="py-20 lg:py-28 relative overflow-hidden border-t border-zinc-800/60" style={{ background: "linear-gradient(135deg, #0c0a09 0%, #0f0d0b 30%, #121010 55%, #0a0c10 80%, #080a0f 100%)" }}>
        {/* Rich multi-layer background gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(249,115,22,0.13) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 15% 70%, rgba(245,158,11,0.09) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 85% 85%, rgba(251,146,60,0.07) 0%, transparent 45%)" }} />
        {/* Glowing mesh lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        {/* Animated warm orb top-left */}
        <motion.div aria-hidden className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)", filter: "blur(60px)" }} animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        {/* Animated cool orb bottom-right */}
        <motion.div aria-hidden className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)", filter: "blur(50px)" }} animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">

            {/* Left — mobile app illustration */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[330px] mx-auto flex items-center justify-center overflow-x-clip">
                <WhatIsAdhiveSVG />
              </div>
            </motion.div>

            {/* Right — text + cards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/15 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20"
              >
                <Smartphone className="w-3.5 h-3.5" />
                Platform Overview
              </motion.div>
              <AnimatedHeading tag="h2" delay={0.1} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                What is{" "}<ShimmerText>adHive?</ShimmerText>
              </AnimatedHeading>
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}
                className="text-xl text-zinc-300 mb-4 font-medium"
              >
                adHive is a people-powered, hyperlocal advertising platform.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.3 }}
                className="text-zinc-500 text-lg leading-relaxed mb-10"
              >
                Traditional digital advertising puts your business in front of thousands who may never become customers. adHive takes a more local approach — reaching real people through real community members.
              </motion.p>

              <div className="space-y-4">
                {[
                  { icon: Briefcase, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20", title: "For Businesses", desc: "Businesses get precise local reach." },
                  { icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", title: "For Sharers", desc: "People earn by sharing promotional content." },
                  { icon: Users, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", title: "For Customers", desc: "Discover local businesses through community members." }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * i, duration: 0.5 }}
                    className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border ${item.bg} group hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform cursor-default`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg">{item.title}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden overflow-x-clip">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(249,115,22,0.05) 0%, transparent 55%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={wordAnim} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-5 border border-orange-100">
                <TrendingUp className="w-3.5 h-3.5" /> Simple Process
              </motion.span>
              <AnimatedHeading tag="h2" delay={0.1} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4">How adHive Works</AnimatedHeading>
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.55 }}
                className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto"
              >A seamless workflow designed for businesses to reach locals, and for locals to earn.</motion.p>
              <GlowLine />
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* For Businesses */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="mb-6 sm:mb-8 w-full flex justify-center">
                <div className="w-full max-w-[280px] sm:max-w-[320px]">
                  <HowItWorksSVG type="business" />
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">For Businesses</h3>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {[
                  { n: "01", title: "Create Campaign", desc: "Define your promotional campaign, target location, audience requirements and content.", icon: Target },
                  { n: "02", title: "Set Budget & Slots", desc: "Choose the number of promotional slots and allocate your campaign budget.", icon: DollarSign },
                  { n: "03", title: "Monitor & Validate", desc: "Track participation in real-time and validate completed promotional activities with evidence.", icon: ShieldCheck }
                ].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                    className="flex gap-4 sm:gap-5 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-black shrink-0 group-hover:scale-110 transition-transform shadow-[0_4px_14px_rgba(249,115,22,0.35)]">
                        {s.n}
                      </div>
                      {i < 2 && <div className="flex-1 w-px bg-gradient-to-b from-orange-300 to-transparent mt-2 min-h-[24px] sm:min-h-[32px]" />}
                    </div>
                    <div className="pb-3 sm:pb-4">
                      <h4 className="text-base sm:text-lg font-bold text-zinc-900 mb-1 flex items-center gap-2">
                        <s.icon className="w-4 h-4 text-orange-500 shrink-0" />
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
              <div className="mb-6 sm:mb-8 w-full flex justify-center">
                <div className="w-full max-w-[280px] sm:max-w-[320px]">
                  <HowItWorksSVG type="sharer" />
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Share2 className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-700" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">For Sharers</h3>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {[
                  { n: "01", title: "Discover Campaigns", desc: "Find available campaigns in your local area and review the specific requirements.", icon: MapPin },
                  { n: "02", title: "Accept & Post", desc: "Accept the campaign opportunity and share the promotional content on your Instagram.", icon: Share2 },
                  { n: "03", title: "Earn Rewards", desc: "Complete all requirements successfully, get validated and receive your earnings.", icon: DollarSign }
                ].map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                    className="flex gap-4 sm:gap-5 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-black shrink-0 group-hover:scale-110 transition-transform shadow-[0_4px_14px_rgba(24,24,27,0.25)]">
                        {s.n}
                      </div>
                      {i < 2 && <div className="flex-1 w-px bg-gradient-to-b from-zinc-300 to-transparent mt-2 min-h-[24px] sm:min-h-[32px]" />}
                    </div>
                    <div className="pb-3 sm:pb-4">
                      <h4 className="text-base sm:text-lg font-bold text-zinc-900 mb-1 flex items-center gap-2">
                        <s.icon className="w-4 h-4 text-zinc-600 shrink-0" />
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
      <section id="why-adhive" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900/90 to-zinc-950">
        {/* Subtle radial orange accent */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 82% 8%, rgba(249,115,22,0.14) 0%, transparent 48%), radial-gradient(circle at 10% 92%, rgba(245,158,11,0.10) 0%, transparent 48%)" }} />

        {/* Soft drifting warm orbs */}
        <motion.div aria-hidden className="absolute top-[8%] -left-16 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(253,186,116,0.22) 0%, transparent 70%)", filter: "blur(46px)" }} animate={{ y: [0, -26, 0], x: [0, 18, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div aria-hidden className="absolute bottom-[6%] -right-20 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)", filter: "blur(50px)" }} animate={{ y: [0, 24, 0], x: [0, -16, 0] }} transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1.4 }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={wordAnim} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-5 border border-orange-500/20">
                <Star className="w-3.5 h-3.5" /> Our Advantage
              </motion.span>
              <AnimatedHeading tag="h2" delay={0.1} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                Why{" "}<ShimmerText>adHive</ShimmerText>?
              </AnimatedHeading>
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.55 }}
                className="text-xl text-zinc-300 max-w-2xl mx-auto"
              >Designed from the ground up for real community-powered marketing.</motion.p>
              <GlowLine />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Hyperlocal Reach", desc: "Target people within a specific geographic radius around your business.", accent: "from-orange-500/10 to-transparent" },
              { icon: Users, title: "Real People. Real Reach.", desc: "Put your brand in front of audiences through people who are part of the local community.", accent: "from-blue-500/10 to-transparent" },
              { icon: Target, title: "Audience-Based Campaigns", desc: "Define campaign requirements based on location and relevant audience characteristics.", accent: "from-purple-500/10 to-transparent" },
              { icon: DollarSign, title: "Cost-Conscious Marketing", desc: "Create campaigns based on your budget and the number of people you want to reach.", accent: "from-emerald-500/10 to-transparent" },
              { icon: ShieldCheck, title: "Evidence-Based Validation", desc: "Capture campaign participation and supporting evidence so businesses can track campaign completion.", accent: "from-yellow-500/10 to-transparent" },
              { icon: TrendingUp, title: "Monetize Your Social Reach", desc: "Sharers can turn eligible social media activity into an earning opportunity.", accent: "from-rose-500/10 to-transparent" },
              { icon: Smartphone, title: "Seamless & Secure", desc: "Simple campaign management, payments, validation and settlements in one platform.", accent: "from-pink-500/10 to-transparent" }
            ].map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative p-7 rounded-2xl overflow-hidden group cursor-default border border-orange-200 bg-gradient-to-b from-orange-50/50 via-white to-white shadow-[0_1px_2px_rgba(249,115,22,0.04),0_18px_40px_-20px_rgba(0,0,0,0.6)] hover:border-orange-400 hover:shadow-[0_1px_2px_rgba(249,115,22,0.06),0_28px_56px_-16px_rgba(249,115,22,0.45)] transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-orange-50 border border-orange-100 group-hover:bg-orange-100 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <f.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOR BUSINESSES (Section 7) ══ */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-zinc-100">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 85% 50%, rgba(249,115,22,0.06) 0%, transparent 55%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — business categories grid */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:order-1"
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

            {/* Right — heading, image & CTA */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 lg:order-2"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold mb-6 border border-orange-100"
              >
                <Briefcase className="w-3.5 h-3.5" /> For Businesses
              </motion.span>
              <AnimatedHeading tag="h2" delay={0.1} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
                Your Customers Are Already{" "}<ShimmerText>Around You.</ShimmerText>
              </AnimatedHeading>
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
                Whether you&apos;re a restaurant, café, salon, gym, retail store, real-estate business, local service provider, coaching institute, event organizer, startup or D2C brand, adHive helps you create campaigns designed around where your customers are.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-[0_8px_24px_rgba(249,115,22,0.25)] group">
                  Create Your Campaign
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
                <span className="text-sm text-zinc-400 font-medium">Coming Soon</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FOR SHARERS (Section 8) ══ */}
      <section className="py-16 lg:py-24 bg-zinc-950 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 22% 48%, rgba(249,115,22,0.14) 0%, transparent 45%), radial-gradient(circle at 88% 82%, rgba(245,158,11,0.10) 0%, transparent 50%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.5]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — Sharer Dashboard mockup + CTA */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative flex flex-col items-center lg:-translate-y-10"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-orange-500/20 blur-3xl rounded-full" />
                <div className="relative w-full max-w-[340px] sm:w-[400px] sm:max-w-full">
                  <SharerEarningsSVG />
                </div>
              </div>

              <p className="text-base sm:text-lg font-bold text-orange-400 mt-6 mb-5 text-center">Turn Your Social Reach Into an Opportunity.</p>
              <div className="flex items-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-[0_8px_24px_rgba(249,115,22,0.3)] group">
                  Start Earning
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right — sharer content */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/20"
              >
                <Share2 className="w-3.5 h-3.5" /> For Sharers
              </motion.span>
              <AnimatedHeading tag="h2" delay={0.1} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Your Social Reach{" "}<ShimmerText>Has Value.</ShimmerText>
              </AnimatedHeading>
              <motion.p
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-zinc-400 mb-4 leading-relaxed"
              >
                Have an active Instagram presence?
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                className="text-zinc-500 mb-8 leading-relaxed"
              >
                With adHive, eligible users can discover promotional opportunities from businesses looking to reach people in their area. Choose campaigns that interest you, complete the required activity and earn when the campaign requirements are successfully fulfilled and validated.
              </motion.p>

              <div className="grid gap-4">
                {[
                  { icon: MapPin, title: "Local Campaigns", desc: "Discover promotional campaigns available in your specific area.", c: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
                  { icon: Share2, title: "Share on Instagram", desc: "Accept and post the promotional content through your Instagram presence.", c: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
                  { icon: DollarSign, title: "Earn Rewards", desc: "Get paid after your campaign is successfully completed and validated.", c: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" }
                ].map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex items-center gap-5 p-5 rounded-2xl border ${item.bg} group hover:scale-[1.02] transition-transform`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                      <item.icon className={`w-6 h-6 ${item.c}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-0.5">{item.title}</h3>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ VALIDATION / VALUE PROP ══ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 60%, rgba(249,115,22,0.05) 0%, transparent 50%)" }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-sm font-semibold mb-6"
            >
              <Clock className="w-3.5 h-3.5" /> Campaign Tracking
            </motion.span>
            <AnimatedHeading tag="h2" delay={0.1} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
              More Than{" "}<ShimmerText>Just a Share</ShimmerText>
            </AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.55 }}
              className="text-lg text-zinc-500 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              adHive is designed with campaign validation at its core. The platform tracks what was requested, who participated, and what was successfully completed.
            </motion.p>

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
      <section className="py-16 lg:py-24 bg-white border-t border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={wordAnim} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-8 border border-orange-100">
              <Sparkles className="w-4 h-4" /> adHive Is Coming Soon
            </motion.div>
            <AnimatedHeading tag="h2" delay={0.15} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
              We{"'"}re Building a Simpler Way for Businesses and{" "}<ShimmerText>Local Communities to Connect.</ShimmerText>
            </AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35, duration: 0.55 }}
              className="text-xl text-zinc-500 mb-6"
            >Be Ready for the Hive.</motion.p>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }}
              className="text-zinc-400 mb-12"
            >Android & iOS coming soon.</motion.p>

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

            <p className="text-xs text-zinc-400">adHive will be available for download on Android and iOS. App availability may vary by region.</p>
          </motion.div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-20 lg:py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 50%)" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <AnimatedHeading tag="h2" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Frequently Asked Questions</AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.55 }}
              className="text-zinc-500 text-lg"
            >Everything you need to know about adhive.</motion.p>
            <GlowLine />
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
    </MotionConfig>
  );
}
