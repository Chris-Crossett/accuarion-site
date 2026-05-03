import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-32">
      <div className="container-accu py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Brand column */}
          <div className="md:col-span-2 max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <Logo size={22} idSuffix="footer" />
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
                <Link to="/products/arcaerp" className="text-ink-secondary hover:text-ink-primary transition">
                  ArcaERP
                </Link>
              </li>
              <li>
                <Link to="/products/arcatrust" className="text-ink-secondary hover:text-ink-primary transition">
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
