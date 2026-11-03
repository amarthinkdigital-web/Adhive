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
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-10">Refund &amp; Cancellation Policy</h1>
        </Reveal>

        <div className="max-w-none text-zinc-600 space-y-6">
          <ol className="list-decimal pl-6 space-y-4 text-base leading-relaxed">
            <li>This policy explains how cancellations and refunds work for our app.</li>
            <li>You can cancel your account or subscription anytime from the app settings or by contacting support.</li>
            <li>Refunds for any paid items can be requested within the stated time window.</li>
            <li>Purchases made through the App Store or Google Play follow their respective refund processes.</li>
            <li>Used or already-activated items are generally non-refundable.</li>
          </ol>
        </div>
      </section>
      <Footer />
    </main>
  );
}
