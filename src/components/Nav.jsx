import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-500 ${
        scrolled ? 'py-3 backdrop-blur-xl bg-obsidian-900/70 border-b border-white/5' : 'py-5'
      }`}
    >
      <div className="container-accu flex items-center justify-between">
        {/* Monogram + wordmark */}
        <Link to="/" className="group flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 64 64" className="shrink-0">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F7DFF" />
                <stop offset="100%" stopColor="#E8B04C" />
              </linearGradient>
            </defs>
            <path
              d="M18 48 L32 18 L46 48 M24 39 L40 39"
              stroke="url(#logoGrad)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-500 group-hover:rotate-[-4deg]"
              style={{ transformOrigin: 'center' }}
            />
          </svg>
          <span className="font-display text-lg tracking-tight text-ink-primary">
            Accuarion
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-tight transition-colors ${
                  isActive
                    ? 'text-ink-primary'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-obsidian-900/95 backdrop-blur-xl">
          <nav className="container-accu py-6 flex flex-col gap-4">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-base tracking-tight ${
                    isActive ? 'text-ink-primary' : 'text-ink-secondary'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
