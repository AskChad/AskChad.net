'use client'

import { useState, FormEvent } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // Here you would typically send the data to your backend
    console.log('Form submitted:', data)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Show success message
    setShowSuccess(true)
    setIsSubmitting(false)

    // Reset form after 5 seconds
    setTimeout(() => {
      setShowSuccess(false)
      e.currentTarget.reset()
    }, 5000)
  }

  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="main-container max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-accent mb-4">
              Contact Us
            </h1>
            <p className="text-secondary/70 dark:text-accent/70 text-lg">
              Have questions? We're here to help. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-background-8 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold text-secondary dark:text-accent mb-2">Email</h3>
              <a href="mailto:support@askchad.net" className="text-primary dark:text-accent hover:underline">
                support@askchad.net
              </a>
            </div>

            <div className="bg-white dark:bg-background-8 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-semibold text-secondary dark:text-accent mb-2">Phone</h3>
              <a href="tel:+18889991111" className="text-primary dark:text-accent hover:underline">
                (888) 999-1111
              </a>
              <p className="text-xs text-secondary/60 dark:text-accent/60 mt-1">Mon-Fri, 9 AM - 5 PM EST</p>
            </div>

            <div className="bg-white dark:bg-background-8 p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="font-semibold text-secondary dark:text-accent mb-2">Response Time</h3>
              <p className="text-secondary/80 dark:text-accent/80">Within 24-48 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-background-8 p-8 md:p-12 rounded-2xl shadow-2xl">
            {/* Logo */}
            <figure className="max-w-[240px] mx-auto mb-8">
              <Image src="/images/askchad-gears.png" alt="AskChad" width={300} height={136} className="w-full" />
            </figure>

            <p className="text-secondary/70 dark:text-accent/70 mb-8 text-center">
              Fill out the form below and we'll get back to you shortly.
            </p>

            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-first-name" className="block text-sm font-medium text-secondary dark:text-accent mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-first-name"
                      name="first_name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 text-secondary dark:text-accent placeholder:text-secondary/50 dark:placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" className="block text-sm font-medium text-secondary dark:text-accent mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-last-name"
                      name="last_name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 text-secondary dark:text-accent placeholder:text-secondary/50 dark:placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Phone and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-secondary dark:text-accent mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 text-secondary dark:text-accent placeholder:text-secondary/50 dark:placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-secondary dark:text-accent mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 text-secondary dark:text-accent placeholder:text-secondary/50 dark:placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-secondary dark:text-accent mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 text-secondary dark:text-accent placeholder:text-secondary/50 dark:placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all resize-vertical"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {/* Marketing SMS Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="sms-marketing-consent"
                    name="sms_marketing_consent"
                    className="mt-1 size-5 rounded border-stroke-3 dark:border-stroke-7 text-primary dark:text-accent focus:ring-2 focus:ring-primary dark:focus:ring-accent cursor-pointer"
                  />
                  <label htmlFor="sms-marketing-consent" className="text-sm text-secondary/80 dark:text-accent/80 cursor-pointer">
                    I agree to receive automated marketing text messages from AskChad at the phone number provided. Message frequency varies. Message & data rates may apply. Reply HELP for help, STOP to end.
                  </label>
                </div>

                {/* Transactional SMS Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="sms-transactional-consent"
                    name="sms_transactional_consent"
                    className="mt-1 size-5 rounded border-stroke-3 dark:border-stroke-7 text-primary dark:text-accent focus:ring-2 focus:ring-primary dark:focus:ring-accent cursor-pointer"
                  />
                  <label htmlFor="sms-transactional-consent" className="text-sm text-secondary/80 dark:text-accent/80 cursor-pointer">
                    I agree to receive automated transactional and service-based text messages from AskChad at the phone number provided. Message frequency varies. Message & data rates may apply. Reply HELP for help, STOP to end.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn bg-primary text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Privacy Policy and Terms Links */}
                <div className="text-xs text-center text-secondary/60 dark:text-accent/60">
                  <a href="https://askchad.net/privacy" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-accent hover:underline">
                    Privacy Policy
                  </a>
                  {' | '}
                  <a href="https://askchad.net/tos" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-accent hover:underline">
                    Terms and Conditions
                  </a>
                </div>
              </form>
            ) : (
              /* Success Message */
              <div className="p-8 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-600 dark:text-green-300">
                  Thank you for contacting us. We'll get back to you within 24-48 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
