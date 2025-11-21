'use client'

import { useState, useEffect, FormEvent } from 'react'
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

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [a2pSettings, setA2PSettings] = useState<A2PSettings | null>(null)

  // Load A2P settings
  useEffect(() => {
    async function loadA2PSettings() {
      try {
        const response = await fetch('/api/a2p-settings')
        if (response.ok) {
          const data = await response.json()
          setA2PSettings(data.settings)
        }
      } catch (error) {
        console.error('Error loading A2P settings:', error)
      }
    }
    loadA2PSettings()
  }, [])

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Expose openModal function globally so buttons can trigger it
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).openContactModal = () => setIsOpen(true)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    setShowSuccess(false)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // Here you would typically send the data to your backend
    console.log('Form submitted:', data)

    // Show success message
    setShowSuccess(true)

    // Reset form and close modal after 3 seconds
    setTimeout(() => {
      closeModal()
      e.currentTarget.reset()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-hidden"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="relative bg-white dark:bg-background-8 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 my-8 flex flex-col">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 size-10 rounded-full flex items-center justify-center bg-stroke-2 dark:bg-background-6 hover:bg-stroke-3 dark:hover:bg-background-7 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-5 text-secondary dark:text-accent"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-8 max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Logo */}
          <figure className="max-w-[240px] mb-6">
            <Image src="/images/askchad-gears.png" alt="AskChad" width={300} height={136} className="w-full" />
          </figure>

          <p className="text-secondary/70 dark:text-accent/70 mb-6">
            Fill out the form below and we&rsquo;ll get back to you shortly.
          </p>

          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
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
              <div className="grid grid-cols-2 gap-4">
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
                <div className="text-xs text-secondary/60 dark:text-accent/60 bg-gray-50 dark:bg-background-6 p-3 rounded-lg border border-stroke-2 dark:border-stroke-7 whitespace-pre-line">
                  {a2pSettings.global_disclosure_text
                    .replace(/\\n/g, '\n')
                    .replace(/\{brand_name\}/g, a2pSettings?.a2p_brand_name || a2pSettings?.company_name || 'AskChad')}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn bg-primary text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
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
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-700 dark:text-green-400 font-medium">
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
