"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  Mail,
  Globe,
  ArrowRight,
  Building2,
  Briefcase,
  Users2,
  Sparkles,
  Shield,
  Award,
} from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

const Linkedin = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.12v5.87h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75h.05Z" />
  </svg>
);

const Twitter = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M17.53 3h3.1l-6.77 7.74L21.9 21h-6.23l-4.88-6.38L5.18 21H2.07l7.24-8.28L2.4 3h6.39l4.41 5.83L17.53 3Zm-1.09 16.13h1.72L7.63 4.78H5.79l10.65 14.35Z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" as const },
  }),
};



const leadership = [
  {
    name: "Aryan Sharma",
    title: "Chief Executive Officer",
    linkedin: "#",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    title: "Chief Technology Officer",
    linkedin: "#",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Kabir Mehta",
    title: "Chief Product Officer",
    linkedin: "#",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Ananya Singh",
    title: "Chief Revenue Officer",
    linkedin: "#",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
  },
];

const facts = [
  { icon: Building2, label: "Founded", value: "2021", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
  { icon: Users2, label: "Employees", value: "180+", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200" },
  { icon: Globe, label: "ARR", value: "$18M+", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  { icon: Globe, label: "Countries", value: "60+", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
  { icon: Briefcase, label: "Brand Clients", value: "500+", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-200" },
  { icon: Award, label: "Industry Awards", value: "12", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
];



export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-orange-50/60">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-orange-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-200/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(9,9,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(9,9,11,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-white text-xs font-semibold text-orange-600 mb-8 backdrop-blur-sm"
          >
            <Building2 className="w-3.5 h-3.5" />
            Company
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.08]"
          >
            Adhive, Inc.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500">
              Built for the future.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            We&apos;re an AI-first company on a mission to make influencer marketing measurable, fair,
            and accessible for brands of every size — across every market.
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
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:press@adhive.io"
              className="inline-flex items-center gap-2 border border-zinc-300 bg-white text-zinc-800 px-6 py-3 rounded-full text-sm font-semibold hover:border-orange-300 hover:bg-orange-50 transition-colors"
            >
              Press Inquiries
            </a>
          </motion.div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Adhive by the numbers</h2>
            <p className="text-zinc-500">Key facts about our company, operations, and growth.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facts.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className={`group p-6 rounded-2xl border ${f.border} ${f.bg} hover:shadow-lg hover:-translate-y-1 transition-all text-center`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white border ${f.border} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <div className="text-2xl font-bold text-zinc-900 mb-1">{f.value}</div>
                <div className="text-xs text-zinc-500 font-medium">{f.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-xs font-semibold text-orange-600 mb-6">
              <Users2 className="w-3.5 h-3.5" />
              Executive Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
              Our leadership
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Experienced operators who have built and scaled global products before.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group bg-white border border-zinc-100 rounded-3xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-5 ring-2 ring-zinc-100 group-hover:ring-orange-200 transition-all">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-zinc-900 mb-1">{person.name}</h3>
                <p className="text-sm text-zinc-500 mb-4">{person.title}</p>
                <a
                  href={person.linkedin}
                  className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Legal / Social */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-200 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Legal & Compliance</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Legal Name", value: "Adhive Technologies Pvt. Ltd." },
                  { label: "Incorporated", value: "2021, Bengaluru, India" },
                  { label: "CIN", value: "U72900KA2021PTC123456" },
                  { label: "Certifications", value: "SOC 2 Type II, ISO 27001, GDPR" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-zinc-50 last:border-0">
                    <span className="text-sm text-zinc-500">{row.label}</span>
                    <span className="text-sm font-medium text-zinc-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-zinc-200 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Connect With Us</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Globe, label: "Website", value: "www.adhive.io", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", value: "/company/adhive", href: "#" },
                  { icon: Twitter, label: "Twitter / X", value: "@adhive_io", href: "#" },
                  { icon: Mail, label: "General", value: "hello@adhive.io", href: "mailto:hello@adhive.io" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 py-2 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:border-orange-200 transition-colors">
                      <item.icon className="w-4 h-4 text-zinc-500 group-hover:text-orange-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">{item.label}</p>
                      <p className="text-sm font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
