import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/animated/Reveal";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 max-w-4xl mx-auto px-6">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Terms of Service</h1>
          {/* <p className="text-sm text-zinc-500 mb-10">Effective Date: 16/10/2026 | Last Updated: 16/10/2026</p> */}
        </Reveal>
        
        <div className="max-w-none text-zinc-600 space-y-6">

          
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">1. Acceptance of Terms</h2>
            <p className="text-base leading-relaxed">These Terms govern access to and use of the adHive website, mobile applications and related services. By accessing, registering for or using adHive, you agree to these Terms.</p>
          </div>
          
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">2. About adHive</h2>
            <p className="text-base leading-relaxed">adHive facilitates promotional campaigns between businesses (Requesters) and eligible individuals (Sharers). Requesters create campaigns; Sharers participate by completing campaign requirements. adHive facilitates campaign management, validation and payment processes.</p>
          </div>
          
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">3. User Eligibility</h2>
            <p className="text-base leading-relaxed">Users must be at least 18 years of age and legally capable of entering a binding agreement. Users must provide accurate, complete and current information.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">4. User Accounts</h2>
            <p className="text-base leading-relaxed">Users are responsible for account credentials, accurate information, account security and activity performed through their account. False identities and impersonation are prohibited.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">5. Business Campaigns</h2>
            <p className="text-base leading-relaxed">Businesses may specify promotional content, geographic area, number of Sharers, audience/follower criteria, campaign duration, compensation and other requirements. adHive may review, reject, modify, suspend or remove campaigns that violate applicable law or policy.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">6. Sharer Participation</h2>
            <p className="text-base leading-relaxed">Sharers must review requirements before accepting a campaign. Acceptance does not automatically guarantee payment. Payment is subject to successful completion and validation. False evidence, manipulation, fraudulent accounts, misrepresented follower information, unauthorized account use and artificial/deceptive engagement are prohibited.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">7. Content Guidelines</h2>
            <p className="text-base leading-relaxed">Users must not upload, publish, distribute or promote unlawful, infringing, malicious, fraudulent, misleading, abusive, hateful, discriminatory, sexually explicit or otherwise prohibited content.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">8. Instagram and Third-Party Platforms</h2>
            <p className="text-base leading-relaxed">Users must comply with applicable third-party terms and policies, including Instagram. adHive does not control third-party platforms and does not guarantee their availability or continued functionality.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">9. Campaign Validation</h2>
            <p className="text-base leading-relaxed">adHive may use campaign records, participation information, submitted evidence, social-media information and other available signals to determine completion. Additional evidence may be requested. Insufficient or failed completion may result in payment being withheld, rejected or returned under applicable policies.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">10. Payments</h2>
            <p className="text-base leading-relaxed">Campaign payments may be processed through third-party payment providers, including Razorpay. Transactions are subject to campaign terms, adHive procedures, applicable taxes, provider terms and applicable law.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">11. Platform Fees and Taxes</h2>
            <p className="text-base leading-relaxed">adHive may charge platform, service, transaction or other applicable fees. Applicable taxes, including GST where applicable, may be charged according to law. Users are responsible for taxes applicable to their own income or business activities.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">12. Refunds and Cancellations</h2>
            <p className="text-base leading-relaxed">Refunds, cancellations and adjustments are governed by the adHive Refund & Cancellation Policy. Unfulfilled campaign amounts may be refunded or adjusted according to campaign terms, payment status, applicable taxes and law. Timelines may depend on the payment method/provider.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">13. Sharer Earnings and Settlement</h2>
            <p className="text-base leading-relaxed">Eligible earnings are subject to successful completion and validation. Amounts may remain pending until validation, dispute review or settlement. adHive may delay, adjust or withhold earnings for fraud, misrepresentation, duplicate claims, invalid evidence, policy violations, disputes or chargebacks.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">14. Disputes</h2>
            <p className="text-base leading-relaxed">Users may raise campaign, validation or payment disputes through designated support channels. adHive may review relevant campaign, evidence, communication and payment records. Nothing limits rights available under applicable law.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">15. Prohibited Activities</h2>
            <p className="text-base leading-relaxed">Users must not commit fraud, launder money, circumvent payment controls, manipulate campaigns, create fake accounts, generate artificial engagement, submit fraudulent evidence, infringe rights, promote unlawful products/services, harass users, attempt unauthorized access or interfere with Platform security.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">16. Intellectual Property</h2>
            <p className="text-base leading-relaxed">The adHive name, logo, Platform design, software, content and trademarks owned by adHive or licensors remain their property. Users receive a limited, non-exclusive, non-transferable right to use the Platform for its intended purpose.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">17. Privacy</h2>
            <p className="text-base leading-relaxed">Personal information is processed according to the adHive Privacy Policy, which explains collection, use, payment-related information, social-media information, sharing, security, user rights and retention.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">18. Third-Party Services</h2>
            <p className="text-base leading-relaxed">adHive may integrate payment providers, social-media platforms, analytics, communication and other third-party services. Their own terms and privacy policies may apply.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">19. Account Suspension and Termination</h2>
            <p className="text-base leading-relaxed">adHive may suspend or terminate accounts for violations, suspected fraud, legal/regulatory requirements, false information, security threats or abusive/prohibited activity, subject to applicable law.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">20. Platform Availability</h2>
            <p className="text-base leading-relaxed">adHive aims for reliable availability but does not guarantee uninterrupted or error-free operation. Maintenance, technical issues and third-party interruptions may affect availability.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">21. Limitation of Liability</h2>
            <p className="text-base leading-relaxed">To the maximum extent permitted by law, adHive will not be responsible for indirect, incidental, consequential or unforeseeable losses. adHive does not guarantee specific advertising results such as impressions, followers, leads, customers, sales or conversions. Nothing excludes liability that cannot legally be excluded.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">22. Changes to Terms</h2>
            <p className="text-base leading-relaxed">adHive may update these Terms. Updated Terms will be published with an effective date. Continued use after effectiveness constitutes acceptance to the extent permitted by law.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">23. Governing Law and Jurisdiction</h2>
            <p className="text-base leading-relaxed">These Terms are governed by Indian law. Subject to applicable law, disputes will be subject to the courts of Nashik, Maharashtra. Legal counsel should confirm the appropriate jurisdiction.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">24. Grievance and Customer Support</h2>
            <p className="text-base leading-relaxed">Support: support@adhive.io | Phone: +91 7498 207 487 | Address: Nashik, Maharashtra, India. adHive will make reasonable efforts to respond within applicable timelines.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-zinc-900 mt-8 mb-3">25. Acceptance</h2>
            <p className="text-base leading-relaxed">By registering for or using adHive, you acknowledge that you have read, understood and agreed to these Terms, the Privacy Policy, Refund & Cancellation Policy and other applicable policies.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
