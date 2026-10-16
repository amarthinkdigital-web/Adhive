import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/animated/Reveal";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 max-w-4xl mx-auto px-6">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Refund &amp; Cancellation Policy</h1>
          <p className="text-sm text-zinc-500 mb-10">Effective Date: [DD/MM/YYYY] | Last Updated: [DD/MM/YYYY]</p>
        </Reveal>
        
        <div className="max-w-none text-zinc-600 space-y-6">

          <p className="text-base leading-relaxed">[Placeholder for Refund & Cancellation Policy content. To be updated by legal counsel.]</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
