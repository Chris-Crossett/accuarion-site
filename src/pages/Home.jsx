import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* ============================================================ */}
      {/* HERO — Refined: split layout, type left, ledger artifact right */}
      {/* ============================================================ */}
      <section className="relative pt-40 md:pt-52 pb-24 md:pb-32">
        <div className="container-accu">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* LEFT — type column */}
            <div className="md:col-span-7">
              {/* Eyebrow row */}
              <div className="flex items-center justify-between mb-8 reveal" style={{ animationDelay: '0ms' }}>
                <div className="eyebrow">Accuarion / 01</div>
                <div className="eyebrow hidden sm:block">Est. Utah · 2024</div>
              </div>

              {/* Headline */}
              <h1
                className="hl-xl reveal"
                style={{ animationDelay: '100ms', maxWidth: '13ch' }}
              >
                Financial software, <span className="grad-text italic font-display">built right.</span>
              </h1>

              {/* Subhead */}
              <p className="body-lg mt-8 max-w-xl reveal" style={{ animationDelay: '280ms' }}>
                Twenty-five years of CPA, FP&amp;A, and ERP implementation. Compounded with AI that earns its keep —
                embedded in the workflows where humans need it, audit-traceable everywhere else.
              </p>

              {/* CTA row */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 reveal" style={{ animationDelay: '420ms' }}>
                <Link to="/products" className="btn-primary">
                  See the products
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/about" className="btn-ghost">
                  Read the backstory
                </Link>
              </div>

              {/* Credibility rule — single line of mono */}
              <div className="mt-16 reveal" style={{ animationDelay: '560ms' }}>
                <div className="h-px bg-gradient-to-r from-white/10 to-white/[0.02] mb-5" />
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                  <span><span className="text-ink-primary">25 yrs</span> · operator experience</span>
                  <span><span className="text-emerald-300">●</span> ArcaERP live</span>
                  <span><span className="text-amber-accent">◐</span> ArcaTrust Q2 ’26</span>
                  <span>Solo-founded · customer-funded</span>
                </div>
              </div>
            </div>

            {/* RIGHT — ledger artifact */}
            <div className="md:col-span-5 reveal" style={{ animationDelay: '600ms' }}>
              <LedgerArtifact />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* POSITIONING — three-column value strip                         */}
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
      {/* PRODUCTS SHOWCASE                                              */}
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

// ----------------------------------------------------------------
// LEDGER ARTIFACT — the hero's right column
// A stylized journal entry with an AI anomaly callout. Renders the
// entire pitch in one frame: operator rigor + AI that earns its keep
// + audit trail.
// ----------------------------------------------------------------

function LedgerArtifact() {
  return (
    <div className="card-gradient-border p-5">
      <div className="rounded-[0.85rem] bg-obsidian-900/80 backdrop-blur-sm overflow-hidden">

        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
            <span>Journal entry</span>
            <span className="text-ink-tertiary/50">/</span>
            <span className="text-ink-secondary">JE-2026-04-1183</span>
          </div>
          <div className="font-mono text-[10px] text-ink-tertiary">Apr 30, 2026</div>
        </div>

        {/* Entry rows — tabular numerals */}
        <div className="px-5 py-4 space-y-2.5" style={{ fontVariantNumeric: 'tabular-nums' }}>
          <JERow account="6210 · Marketing — Events" debit="48,250.00" />
          <JERow account="2110 · Accounts Payable" credit="48,250.00" />
          <div className="h-px bg-white/5 my-1" />
          <div className="flex justify-between font-mono text-[11px] text-ink-tertiary">
            <span>Memo: Q2 conference sponsorship — Stripe Sessions</span>
            <span>USD</span>
          </div>
        </div>

        {/* AI callout — the moment */}
        <div className="mx-5 my-4 rounded-lg border border-amber-accent/30 bg-amber-accent/[0.06] p-4">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-7 h-7 rounded-full border border-amber-accent/40 bg-amber-accent/10 flex items-center justify-center">
              <span className="font-mono text-[11px] font-semibold text-amber-accent">!</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5 gap-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-accent">
                  Anomaly · 87% confidence
                </div>
                <div className="font-mono text-[10px] text-ink-tertiary whitespace-nowrap">model v3.2 · per-tenant</div>
              </div>
              <div className="text-[13px] text-ink-primary leading-relaxed">
                Amount is 3.4× the trailing 12-month median for account <span style={{ fontVariantNumeric: 'tabular-nums' }}>6210</span>.
              </div>
              <div className="mt-1 text-[12px] text-ink-secondary leading-relaxed">
                Three similar entries in March cleared at $11–14k. Vendor and memo also new this fiscal year.
              </div>
              <div className="mt-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em]">
                <button className="px-2.5 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">Approve</button>
                <button className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-ink-secondary">Open in audit log</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer trace — auditable by default */}
        <div className="px-5 py-2.5 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-ink-tertiary">
          <span>Traceable: inputs · model · prompt · threshold</span>
          <span className="text-ink-secondary/70">↳ audit-log</span>
        </div>
      </div>

      <div className="mt-3 px-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
        Live · ArcaERP · Anomaly detection
      </div>
    </div>
  )
}

function JERow({ account, debit, credit }) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] gap-6 items-baseline text-[13px]">
      <span className="text-ink-secondary truncate">{account}</span>
      <span className="text-ink-primary text-right w-24">
        {debit ?? <span className="text-ink-tertiary/50">—</span>}
      </span>
      <span className="text-ink-primary text-right w-24">
        {credit ?? <span className="text-ink-tertiary/50">—</span>}
      </span>
    </div>
  )
}
