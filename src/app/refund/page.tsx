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
        </Reveal>
      

        <div className="max-w-none text-zinc-600 space-y-10">
          <p className="text-base leading-relaxed text-zinc-600">
            At Adhive, we strive to provide a transparent and reliable experience for our users. Our refund and cancellation practices are outlined below.
          </p>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">1. Cancellation Requests</h2>
            <p className="text-base leading-relaxed">
              Users may request cancellation of a campaign or transaction by contacting Adhive customer support. All cancellation requests will be reviewed based on the campaign status and applicable circumstances.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">2. Refund Eligibility</h2>
            <p className="text-base leading-relaxed">
              Refunds may be considered for cancelled campaigns, unsuccessful transactions, unfulfilled services or other valid concerns. Refund eligibility and the applicable amount will be determined after reviewing the request.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">3. How to Request a Refund</h2>
            <p className="text-base leading-relaxed">
              Users can contact our support team at{" "}
              <a href="mailto:contact@adhiveglobal.com" className="text-orange-500 hover:underline font-medium">
                contact@adhiveglobal.com
              </a>{" "}
              with their registered contact details, transaction reference and reason for requesting a refund.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">4. Partially Completed Campaigns</h2>
            <p className="text-base leading-relaxed">
              For campaigns where promotional activities have already commenced or have been partially completed, any applicable refund will be assessed based on the services delivered, campaign status and applicable charges.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">5. Policy Updates</h2>
            <p className="text-base leading-relaxed">
              Adhive reserves the right to update this policy from time to time. Any changes will be published on our website and will apply subject to applicable laws and regulations.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
