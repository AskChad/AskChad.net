'use client'

import { useState, useEffect, FormEvent } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

interface A2PSettings {
  company_name?: string
  general_brand_name?: string
  a2p_brand_name?: string
  support_email?: string
  general_email?: string
  support_phone?: string
  general_phone?: string
  business_hours?: string
  time_zone?: string
  marketing_sms_consent_text: string
  transactional_sms_consent_text: string
  global_disclosure_text?: string
}

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [a2pSettings, setA2PSettings] = useState<A2PSettings | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadA2PSettings()
  }, [])

  async function loadA2PSettings() {
    try {
      const response = await fetch('/api/a2p-settings')
      if (response.ok) {
        const data = await response.json()
        setA2PSettings(data.settings)
      }
    } catch (error) {
      console.error('Error loading A2P settings:', error)
    } finally {
      setLoading(false)
    }
  }

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
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-secondary dark:text-accent mb-2">Email</h3>
              <a href={`mailto:${a2pSettings?.support_email || 'info@askchad.net'}`} className="text-primary dark:text-accent hover:underline">
                {a2pSettings?.support_email || 'info@askchad.net'}
              </a>
            </div>

            <div className="bg-white dark:bg-background-8 p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-secondary dark:text-accent mb-2">Phone</h3>
              <a href={`tel:${a2pSettings?.support_phone?.replace(/[^0-9+]/g, '') || '+14087538176'}`} className="text-primary dark:text-accent hover:underline">
                {a2pSettings?.support_phone || '(408) 753-8176'}
              </a>
              <p className="text-xs text-secondary/60 dark:text-accent/60 mt-1">
                {a2pSettings?.business_hours && a2pSettings?.time_zone
                  ? `${a2pSettings.business_hours} ${a2pSettings.time_zone}`
                  : 'Mon-Fri, 9 AM - 5 PM PST'}
              </p>
            </div>

            <div className="bg-white dark:bg-background-8 p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </div>
              <h3 className="font-semibold text-secondary dark:text-accent mb-2">Website</h3>
              <a href="https://askchad.net" className="text-primary dark:text-accent hover:underline">
                www.askchad.net
              </a>
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
                    {a2pSettings?.marketing_sms_consent_text?.replace('{brand_name}', a2pSettings?.a2p_brand_name || a2pSettings?.company_name || 'AskChad') || 'I agree to receive automated marketing text messages from AskChad at the phone number provided. Message frequency varies. Message & data rates may apply. Reply HELP for help, STOP to end.'}
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
                    {a2pSettings?.transactional_sms_consent_text?.replace('{brand_name}', a2pSettings?.a2p_brand_name || a2pSettings?.company_name || 'AskChad') || 'I agree to receive automated transactional and service-based text messages from AskChad at the phone number provided. Message frequency varies. Message & data rates may apply. Reply HELP for help, STOP to end.'}
                  </label>
                </div>

                {/* Global Disclosure Text */}
                {a2pSettings?.global_disclosure_text && (
                  <div className="text-xs text-secondary/60 dark:text-accent/60 bg-gray-50 dark:bg-background-6 p-3 rounded-lg border border-stroke-2 dark:border-stroke-7">
                    {a2pSettings.global_disclosure_text.replace(/\{brand_name\}/g, a2pSettings?.a2p_brand_name || a2pSettings?.company_name || 'AskChad')}
                  </div>
                )}

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
