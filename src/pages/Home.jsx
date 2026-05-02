import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative pt-40 md:pt-52 pb-24 md:pb-32">
        <div className="container-accu">
          {/* Eyebrow index row — editorial magazine feel */}
          <div className="flex items-center justify-between mb-10 reveal" style={{ animationDelay: '0ms' }}>
            <div className="eyebrow">Accuarion / 01</div>
            <div className="eyebrow hidden sm:block">Est. Utah · 2024</div>
          </div>

          {/* Headline */}
          <h1 className="hl-xl max-w-4xl reveal" style={{ animationDelay: '100ms' }}>
            AI-native <span className="grad-text italic font-display">financial software</span>, built by finance pros.
          </h1>

          {/* Subhead */}
          <p className="body-lg mt-8 max-w-2xl reveal" style={{ animationDelay: '280ms' }}>
            Most fintech is built by engineers who learned accounting. We built ours the other way around — 25 years of CPA, FP&A, and ERP implementation first, AI-native software second.
          </p>

          {/* CTA row */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal" style={{ animationDelay: '420ms' }}>
            <Link to="/products" className="btn-primary">
              See the products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link to="/about" className="btn-ghost">
              Read the backstory
            </Link>
          </div>
        </div>

        {/* Hero ambient decoration — spectral bar chart (bespoke SVG) */}
        <div className="container-accu mt-20 md:mt-28 reveal" style={{ animationDelay: '600ms' }}>
          <SpectralChart />
        </div>
      </section>

      {/* ============================================================ */}
      {/* POSITIONING — three-column value strip */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32">
        <div className="container-accu">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <Positioning
              eyebrow="Principle 01"
              title="Built by operators"
              body="Accuarion's foundation is real time-in-seat: FP&A, ERP implementations, monthly closes, audits. Not a framework borrowed from a textbook — hard-won judgment from inside the function."
            />
            <Positioning
              eyebrow="Principle 02"
              title="AI where it earns its keep"
              body="AI isn't a sticker we put on the box. It shows up when it genuinely outperforms the incumbent — anomaly detection, reconciliation matching, narrative generation, forecasting. Everywhere else, we let the numbers do the work."
            />
            <Positioning
              eyebrow="Principle 03"
              title="Small surface, high leverage"
              body="We ship two focused products — ArcaERP for operating a business, ArcaTrust for running a household — and we make them exceptional. No sprawling suite, no feature bingo."
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRODUCTS SHOWCASE */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="mb-14">
            <div className="eyebrow mb-4">Portfolio</div>
            <h2 className="hl-lg max-w-2xl">
              Two products. Both serious about the <span className="italic">fundamentals.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProductCard
              name="ArcaERP"
              status="LIVE"
              statusColor="live"
              blurb="A modern ERP for SMBs that finally works like accounting is supposed to. Full GL, AR/AP, payroll, CRM, and analytics — with AI woven into reconciliation, forecasting, and reporting from day one."
              cta="Visit arcaerp.com"
              href="https://arcaerp.com"
              external
              accentFrom="#4F7DFF"
              accentTo="#93B4FF"
            />
            <ProductCard
              name="ArcaTrust"
              status="COMING Q2 2026"
              statusColor="soon"
              blurb="A household finance platform you'd actually trust with your data. Envelope budgeting, Plaid-connected accounts, AI coaching, and an institutional tier for banks and credit unions."
              cta="Join the waitlist"
              href="mailto:chris@accuarion.com?subject=ArcaTrust%20waitlist&body=Please%20add%20me%20to%20the%20ArcaTrust%20waitlist."
              accentFrom="#E8B04C"
              accentTo="#F5C97B"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

// ----------------------------------------------------------------
// Components used only on Home
// ----------------------------------------------------------------

function Positioning({ eyebrow, title, body }) {
  return (
    <div className="relative">
      <div className="eyebrow mb-6">{eyebrow}</div>
      <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-tight mb-4">
        {title}
      </h3>
      <p className="text-ink-secondary leading-relaxed">{body}</p>
    </div>
  )
}

function ProductCard({ name, status, statusColor, blurb, cta, href, external, accentFrom, accentTo }) {
  const statusClass =
    statusColor === 'live'
      ? 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20'
      : 'bg-amber-accent/10 text-amber-accent border-amber-accent/30'

  return (
    <div className="card-gradient-border p-8 md:p-10 group">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-display text-3xl tracking-tight">{name}</h3>
        <span className={`font-mono text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border ${statusClass}`}>
          {status}
        </span>
      </div>

      {/* Accent bar */}
      <div
        className="h-0.5 w-16 mb-8 rounded-full"
        style={{ background: `linear-gradient(90deg, ${accentFrom} 0%, ${accentTo} 100%)` }}
      />

      <p className="text-ink-secondary leading-relaxed mb-8 min-h-[7rem]">{blurb}</p>

      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border-b border-white/20 pb-0.5 hover:border-white/60 transition"
      >
        {cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  )
}

// Bespoke "spectral" bar chart — conveys data + AI without being literal
function SpectralChart() {
  const bars = [
    { h: 58, label: "01", hue: 210 },
    { h: 38, label: "02", hue: 215 },
    { h: 72, label: "03", hue: 220 },
    { h: 46, label: "04", hue: 225 },
    { h: 84, label: "05", hue: 232 },
    { h: 62, label: "06", hue: 238 },
    { h: 94, label: "07", hue: 34 },   // amber accent column
    { h: 70, label: "08", hue: 238 },
    { h: 52, label: "09", hue: 244 },
    { h: 78, label: "10", hue: 248 },
    { h: 42, label: "11", hue: 252 },
    { h: 64, label: "12", hue: 256 },
  ]

  return (
    <div className="relative">
      <div className="flex items-end justify-between gap-2 md:gap-3 h-56 md:h-72 border-b border-white/10 pb-4">
        {bars.map((b, i) => {
          const saturation = b.hue > 200 && b.hue < 260 ? '70%' : '65%'
          const lightness = b.hue > 200 && b.hue < 260 ? '65%' : '60%'
          return (
            <div
              key={i}
              className="flex-1 flex flex-col justify-end items-center group"
            >
              <div
                className="w-full rounded-t-sm transition-all duration-500 ease-out group-hover:opacity-80"
                style={{
                  height: `${b.h}%`,
                  background: `linear-gradient(180deg, hsl(${b.hue}, ${saturation}, ${lightness}) 0%, hsl(${b.hue}, ${saturation}, ${lightness === '60%' ? '35%' : '40%'}) 100%)`,
                  boxShadow: `0 0 18px -4px hsl(${b.hue}, ${saturation}, ${lightness}, 0.4)`,
                  animation: `fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms forwards`,
                  opacity: 0,
                }}
              />
              <div className="mt-2 font-mono text-[10px] text-ink-tertiary">{b.label}</div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-between mt-3 text-[10px] font-mono text-ink-tertiary uppercase tracking-[0.18em]">
        <span>Signal Density</span>
        <span>n = 12 · sampled</span>
      </div>
    </div>
  )
}
