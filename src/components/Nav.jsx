import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Logo from './Logo.jsx'

// Top-level nav links. Products is rendered specially with a dropdown.
const SIMPLE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const PRODUCT_LINKS = [
  {
    to: '/products/arcaerp',
    name: 'ArcaERP',
    blurb: 'Modern ERP for SMBs',
    status: 'live',
  },
  {
    to: '/products/arcatrust',
    name: 'ArcaTrust',
    blurb: 'Household finance, done right',
    status: 'soon',
  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-500 ${
        scrolled ? 'py-3 backdrop-blur-xl bg-obsidian-900/70 border-b border-white/5' : 'py-5'
      }`}
    >
      <div className="container-accu flex items-center justify-between">
        {/* Monogram + wordmark */}
        <Link to="/" className="group flex items-center gap-3">
          <Logo
            size={28}
            idSuffix="nav"
            className="transition-transform duration-500 group-hover:rotate-[-4deg]"
            style={{ transformOrigin: 'center' }}
          />
          <span className="font-display text-lg tracking-tight text-ink-primary">
            Accuarion
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Home */}
          <DesktopLink to="/" label="Home" />

          {/* Products with dropdown */}
          <ProductsDropdown />

          {/* About + Contact */}
          {SIMPLE_LINKS.filter((l) => l.to !== '/').map((l) => (
            <DesktopLink key={l.to} to={l.to} label={l.label} />
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
            <MobileLink to="/" label="Home" onClick={() => setMobileOpen(false)} />

            {/* Products with sub-items */}
            <div>
              <MobileLink to="/products" label="Products" onClick={() => setMobileOpen(false)} />
              <div className="mt-3 ml-4 pl-4 border-l border-white/10 space-y-3">
                {PRODUCT_LINKS.map((p) => (
                  <NavLink
                    key={p.to}
                    to={p.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 text-sm ${
                        isActive ? 'text-ink-primary' : 'text-ink-secondary'
                      }`
                    }
                  >
                    <span>{p.name}</span>
                    <StatusDot status={p.status} />
                  </NavLink>
                ))}
              </div>
            </div>

            <MobileLink to="/about" label="About" onClick={() => setMobileOpen(false)} />
            <MobileLink to="/contact" label="Contact" onClick={() => setMobileOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  )
}

// ----------------------------------------------------------------
// Desktop link (top-level)
// ----------------------------------------------------------------

function DesktopLink({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `text-sm tracking-tight transition-colors ${
          isActive ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

// ----------------------------------------------------------------
// Mobile link (top-level)
// ----------------------------------------------------------------

function MobileLink({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        `text-base tracking-tight ${isActive ? 'text-ink-primary' : 'text-ink-secondary'}`
      }
    >
      {label}
    </NavLink>
  )
}

// ----------------------------------------------------------------
// Products dropdown (desktop only)
// Hover-open with a small grace period so the menu doesn't snap shut
// the moment the cursor crosses the gap between trigger and panel.
// ----------------------------------------------------------------

function ProductsDropdown() {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()
  const isProductsRoute = location.pathname.startsWith('/products')

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const handleLeave = () => {
    // 120ms grace so the cursor can travel from the link to the panel
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger — clicking still navigates to /products index */}
      <NavLink
        to="/products"
        className={({ isActive }) => {
          const active = isActive || isProductsRoute
          return `text-sm tracking-tight transition-colors inline-flex items-center gap-1.5 ${
            active ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'
          }`
        }}
      >
        Products
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavLink>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
          // pt-3 above creates the invisible bridge to the panel so hover
          // doesn't break when crossing the gap
        >
          <div className="card-gradient-border w-[320px] p-2 shadow-2xl shadow-black/40">
            <div className="bg-obsidian-900/95 backdrop-blur-xl rounded-[0.85rem] py-2">
              {PRODUCT_LINKS.map((p) => (
                <NavLink
                  key={p.to}
                  to={p.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-start gap-3 px-4 py-3 transition-colors group/item ${
                      isActive
                        ? 'bg-white/[0.04]'
                        : 'hover:bg-white/[0.03]'
                    }`
                  }
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-display text-base text-ink-primary tracking-tight">
                        {p.name}
                      </span>
                      <StatusDot status={p.status} />
                    </div>
                    <div className="text-xs text-ink-tertiary leading-snug">{p.blurb}</div>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-ink-tertiary mt-1 shrink-0 transition-transform group-hover/item:translate-x-0.5"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </NavLink>
              ))}

              {/* Footer link to the index page */}
              <div className="mt-1 pt-2 border-t border-white/5 px-4 pb-2">
                <NavLink
                  to="/products"
                  onClick={() => setOpen(false)}
                  className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary hover:text-ink-secondary transition"
                >
                  All products →
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ----------------------------------------------------------------
// Status dot — green for live, amber for upcoming
// ----------------------------------------------------------------

function StatusDot({ status }) {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.16em] text-emerald-300">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Live
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.16em] text-amber-accent">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-accent" />
      Q2 ’26
    </span>
  )
}
