import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
                  <Link href="#features" className="btn bg-white text-secondary border-2 border-stroke-3 hover:bg-primary/10 hover:border-primary dark:bg-background-6 dark:text-accent dark:border-stroke-7 dark:hover:border-primary-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto">
                    <span>See How It Works</span>
                  </Link>
                </div>
              </div>

              <div className="relative lg:block">
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden dark:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                    <Image src="/images/hero-ai.png" alt="AI-powered sales automation" width={500} height={500} className="w-full h-full object-cover rounded-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section Placeholder */}
        <section id="features" className="py-20 bg-white dark:bg-background-6">
          <div className="main-container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">AI Voice Calls</h3>
                <p className="text-secondary/70 dark:text-accent/70">Human-sounding AI calls that re-engage leads</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">SMS Automation</h3>
                <p className="text-secondary/70 dark:text-accent/70">Automated SMS campaigns for maximum reach</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">24/7 Operation</h3>
                <p className="text-secondary/70 dark:text-accent/70">Never miss a lead, works around the clock</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
