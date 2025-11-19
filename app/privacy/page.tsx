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
                6. Data Security and Unauthorized Sharing Prevention
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                We implement reasonable security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-4">
                <p className="text-secondary dark:text-accent font-bold text-lg mb-3">
                  Strict Policy Against Unauthorized Data Sharing
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-4">
                  <strong>We are committed to protecting your data and will NOT transfer your consumer data to external organizations under any circumstances, except as explicitly stated in this Privacy Policy.</strong>
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-4">
                  We have implemented strict measures to prevent unauthorized sharing of user data, including:
                </p>
                <ul className="list-disc pl-6 text-secondary/80 dark:text-accent/80 space-y-2">
                  <li><strong>Role-based access controls</strong> limiting data access to authorized personnel only</li>
                  <li><strong>Data encryption</strong> both in transit and at rest</li>
                  <li><strong>Regular security audits</strong> and compliance reviews</li>
                  <li><strong>Employee training</strong> on data protection and privacy practices</li>
                  <li><strong>Monitoring and logging</strong> of all data access and transfers</li>
                  <li><strong>Vendor agreements</strong> requiring strict confidentiality and data protection</li>
                </ul>
              </div>

              <p className="text-secondary/80 dark:text-accent/80">
                Any breach of these security measures will be promptly investigated, and affected users will be notified in accordance with applicable law.
              </p>
            </section>

            {/* 7. Your Rights and Choices */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                7. Your Rights and Choices
              </h2>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-6">
                <p className="text-secondary dark:text-accent font-bold text-lg mb-4">
                  Complete Opt-Out Instructions
                </p>
                <p className="text-secondary/80 dark:text-accent/80 mb-3">
                  <strong className="text-lg">To stop receiving SMS messages, you can use any of the following methods:</strong>
                </p>
                <ul className="list-disc pl-6 mb-4 text-secondary/80 dark:text-accent/80 space-y-2">
                  <li><strong>Text STOP, STOPALL, CANCEL, UNSUBSCRIBE, END, or QUIT</strong> to the number from which you received messages</li>
                  <li><strong>Reply to any text message</strong> with a clear opt-out request (e.g., "Leave me alone", "Unsubscribe me")</li>
                  <li><strong>Email us</strong> at <a href="mailto:support@askchad.net" className="text-primary dark:text-accent hover:underline font-bold">support@askchad.net</a> with your opt-out request</li>
                  <li><strong>Call us</strong> at <a href="tel:+18889991111" className="text-primary dark:text-accent hover:underline font-bold">(888) 999-1111</a> to request removal</li>
                </ul>
                <p className="text-secondary/80 dark:text-accent/80 mt-4">
                  <strong>We will process your opt-out request within 5 minutes</strong> and you may receive one final confirmation message confirming your opt-out status.
                </p>
              </div>

              <p className="text-secondary/80 dark:text-accent/80 mb-3">You may also:</p>
              <ul className="list-disc pl-6 mb-4 text-secondary/80 dark:text-accent/80 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Request a copy of your data</li>
                <li>Object to processing of your data</li>
              </ul>
              <p className="text-secondary/80 dark:text-accent/80 mt-4">
                For any of these requests, please contact us using the information in the "Contact Us" section below.
              </p>
            </section>

            {/* 8. Contact Us / Customer Support */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                8. How to Contact Us / Customer Support
              </h2>
              <p className="text-secondary/80 dark:text-accent/80 mb-4">
                <strong>For questions about this Privacy Policy, our SMS messaging program, data practices, or to exercise your privacy rights, you can contact us using any of the following methods:</strong>
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-8 rounded-lg mb-4">
                <p className="text-secondary dark:text-accent mb-6 text-lg"><strong>AskChad - Customer Support</strong></p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-secondary dark:text-accent font-semibold mb-1">Email:</p>
                      <a href="mailto:support@askchad.net" className="text-primary dark:text-accent hover:underline text-lg">support@askchad.net</a>
                      <p className="text-sm text-secondary/60 dark:text-accent/60 mt-1">Response time: Within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-secondary dark:text-accent font-semibold mb-1">Phone:</p>
                      <a href="tel:+18889991111" className="text-primary dark:text-accent hover:underline text-lg">(888) 999-1111</a>
                      <p className="text-sm text-secondary/60 dark:text-accent/60 mt-1">Business Hours: Monday-Friday, 9 AM - 5 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <p className="text-secondary dark:text-accent font-semibold mb-1">Website:</p>
                      <a href="https://askchad.net/contact" className="text-primary dark:text-accent hover:underline text-lg">www.askchad.net/contact</a>
                      <p className="text-sm text-secondary/60 dark:text-accent/60 mt-1">Submit a support request through our contact form</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-secondary dark:text-accent font-semibold mb-1">SMS Help:</p>
                      <p className="text-secondary/80 dark:text-accent/80">Text <strong>HELP</strong> to the number from which you received messages</p>
                      <p className="text-sm text-secondary/60 dark:text-accent/60 mt-1">For immediate assistance with SMS-related questions</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-secondary/80 dark:text-accent/80 text-sm">
                <strong>Important:</strong> For SMS opt-out requests, please see Section 7 "Your Rights and Choices" above for complete instructions on how to stop receiving messages.
              </p>
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
