import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main className="wrapper py-20 min-h-screen">
      <section className="glass-card-border p-8 md:p-12 max-w-4xl mx-auto text-[#FFFFFFCC] leading-relaxed text-sm">
        <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="opacity-60 mb-12 font-mono">Last updated: 1 January 2026</p>

        <div className="space-y-10">
          {/* 1. Who We Are */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              1. Who We Are (Data Controller)
            </h2>
            <p>
              This website is operated under the brand <strong>GB Creative Lab</strong>.
              The legal entity responsible for processing personal data is:
            </p>
            <div className="mt-4 p-4 bg-[#FFFFFF05] rounded border border-[#FFFFFF10]">
              <p className="font-bold text-white">Goldberg Sales&Advisory Limited</p>
              <p>77 Lower Camden Street, Dublin D02 XE80, Ireland</p>
              <p className="mt-2 text-white">
                Email (privacy): <a href="mailto:levent.altindag@gbsa-innovation.com" className="underline hover:text-white">levent.altindag@gbsa-innovation.com</a>
              </p>
            </div>
            <p className="mt-4">
              In this Privacy Policy, “we”, “us”, and “our” refer to Goldberg Sales&Advisory Limited.
            </p>
          </section>

          {/* 2. Data Collection */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              2. What Personal Data We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2 underline decoration-[#FFFFFF26]">A) Data you provide to us</h3>
                <ul className="list-disc pl-5 space-y-1 opacity-90">
                  <li><strong>Contact details:</strong> name, email address, phone number (if provided), company name</li>
                  <li><strong>Enquiry details:</strong> message content and any information you include in your request</li>
                  <li><strong>Booking details:</strong> meeting request details (date/time), call notes (if applicable)</li>
                  <li><strong>Project onboarding details:</strong> billing details, project requirements, brand assets, feedback</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 underline decoration-[#FFFFFF26]">B) Data we collect automatically</h3>
                <p>When you visit our Website, we may collect:</p>
                <ul className="list-disc pl-5 space-y-1 opacity-90">
                  <li>Device and technical data (e.g., IP address, browser type, device type)</li>
                  <li>Usage data (e.g., pages visited, time spent, referring page)</li>
                  <li>Server logs and security logs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 underline decoration-[#FFFFFF26]">C) Cookies and similar technologies</h3>
                <p>We may use cookies and similar technologies. See our Cookie Policy for more information.</p>
              </div>
            </div>
          </section>

          {/* 3. Purposes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              3. Why We Process Your Data (Purposes)
            </h2>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li>To respond to enquiries and communicate with you</li>
              <li>To schedule calls and meetings you request</li>
              <li>To prepare proposals, provide services, and manage client relationships</li>
              <li>To operate, secure, and improve our Website</li>
              <li>To measure website performance (only if analytics are enabled and where required by law, with consent)</li>
              <li>To comply with legal obligations and resolve disputes</li>
            </ul>
          </section>

          {/* 4. Legal Bases */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              4. Legal Bases for Processing (GDPR Article 6)
            </h2>
            <p className="mb-3">Depending on the situation, we rely on one or more of the following legal bases:</p>
            <ul className="space-y-3">
              <li className="bg-[#FFFFFF05] p-3 rounded"><strong>Consent (Art. 6(1)(a)):</strong> e.g., for non-essential cookies where required</li>
              <li className="bg-[#FFFFFF05] p-3 rounded"><strong>Contract (Art. 6(1)(b)):</strong> e.g., when you request a proposal or become a client</li>
              <li className="bg-[#FFFFFF05] p-3 rounded"><strong>Legitimate interests (Art. 6(1)(f)):</strong> e.g., website security, responding to enquiries</li>
              <li className="bg-[#FFFFFF05] p-3 rounded"><strong>Legal obligation (Art. 6(1)(c)):</strong> e.g., tax/accounting requirements</li>
            </ul>
          </section>

          {/* 5. Sharing */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              5. Who We Share Your Data With
            </h2>
            <p className="mb-3">We do not sell your personal data. We share data with trusted service providers such as:</p>
            <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 opacity-90">
              <li>Website hosting providers</li>
              <li>Email/communication providers</li>
              <li>Scheduling/booking providers</li>
              <li>Professional advisors</li>
              <li>Contractors (designers/developers)</li>
            </ul>
          </section>

          {/* 6. International Transfers */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              6. International Transfers
            </h2>
            <p>
              Our operations primarily serve clients in the EU/EEA. However, we may work with contractors outside the EU/EEA (for example, a design execution partner in India).
            </p>
            <p className="mt-2">
              Where data is transferred outside the EU/EEA and no adequacy decision applies, we implement appropriate safeguards as required under GDPR Chapter V (e.g., EU Standard Contractual Clauses).
            </p>
          </section>

          {/* 7. Retention */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              7. How Long We Keep Your Data (Retention)
            </h2>
            <ul className="list-disc pl-5 space-y-2 opacity-90">
              <li><strong>Enquiries:</strong> Retained for up to 24 months after last contact.</li>
              <li><strong>Client/project data:</strong> Retained for the duration of the relationship and thereafter as needed for legal/accounting purposes.</li>
              <li><strong>Website logs:</strong> Retained for a limited period for security.</li>
            </ul>
          </section>

          {/* 8. Rights */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              8. Your Rights (EU/EEA)
            </h2>
            <p>You have the right to access, correct, delete, or restrict the processing of your data. To exercise your rights, contact us at: <strong>levent.altindag@gbsa-innovation.com</strong></p>
          </section>

          {/* 9. Complaints */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              9. Complaints
            </h2>
            <p>You have the right to lodge a complaint with the Data Protection Commission (DPC) in Ireland.</p>
          </section>

          {/* 10. Security */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              10. Security
            </h2>
            <p>We use reasonable technical and organisational measures designed to protect personal data. No system is 100% secure.</p>
          </section>

          {/* 11. Children */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              11. Children
            </h2>
            <p>Our Website is not directed to children, and we do not knowingly collect data from children.</p>
          </section>

          {/* 12. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-[#FFFFFF1A] pb-2">
              12. Changes
            </h2>
            <p>We may update this Privacy Policy from time to time. The date at the top indicates the most recent revision.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-[#FFFFFF26]">
          <Link to="/" className="text-sm underline hover:text-white transition-colors">
            ← Return to Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}