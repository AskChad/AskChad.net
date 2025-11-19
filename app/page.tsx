'use client'

import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/ContactModal'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  // Smooth scroll functionality
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#')) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-section pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-background-5 dark:via-background-6 dark:to-background-5 relative overflow-hidden" id="home">
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>

          <div className="main-container relative z-10">
            <div className="hero-grid">
              <div className="text-left max-w-2xl mx-auto lg:mx-0">
                <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-secondary dark:text-accent leading-tight">
                  Turn Cold Leads Into <br className="hidden md:block" />
                  <span className="text-primary dark:text-primary-400">Hot Revenue</span>
                </h1>
                <p className="text-xl text-secondary/80 dark:text-accent/80 max-w-[750px] mx-auto mb-10">
                  AI-powered sales automation that re-engages dormant leads with human-sounding voice calls and SMS to recover lost revenue.
                </p>
                <ul className="list-none mb-12 flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-8 w-fit md:mx-auto">
                  <li className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <rect x="0.664062" y="0.5" width="18" height="18" rx="9" fill="" className="fill-primary dark:fill-accent/20" />
                      <path d="M8.98067 13.2561L14.4131 7.92144C14.7477 7.5959 14.7477 7.0697 14.4131 6.74416C14.0785 6.41861 13.5377 6.41861 13.2031 6.74416L8.37567 11.4901L6.12502 9.28807C5.79043 8.96253 5.2496 8.96253 4.91501 9.28807C4.58041 9.61362 4.58041 10.1398 4.91501 10.4654L7.77066 13.2561C7.93753 13.4184 8.1566 13.5 8.37567 13.5C8.59473 13.5 8.8138 13.4184 8.98067 13.2561Z" fill="" className="fill-white" />
                    </svg>
                    <span className="text-secondary/70 dark:text-accent/60">Under 90 Days ROI</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <rect x="0.664062" y="0.5" width="18" height="18" rx="9" fill="" className="fill-primary dark:fill-accent/20" />
                      <path d="M8.98067 13.2561L14.4131 7.92144C14.7477 7.5959 14.7477 7.0697 14.4131 6.74416C14.0785 6.41861 13.5377 6.41861 13.2031 6.74416L8.37567 11.4901L6.12502 9.28807C5.79043 8.96253 5.2496 8.96253 4.91501 9.28807C4.58041 9.61362 4.58041 10.1398 4.91501 10.4654L7.77066 13.2561C7.93753 13.4184 8.1566 13.5 8.37567 13.5C8.59473 13.5 8.8138 13.4184 8.98067 13.2561Z" fill="" className="fill-white" />
                    </svg>
                    <span className="text-secondary/70 dark:text-accent/60">Little Training Required</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <rect x="0.664062" y="0.5" width="18" height="18" rx="9" fill="" className="fill-primary dark:fill-accent/20" />
                      <path d="M8.98067 13.2561L14.4131 7.92144C14.7477 7.5959 14.7477 7.0697 14.4131 6.74416C14.0785 6.41861 13.5377 6.41861 13.2031 6.74416L8.37567 11.4901L6.12502 9.28807C5.79043 8.96253 5.2496 8.96253 4.91501 9.28807C4.58041 9.61362 4.58041 10.1398 4.91501 10.4654L7.77066 13.2561C7.93753 13.4184 8.1566 13.5 8.37567 13.5C8.59473 13.5 8.8138 13.4184 8.98067 13.2561Z" fill="" className="fill-white" />
                    </svg>
                    <span className="text-secondary/70 dark:text-accent/60">24/7 AI-Powered Automation</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-5 justify-start items-start">
                  <Link href="https://calendly.com/askchad/demo" target="_blank" rel="noopener noreferrer" className="btn bg-primary text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                    <span>Schedule Demo</span>
                  </Link>
                  <a href="#features" className="btn bg-white text-secondary border-2 border-stroke-3 hover:bg-primary/10 hover:border-primary dark:bg-background-6 dark:text-accent dark:border-stroke-7 dark:hover:border-primary-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto">
                    <span>See How It Works</span>
                  </a>
                </div>
              </div>

              <div className="relative lg:block">
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Hero AI Image */}
                  <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden dark:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                    <Image src="/images/hero-ai.png" alt="AI-powered sales automation" width={500} height={500} className="w-full h-full object-cover rounded-3xl" />
                  </div>

                  {/* Decorative floating elements - 3 corner icons */}
                  {/* AI Chat Bubble - Top Right */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white dark:bg-background-6 rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04),0_-30px_40px_-10px_rgba(0,0,0,0.08),30px_-15px_40px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.39L2 22l5.66-1.05C9.04 21.64 10.54 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.31 0-2.59-.27-3.8-.8l-.27-.13-2.85.53.53-2.85-.13-.27C4.27 14.59 4 13.31 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                      <circle cx="9" cy="12" r="1"/>
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="15" cy="12" r="1"/>
                    </svg>
                  </div>

                  {/* Phone - Bottom Left */}
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white dark:bg-background-6 rounded-2xl shadow-xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>

                  {/* Email - Bottom Right */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white dark:bg-background-6 rounded-2xl shadow-xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seven Powerful AI Modules Section */}
        <section className="features-section py-16 md:py-20 lg:py-[120px] bg-white dark:bg-background-5" id="features">
          <div className="main-container">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="mb-4">Seven Powerful AI Modules</h2>
              <p className="text-xl max-w-[700px] mx-auto">
                Transform your sales process with our complete suite of AI-powered automation tools designed to recover lost revenue and accelerate growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Speed-to-Lead Bot */}
              <div className="bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary">
                <div className="size-14 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-7 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Speed-to-Lead Bot</h3>
                <p className="text-secondary dark:text-accent/80 mb-4">
                  Responds to new leads within 60 seconds via SMS or voice. Qualifies and books appointments before your competitors even know the lead exists.
                </p>
                <span className="text-sm font-medium text-primary dark:text-accent">Lightning-fast engagement</span>
              </div>

              {/* Database Reactivation Bot */}
              <div className="bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary">
                <div className="size-14 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-7 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Database Reactivation Bot</h3>
                <p className="text-secondary dark:text-accent/80 mb-4">
                  Targets old and forgotten leads with personalized text conversations. Industry-proven 3-7% reactivation rates turn dormant databases into revenue goldmines.
                </p>
                <span className="text-sm font-medium text-primary dark:text-accent">3-7% reactivation rate</span>
              </div>

              {/* Voice AI Receptionist */}
              <div className="bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary">
                <div className="size-14 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-7 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Voice AI Receptionist</h3>
                <p className="text-secondary dark:text-accent/80 mb-4">
                  Answers inbound calls 24/7 with natural, human-sounding conversations. Books appointments and logs everything directly to your CRM automatically.
                </p>
                <span className="text-sm font-medium text-primary dark:text-accent">24/7 availability</span>
              </div>

              {/* After-Hours Concierge */}
              <div className="bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary">
                <div className="size-14 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-7 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">After-Hours Concierge</h3>
                <p className="text-secondary dark:text-accent/80 mb-4">
                  Never miss a lead again. Responds to forms, texts, and calls outside business hours, ensuring every opportunity is captured and qualified.
                </p>
                <span className="text-sm font-medium text-primary dark:text-accent">Never miss a lead</span>
              </div>

              {/* Reviews & Reputation Bot */}
              <div className="bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary">
                <div className="size-14 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-7 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Reviews & Reputation Bot</h3>
                <p className="text-secondary dark:text-accent/80 mb-4">
                  Automates customer feedback requests and review generation. Build your online reputation automatically while gathering valuable insights.
                </p>
                <span className="text-sm font-medium text-primary dark:text-accent">Automated reputation building</span>
              </div>

              {/* AI Custom Builds */}
              <div className="bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary">
                <div className="size-14 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-7 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">AI Custom Builds</h3>
                <p className="text-secondary dark:text-accent/80 mb-4">
                  Personalized AI automations tailored to your unique workflows and business processes. Custom solutions for unique challenges.
                </p>
                <span className="text-sm font-medium text-primary dark:text-accent">Fully customizable</span>
              </div>

              {/* Intent-Based Funnels */}
              <div className="bg-white dark:bg-background-8 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1 border border-stroke-3">
                <div className="size-14 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-7 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Intent-Based Funnels</h3>
                <p className="text-secondary dark:text-accent/80 mb-4">
                  Real-time funnel adaptation based on visitor behavior and intent signals. Maximize conversions by delivering the right message at the right time.
                </p>
                <span className="text-sm font-medium text-primary dark:text-accent">Smart funnel optimization</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section py-16 md:py-20 lg:py-[120px] bg-white dark:bg-background-5" id="benefits">
          <div className="main-container">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="mb-4">Why Choose AskChad?</h2>
              <p className="text-xl max-w-[700px] mx-auto">
                Proven results that transform your bottom line with minimal effort and maximum impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
              {/* Under 90 Days ROI */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="size-20 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-primary dark:text-accent">Under 90 Days</h3>
                <p className="text-xl font-medium mb-2">Average ROI Timeline</p>
                <p className="text-secondary dark:text-accent/80">
                  See measurable returns on your investment in less than three months. Most clients recover their investment and start seeing profit within the first quarter.
                </p>
              </div>

              {/* Little Training */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="size-20 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-primary dark:text-accent">Little Training</h3>
                <p className="text-xl font-medium mb-2">Minimal Learning Curve</p>
                <p className="text-secondary dark:text-accent/80">
                  Get started quickly with minimal training. Our intuitive AI platform is designed for easy adoption, allowing your team to be productive within days, not weeks.
                </p>
              </div>

              {/* Revenue Recovery */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="size-20 bg-primary dark:bg-primary-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-primary dark:text-accent">$10K - $100K+</h3>
                <p className="text-xl font-medium mb-2">Revenue Recovered</p>
                <p className="text-secondary dark:text-accent/80">
                  Clients typically recover tens to hundreds of thousands in previously lost revenue. Turn your dormant database into a profit center.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-stroke-2 dark:border-stroke-6">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">60s</p>
                <p className="text-sm md:text-base text-secondary dark:text-accent/70">Lead Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">3-7%</p>
                <p className="text-sm md:text-base text-secondary dark:text-accent/70">Reactivation Rate</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">24/7</p>
                <p className="text-sm md:text-base text-secondary dark:text-accent/70">AI Availability</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">100%</p>
                <p className="text-sm md:text-base text-secondary dark:text-accent/70">Automated Follow-up</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section py-16 md:py-20 lg:py-[120px] bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-background-6 dark:via-background-5 dark:to-background-6" id="how-it-works">
          <div className="main-container">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="mb-4">How It Works</h2>
              <p className="text-xl max-w-[700px] mx-auto">
                Get started in three simple steps. No complicated setup, no technical expertise required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="relative text-center md:text-left">
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="size-16 bg-primary dark:bg-accent rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white dark:text-secondary">1</span>
                    </div>
                    <div className="hidden md:block absolute -right-24 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-primary/30 dark:bg-accent/30"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Connect Your Data</h3>
                <p className="text-secondary dark:text-accent/80">
                  Integrate with your existing CRM and upload your lead database. Our AI securely connects to your systems in minutes.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center md:text-left">
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="size-16 bg-primary dark:bg-accent rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white dark:text-secondary">2</span>
                    </div>
                    <div className="hidden md:block absolute -right-24 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-primary/30 dark:bg-accent/30"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Configure & Launch</h3>
                <p className="text-secondary dark:text-accent/80">
                  Customize your AI agents' messaging and behavior. Launch your campaigns with a single click—no coding required.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center md:text-left">
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="size-16 bg-primary dark:bg-accent rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white dark:text-secondary">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Watch Revenue Grow</h3>
                <p className="text-secondary dark:text-accent/80">
                  Sit back as our AI works 24/7 to re-engage leads, book appointments, and drive revenue. Track results in real-time on your dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section py-16 md:py-20 lg:py-[120px] bg-white dark:bg-background-5" id="testimonials">
          <div className="main-container">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="mb-4">Success Stories</h2>
              <p className="text-xl max-w-[700px] mx-auto">
                Real results from businesses that transformed their sales process with AskChad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white dark:bg-background-6 p-8 rounded-2xl shadow-lg border border-stroke-3 dark:border-stroke-7">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-5 fill-primary dark:fill-accent" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary dark:text-accent/80 mb-6 italic">
                  &ldquo;We reactivated 147 old leads in the first month alone. The Database Reactivation Bot turned our forgotten contacts into $48,000 in new revenue. Absolutely game-changing.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary dark:bg-accent rounded-full flex items-center justify-center text-white dark:text-secondary font-bold">
                    JM
                  </div>
                  <div>
                    <p className="font-semibold">James Morrison</p>
                    <p className="text-sm text-secondary dark:text-accent/60">Sales Director, TechFlow Inc</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white dark:bg-background-6 p-8 rounded-2xl shadow-lg border border-stroke-3 dark:border-stroke-7">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-5 fill-primary dark:fill-accent" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary dark:text-accent/80 mb-6 italic">
                  &ldquo;The Speed-to-Lead Bot is incredible. We&rsquo;re now responding to inquiries in under 60 seconds while our competitors take hours. Our close rate has doubled.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary dark:bg-accent rounded-full flex items-center justify-center text-white dark:text-secondary font-bold">
                    SC
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-secondary dark:text-accent/60">CEO, GrowthHub Marketing</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white dark:bg-background-6 p-8 rounded-2xl shadow-lg md:col-span-2 lg:col-span-1 border border-stroke-3 dark:border-stroke-7">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-5 fill-primary dark:fill-accent" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary dark:text-accent/80 mb-6 italic">
                  &ldquo;ROI in 67 days. The After-Hours Concierge captured leads we would have lost forever. Worth every penny and then some.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-primary dark:bg-accent rounded-full flex items-center justify-center text-white dark:text-secondary font-bold">
                    DP
                  </div>
                  <div>
                    <p className="font-semibold">David Park</p>
                    <p className="text-sm text-secondary dark:text-accent/60">Founder, Apex Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section py-16 md:py-20 lg:py-[120px] bg-white dark:bg-background-5" id="demo">
          <div className="main-container">
            <div className="bg-primary dark:bg-primary-700 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 size-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 size-64 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-white mb-6">Ready to Recover Lost Revenue?</h2>
                <p className="text-xl text-white/90 max-w-[700px] mx-auto mb-10">
                  Watch our 2-minute demo and discover how AskChad can transform your dormant leads into a revenue goldmine. Free tool access included.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="#" className="btn bg-white text-secondary hover:bg-white/90 dark:bg-white dark:text-secondary dark:hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center" aria-label="Watch Demo Now">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Watch 2-Minute Demo</span>
                  </Link>
                  <a href="#features" className="btn bg-white/20 text-white hover:bg-white/30 dark:bg-secondary/20 dark:hover:bg-secondary/30 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto" aria-label="Learn More">
                    <span>Learn More</span>
                  </a>
                </div>

                <p className="text-sm text-white/80 dark:text-white/70">
                  Join hundreds of businesses already recovering tens to hundreds of thousands in lost revenue
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal />
    </>
  )
}
