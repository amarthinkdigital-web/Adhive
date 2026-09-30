"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Building2, HelpCircle, Briefcase, Handshake } from "lucide-react";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 }
    })
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-12 bg-orange-50/50">
        {/* <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3"
          >
            Contact adhive
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            Have a question, partnership opportunity or need help? We&apos;d love to hear from you.
          </motion.p>
        </div> */}
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Get in Touch</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">General Enquiries & Support</h3>
                  <a href="mailto:support@adhive.io" className="text-zinc-600 hover:text-orange-500">support@adhive.io</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Business Enquiries</h3>
                  <a href="mailto:business@adhive.io" className="text-zinc-600 hover:text-orange-500">business@adhive.io</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Handshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Partnerships</h3>
                  <a href="mailto:partnerships@adhive.io" className="text-zinc-600 hover:text-orange-500">partnerships@adhive.io</a>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="bg-zinc-50 border border-zinc-200 rounded-3xl p-7"
            >
              <h2 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-zinc-400" />
                Company Information
              </h2>
              
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">Legal Business Name</p>
                  <p className="text-zinc-900 font-semibold">[adhive Legal Entity Name]</p>
                </div>
                
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-zinc-500 mb-1">Registered Address</p>
                    <p className="text-zinc-900">[Registered Address]</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-zinc-500 mb-1">Phone</p>
                    <p className="text-zinc-900">[+91 XXXXX XXXXX]</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-zinc-500 mb-1">Email</p>
                    <p className="text-zinc-900">support@adhive.io</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
