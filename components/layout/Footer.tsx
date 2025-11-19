import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer bg-white dark:bg-background-9 py-12 md:py-16">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <figure className="max-w-[198px] mb-4">
              <Image src="/images/askchad/logo.png" alt="AskChad" width={300} height={136} className="h-12 w-auto" />
            </figure>
            <p className="text-secondary dark:text-accent/80 mb-6 max-w-md">
              Transform cold leads into hot revenue with AI-powered sales automation. AskChad works 24/7 to re-engage dormant leads and recover lost revenue.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#features" className="text-secondary dark:text-accent/80 hover:text-primary dark:hover:text-accent transition-colors">Features</Link></li>
              <li><Link href="/#benefits" className="text-secondary dark:text-accent/80 hover:text-primary dark:hover:text-accent transition-colors">Benefits</Link></li>
              <li><Link href="/#how-it-works" className="text-secondary dark:text-accent/80 hover:text-primary dark:hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link href="/#testimonials" className="text-secondary dark:text-accent/80 hover:text-primary dark:hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="https://askchad.net/privacy" className="text-secondary dark:text-accent/80 hover:text-primary dark:hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="https://askchad.net/tos" className="text-secondary dark:text-accent/80 hover:text-primary dark:hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stroke-2 dark:border-stroke-6 text-center">
          <p className="text-sm text-secondary dark:text-accent/60">
            © 2010-{currentYear} AskChad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
