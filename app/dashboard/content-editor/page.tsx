'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
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

export default function ContentEditorPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'privacy_policy' | 'terms_of_service'>('privacy_policy')
  const [privacySections, setPrivacySections] = useState<ContentSection[]>([])
  const [tosSections, setTosSections] = useState<ContentSection[]>([])
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [editContent, setEditContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    loadSections()
  }, [])

  async function loadSections() {
    try {
      setLoading(true)

      // Load privacy policy sections
      const privacyRes = await fetch('/api/content/sections/privacy_policy')
      if (privacyRes.ok) {
        const privacyData = await privacyRes.json()
        setPrivacySections(privacyData.sections || [])
      }

      // Load terms of service sections
      const tosRes = await fetch('/api/content/sections/terms_of_service')
      if (tosRes.ok) {
        const tosData = await tosRes.json()
        setTosSections(tosData.sections || [])
      }
    } catch (error) {
      console.error('Error loading sections:', error)
    } finally {
      setLoading(false)
    }
  }

  async function saveSection(section: ContentSection) {
    try {
      setSaving(true)

      const response = await fetch(`/api/content/sections/${section.page_type}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          section_key: section.section_key,
          content: editContent,
        }),
      })

      if (response.ok) {
        // Reload sections
        await loadSections()
        setEditingSection(null)
        setEditContent('')
      } else {
        const error = await response.json()
        alert(`Error saving: ${error.error}`)
      }
    } catch (error) {
      console.error('Error saving section:', error)
      alert('Error saving section')
    } finally {
      setSaving(false)
    }
  }

  function startEditing(section: ContentSection) {
    setEditingSection(section.section_key)
    setEditContent(section.content)
    setShowPreview(false)
  }

  function cancelEditing() {
    setEditingSection(null)
    setEditContent('')
    setShowPreview(false)
  }

  const currentSections = activeTab === 'privacy_policy' ? privacySections : tosSections

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-background-5 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-12">
            <div className="text-lg text-secondary/70 dark:text-accent/70">Loading sections...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-background-5 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Privacy & Terms Content Editor</h1>
            <p className="text-secondary/70 dark:text-accent/70">
              Edit content sections for Privacy Policy and Terms of Service
            </p>
          </div>
          <button
            onClick={() => router.push('/dashboard')}
            className="px-4 py-2 text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent transition-colors"
          >
            Back to Dashboard
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-secondary/20 dark:border-accent/20">
          <button
            onClick={() => setActiveTab('privacy_policy')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'privacy_policy'
                ? 'text-primary dark:text-accent border-b-2 border-primary dark:border-accent'
                : 'text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent'
            }`}
          >
            Privacy Policy ({privacySections.length} sections)
          </button>
          <button
            onClick={() => setActiveTab('terms_of_service')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'terms_of_service'
                ? 'text-primary dark:text-accent border-b-2 border-primary dark:border-accent'
                : 'text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent'
            }`}
          >
            Terms of Service ({tosSections.length} sections)
          </button>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {currentSections.map((section) => (
            <div
              key={section.section_key}
              className="bg-white dark:bg-background-8 rounded-lg shadow p-6 border-2 border-transparent hover:border-primary/20 dark:hover:border-accent/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-secondary dark:text-accent">
                  {section.title}
                </h3>
                <div className="flex gap-2">
                  {editingSection === section.section_key && (
                    <>
                      <button
                        onClick={() => setShowPreview(!showPreview)}
                        className="px-4 py-2 bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent rounded hover:bg-secondary/20 dark:hover:bg-accent/20 transition-colors"
                      >
                        {showPreview ? 'Edit' : 'Preview'}
                      </button>
                      <button
                        onClick={() => saveSection(section)}
                        disabled={saving}
                        className="px-4 py-2 bg-primary dark:bg-accent text-white rounded hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors disabled:opacity-50"
                      >
                        {saving ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="px-4 py-2 bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent rounded hover:bg-secondary/20 dark:hover:bg-accent/20 transition-colors"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                  {editingSection !== section.section_key && (
                    <button
                      onClick={() => startEditing(section)}
                      className="px-4 py-2 bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent rounded hover:bg-primary/20 dark:hover:bg-accent/20 transition-colors"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>

              {editingSection === section.section_key ? (
                <div>
                  {showPreview ? (
                    <div className="prose dark:prose-invert max-w-none p-4 bg-secondary/5 dark:bg-accent/5 rounded">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {editContent}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full h-64 p-4 border border-secondary/20 dark:border-accent/20 rounded font-mono text-sm bg-white dark:bg-background-5 text-secondary dark:text-accent resize-y"
                      placeholder="Enter markdown content..."
                    />
                  )}
                  <div className="mt-2 text-sm text-secondary/60 dark:text-accent/60">
                    Supports Markdown formatting. Use ** for bold, * for italic, - for lists, etc.
                  </div>
                </div>
              ) : (
                <div className="prose dark:prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {section.content}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          ))}
        </div>

        {currentSections.length === 0 && (
          <div className="text-center py-12 text-secondary/70 dark:text-accent/70">
            No sections found for {activeTab === 'privacy_policy' ? 'Privacy Policy' : 'Terms of Service'}
          </div>
        )}
      </div>
    </div>
  )
}
