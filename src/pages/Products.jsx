import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <div className="pt-40 md:pt-48 pb-24">
      <div className="container-accu">
        {/* Title */}
        <div className="mb-20 max-w-3xl">
          <div className="eyebrow mb-6 reveal">Portfolio · 03</div>
          <h1 className="hl-xl reveal" style={{ animationDelay: '100ms' }}>
            Two products. <span className="grad-text italic">Focused.</span>
          </h1>
          <p className="body-lg mt-8 max-w-xl reveal" style={{ animationDelay: '280ms' }}>
            One for the business. One for the household. Both built on the same conviction:
            financial software should feel like it was made by someone who understands what
            the numbers mean.
          </p>
        </div>

        {/* Product index */}
        <div className="grid md:grid-cols-2 gap-6">
          <ProductIndexCard
            to="/products/arcaerp"
            name="ArcaERP"
            status="LIVE"
            statusColor="live"
            blurb="A modern ERP for SMBs that finally works like accounting is supposed to. Full GL, AR/AP, payroll, CRM, and analytics — with AI woven into reconciliation, forecasting, and reporting from day one."
            stats={[
              { n: '14', label: 'Modules' },
              { n: '500+', label: 'Endpoints' },
              { n: '84+', label: 'Reports' },
            ]}
            accentFrom="#4F7DFF"
            accentTo="#93B4FF"
          />
          <ProductIndexCard
            to="/products/arcatrust"
            name="ArcaTrust"
            status="COMING Q2 2026"
            statusColor="soon"
            blurb="A household finance platform you'd actually trust with your data. Envelope budgeting, Plaid-connected accounts, AI coaching, and an institutional tier for banks and credit unions."
            stats={[
              { n: '3', label: 'Tiers' },
              { n: 'AES-256', label: 'Encryption' },
              { n: 'Plaid', label: 'Connected' },
            ]}
            accentFrom="#E8B04C"
            accentTo="#F5C97B"
          />
        </div>

        {/* Bottom philosophy strip */}
        <div className="mt-20 pt-16 border-t border-white/10 max-w-2xl">
          <div className="eyebrow mb-4">Two products. One philosophy.</div>
          <p className="text-ink-secondary leading-relaxed">
            ArcaERP runs a business. ArcaTrust runs a household. Both are built on the same
            principle — financial software should be designed by people who've actually worked
            with the numbers, not by people who learned accounting from a tutorial.
          </p>
        </div>
      </div>
    </div>
  )
}

function ProductIndexCard({ to, name, status, statusColor, blurb, stats, accentFrom, accentTo }) {
  const statusClass =
    statusColor === 'live'
      ? 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20'
      : 'bg-amber-accent/10 text-amber-accent border-amber-accent/30'

  return (
    <Link
      to={to}
      className="card-gradient-border p-8 md:p-10 group block transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-display text-3xl tracking-tight">{name}</h3>
        <span className={`font-mono text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border ${statusClass}`}>
          {status}
        </span>
      </div>

      <div
        className="h-0.5 w-16 mb-8 rounded-full"
        style={{ background: `linear-gradient(90deg, ${accentFrom} 0%, ${accentTo} 100%)` }}
      />

      <p className="text-ink-secondary leading-relaxed mb-10">{blurb}</p>

      {/* Stat strip */}
      <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-white/5">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-xl text-ink-primary tracking-tight mb-1">{s.n}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-tertiary">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border-b border-white/20 pb-0.5 group-hover:border-white/60 transition">
        Explore {name}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
          <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  )
}
