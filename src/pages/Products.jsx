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
            One for the business. One for the household. Both built on the same conviction: financial software should feel like it was made by someone who understands what the numbers mean.
          </p>
        </div>

        {/* ArcaERP */}
        <div className="card-gradient-border p-8 md:p-14 mb-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300 mb-3">
                ● Live · Operating in Production
              </div>
              <h2 className="hl-lg mb-4">ArcaERP</h2>
              <p className="text-ink-secondary max-w-xl">
                A modern ERP for small and mid-sized businesses that actually respects accounting.
              </p>
            </div>
            <a
              href="https://arcaerp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start shrink-0"
            >
              arcaerp.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Feature title="Accounting">
              Full double-entry GL, AR/AP, payroll, fixed assets, period close, consolidations, and 80+ financial reports.
            </Feature>
            <Feature title="Operations">
              SCM, eCommerce adapters (Amazon, Shopify, WooCommerce, Etsy, eBay, Walmart), HCM, and CRM — one database, one security model.
            </Feature>
            <Feature title="Planning">
              EPM for budgets, forecasts, and variance analysis. Workforce planning connected to live HR data. Driver-based models.
            </Feature>
            <Feature title="AI, embedded">
              Anomaly detection on journal entries. Payroll anomaly alerts. AI review assistants. Attrition risk. Smart bank matching.
            </Feature>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-x-10 gap-y-3 text-sm text-ink-tertiary">
            <span className="font-mono text-xs">14 modules</span>
            <span className="font-mono text-xs">500+ endpoints</span>
            <span className="font-mono text-xs">Multi-tenant</span>
            <span className="font-mono text-xs">GCP-native</span>
          </div>
        </div>

        {/* ArcaTrust */}
        <div className="card-gradient-border p-8 md:p-14">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-accent mb-3">
                ◐ Coming Q2 2026 · Pre-launch
              </div>
              <h2 className="hl-lg mb-4">ArcaTrust</h2>
              <p className="text-ink-secondary max-w-xl">
                Household finance software you'd actually trust with your data — plus an institutional tier for banks and credit unions.
              </p>
            </div>
            <a
              href="mailto:hello@accuarion.com?subject=ArcaTrust%20waitlist&body=Please%20add%20me%20to%20the%20ArcaTrust%20waitlist."
              className="btn-primary self-start shrink-0"
            >
              Join the waitlist
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Feature title="For households">
              Envelope budgeting, Plaid-linked accounts, AI financial coach, receipt OCR, bill pay hub, and a privacy-first posture.
            </Feature>
            <Feature title="For institutions">
              White-label tier for community banks and credit unions. Co-branded member-facing budgeting with your data, your retention.
            </Feature>
            <Feature title="Built to trust">
              AES-256-GCM at rest. Row-level security. Session timeout handling. Every design decision defaulted toward the member's interest.
            </Feature>
            <Feature title="AI where it matters">
              Coaching grounded in the member's own ledger, not generic advice. Anomaly alerts on unexpected spending. Forecasting cashflow drift before it's a problem.
            </Feature>
          </div>

          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-x-10 gap-y-3 text-sm text-ink-tertiary">
            <span className="font-mono text-xs">Community · Professional · Enterprise tiers</span>
            <span className="font-mono text-xs">Plaid-certified</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Feature({ title, children }) {
  return (
    <div>
      <h4 className="font-display text-lg tracking-tight mb-2 text-ink-primary">{title}</h4>
      <p className="text-sm text-ink-secondary leading-relaxed">{children}</p>
    </div>
  )
}
