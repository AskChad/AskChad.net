'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsOfServicePage() {
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
              SMS Terms of Service
            </h1>
            <p className="text-secondary/70 dark:text-accent/70">
              <strong>Effective Date:</strong> <span>{effectiveDate}</span>
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* 1. Program Description */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                1. Program Description
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                The <strong>AskChad SMS Messaging Program</strong> offers <strong>marketing, transactional, and customer support text updates</strong> messages from <strong>AskChad</strong> to users who opt in.
              </p>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                Message frequency <strong>varies</strong>.
              </p>
              <p className="text-secondary/80 dark:text-accent/80">
                By subscribing, you consent to receive recurring automated text messages. <strong>Consent is not a condition of purchase.</strong>
              </p>
            </section>

            {/* 2. Opt-In */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                2. Opt-In
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                You may opt in by submitting your phone number through our website form, keyword, or written consent.
              </p>
              <p className="text-secondary/80 dark:text-accent/80">
                By opting in, you confirm ownership of the provided number and authorize <strong>AskChad</strong> to send you SMS/MMS messages.
              </p>
            </section>

            {/* 3. Opt-Out */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                3. Opt-Out
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-4">
                <p className="text-secondary dark:text-accent font-bold text-lg mb-3">
                  TO CANCEL AND STOP RECEIVING MESSAGES:
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-3">
                  You can cancel the SMS service at any time. <strong>Text STOP to the number or shortcode from which you receive messages.</strong>
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-3">
                  After sending "STOP," you'll receive a final confirmation message that you've been unsubscribed.
                </p>
                <p className="text-secondary/80 dark:text-accent/80">
                  After confirmation, you will no longer receive messages from us.
                </p>
              </div>
            </section>

            {/* 4. Rejoining the Program */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                4. Rejoining the Program
              </h2>
              <p className="text-secondary/80 dark:text-accent/80">
                To rejoin, opt in again using the same process you used originally.
              </p>
            </section>

            {/* 5. Help and Support */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                5. Help and Support
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-4">
                <p className="text-secondary dark:text-accent font-bold text-lg mb-3">
                  NEED HELP?
                </p>
                <p className="text-secondary/80 dark:text-accent/80">
                  If you experience issues, <strong>text HELP</strong> for assistance or contact us at <a href="mailto:support@askchad.net" className="text-primary dark:text-accent hover:underline font-semibold">support@askchad.net</a>.
                </p>
              </div>
            </section>

            {/* 6. Message and Data Rates */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                6. Message and Data Rates
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-4">
                <p className="text-secondary/80 dark:text-accent/80 mb-3">
                  <strong>Message and data rates may apply</strong> for any messages sent to you from us and from you to us.
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-3">
                  Message frequency <strong>varies</strong>.
                </p>
                <p className="text-secondary/80 dark:text-accent/80">
                  <strong>For questions about your text plan or data plan, contact your wireless provider.</strong>
                </p>
              </div>
            </section>

            {/* 7. Carrier Liability Disclaimer */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                7. Carrier Liability Disclaimer
              </h2>
              <p className="text-secondary/80 dark:text-accent/80">
                <strong>Wireless carriers are not liable for delayed or undelivered messages.</strong>
              </p>
            </section>

            {/* 8. Eligibility */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                8. Eligibility
              </h2>
              <p className="text-secondary/80 dark:text-accent/80">
                You must be at least 18 years old (or of legal age in your jurisdiction) to participate in <strong>AskChad SMS Messaging Program</strong>.
              </p>
            </section>

            {/* 9. Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                9. Privacy
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                Your use of the <strong>AskChad SMS Messaging Program</strong> is subject to our Privacy Policy:
              </p>
              <div className="bg-gray-50 dark:bg-background-6 p-6 rounded-lg">
                <p className="text-secondary dark:text-accent">
                  <strong>Privacy Policy:</strong> <a href="/privacy" className="text-primary dark:text-accent hover:underline font-semibold">View Privacy Policy</a>
                </p>
              </div>
            </section>

            {/* 10. Legal Compliance */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                10. Legal Compliance
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                This messaging program complies with <strong>CTIA, TCPA, and applicable U.S. laws</strong>.
              </p>
              <p className="text-secondary/80 dark:text-accent/80">
                You agree to use our messaging services only for lawful purposes.
              </p>
            </section>

            {/* 11. Changes to Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-secondary/80 dark:text-accent/80">
                <strong>AskChad</strong> may modify these Terms at any time. Updates will be posted at <a href="/tos" className="text-primary dark:text-accent hover:underline">/tos</a> and will take effect upon posting.
              </p>
            </section>

            {/* 12. Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                12. Contact Information
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                For any questions regarding these Terms or the <strong>AskChad SMS Messaging Program</strong>, contact:
              </p>
              <div className="bg-gray-50 dark:bg-background-6 p-6 rounded-lg">
                <p className="text-secondary dark:text-accent mb-2"><strong>AskChad</strong></p>
                <p className="text-secondary/80 dark:text-accent/80 mb-2">Email: <a href="mailto:support@askchad.net" className="text-primary dark:text-accent hover:underline">support@askchad.net</a></p>
                <p className="text-secondary/80 dark:text-accent/80">Website: <a href="/" className="text-primary dark:text-accent hover:underline">www.askchad.net</a></p>
              </div>
            </section>

            {/* Acceptance */}
            <section className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                Acceptance of These Terms
              </h2>
              <p className="text-secondary/80 dark:text-accent/80">
                By opting into the <strong>AskChad SMS Messaging Program</strong>, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <a href="/privacy" className="text-primary dark:text-accent hover:underline font-semibold">Privacy Policy</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
