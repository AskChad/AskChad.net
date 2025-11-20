'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ContentSection {
  id: string
  page_type: string
  section_key: string
  title: string
  content: string
  display_order: number
  enabled: boolean
  effective_date: string
}

export default function PrivacyPage() {
  const [sections, setSections] = useState<ContentSection[]>([])
  const [effectiveDate, setEffectiveDate] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPrivacyContent()
  }, [])

  async function loadPrivacyContent() {
    try {
      const response = await fetch('/api/content/sections/privacy_policy')
      if (response.ok) {
        const data = await response.json()
        setSections(data.sections || [])

        // Set effective date from first section
        if (data.sections && data.sections.length > 0) {
          const date = new Date(data.sections[0].effective_date)
          setEffectiveDate(
            date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          )
        } else {
          setEffectiveDate(
            new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          )
        }
      }
    } catch (error) {
      console.error('Error loading privacy policy:', error)
      setEffectiveDate(
        new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      )
    } finally {
      setLoading(false)
    }
  }

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
          {loading ? (
            <div className="text-center py-12 text-secondary/70 dark:text-accent/70">
              Loading privacy policy...
            </div>
          ) : sections.length > 0 ? (
            <div className="space-y-10">
              {sections.map((section) => (
                <section key={section.section_key} className="mb-10">
                  <h2 className="text-2xl font-bold text-secondary dark:text-accent mb-4">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none text-secondary/80 dark:text-accent/80
                                [&>p]:mb-4
                                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2
                                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol]:space-y-2
                                [&_strong]:font-semibold
                                [&_a]:text-primary [&_a]:underline hover:[&_a]:text-primary/80
                                [&>blockquote]:bg-yellow-50 [&>blockquote]:dark:bg-yellow-900/20
                                [&>blockquote]:border-l-4 [&>blockquote]:border-yellow-500
                                [&>blockquote]:p-6 [&>blockquote]:my-4
                                [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-3">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {section.content}
                    </ReactMarkdown>
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-secondary/70 dark:text-accent/70">
              No privacy policy content available.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
