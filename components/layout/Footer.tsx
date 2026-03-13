'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20" style={{ background: '#FBF7F2' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/images/logo.svg" 
                alt="Wimbo.ai" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-[280px]">
              AI not as disruption — as disciplined studio infrastructure built to strengthen human creative output.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-primary mb-4">Albums</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#albums" className="text-text-primary text-sm hover:text-primary transition-colors duration-200">
                  My Devotion
                </Link>
              </li>
              <li>
                <Link href="#albums" className="text-text-primary text-sm hover:text-primary transition-colors duration-200">
                  Of Love & Comebacks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-primary uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-text-primary text-sm hover:text-primary transition-colors duration-200">
                  About Syni.ai
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-text-primary text-sm hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-primary text-sm hover:text-primary transition-colors duration-200">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
