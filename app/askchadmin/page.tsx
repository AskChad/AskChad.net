'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-background-5">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <figure className="max-w-[240px] mx-auto mb-6">
            <Image src="/images/askchad/logo-colored.png" alt="AskChad" width={240} height={108} className="w-full" />
          </figure>
          <h1 className="text-2xl font-bold text-secondary dark:text-accent">Admin Login</h1>
        </div>

        <div className="bg-white dark:bg-background-8 rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-secondary dark:text-accent mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full px-4 py-3 rounded-lg border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 text-secondary dark:text-accent placeholder:text-secondary/50 dark:placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary dark:text-accent mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 rounded-lg border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-6 text-secondary dark:text-accent placeholder:text-secondary/50 dark:placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition-all"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn bg-primary text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
