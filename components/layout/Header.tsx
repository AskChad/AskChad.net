'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDarkMode
    setIsDarkMode(newIsDark)

    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const openContactModal = () => {
    if (typeof window !== 'undefined' && (window as any).openContactModal) {
      (window as any).openContactModal()
    }
  }

  return (
    <header>
      <div className="header-six rounded-full lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[380px] max-w-[350px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-2.5 xl:py-0 py-2.5 top-5 bg-primary dark:bg-background-7/40 backdrop-blur-[25px] opacity-100">
        <div>
          <Link href="/">
            <span className="sr-only">AskChad - Home</span>
            <figure className="lg:max-w-[198px] lg:block hidden">
              <Image src="/images/askchad/logo.png" alt="AskChad" width={198} height={48} className="h-12" />
            </figure>
            <figure className="max-w-[44px] lg:hidden block">
              <Image src="/images/askchad/logo.png" alt="AskChad" width={44} height={40} className="w-full h-10" />
            </figure>
          </Link>
        </div>

        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center gap-6">
            <li className="relative nav-item cursor-pointer py-5">
              <a href="#features" className="flex items-center gap-1 text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">
                <span>Features</span>
              </a>
            </li>
            <li className="relative nav-item cursor-pointer py-5">
              <a href="#benefits" className="flex items-center gap-1 text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">
                <span>Benefits</span>
              </a>
            </li>
            <li className="relative nav-item cursor-pointer py-5">
              <a href="#how-it-works" className="flex items-center gap-1 text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">
                <span>How It Works</span>
              </a>
            </li>
            <li className="relative nav-item cursor-pointer py-5">
              <a href="#testimonials" className="flex items-center gap-1 text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">
                <span>Testimonials</span>
              </a>
            </li>
            <li className="relative nav-item cursor-pointer py-5">
              <button onClick={openContactModal} className="flex items-center gap-1 text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">
                <span>Contact Us</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="xl:flex hidden items-center justify-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="size-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 dark:bg-background-6 dark:hover:bg-background-7 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {/* Light Theme Icon (Sun) - shown when dark mode is active */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-5 text-white dark:text-accent ${isDarkMode ? 'block' : 'hidden'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            {/* Dark Theme Icon (Moon) - shown when light mode is active */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-5 text-white dark:text-accent ${isDarkMode ? 'hidden' : 'block'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>

          <a href="#demo" className="btn btn-md bg-white text-primary hover:bg-white/90 dark:bg-accent dark:text-background-9 dark:hover:bg-accent/90 px-6">
            <span>Watch Demo</span>
          </a>
        </div>

        <div className="xl:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="size-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 dark:bg-background-6 dark:hover:bg-background-7 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-5 text-white dark:text-accent ${isDarkMode ? 'block' : 'hidden'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-5 text-white dark:text-accent ${isDarkMode ? 'hidden' : 'block'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-hamburger flex flex-col gap-[5px] size-12 bg-white/20 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer"
          >
            <span className="sr-only">Menu</span>
            <span className="block w-6 h-0.5 bg-white dark:bg-accent"></span>
            <span className="block w-6 h-0.5 bg-white dark:bg-accent"></span>
            <span className="block w-6 h-0.5 bg-white dark:bg-accent"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-24 right-4 left-4 bg-white dark:bg-background-8 rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
            <nav>
              <ul className="space-y-4">
                <li>
                  <a href="#features" onClick={() => setIsMenuOpen(false)} className="block py-2 text-secondary dark:text-accent hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="block py-2 text-secondary dark:text-accent hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block py-2 text-secondary dark:text-accent hover:text-primary dark:hover:text-primary-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-2 text-secondary dark:text-accent hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <button onClick={() => { openContactModal(); setIsMenuOpen(false); }} className="block py-2 w-full text-left text-secondary dark:text-accent hover:text-primary dark:hover:text-primary-400 transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-stroke-3 dark:border-stroke-7">
                <a href="#demo" onClick={() => setIsMenuOpen(false)} className="btn w-full bg-primary text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold">
                  Watch Demo
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
