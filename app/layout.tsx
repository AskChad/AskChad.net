import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AskChad - AI Sales Automation That Converts Cold Leads',
  description: 'AI-powered sales automation that re-engages dormant leads with human-sounding voice calls and SMS. Recover lost revenue in under 90 days with zero training required.',
  keywords: 'AI sales automation, lead reactivation, sales AI, revenue recovery, voice AI, SMS automation, cold lead engagement',
  authors: [{ name: 'AskChad' }],
  openGraph: {
    type: 'website',
    url: 'https://askchad.net/',
    title: 'AskChad - AI Sales Automation That Converts Cold Leads',
    description: 'AI-powered sales automation that re-engages dormant leads with human-sounding voice calls and SMS. Recover lost revenue in under 90 days.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AskChad - AI Sales Automation That Converts Cold Leads',
    description: 'AI-powered sales automation that re-engages dormant leads with human-sounding voice calls and SMS. Recover lost revenue in under 90 days.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-background-5 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
