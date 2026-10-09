import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 max-w-4xl mx-auto px-5 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4 break-words">Privacy Policy</h1>
        <p className="text-xs sm:text-sm text-zinc-500 mb-8 sm:mb-10">Effective Date: [DD/MM/YYYY] | Last Updated: [DD/MM/YYYY]</p>
        
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">

          <p>[Placeholder for Privacy Policy content. To be updated by legal counsel.]</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
