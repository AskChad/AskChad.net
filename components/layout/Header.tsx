'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <li><Link href="#features" className="text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">Features</Link></li>
            <li><Link href="#benefits" className="text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">Benefits</Link></li>
            <li><Link href="#how-it-works" className="text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">How It Works</Link></li>
            <li><Link href="#testimonials" className="text-white/90 hover:text-white dark:text-accent/80 dark:hover:text-accent transition-colors">Testimonials</Link></li>
          </ul>
        </nav>

        <div className="xl:flex hidden items-center gap-3">
          <Link href="https://calendly.com/askchad/demo" target="_blank" rel="noopener noreferrer" className="btn btn-md bg-white text-primary hover:bg-white/90 dark:bg-accent dark:text-background-9 dark:hover:bg-accent/90 px-6">
            <span>Schedule Demo</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
