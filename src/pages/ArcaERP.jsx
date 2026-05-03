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
      {/* PRODUCT TOUR — Refined: realistic mockups w/ magazine captions */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow mb-4">Product tour · Annotated</div>
            <h2 className="hl-lg">A look <span className="italic">inside.</span></h2>
            <p className="body-lg mt-6">Each frame, with a note on where the AI earns its keep.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
            <AnnotatedMockup
              caption="Dashboard · Q1 close"
              hint="Live KPIs surface anomaly callouts inline."
              annotation="AI moment"
              fig="01"
              body="Inline flag points to two GL entries that deviated from per-account norms — surfaced before the trial balance is signed."
            >
              <DashboardMockup />
            </AnnotatedMockup>
            <AnnotatedMockup
              caption="Bank reconciliation"
              hint="AI-ranked match candidates with confidence."
              annotation="AI moment"
              fig="02"
              body="Match candidates ranked by per-tenant confidence. The ones below threshold show their reasoning so the human can correct the model."
            >
              <ReconciliationMockup />
            </AnnotatedMockup>
            <AnnotatedMockup
              caption="Anomaly · GL review"
              hint="The full reasoning chain, no black box."
              annotation="AI moment"
              fig="03"
              body="Flag is auditable: model version, threshold, and the specific inputs (vendor history, account median, posting cycle) that triggered it."
            >
              <AnomalyMockup />
            </AnnotatedMockup>
            <AnnotatedMockup
              caption="Reports · P&L variance"
              hint="84+ pre-built. Drill from total to source."
              annotation="Editorial"
              fig="04"
              body="Variance lit by direction, not severity. Investors and operators read the same view; AI narratives draft from the same delta map."
            >
              <ReportsMockup />
            </AnnotatedMockup>
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

function AnnotatedMockup({ caption, hint, annotation, fig, body, children }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Mockup frame */}
      <div className="col-span-12 md:col-span-8">
        <div className="card-gradient-border p-1 aspect-[4/3] overflow-hidden">
          <div className="w-full h-full rounded-[0.9rem] overflow-hidden bg-obsidian-900">
            {children}
          </div>
        </div>
        <div className="mt-3">
          <div className="font-display text-[15px] tracking-tight text-ink-primary">{caption}</div>
          <div className="text-[11px] text-ink-tertiary mt-1">{hint}</div>
        </div>
      </div>

      {/* Magazine-style figure caption */}
      <div className="col-span-12 md:col-span-4 pt-2 md:pl-3 md:border-l border-white/10">
        <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-amber-accent mb-2">
          Fig. {fig} · {annotation}
        </div>
        <p className="text-[12px] text-ink-secondary leading-relaxed">{body}</p>
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
// COMPARISON TABLE — Bold: capability heatmap + wins/parity/gaps KPI rail
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

  // Compute win / parity / gap totals for ArcaERP vs all competitors combined
  let arcaWinsTotal = 0, arcaParityTotal = 0, arcaGapsTotal = 0
  rows.forEach((r) => {
    const ours = score(r.vals[0])
    for (let ci = 1; ci < r.vals.length; ci++) {
      const theirs = score(r.vals[ci])
      if (ours > theirs) arcaWinsTotal++
      else if (ours === theirs) arcaParityTotal++
      else arcaGapsTotal++
    }
  })

  return (
    <div className="min-w-[760px]">
      {/* KPI rail */}
      <div className="mb-8 grid grid-cols-3 gap-3 max-w-md ml-auto">
        <KpiTile n={arcaWinsTotal} label="Wins" tone="win" />
        <KpiTile n={arcaParityTotal} label="Parity" tone="parity" />
        <KpiTile n={arcaGapsTotal} label="Gaps" tone="gap" />
      </div>

      {/* Heatmap */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'minmax(220px, 1.6fr) repeat(5, 1fr)',
          gap: 4,
        }}
      >
        {/* Header row */}
        <div />
        {competitors.map((c, i) => (
          <div key={c} className="text-center pb-3">
            <div
              className={`text-[13px] ${
                i === 0
                  ? 'font-display text-ink-primary tracking-tight'
                  : 'text-ink-secondary'
              }`}
            >
              {c}
            </div>
            {i === 0 && (
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-amber-accent mt-0.5">★ Hero</div>
            )}
          </div>
        ))}

        {/* Rows */}
        {rows.map((row, ri) => (
          <RowGroup key={row.label} row={row} index={ri} />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-tertiary">
        <span>Cell intensity = capability depth</span>
        <span className="flex items-center gap-1.5"><HeatSwatch v={0} /> absent</span>
        <span className="flex items-center gap-1.5"><HeatSwatch v={1} /> limited</span>
        <span className="flex items-center gap-1.5"><HeatSwatch v={2} /> standard</span>
        <span className="flex items-center gap-1.5"><HeatSwatch v={3} /> native</span>
      </div>
    </div>
  )
}

// 0 = absent, 1 = limited/basic, 2 = present, 3 = native/best
function score(v) {
  const s = String(v).toLowerCase()
  if (['no'].includes(s)) return 0
  if (['limited', 'basic', 'add-on', 'apps', 'months', 'weeks–months', '$$$$', '$$$'].some((k) => s === k)) return 1
  if (['yes', 'hours', 'days', '$$', 'roadmap'].some((k) => s === k)) return 2
  if (['native'].includes(s) || s.includes('native') || s === '$') return 3
  return 2
}

function RowGroup({ row, index }) {
  return (
    <>
      <div className="flex items-center pr-3" style={{ minHeight: 48 }}>
        <span className="font-mono text-[10px] text-ink-tertiary mr-3" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-[13px] text-ink-primary tracking-tight">{row.label}</span>
      </div>
      {row.vals.map((v, ci) => {
        const s = score(v)
        return <HeatCell key={ci} score={s} value={v} hero={ci === 0} />
      })}
    </>
  )
}

function HeatCell({ score, value, hero }) {
  // Hero column uses the gradient family; competitors use neutral white-alpha.
  const heroBg = [
    'rgba(255,255,255,.02)',
    'linear-gradient(135deg, rgba(79,125,255,.18), rgba(232,176,76,.10))',
    'linear-gradient(135deg, rgba(79,125,255,.32), rgba(232,176,76,.18))',
    'linear-gradient(135deg, rgba(79,125,255,.55), rgba(232,176,76,.42))',
  ][score]
  const neutralBg = [
    'rgba(255,255,255,.02)',
    'rgba(255,255,255,.07)',
    'rgba(255,255,255,.14)',
    'rgba(255,255,255,.24)',
  ][score]
  const bg = hero ? heroBg : neutralBg
  const text = hero ? 'text-ink-primary' : score >= 2 ? 'text-ink-primary' : 'text-ink-tertiary'
  const border = hero ? '1px solid rgba(232,176,76,.25)' : '1px solid rgba(255,255,255,.05)'

  return (
    <div
      className={`flex items-center justify-center text-[11px] font-mono uppercase tracking-[0.14em] ${text}`}
      style={{
        background: bg,
        border,
        borderRadius: 6,
        minHeight: 48,
        padding: '0 8px',
        textAlign: 'center',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {value}
    </div>
  )
}

function HeatSwatch({ v }) {
  const bg = [
    'rgba(255,255,255,.04)',
    'rgba(255,255,255,.10)',
    'rgba(255,255,255,.20)',
    'rgba(255,255,255,.36)',
  ][v]
  return (
    <span
      style={{
        display: 'inline-block',
        width: 14,
        height: 14,
        borderRadius: 3,
        background: bg,
        border: '1px solid rgba(255,255,255,.08)',
      }}
    />
  )
}

function KpiTile({ n, label, tone }) {
  const color =
    tone === 'win' ? 'text-emerald-300' :
    tone === 'gap' ? 'text-amber-accent' :
    'text-ink-secondary'
  return (
    <div className="bg-obsidian-800/60 border border-white/5 rounded-lg px-4 py-3">
      <div className={`font-display text-3xl tracking-tight ${color}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
        {n}
      </div>
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-tertiary mt-1">{label}</div>
    </div>
  )
}

// ============================================================
// REALISTIC PRODUCT MOCKUPS — stylized but specific (real-looking accounts and numbers)
// ============================================================

function DashboardMockup() {
  return (
    <div className="w-full h-full p-4 text-ink-primary" style={{ background: '#0F0F18', fontVariantNumeric: 'tabular-nums' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink-tertiary">Acme Holdings · Consolidated</div>
          <div className="font-display text-[13px] tracking-tight">CFO dashboard</div>
        </div>
        <div className="font-mono text-[8px] text-ink-tertiary">Apr 30, 2026</div>
      </div>
      {/* KPI row */}
      <div className="grid grid-cols-4 gap-1.5 mb-3">
        <Kpi label="Cash" v="$4.82M" delta="+6.1%" pos />
        <Kpi label="AR > 60d" v="$184k" delta="−12%" pos />
        <Kpi label="MRR" v="$612k" delta="+3.4%" pos />
        <Kpi label="Burn" v="$298k" delta="+2.1%" warn />
      </div>
      {/* Chart */}
      <div className="rounded-md border border-white/5 p-2.5 mb-2.5" style={{ background: '#11111A' }}>
        <div className="flex items-center justify-between mb-2">
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink-tertiary">Cash + MRR · trailing 12mo</div>
          <div className="flex gap-1.5 font-mono text-[7px] uppercase tracking-[0.16em] text-ink-tertiary">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background: '#4F7DFF' }} />Cash</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background: '#E8B04C' }} />MRR</span>
          </div>
        </div>
        <svg viewBox="0 0 320 80" className="w-full" style={{ height: 80 }}>
          <defs>
            <linearGradient id="dsArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F7DFF" stopOpacity=".35" />
              <stop offset="100%" stopColor="#4F7DFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 64 L26 60 L52 56 L78 50 L104 52 L130 44 L156 38 L182 36 L208 28 L234 24 L260 20 L286 16 L320 12 L320 80 L0 80 Z" fill="url(#dsArea)" />
          <path d="M0 64 L26 60 L52 56 L78 50 L104 52 L130 44 L156 38 L182 36 L208 28 L234 24 L260 20 L286 16 L320 12" fill="none" stroke="#4F7DFF" strokeWidth="1.2" />
          <path d="M0 70 L26 68 L52 66 L78 60 L104 62 L130 56 L156 52 L182 48 L208 44 L234 40 L260 36 L286 32 L320 28" fill="none" stroke="#E8B04C" strokeWidth="1.2" />
        </svg>
      </div>
      {/* Anomaly inline */}
      <div className="rounded-md border border-amber-accent/30 px-2.5 py-2 flex items-center gap-2.5" style={{ background: 'rgba(232,176,76,.05)' }}>
        <span className="w-4 h-4 rounded-full bg-amber-accent/15 border border-amber-accent/40 flex items-center justify-center font-mono text-[8px] text-amber-accent font-bold">!</span>
        <div className="flex-1 text-[10px] text-ink-secondary leading-snug">
          <span className="text-ink-primary">2 GL entries</span> flagged · <span className="font-mono text-ink-tertiary">JE-1183, JE-1187</span>
        </div>
        <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-amber-accent">Review</div>
      </div>
    </div>
  )
}

function Kpi({ label, v, delta, pos, warn }) {
  const c = warn ? 'text-amber-accent' : pos ? 'text-emerald-300' : 'text-ink-secondary'
  return (
    <div className="rounded-md border border-white/5 px-2.5 py-2" style={{ background: '#11111A' }}>
      <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink-tertiary">{label}</div>
      <div className="text-[13px] font-display tracking-tight mt-0.5">{v}</div>
      <div className={`text-[9px] font-mono mt-0.5 ${c}`}>{delta}</div>
    </div>
  )
}

function ReconciliationMockup() {
  const rows = [
    { bank: 'STRIPE PAYOUT', ledger: 'AR · Stripe clearing', amt: '$12,486.10', state: 'auto', conf: 99 },
    { bank: 'ACH · NW WHOLESALE', ledger: 'AR · 6724 NW Wholesale', amt: '$4,200.00', state: 'auto', conf: 96 },
    { bank: 'CHECK 4188', ledger: 'AR · Briggs & Co.', amt: '$1,850.00 · split', state: 'ai', conf: 87 },
    { bank: 'ACH · UNKNOWN', ledger: 'Unmatched · 2 candidates', amt: '$732.40', state: 'ai', conf: 71 },
  ]
  return (
    <div className="w-full h-full p-4 text-ink-primary" style={{ background: '#0F0F18', fontVariantNumeric: 'tabular-nums' }}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink-tertiary">Bank rec · Operating · Apr 28</div>
          <div className="font-display text-[13px] tracking-tight">First Citizens · 4827</div>
        </div>
        <div className="font-mono text-[8px] text-emerald-300">2 auto · 2 suggested</div>
      </div>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-2 rounded-md border border-white/5 px-2.5 py-2" style={{ background: '#11111A' }}>
            <div>
              <div className="font-mono text-[9px] text-ink-secondary">{r.bank}</div>
              <div className="text-[10px] text-ink-tertiary mt-0.5">{r.amt}</div>
            </div>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[8px] font-bold ${
              r.state === 'auto'
                ? 'bg-emerald-400/15 text-emerald-300 border border-emerald-400/40'
                : 'bg-amber-accent/15 text-amber-accent border border-amber-accent/40'
            }`}>{r.state === 'auto' ? '✓' : '?'}</div>
            <div className="text-right">
              <div className="text-[10px] text-ink-primary">{r.ledger}</div>
              <div className="font-mono text-[8px] text-ink-tertiary mt-0.5">model conf · {r.conf}%</div>
            </div>
            <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink-tertiary">{r.state === 'auto' ? 'Posted' : 'Suggest'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnomalyMockup() {
  return (
    <div className="w-full h-full p-4 text-ink-primary" style={{ background: '#0F0F18', fontVariantNumeric: 'tabular-nums' }}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-amber-accent">Anomaly · GL review</div>
          <div className="font-display text-[13px] tracking-tight">JE-2026-04-1183 · Marketing — Events</div>
        </div>
        <div className="font-mono text-[8px] text-ink-tertiary">Apr 30 · model v3.2</div>
      </div>
      {/* Entry */}
      <div className="rounded-md border border-amber-accent/30 p-2.5 mb-2" style={{ background: 'rgba(232,176,76,.04)' }}>
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 text-[10px]">
          <span className="text-ink-secondary">6210 · Marketing — Events</span>
          <span className="text-ink-primary w-16 text-right">48,250.00</span>
          <span className="text-ink-tertiary/50 w-16 text-right">—</span>
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 text-[10px] mt-1">
          <span className="text-ink-secondary">2110 · Accounts Payable</span>
          <span className="text-ink-tertiary/50 w-16 text-right">—</span>
          <span className="text-ink-primary w-16 text-right">48,250.00</span>
        </div>
      </div>
      {/* Why flagged */}
      <div className="rounded-md border border-white/5 p-2.5 mb-2" style={{ background: '#0A0A0F' }}>
        <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink-tertiary mb-1.5">Why flagged · 87% confidence</div>
        <div className="space-y-1 text-[10px] text-ink-secondary">
          <div className="flex gap-2"><span className="text-amber-accent">·</span>3.4× trailing 12-mo median for account 6210</div>
          <div className="flex gap-2"><span className="text-amber-accent">·</span>Vendor "Stripe Sessions" first appearance this fiscal year</div>
          <div className="flex gap-2"><span className="text-amber-accent">·</span>Posted off-cycle (28 Apr, normal close 30 Apr)</div>
        </div>
      </div>
      {/* Distribution micro-chart */}
      <div className="rounded-md border border-white/5 p-2.5" style={{ background: '#11111A' }}>
        <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink-tertiary mb-1.5">Distribution · acct 6210 · ttm</div>
        <svg viewBox="0 0 280 24" className="w-full" style={{ height: 24 }}>
          {[8, 12, 11, 14, 10, 13, 9, 11, 12, 14, 10, 9].map((h, i) => (
            <rect key={i} x={i * 22 + 2} y={24 - h} width="14" height={h} rx="1" fill="#4F7DFF" opacity="0.6" />
          ))}
          <rect x="266" y="0" width="14" height="24" rx="1" fill="#E8B04C" />
        </svg>
      </div>
    </div>
  )
}

function ReportsMockup() {
  const rows = [
    { acct: 'Revenue', q1: '$1,840,210', q4: '$1,712,408', d: '+7.5%', pos: true, b: true },
    { acct: '  Subscription', q1: '$1,624,180', q4: '$1,488,930', d: '+9.1%', pos: true },
    { acct: '  Services', q1: '$216,030', q4: '$223,478', d: '−3.3%', pos: false },
    { acct: 'Cost of revenue', q1: '$528,402', q4: '$501,224', d: '+5.4%', pos: false, b: true },
    { acct: 'Gross profit', q1: '$1,311,808', q4: '$1,211,184', d: '+8.3%', pos: true, b: true },
    { acct: 'Operating expense', q1: '$884,210', q4: '$842,166', d: '+5.0%', pos: false },
  ]
  return (
    <div className="w-full h-full p-4 text-ink-primary" style={{ background: '#0F0F18', fontVariantNumeric: 'tabular-nums' }}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink-tertiary">P&L · Variance · Q1 vs Q4</div>
          <div className="font-display text-[13px] tracking-tight">Acme SaaS, Inc.</div>
        </div>
        <div className="flex gap-1 font-mono text-[8px] uppercase tracking-[0.18em]">
          <span className="px-1.5 py-0.5 rounded bg-spectrum-500/15 text-spectrum-300">P&L</span>
          <span className="px-1.5 py-0.5 rounded text-ink-tertiary">BS</span>
          <span className="px-1.5 py-0.5 rounded text-ink-tertiary">Cash</span>
        </div>
      </div>
      <div className="rounded-md border border-white/5 overflow-hidden" style={{ background: '#11111A' }}>
        <div className="grid grid-cols-[2fr_1fr_1fr_0.6fr] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-ink-tertiary border-b border-white/5">
          <span>Account</span><span className="text-right">Q1 2026</span><span className="text-right">Q4 2025</span><span className="text-right">Δ</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} className={`grid grid-cols-[2fr_1fr_1fr_0.6fr] px-2.5 py-1.5 text-[10px] border-b border-white/5 last:border-b-0 ${r.b ? 'bg-white/[0.02]' : ''}`}>
            <span className={`${r.b ? 'text-ink-primary font-medium' : 'text-ink-secondary'}`} style={{ whiteSpace: 'pre' }}>{r.acct}</span>
            <span className="text-right text-ink-primary">{r.q1}</span>
            <span className="text-right text-ink-tertiary">{r.q4}</span>
            <span className={`text-right font-mono ${r.pos ? 'text-emerald-300' : 'text-amber-accent'}`}>{r.d}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
