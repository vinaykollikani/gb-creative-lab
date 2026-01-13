import React from "react";
import { Link } from "react-router-dom";

export default function Imprint() {
  return (
    <main className="wrapper py-20 min-h-screen">
      <section className="glass-card-border p-8 md:p-12 max-w-4xl mx-auto text-[#FFFFFFCC] leading-relaxed">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Legal Notice (Imprint)
        </h1>

        <p className="mb-8 italic">
          This website is operated under the brand name{" "}
          <strong>“GB Creative Lab”</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Operator Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-[#FFFFFF26] pb-2">
              Legal Entity / Operator
            </h2>
            <p>
              Goldberg Sales&Advisory Limited
              <br />
              77 Lower Camden Street
              <br />
              Dublin D02 XE80
              <br />
              Ireland
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-[#FFFFFF26] pb-2">
              Contact
            </h2>
            <p>
              Email:{" "}
              <a
                href="mailto:info@gbcreativelab.com"
                className="underline hover:text-white transition-colors"
              >
                info@gbcreativelab.com
              </a>
              <br />
              Phone: +353 86 818 5075
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-[#FFFFFF26] pb-2">
              Company Information
            </h2>
            <p>
              Company Registration Number (CRO): 750459
              <br />
              VAT Number: Not applicable
            </p>
          </div>

          {/* Responsible Content */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white border-b border-[#FFFFFF26] pb-2">
              Content Responsibility
            </h2>
            <p>
              Goldberg Sales&Advisory Limited
              <br />
              (Address as provided above)
            </p>
          </div>
        </div>

        {/* Business Activity */}
        <div className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-[#FFFFFF26] pb-2">
            Business Activity
          </h2>
          <p>
            GB Creative Lab provides creative and design services, including
            brand strategy, visual identity design, packaging & label design,
            and production/digital execution services.
          </p>
        </div>

        {/* Disclaimers */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-sm opacity-80">
          <div>
            <h3 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">
              Disclaimer – Content
            </h3>
            <p>
              We make reasonable efforts to ensure the accuracy of the
              information on this website. However, we provide the content “as
              is” and do not guarantee that it is complete, accurate, or up to
              date.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">
              Disclaimer – External Links
            </h3>
            <p>
              This website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of any
              third-party websites.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#FFFFFF26]">
          <Link
            to="/"
            className="text-sm underline hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
