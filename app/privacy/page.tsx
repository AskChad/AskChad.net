'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  const [effectiveDate, setEffectiveDate] = useState('');

  useEffect(() => {
    setEffectiveDate(
      new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, []);

  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="main-container max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-accent mb-4">
              Privacy Policy
            </h1>
            <p className="text-secondary/70 dark:text-accent/70">
              <strong>Effective Date:</strong> <span>{effectiveDate}</span>
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* 1. Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                1. Introduction
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                AskChad ("we," "our," "us") values your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website, enroll in our SMS program AskChad SMS Messaging Program, or interact with our services.
              </p>
              <p className="text-secondary/80 dark:text-accent/80">
                By using our website or opting in to receive text messages, you agree to this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                2. Information We Collect
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-3">We may collect:</p>
              <ul className="list-disc pl-6 mb-4 text-secondary/80 dark:text-accent/80 space-y-2">
                <li>Personal information (name, phone number, email, address) you provide when opting in or contacting support.</li>
                <li>Technical data (IP address, device type, browser type) collected automatically.</li>
                <li>Communication data related to your participation in AskChad SMS Messaging Program (e.g., opt-in status, delivery confirmations).</li>
              </ul>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4 text-secondary/80 dark:text-accent/80 space-y-2">
                <li>Send marketing, transactional, and customer support text updates messages through our SMS program.</li>
                <li>Respond to customer inquiries.</li>
                <li>Improve our products and services.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            {/* 4. Mobile Information and Text Messaging */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                4. Mobile Information and Text Messaging
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-4">
                <p className="text-secondary dark:text-accent font-semibold mb-3">
                  IMPORTANT: No Marketing or Sale of Mobile Information
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-4">
                  <strong>No mobile information will be shared with third parties/affiliates for marketing or promotional purposes.</strong>
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-4">
                  Information sharing to subcontractors in support services, such as customer service, is permitted.
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-4">
                  <strong>All other use-case categories exclude text-messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the text-message services.</strong>
                </p>
                <p className="text-secondary/80 dark:text-accent/80">
                  Text-messaging originator opt-in data and consent will not be shared with any third parties except for aggregators and providers of the text-message services who enable delivery on our behalf.
                </p>
              </div>
            </section>

            {/* 5. How We Share Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                5. How We Share Information
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-3">We may share information only as follows:</p>
              <ul className="list-disc pl-6 mb-4 text-secondary/80 dark:text-accent/80 space-y-2">
                <li>With service providers who perform operational tasks (hosting, analytics, messaging delivery).</li>
                <li>To comply with law, regulation, or legal process.</li>
                <li>In connection with a merger, sale, or asset transfer.</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-4">
                <p className="text-secondary/80 dark:text-accent/80">
                  <strong>All the above categories exclude text-messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the text-message services.</strong>
                </p>
              </div>
            </section>

            {/* 6. Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                6. Data Security
              </h2>
              <p className="text-secondary/80 dark:text-accent/80">
                We implement reasonable security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </section>

            {/* 7. Your Rights and Choices */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-3">You may:</p>
              <ul className="list-disc pl-6 mb-4 text-secondary/80 dark:text-accent/80 space-y-2">
                <li><strong>Opt out of SMS messages by texting STOP.</strong></li>
                <li>Request access, correction, or deletion of your data by contacting <a href="mailto:support@askchad.net" className="text-primary dark:text-accent hover:underline">support@askchad.net</a>.</li>
              </ul>
            </section>

            {/* 8. Contact Us */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                8. Contact Us
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                For questions about this Privacy Policy or our data practices, contact:
              </p>
              <div className="bg-gray-50 dark:bg-background-6 p-6 rounded-lg">
                <p className="text-secondary dark:text-accent mb-2"><strong>AskChad</strong></p>
                <p className="text-secondary/80 dark:text-accent/80 mb-2">Email: <a href="mailto:support@askchad.net" className="text-primary dark:text-accent hover:underline">support@askchad.net</a></p>
                <p className="text-secondary/80 dark:text-accent/80">Website: <a href="/" className="text-primary dark:text-accent hover:underline">www.askchad.net</a></p>
              </div>
            </section>

            {/* 9. Updates to This Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                9. Updates to This Policy
              </h2>
              <p className="text-secondary/80 dark:text-accent/80">
                We may update this Privacy Policy periodically. Updates take effect on the Effective Date shown above.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
