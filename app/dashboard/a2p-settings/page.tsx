'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface A2PSettings {
  id: string
  marketing_sms_consent_text: string
  transactional_sms_consent_text: string
  a2p_brand_name: string
  privacy_policy_url: string
  terms_of_service_url: string
  a2p_phone: string
  a2p_email: string
  a2p_address: string | null
  general_email: string
  general_phone: string
  general_brand_name: string
}

export default function A2PSettingsPage() {
  const router = useRouter()
  const [settings, setSettings] = useState<A2PSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Load settings on mount
  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/settings/a2p')

      if (response.status === 401) {
        router.push('/askchadmin')
        return
      }

      if (!response.ok) {
        throw new Error('Failed to load settings')
      }

      const data = await response.json()
      setSettings(data.settings)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load settings')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!settings) return

    try {
      setSaving(true)
      setError(null)
      setSuccess(false)

      const response = await fetch('/api/settings/a2p', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      })

      if (response.status === 401) {
        router.push('/askchadmin')
        return
      }

      if (!response.ok) {
        throw new Error('Failed to save settings')
      }

      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  const updateField = (field: keyof A2PSettings, value: string) => {
    if (!settings) return
    setSettings({ ...settings, [field]: value })
  }

  // Preview consent text with brand name substitution
  const previewConsentText = (text: string, brandName: string) => {
    return text.replace(/\{brand_name\}/g, brandName)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-background-5 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-background-8 rounded w-1/3 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-background-8 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-background-8 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error && !settings) {
    return (
      <div className="min-h-screen bg-white dark:bg-background-5 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Error</h3>
            <p className="text-red-600 dark:text-red-300">{error}</p>
            <button
              onClick={loadSettings}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!settings) return null

  return (
    <div className="min-h-screen bg-white dark:bg-background-5 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">A2P Settings</h1>
          <p className="text-secondary/70 dark:text-accent/70">
            Manage SMS compliance, consent text, and contact information
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-200 font-semibold">
              ✓ Settings saved successfully!
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-red-800 dark:text-red-200 font-semibold">
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-8">
          {/* Section 1: SMS Consent Text */}
          <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">SMS Consent Text</h2>
            <p className="text-sm text-secondary/70 dark:text-accent/70 mb-6">
              These are the consent messages users will see when opting in to SMS. Use {'{brand_name}'} as a placeholder.
            </p>

            <div className="space-y-6">
              {/* Marketing SMS */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Marketing SMS Consent Text
                </label>
                <textarea
                  value={settings.marketing_sms_consent_text}
                  onChange={(e) => updateField('marketing_sms_consent_text', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
                <div className="mt-2 p-3 bg-gray-50 dark:bg-background-5 rounded border border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Preview:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {previewConsentText(settings.marketing_sms_consent_text, settings.a2p_brand_name)}
                  </p>
                </div>
              </div>

              {/* Transactional SMS */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Transactional SMS Consent Text
                </label>
                <textarea
                  value={settings.transactional_sms_consent_text}
                  onChange={(e) => updateField('transactional_sms_consent_text', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
                <div className="mt-2 p-3 bg-gray-50 dark:bg-background-5 rounded border border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Preview:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {previewConsentText(settings.transactional_sms_consent_text, settings.a2p_brand_name)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: A2P Compliance Information */}
          <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">A2P Compliance Information</h2>
            <p className="text-sm text-secondary/70 dark:text-accent/70 mb-6">
              Legal and compliance contact information for A2P 10DLC messaging.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  A2P Brand Name (Legal)
                </label>
                <input
                  type="text"
                  value={settings.a2p_brand_name}
                  onChange={(e) => updateField('a2p_brand_name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Privacy Policy URL
                </label>
                <input
                  type="url"
                  value={settings.privacy_policy_url}
                  onChange={(e) => updateField('privacy_policy_url', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Terms of Service URL
                </label>
                <input
                  type="url"
                  value={settings.terms_of_service_url}
                  onChange={(e) => updateField('terms_of_service_url', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  A2P Phone
                </label>
                <input
                  type="tel"
                  value={settings.a2p_phone}
                  onChange={(e) => updateField('a2p_phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  A2P Email
                </label>
                <input
                  type="email"
                  value={settings.a2p_email}
                  onChange={(e) => updateField('a2p_email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  A2P Physical Address
                </label>
                <input
                  type="text"
                  value={settings.a2p_address || ''}
                  onChange={(e) => updateField('a2p_address', e.target.value)}
                  placeholder="Optional - Physical address for compliance"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                />
              </div>
            </div>
          </div>

          {/* Section 3: General Website Contact */}
          <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">General Website Contact</h2>
            <p className="text-sm text-secondary/70 dark:text-accent/70 mb-6">
              Contact information displayed on the website (outside of legal/compliance forms).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Brand Name (Presentation)
                </label>
                <input
                  type="text"
                  value={settings.general_brand_name}
                  onChange={(e) => updateField('general_brand_name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  General Email
                </label>
                <input
                  type="email"
                  value={settings.general_email}
                  onChange={(e) => updateField('general_email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  General Phone
                </label>
                <input
                  type="tel"
                  value={settings.general_phone}
                  onChange={(e) => updateField('general_phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent bg-white dark:bg-background-5"
                  required
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-background-8 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-primary dark:bg-accent text-white rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
