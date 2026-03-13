export default function Footer() {
  return (
    <footer className="bg-white section-padding border-t border-neutral-100">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Logo and Tagline */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-coral-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                </svg>
              </div>
              <span className="font-serif text-xl font-bold text-text-primary">wimbo.ai</span>
            </div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              AI not as disruption — as disciplined studio infrastructure built to strengthen human creative output.
            </p>
          </div>

          {/* Links */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Platform Links */}
            <div>
              <h3 className="font-serif text-lg font-bold text-text-primary mb-4">PLATFORM</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#artists" className="text-text-secondary hover:text-text-primary transition-colors">
                    The Artists
                  </a>
                </li>
                <li>
                  <a href="#early-access" className="text-text-secondary hover:text-text-primary transition-colors">
                    Early Access
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-serif text-lg font-bold text-text-primary mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">
                    About Syni.ai
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-text-secondary hover:text-text-primary transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-neutral-100">
            <p className="text-text-secondary text-sm">
              © 2024 Wimbo.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
