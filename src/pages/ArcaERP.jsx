import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function ArcaERP() {
  // Scroll to top on mount — important for nested routes
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pb-32">
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section className="pt-40 md:pt-48 pb-20">
        <div className="container-accu">
          <Link to="/products" className="eyebrow inline-flex items-center gap-2 mb-10 hover:text-ink-secondary transition reveal">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All products
          </Link>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300 mb-6 reveal">
                ● Live · Operating in Production
              </div>
              <h1 className="hl-xl reveal" style={{ animationDelay: '100ms' }}>
                ArcaERP
              </h1>
              <p className="body-lg mt-8 max-w-2xl reveal" style={{ animationDelay: '280ms' }}>
                A modern ERP for SMBs that finally works like accounting is supposed to.
                Full GL, AR/AP, payroll, CRM, and analytics — with AI woven into reconciliation,
                forecasting, and reporting from day one.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right reveal" style={{ animationDelay: '420ms' }}>
              <a
                href="https://arcaerp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit arcaerp.com
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 reveal" style={{ animationDelay: '560ms' }}>
            <Stat n="14" label="Modules" />
            <Stat n="500+" label="API endpoints" />
            <Stat n="84+" label="Financial reports" />
            <Stat n="6" label="Marketplace adapters" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* USE CASES                                                     */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow mb-4">Who it's for</div>
            <h2 className="hl-lg">
              Built for businesses that have <span className="italic">outgrown</span> the starter tools.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <UseCase
              tag="ICP · 01"
              title="QBO graduates"
              body="You're a Series A or B SaaS company. QuickBooks Online is buckling — multi-entity, deferred revenue, ARR waterfalls, and revenue recognition were never its job. NetSuite quoted you $80k. We're the smart middle."
              tags={['SaaS', 'Multi-entity', 'Series A–B']}
            />
            <UseCase
              tag="ICP · 02"
              title="PE-backed multi-entity"
              body="A holdco with three to twelve operating companies. You need real consolidations, intercompany eliminations, and per-entity P&Ls without a six-figure implementation. Your CFO needs board reports tomorrow."
              tags={['Holdco', 'Consolidations', 'Roll-up']}
            />
            <UseCase
              tag="ICP · 03"
              title="Operations-heavy SMBs"
              body="Manufacturing, distribution, eCommerce, services. You sell across channels, manage inventory, run payroll, and need real ERP-grade controls — not bookkeeping software with a CRM tab bolted on."
              tags={['eCommerce', 'Inventory', 'Payroll']}
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* AI CAPABILITIES                                                */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow mb-4">AI, embedded</div>
            <h2 className="hl-lg">
              AI where it <span className="grad-text italic">earns its keep.</span>
            </h2>
            <p className="body-lg mt-8">
              Not a chatbot. Not a sticker. AI in ArcaERP shows up where the work is genuinely
              hard for humans — and gets out of the way everywhere else.
            </p>
          </div>

          <div className="space-y-px">
            <AIRow
              n="01"
              title="Anomaly detection on journal entries"
              body="Per-tenant calibration learns what 'normal' looks like for your books. Flags entries that deviate — wrong account, unusual amount, off-cycle posting — before they hit the trial balance. Every flag is auditable: you see the inputs, the model version, and the threshold that triggered it."
            />
            <AIRow
              n="02"
              title="Smart bank reconciliation matching"
              body="Goes beyond rules. Matches transactions across timing differences, splits, and partial payments. When it can't auto-match, it ranks candidates by confidence and shows its reasoning. You approve, it learns."
            />
            <AIRow
              n="03"
              title="Narrative generation for MD&A"
              body="Drafts the quarterly narrative directly from the variance analysis — not generic prose. Cites specific accounts, specific drivers, specific period-over-period deltas. You edit, you ship. Hours saved, not days."
            />
            <AIRow
              n="04"
              title="Forecast adjustments from leading indicators"
              body="Pulls signal from your operational data — sales pipeline, hiring plan, marketing spend — and adjusts forecasts before quarter-end surprises become quarter-end disasters."
            />
            <AIRow
              n="05"
              title="Payroll anomaly alerts"
              body="Catches the $50k bonus that should have been $5k, the duplicate hire, the rate change that didn't get approved. Before the payroll runs, not after."
            />
            <AIRow
              n="06"
              title="Attrition risk on workforce data"
              body="Surfaces patterns across compensation, tenure, and role data that correlate with departure risk. For HR leaders, not as a verdict — as a starting point for a real conversation."
            />
          </div>

          <div className="mt-14 p-8 border border-white/10 rounded-2xl bg-white/[0.02] max-w-3xl">
            <div className="eyebrow mb-3">Operating principle</div>
            <p className="text-ink-secondary leading-relaxed">
              <span className="text-ink-primary font-medium">Conservative on automation, aggressive on assistance.</span> We're cautious about AI that moves money or alters records. We're enthusiastic about AI that helps a human decide faster. Every AI output is traceable to its inputs, model version, and prompt.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRODUCT TOUR — STYLIZED MOCKUPS                                */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow mb-4">Product tour</div>
            <h2 className="hl-lg">A look <span className="italic">inside.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Mockup
              caption="Dashboard"
              hint="Real-time KPIs across cash, AR aging, MRR, and burn — with anomaly callouts surfaced inline."
            >
              <DashboardMockup />
            </Mockup>
            <Mockup
              caption="Bank reconciliation"
              hint="AI-ranked match candidates with confidence scoring. One click to accept, one click to teach."
            >
              <ReconciliationMockup />
            </Mockup>
            <Mockup
              caption="Anomaly detection"
              hint="Journal entries flagged for review with the model's reasoning visible — not a black box."
            >
              <AnomalyMockup />
            </Mockup>
            <Mockup
              caption="Financial reporting"
              hint="84+ pre-built reports across GL, AR/AP, EPM, payroll, and consolidations. Drill down to source."
            >
              <ReportsMockup />
            </Mockup>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPARISON TABLE                                               */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow mb-4">Honest comparison</div>
            <h2 className="hl-lg">
              How we <span className="italic">stack up.</span>
            </h2>
            <p className="body-lg mt-8">
              We've implemented these systems for real customers over 25 years. Here's the
              honest read on where each lands.
            </p>
          </div>

          <div className="overflow-x-auto -mx-6 sm:-mx-10 lg:-mx-12 px-6 sm:px-10 lg:px-12">
            <ComparisonTable />
          </div>

          <p className="mt-8 text-xs text-ink-tertiary max-w-2xl font-mono leading-relaxed">
            Comparisons reflect publicly available product information as of May 2026. Competitors evolve;
            we'll update this table as they do. If you spot something out of date, email <a href="mailto:chris@accuarion.com" className="underline hover:text-ink-secondary">chris@accuarion.com</a>.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING TIERS                                                  */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow mb-4">Tiers</div>
            <h2 className="hl-lg">
              Four tiers. <span className="italic">No surprises.</span>
            </h2>
            <p className="body-lg mt-8">
              Unlimited users on every paid tier. Module-based pricing — pay for what you actually use.
              See full pricing on <a href="https://arcaerp.com/pricing" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 hover:decoration-white">arcaerp.com</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TierCard
              name="Starter"
              positioning="Solo operators, single entity, getting off QuickBooks."
              features={['Core GL + AR/AP', 'Basic financial reporting', '1 entity', 'Standard integrations']}
            />
            <TierCard
              name="Core"
              positioning="Growing teams, real accounting needs, no consolidations yet."
              features={['Everything in Starter', 'Payroll, EPM, CRM', 'Workflow automation', 'Up to 3 entities']}
            />
            <TierCard
              name="Growth"
              positioning="Series A–B, multi-entity, real reporting cadence."
              featured
              features={['Everything in Core', 'Consolidations + intercompany', 'AI assistants enabled', 'Unlimited users', 'Priority support']}
            />
            <TierCard
              name="Scale"
              positioning="PE-backed, multi-tenant complexity, custom needs."
              features={['Everything in Growth', 'Custom modules + integrations', 'Dedicated account team', 'SLA + sandbox tenants', 'Migration concierge']}
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://arcaerp.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              See full pricing on arcaerp.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                      */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="card-gradient-border p-12 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="hl-md mb-6">Ready to see the platform?</h2>
            <p className="text-ink-secondary mb-10 max-w-xl mx-auto">
              ArcaERP is operating in production today. Visit the product site for a live demo,
              full feature documentation, and detailed pricing.
            </p>
            <a
              href="https://arcaerp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit arcaerp.com
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// ============================================================
// SHARED PRESENTATION COMPONENTS
// ============================================================

function Stat({ n, label }) {
  return (
    <div className="bg-obsidian-800 px-6 py-8">
      <div className="font-display text-3xl md:text-4xl tracking-tight text-ink-primary mb-2">{n}</div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">{label}</div>
    </div>
  )
}

function UseCase({ tag, title, body, tags }) {
  return (
    <div className="card-gradient-border p-8 h-full flex flex-col">
      <div className="eyebrow mb-6">{tag}</div>
      <h3 className="font-display text-2xl tracking-tight mb-4 text-ink-primary">{title}</h3>
      <p className="text-sm text-ink-secondary leading-relaxed mb-6 flex-1">{body}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary border border-white/10 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function AIRow({ n, title, body }) {
  return (
    <div className="grid md:grid-cols-12 gap-6 py-8 border-t border-white/10 last:border-b">
      <div className="md:col-span-1 font-mono text-xs text-ink-tertiary tracking-wider pt-1">{n}</div>
      <div className="md:col-span-4">
        <h3 className="font-display text-xl md:text-2xl tracking-tight text-ink-primary leading-tight">{title}</h3>
      </div>
      <div className="md:col-span-7">
        <p className="text-ink-secondary leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

function Mockup({ caption, hint, children }) {
  return (
    <div>
      <div className="card-gradient-border p-1 aspect-[4/3] overflow-hidden">
        <div className="w-full h-full rounded-[0.9rem] overflow-hidden bg-obsidian-900">
          {children}
        </div>
      </div>
      <div className="mt-4">
        <div className="font-display text-base text-ink-primary mb-1">{caption}</div>
        <p className="text-xs text-ink-tertiary leading-relaxed">{hint}</p>
      </div>
    </div>
  )
}

function TierCard({ name, positioning, features, featured }) {
  return (
    <div className={`card-gradient-border p-7 h-full flex flex-col ${featured ? 'ring-1 ring-spectrum-500/30' : ''}`}>
      {featured && (
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-spectrum-300 mb-3">
          ★ Most popular
        </div>
      )}
      <h3 className="font-display text-2xl tracking-tight text-ink-primary mb-3">{name}</h3>
      <p className="text-sm text-ink-tertiary mb-6 leading-relaxed">{positioning}</p>
      <ul className="space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className="text-sm text-ink-secondary flex gap-2">
            <span className="text-spectrum-300 shrink-0">·</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ============================================================
// COMPARISON TABLE
// ============================================================

function ComparisonTable() {
  const competitors = ['ArcaERP', 'QuickBooks Online', 'NetSuite', 'Sage Intacct', 'Acumatica']
  const rows = [
    { label: 'Multi-entity consolidations', vals: ['Native', 'Limited', 'Native', 'Native', 'Native'] },
    { label: 'Unlimited users', vals: ['Yes', 'No', 'No', 'No', 'Yes'] },
    { label: 'AI anomaly detection', vals: ['Native', 'No', 'Add-on', 'Limited', 'No'] },
    { label: 'AI bank rec matching', vals: ['Native', 'Basic', 'Basic', 'Basic', 'Basic'] },
    { label: 'AI narrative generation', vals: ['Native', 'No', 'No', 'No', 'No'] },
    { label: 'Embedded payroll', vals: ['Native', 'Add-on', 'Add-on', 'Add-on', 'Limited'] },
    { label: 'Marketplace adapters', vals: ['6 native', 'Apps', 'Apps', 'Apps', 'Apps'] },
    { label: 'Implementation time', vals: ['Days', 'Hours', 'Months', 'Months', 'Weeks–months'] },
    { label: 'Typical entry price', vals: ['$', '$', '$$$$', '$$$', '$$$'] },
    { label: 'Source-available', vals: ['Roadmap', 'No', 'No', 'No', 'No'] },
  ]

  const cellClass = (val, isUs) => {
    if (isUs) return 'text-ink-primary font-medium'
    if (val === 'Yes' || val === 'Native') return 'text-emerald-300/80'
    if (val === 'No') return 'text-ink-tertiary'
    return 'text-ink-secondary'
  }

  return (
    <div className="min-w-[720px]">
      <div className="grid grid-cols-[2fr_repeat(5,1fr)] gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
        {/* Header */}
        <div className="bg-obsidian-800 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
          Capability
        </div>
        {competitors.map((c, i) => (
          <div
            key={c}
            className={`bg-obsidian-800 px-5 py-5 text-sm ${i === 0 ? 'text-ink-primary font-medium' : 'text-ink-secondary'}`}
          >
            {c}
          </div>
        ))}

        {/* Rows */}
        {rows.map((row) => (
          <RowGroup key={row.label} row={row} cellClass={cellClass} />
        ))}
      </div>
    </div>
  )
}

function RowGroup({ row, cellClass }) {
  return (
    <>
      <div className="bg-obsidian-800 px-5 py-4 text-sm text-ink-secondary">{row.label}</div>
      {row.vals.map((v, i) => (
        <div key={i} className={`bg-obsidian-800 px-5 py-4 text-sm ${cellClass(v, i === 0)}`}>
          {v}
        </div>
      ))}
    </>
  )
}

// ============================================================
// SVG MOCKUPS — stylized placeholders, swap for real screenshots later
// ============================================================

function DashboardMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dashbar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F7DFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4F7DFF" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="dashbar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B04C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8B04C" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Header strip */}
      <rect x="16" y="14" width="80" height="6" rx="3" fill="#A8A9B4" opacity="0.4" />
      <rect x="16" y="26" width="120" height="10" rx="2" fill="#F5F5F7" opacity="0.85" />
      {/* KPI cards */}
      <g>
        <rect x="16" y="52" width="84" height="50" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
        <rect x="22" y="60" width="36" height="4" rx="2" fill="#6B6C78" />
        <rect x="22" y="72" width="56" height="10" rx="2" fill="#F5F5F7" opacity="0.9" />
        <rect x="22" y="88" width="28" height="4" rx="2" fill="#10b981" opacity="0.7" />

        <rect x="108" y="52" width="84" height="50" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
        <rect x="114" y="60" width="36" height="4" rx="2" fill="#6B6C78" />
        <rect x="114" y="72" width="48" height="10" rx="2" fill="#F5F5F7" opacity="0.9" />
        <rect x="114" y="88" width="32" height="4" rx="2" fill="#10b981" opacity="0.7" />

        <rect x="200" y="52" width="84" height="50" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
        <rect x="206" y="60" width="36" height="4" rx="2" fill="#6B6C78" />
        <rect x="206" y="72" width="60" height="10" rx="2" fill="#F5F5F7" opacity="0.9" />
        <rect x="206" y="88" width="24" height="4" rx="2" fill="#E8B04C" opacity="0.7" />

        <rect x="292" y="52" width="92" height="50" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
        <rect x="298" y="60" width="36" height="4" rx="2" fill="#6B6C78" />
        <rect x="298" y="72" width="52" height="10" rx="2" fill="#F5F5F7" opacity="0.9" />
        <rect x="298" y="88" width="20" height="4" rx="2" fill="#10b981" opacity="0.7" />
      </g>
      {/* Chart area */}
      <rect x="16" y="118" width="240" height="166" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
      <rect x="24" y="128" width="80" height="4" rx="2" fill="#6B6C78" />
      {/* Bars */}
      {[40, 55, 35, 70, 50, 80, 60, 90, 65, 75].map((h, i) => (
        <rect key={i} x={28 + i * 22} y={260 - h} width="14" height={h} rx="2" fill={i === 7 ? "url(#dashbar2)" : "url(#dashbar1)"} />
      ))}
      {/* Side panel */}
      <rect x="264" y="118" width="120" height="166" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
      <rect x="272" y="128" width="60" height="4" rx="2" fill="#6B6C78" />
      <rect x="272" y="144" width="100" height="2" rx="1" fill="#ffffff" opacity="0.05" />
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <circle cx="278" cy={160 + i * 22} r="3" fill={i === 1 ? "#E8B04C" : "#4F7DFF"} opacity="0.7" />
          <rect x="288" y={156 + i * 22} width="60" height="3" rx="1.5" fill="#A8A9B4" opacity="0.5" />
          <rect x="288" y={163 + i * 22} width="40" height="3" rx="1.5" fill="#6B6C78" opacity="0.5" />
        </g>
      ))}
    </svg>
  )
}

function ReconciliationMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="14" width="100" height="6" rx="3" fill="#A8A9B4" opacity="0.4" />
      <rect x="16" y="26" width="160" height="10" rx="2" fill="#F5F5F7" opacity="0.85" />
      {/* Two-column reconciliation */}
      <text x="24" y="62" fill="#6B6C78" fontSize="9" fontFamily="monospace">BANK</text>
      <text x="220" y="62" fill="#6B6C78" fontSize="9" fontFamily="monospace">LEDGER</text>
      {/* Match rows */}
      {[0, 1, 2, 3].map((i) => {
        const isAuto = i < 2
        const matchColor = isAuto ? '#10b981' : '#E8B04C'
        return (
          <g key={i}>
            <rect x="16" y={72 + i * 50} width="170" height="40" rx="4" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
            <rect x="24" y={82 + i * 50} width="100" height="4" rx="2" fill="#A8A9B4" opacity="0.7" />
            <rect x="24" y={94 + i * 50} width="60" height="3" rx="1.5" fill="#6B6C78" opacity="0.5" />
            <rect x="140" y={86 + i * 50} width="38" height="14" rx="3" fill="#F5F5F7" opacity="0.9" />

            {/* Match arrow */}
            <line x1="190" y1={92 + i * 50} x2="216" y2={92 + i * 50} stroke={matchColor} strokeWidth="1.5" strokeDasharray={isAuto ? "" : "3 2"} />
            <circle cx="203" cy={92 + i * 50} r="6" fill="#0A0A0F" stroke={matchColor} strokeWidth="1.5" />
            <text x="203" y={95 + i * 50} fill={matchColor} fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="700">
              {isAuto ? '✓' : '?'}
            </text>

            <rect x="220" y={72 + i * 50} width="164" height="40" rx="4" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
            <rect x="228" y={82 + i * 50} width="92" height="4" rx="2" fill="#A8A9B4" opacity="0.7" />
            <rect x="228" y={94 + i * 50} width="56" height="3" rx="1.5" fill="#6B6C78" opacity="0.5" />
            <rect x="334" y={86 + i * 50} width="42" height="14" rx="3" fill="#F5F5F7" opacity="0.9" />
          </g>
        )
      })}
      {/* Confidence chip */}
      <rect x="16" y="276" width="132" height="14" rx="7" fill="#10b981" opacity="0.12" />
      <circle cx="26" cy="283" r="3" fill="#10b981" />
      <text x="34" y="286" fill="#10b981" fontSize="8" fontFamily="monospace" letterSpacing="1">2 AUTO · 2 SUGGESTED</text>
    </svg>
  )
}

function AnomalyMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="14" width="120" height="6" rx="3" fill="#A8A9B4" opacity="0.4" />
      <rect x="16" y="26" width="180" height="10" rx="2" fill="#F5F5F7" opacity="0.85" />
      {/* Journal entry card */}
      <rect x="16" y="56" width="368" height="100" rx="8" fill="#11111A" stroke="#E8B04C" strokeOpacity="0.4" />
      <circle cx="32" cy="74" r="6" fill="#E8B04C" opacity="0.2" />
      <text x="32" y="77" fill="#E8B04C" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">!</text>
      <rect x="46" y="68" width="140" height="6" rx="3" fill="#F5F5F7" opacity="0.9" />
      <rect x="46" y="80" width="80" height="3" rx="1.5" fill="#6B6C78" />

      {/* Lines of journal entry */}
      <line x1="32" y1="100" x2="368" y2="100" stroke="#ffffff" strokeOpacity="0.06" />
      <rect x="32" y="110" width="80" height="3" rx="1.5" fill="#A8A9B4" opacity="0.6" />
      <rect x="180" y="110" width="40" height="3" rx="1.5" fill="#A8A9B4" opacity="0.6" />
      <rect x="320" y="110" width="48" height="3" rx="1.5" fill="#F5F5F7" opacity="0.85" />
      <rect x="32" y="124" width="100" height="3" rx="1.5" fill="#A8A9B4" opacity="0.6" />
      <rect x="180" y="124" width="40" height="3" rx="1.5" fill="#A8A9B4" opacity="0.6" />
      <rect x="324" y="124" width="44" height="3" rx="1.5" fill="#F5F5F7" opacity="0.85" />
      <rect x="32" y="138" width="64" height="3" rx="1.5" fill="#A8A9B4" opacity="0.6" />
      <rect x="180" y="138" width="40" height="3" rx="1.5" fill="#A8A9B4" opacity="0.6" />
      <rect x="320" y="138" width="48" height="3" rx="1.5" fill="#F5F5F7" opacity="0.85" />

      {/* Why flagged panel */}
      <rect x="16" y="176" width="368" height="108" rx="8" fill="#0A0A0F" stroke="#ffffff" strokeOpacity="0.05" />
      <text x="28" y="196" fill="#6B6C78" fontSize="9" fontFamily="monospace" letterSpacing="1.5">WHY FLAGGED</text>
      <circle cx="32" cy="218" r="2" fill="#E8B04C" />
      <rect x="44" y="216" width="280" height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
      <circle cx="32" cy="234" r="2" fill="#E8B04C" />
      <rect x="44" y="232" width="220" height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
      <circle cx="32" cy="250" r="2" fill="#E8B04C" />
      <rect x="44" y="248" width="260" height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
      <rect x="28" y="262" width="80" height="14" rx="7" fill="#10b981" opacity="0.15" />
      <text x="40" y="272" fill="#10b981" fontSize="8" fontFamily="monospace">APPROVE</text>
      <rect x="116" y="262" width="80" height="14" rx="7" fill="#ffffff" opacity="0.05" />
      <text x="128" y="272" fill="#A8A9B4" fontSize="8" fontFamily="monospace">REJECT</text>
    </svg>
  )
}

function ReportsMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="14" width="100" height="6" rx="3" fill="#A8A9B4" opacity="0.4" />
      <rect x="16" y="26" width="200" height="10" rx="2" fill="#F5F5F7" opacity="0.85" />
      {/* Tabs */}
      <rect x="16" y="50" width="64" height="20" rx="4" fill="#4F7DFF" opacity="0.18" />
      <text x="48" y="64" fill="#93B4FF" fontSize="8" fontFamily="monospace" textAnchor="middle">P&amp;L</text>
      <rect x="84" y="50" width="64" height="20" rx="4" fill="#ffffff" opacity="0.04" />
      <text x="116" y="64" fill="#A8A9B4" fontSize="8" fontFamily="monospace" textAnchor="middle">BS</text>
      <rect x="152" y="50" width="64" height="20" rx="4" fill="#ffffff" opacity="0.04" />
      <text x="184" y="64" fill="#A8A9B4" fontSize="8" fontFamily="monospace" textAnchor="middle">CASH</text>
      <rect x="220" y="50" width="64" height="20" rx="4" fill="#ffffff" opacity="0.04" />
      <text x="252" y="64" fill="#A8A9B4" fontSize="8" fontFamily="monospace" textAnchor="middle">VAR</text>

      {/* Table */}
      <rect x="16" y="84" width="368" height="200" rx="8" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
      <line x1="16" y1="106" x2="384" y2="106" stroke="#ffffff" strokeOpacity="0.08" />
      <text x="28" y="100" fill="#6B6C78" fontSize="8" fontFamily="monospace">ACCOUNT</text>
      <text x="200" y="100" fill="#6B6C78" fontSize="8" fontFamily="monospace">Q1 2026</text>
      <text x="260" y="100" fill="#6B6C78" fontSize="8" fontFamily="monospace">Q4 2025</text>
      <text x="328" y="100" fill="#6B6C78" fontSize="8" fontFamily="monospace">Δ %</text>

      {[
        { label: 78, indent: 0, q1: 60, q4: 56, delta: 7, deltaColor: '#10b981' },
        { label: 100, indent: 16, q1: 50, q4: 48, delta: 4, deltaColor: '#10b981' },
        { label: 110, indent: 16, q1: 56, q4: 50, delta: 12, deltaColor: '#10b981' },
        { label: 90, indent: 0, q1: 64, q4: 70, delta: -8, deltaColor: '#E8B04C' },
        { label: 100, indent: 16, q1: 48, q4: 52, delta: -7, deltaColor: '#E8B04C' },
        { label: 88, indent: 16, q1: 38, q4: 42, delta: -9, deltaColor: '#E8B04C' },
        { label: 70, indent: 0, q1: 60, q4: 56, delta: 7, deltaColor: '#10b981' },
      ].map((r, i) => (
        <g key={i}>
          <rect x={28 + r.indent} y={120 + i * 22} width={r.label} height="3" rx="1.5" fill={r.indent ? "#A8A9B4" : "#F5F5F7"} opacity={r.indent ? 0.6 : 0.85} />
          <rect x="200" y={120 + i * 22} width={r.q1} height="3" rx="1.5" fill="#F5F5F7" opacity="0.85" />
          <rect x="260" y={120 + i * 22} width={r.q4} height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
          <rect x="328" y={119 + i * 22} width={Math.abs(r.delta) * 4} height="5" rx="2.5" fill={r.deltaColor} opacity="0.6" />
        </g>
      ))}
    </svg>
  )
}
