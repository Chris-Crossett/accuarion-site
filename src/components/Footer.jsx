import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-32">
      <div className="container-accu py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Brand column */}
          <div className="md:col-span-2 max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <svg width="22" height="22" viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="footGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F7DFF" />
                    <stop offset="100%" stopColor="#E8B04C" />
                  </linearGradient>
                </defs>
                <path d="M18 48 L32 18 L46 48 M24 39 L40 39" stroke="url(#footGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display text-base tracking-tight">Accuarion</span>
            </div>
            <p className="text-sm text-ink-tertiary leading-relaxed">
              Parent company of ArcaERP and ArcaTrust. Based in Utah. Building AI-native financial software for operators who understand what the numbers actually mean.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="eyebrow mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://arcaerp.com" className="text-ink-secondary hover:text-ink-primary transition" target="_blank" rel="noopener noreferrer">
                  ArcaERP
                </a>
              </li>
              <li>
                <Link to="/products" className="text-ink-secondary hover:text-ink-primary transition">
                  ArcaTrust
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="eyebrow mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-ink-secondary hover:text-ink-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink-secondary hover:text-ink-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/accuarion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-secondary hover:text-ink-primary transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-ink-tertiary">
            © {new Date().getFullYear()} Accuarion LLC. All rights reserved.
          </p>
          <p className="text-xs text-ink-tertiary font-mono">
            AI · Finance · Software
          </p>
        </div>
      </div>
    </footer>
  )
}
