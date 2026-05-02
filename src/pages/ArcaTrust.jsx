import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function ArcaTrust() {
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
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-accent mb-6 reveal">
                ◐ Coming Q2 2026 · Pre-launch
              </div>
              <h1 className="hl-xl reveal" style={{ animationDelay: '100ms' }}>
                ArcaTrust
              </h1>
              <p className="body-lg mt-8 max-w-2xl reveal" style={{ animationDelay: '280ms' }}>
                A household finance platform you'd actually trust with your data. Envelope budgeting,
                Plaid-connected accounts, AI coaching grounded in your own ledger — and an institutional
                tier for banks and credit unions to offer their members.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right reveal" style={{ animationDelay: '420ms' }}>
              <a
                href="mailto:chris@accuarion.com?subject=ArcaTrust%20waitlist&body=Please%20add%20me%20to%20the%20ArcaTrust%20waitlist."
                className="btn-primary"
              >
                Join the waitlist
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 reveal" style={{ animationDelay: '560ms' }}>
            <Stat n="3" label="Tiers" />
            <Stat n="AES-256" label="At-rest encryption" />
            <Stat n="Plaid" label="Bank connectivity" />
            <Stat n="RLS" label="Per-household isolation" />
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
              Built for households that take <span className="italic">money seriously.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <UseCase
              tag="ICP · 01"
              title="Envelope-method households"
              body="You believe in giving every dollar a job. Cash envelopes worked, but they don't scale to direct deposit and digital spending. ArcaTrust is the digital version — done right, with the rigor a CPA would demand."
              tags={['Zero-based', 'Multi-account', 'Couples']}
            />
            <UseCase
              tag="ICP · 02"
              title="Multi-account complexity"
              body="Two checking accounts, four credit cards, an HSA, a 529, retirement, taxable brokerage, a rental property. Most apps choke on this. ArcaTrust treats it as the default, not the edge case."
              tags={['Net worth', 'Real estate', 'Investments']}
            />
            <UseCase
              tag="ICP · 03"
              title="Banks & credit unions"
              body="A white-label tier for community banks and CUs. Co-branded, member-facing budgeting that you control — with your data, your retention, your member relationship. No third party harvesting transaction data."
              tags={['Institutional', 'White-label', 'Member-first']}
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
            <div className="eyebrow mb-4">AI, but trustworthy</div>
            <h2 className="hl-lg">
              AI that knows <span className="grad-text italic">your numbers.</span>
            </h2>
            <p className="body-lg mt-8">
              Generic financial advice isn't worth the bandwidth. ArcaTrust's AI is grounded in
              your own ledger — your accounts, your patterns, your goals. Always your data,
              never anyone else's.
            </p>
          </div>

          <div className="space-y-px">
            <AIRow
              n="01"
              title="Coaching grounded in your ledger"
              body="Not 'experts say save 20%.' Specific guidance based on your last 24 months of cash flow, your goals, and your actual constraints. The coach knows what you spend on what, when, and why — and never lectures you about the latte."
            />
            <AIRow
              n="02"
              title="Anomaly alerts on unexpected spending"
              body="When something deviates from your normal — a duplicate charge, a subscription that quietly crept up, a new merchant you didn't recognize — you hear about it the same day. Not at month-end, when it's too late."
            />
            <AIRow
              n="03"
              title="Cashflow drift forecasting"
              body="Projects whether you're on track to your envelope targets before the month is over. Suggests a specific reallocation if you're trending off. The intervention happens while there's still time to course-correct."
            />
            <AIRow
              n="04"
              title="Receipt OCR that actually works"
              body="Photograph the receipt; the line items are extracted, categorized, and split across envelopes automatically. The hard cases — handwritten notes, faded thermal paper, foreign currency — are where most apps quit. We didn't."
            />
            <AIRow
              n="05"
              title="Smart category suggestions"
              body="When a transaction lands without a clear envelope, the AI suggests one based on your prior behavior — and shows its reasoning. You can correct it in one click; it learns immediately."
            />
            <AIRow
              n="06"
              title="Goal forecasting"
              body="Saving for a down payment, a wedding, a car? The AI projects the date you'll hit the goal at your current pace — and tells you exactly how much earlier you'd hit it if you reallocated $X from envelope Y."
            />
          </div>

          <div className="mt-14 p-8 border border-white/10 rounded-2xl bg-white/[0.02] max-w-3xl">
            <div className="eyebrow mb-3">Privacy posture</div>
            <p className="text-ink-secondary leading-relaxed">
              <span className="text-ink-primary font-medium">Your data is yours.</span> AES-256-GCM at rest. Row-level security per household. Plaid tokens encrypted with separate keys. We do not sell, share, or aggregate transaction data — ever, under any tier. The institutional tier is built so banks can offer this to members <em className="text-ink-primary not-italic">because</em> the alternative is letting a third party harvest the relationship.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRODUCT TOUR                                                   */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="container-accu">
          <div className="mb-16 max-w-2xl">
            <div className="eyebrow mb-4">Product tour</div>
            <h2 className="hl-lg">A look <span className="italic">inside.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Mockup
              caption="Envelope budget"
              hint="Zero-based budgeting with rollover, transfers, and target tracking. Every dollar has a job."
            >
              <EnvelopeMockup />
            </Mockup>
            <Mockup
              caption="Bill pay hub"
              hint="All recurring obligations in one ledger. Due dates, status, owner — and forecast projection."
            >
              <BillPayMockup />
            </Mockup>
            <Mockup
              caption="AI financial coach"
              hint="Grounded in your ledger, never generic. Asks specific, answers specific."
            >
              <CoachMockup />
            </Mockup>
            <Mockup
              caption="Net worth"
              hint="All accounts, real-time. Trend lines that show whether you're actually building wealth."
            >
              <NetWorthMockup />
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
              We've used these apps. We've built around their limitations. Here's the honest read.
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
              Three tiers. <span className="italic">Clear stakes.</span>
            </h2>
            <p className="body-lg mt-8">
              Pricing publishes at launch. Join the waitlist for early-access pricing — locked in
              for the lifetime of the household account.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <TierCard
              name="Community"
              positioning="Households getting serious about giving every dollar a job."
              features={['Envelope budgeting + rollover', 'Plaid-connected accounts', 'Receipt OCR', 'Net worth tracking', 'Bill pay hub']}
            />
            <TierCard
              name="Professional"
              positioning="Multi-account households with investments, real estate, and goals."
              featured
              features={['Everything in Community', 'AI financial coach', 'Cashflow forecasting', 'Goal projections', 'Up to 5 household members', 'Priority support']}
            />
            <TierCard
              name="Enterprise"
              positioning="Banks & credit unions offering ArcaTrust to members."
              features={['White-label deployment', 'Member SSO', 'Co-branded experience', 'Member-data residency you control', 'Dedicated account team']}
            />
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:chris@accuarion.com?subject=ArcaTrust%20pricing%20question"
              className="btn-ghost"
            >
              Ask about pricing
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
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
            <h2 className="hl-md mb-6">Be on the list when it ships.</h2>
            <p className="text-ink-secondary mb-10 max-w-xl mx-auto">
              ArcaTrust launches Q2 2026. Waitlist members get early access, lifetime-locked pricing,
              and direct lines to the founder during onboarding.
            </p>
            <a
              href="mailto:chris@accuarion.com?subject=ArcaTrust%20waitlist&body=Please%20add%20me%20to%20the%20ArcaTrust%20waitlist."
              className="btn-primary"
            >
              Join the waitlist
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="font-display text-2xl md:text-3xl tracking-tight text-ink-primary mb-2">{n}</div>
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
    <div className={`card-gradient-border p-7 h-full flex flex-col ${featured ? 'ring-1 ring-amber-accent/30' : ''}`}>
      {featured && (
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-accent mb-3">
          ★ Most popular
        </div>
      )}
      <h3 className="font-display text-2xl tracking-tight text-ink-primary mb-3">{name}</h3>
      <p className="text-sm text-ink-tertiary mb-6 leading-relaxed">{positioning}</p>
      <ul className="space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className="text-sm text-ink-secondary flex gap-2">
            <span className="text-amber-accent shrink-0">·</span>
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
  const competitors = ['ArcaTrust', 'YNAB', 'Monarch', 'Copilot', 'Rocket Money', 'EveryDollar']
  const rows = [
    { label: 'True envelope budgeting', vals: ['Native', 'Native', 'Limited', 'Limited', 'No', 'Native'] },
    { label: 'AI coaching on your data', vals: ['Native', 'No', 'Limited', 'No', 'No', 'No'] },
    { label: 'Anomaly detection', vals: ['Native', 'No', 'Limited', 'Limited', 'Limited', 'No'] },
    { label: 'Plaid-direct connectivity', vals: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Limited'] },
    { label: 'Cashflow forecasting', vals: ['Native', 'Limited', 'Yes', 'Limited', 'No', 'No'] },
    { label: 'Receipt OCR', vals: ['Native', 'No', 'No', 'No', 'No', 'No'] },
    { label: 'Bill pay hub', vals: ['Native', 'Limited', 'Yes', 'Yes', 'Yes', 'Limited'] },
    { label: 'Sells transaction data', vals: ['No', 'No', 'No', 'No', 'Yes', 'No'] },
    { label: 'White-label tier (banks/CUs)', vals: ['Yes', 'No', 'No', 'No', 'No', 'No'] },
    { label: 'Built by a CPA', vals: ['Yes', 'No', 'No', 'No', 'No', 'No'] },
  ]

  const cellClass = (val, isUs) => {
    if (isUs) return 'text-ink-primary font-medium'
    if (val === 'Yes' || val === 'Native') return 'text-emerald-300/80'
    if (val === 'No') return 'text-ink-tertiary'
    return 'text-ink-secondary'
  }

  return (
    <div className="min-w-[820px]">
      <div className="grid grid-cols-[2fr_repeat(6,1fr)] gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
        {/* Header */}
        <div className="bg-obsidian-800 px-4 py-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
          Capability
        </div>
        {competitors.map((c, i) => (
          <div
            key={c}
            className={`bg-obsidian-800 px-4 py-5 text-sm ${i === 0 ? 'text-ink-primary font-medium' : 'text-ink-secondary'}`}
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
      <div className="bg-obsidian-800 px-4 py-4 text-sm text-ink-secondary">{row.label}</div>
      {row.vals.map((v, i) => (
        <div key={i} className={`bg-obsidian-800 px-4 py-4 text-sm ${cellClass(v, i === 0)}`}>
          {v}
        </div>
      ))}
    </>
  )
}

// ============================================================
// SVG MOCKUPS
// ============================================================

function EnvelopeMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="14" width="120" height="6" rx="3" fill="#A8A9B4" opacity="0.4" />
      <rect x="16" y="26" width="160" height="10" rx="2" fill="#F5F5F7" opacity="0.85" />
      {/* Total bar */}
      <rect x="16" y="56" width="368" height="44" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
      <rect x="28" y="68" width="80" height="4" rx="2" fill="#6B6C78" />
      <rect x="28" y="80" width="120" height="10" rx="2" fill="#F5F5F7" opacity="0.9" />
      <rect x="280" y="74" width="92" height="14" rx="7" fill="#10b981" opacity="0.18" />
      <text x="290" y="84" fill="#10b981" fontSize="8" fontFamily="monospace" letterSpacing="1">ON TARGET</text>

      {/* Envelopes grid */}
      {[
        { name: 78, fill: 80, color: '#4F7DFF' },
        { name: 90, fill: 60, color: '#4F7DFF' },
        { name: 64, fill: 95, color: '#E8B04C' },
        { name: 72, fill: 40, color: '#4F7DFF' },
        { name: 84, fill: 70, color: '#4F7DFF' },
        { name: 60, fill: 92, color: '#E8B04C' },
      ].map((e, i) => {
        const x = 16 + (i % 3) * 124
        const y = 116 + Math.floor(i / 3) * 84
        return (
          <g key={i}>
            <rect x={x} y={y} width="116" height="72" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
            <rect x={x + 12} y={y + 12} width={e.name} height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
            <rect x={x + 12} y={y + 22} width="40" height="6" rx="2" fill="#F5F5F7" opacity="0.85" />
            {/* Progress bar */}
            <rect x={x + 12} y={y + 50} width="92" height="4" rx="2" fill="#ffffff" opacity="0.08" />
            <rect x={x + 12} y={y + 50} width={e.fill * 0.92} height="4" rx="2" fill={e.color} opacity="0.85" />
            <rect x={x + 12} y={y + 60} width="32" height="3" rx="1.5" fill="#6B6C78" />
          </g>
        )
      })}
    </svg>
  )
}

function BillPayMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="14" width="100" height="6" rx="3" fill="#A8A9B4" opacity="0.4" />
      <rect x="16" y="26" width="140" height="10" rx="2" fill="#F5F5F7" opacity="0.85" />
      {/* Tabs */}
      <rect x="16" y="50" width="80" height="20" rx="4" fill="#E8B04C" opacity="0.16" />
      <text x="56" y="64" fill="#E8B04C" fontSize="8" fontFamily="monospace" textAnchor="middle">UPCOMING</text>
      <rect x="100" y="50" width="60" height="20" rx="4" fill="#ffffff" opacity="0.04" />
      <text x="130" y="64" fill="#A8A9B4" fontSize="8" fontFamily="monospace" textAnchor="middle">PAID</text>
      <rect x="164" y="50" width="60" height="20" rx="4" fill="#ffffff" opacity="0.04" />
      <text x="194" y="64" fill="#A8A9B4" fontSize="8" fontFamily="monospace" textAnchor="middle">ALL</text>

      {/* Bills list */}
      {[
        { date: 'MAY 03', dueColor: '#E8B04C', name: 100, amt: 60 },
        { date: 'MAY 08', dueColor: '#A8A9B4', name: 80, amt: 48 },
        { date: 'MAY 12', dueColor: '#A8A9B4', name: 120, amt: 72 },
        { date: 'MAY 15', dueColor: '#A8A9B4', name: 90, amt: 56 },
        { date: 'MAY 22', dueColor: '#A8A9B4', name: 110, amt: 68 },
      ].map((b, i) => (
        <g key={i}>
          <rect x="16" y={84 + i * 40} width="368" height="32" rx="6" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />
          <text x="28" y={104 + i * 40} fill={b.dueColor} fontSize="9" fontFamily="monospace" letterSpacing="1">{b.date}</text>
          <rect x="100" y={97 + i * 40} width={b.name} height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
          <rect x="100" y={106 + i * 40} width="60" height="3" rx="1.5" fill="#6B6C78" />
          <rect x={372 - b.amt} y={97 + i * 40} width={b.amt} height="11" rx="2" fill="#F5F5F7" opacity="0.85" />
        </g>
      ))}
    </svg>
  )
}

function CoachMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="14" width="120" height="6" rx="3" fill="#A8A9B4" opacity="0.4" />
      <rect x="16" y="26" width="180" height="10" rx="2" fill="#F5F5F7" opacity="0.85" />

      {/* User message */}
      <rect x="100" y="56" width="284" height="50" rx="8" fill="#4F7DFF" opacity="0.12" />
      <rect x="284" y="56" width="100" height="50" rx="8" fill="#4F7DFF" opacity="0" />
      <rect x="112" y="68" width="240" height="3" rx="1.5" fill="#93B4FF" opacity="0.7" />
      <rect x="112" y="78" width="220" height="3" rx="1.5" fill="#93B4FF" opacity="0.7" />
      <rect x="112" y="88" width="160" height="3" rx="1.5" fill="#93B4FF" opacity="0.7" />

      {/* AI response */}
      <circle cx="28" cy="132" r="10" fill="#E8B04C" opacity="0.2" />
      <text x="28" y="136" fill="#E8B04C" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">AI</text>
      <rect x="48" y="120" width="336" height="160" rx="8" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />

      <rect x="60" y="134" width="300" height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
      <rect x="60" y="144" width="280" height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
      <rect x="60" y="154" width="240" height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />

      {/* Embedded data block */}
      <rect x="60" y="172" width="300" height="56" rx="6" fill="#0A0A0F" stroke="#ffffff" strokeOpacity="0.05" />
      <text x="68" y="188" fill="#6B6C78" fontSize="8" fontFamily="monospace" letterSpacing="1">YOUR DATA · LAST 90 DAYS</text>
      <rect x="68" y="196" width="60" height="3" rx="1.5" fill="#6B6C78" />
      <rect x="68" y="206" width="100" height="6" rx="2" fill="#F5F5F7" opacity="0.9" />
      <rect x="180" y="196" width="60" height="3" rx="1.5" fill="#6B6C78" />
      <rect x="180" y="206" width="80" height="6" rx="2" fill="#10b981" opacity="0.85" />
      <rect x="68" y="218" width="280" height="3" rx="1.5" fill="#A8A9B4" opacity="0.5" />

      <rect x="60" y="240" width="240" height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
      <rect x="60" y="250" width="200" height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
      <rect x="60" y="262" width="80" height="14" rx="7" fill="#E8B04C" opacity="0.18" />
      <text x="68" y="272" fill="#E8B04C" fontSize="8" fontFamily="monospace">REALLOCATE</text>
    </svg>
  )
}

function NetWorthMockup() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trustarea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F7DFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4F7DFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="16" y="14" width="100" height="6" rx="3" fill="#A8A9B4" opacity="0.4" />
      <rect x="16" y="26" width="160" height="10" rx="2" fill="#F5F5F7" opacity="0.85" />
      {/* Big number */}
      <rect x="16" y="52" width="80" height="4" rx="2" fill="#6B6C78" />
      <rect x="16" y="62" width="200" height="14" rx="2" fill="#F5F5F7" opacity="0.95" />
      <rect x="16" y="84" width="60" height="14" rx="7" fill="#10b981" opacity="0.18" />
      <text x="24" y="94" fill="#10b981" fontSize="8" fontFamily="monospace">+12.4% YOY</text>

      {/* Chart area */}
      <rect x="16" y="116" width="368" height="120" rx="8" fill="#11111A" stroke="#ffffff" strokeOpacity="0.06" />

      {/* Area chart line */}
      <path
        d="M 32 210 L 60 200 L 90 196 L 120 184 L 150 178 L 180 170 L 210 158 L 240 160 L 270 148 L 300 138 L 330 132 L 360 128"
        fill="none" stroke="#4F7DFF" strokeWidth="1.5" opacity="0.85"
      />
      <path
        d="M 32 210 L 60 200 L 90 196 L 120 184 L 150 178 L 180 170 L 210 158 L 240 160 L 270 148 L 300 138 L 330 132 L 360 128 L 360 222 L 32 222 Z"
        fill="url(#trustarea)"
      />
      {/* Data point */}
      <circle cx="360" cy="128" r="4" fill="#E8B04C" />
      <circle cx="360" cy="128" r="8" fill="#E8B04C" opacity="0.2" />

      {/* Account breakdown */}
      {[
        { color: '#4F7DFF', name: 80 },
        { color: '#93B4FF', name: 64 },
        { color: '#E8B04C', name: 72 },
        { color: '#10b981', name: 56 },
      ].map((a, i) => (
        <g key={i}>
          <circle cx={28 + i * 92} cy="262" r="4" fill={a.color} opacity="0.85" />
          <rect x={38 + i * 92} y="259" width={a.name} height="3" rx="1.5" fill="#A8A9B4" opacity="0.7" />
          <rect x={38 + i * 92} y="268" width="40" height="3" rx="1.5" fill="#6B6C78" />
        </g>
      ))}
    </svg>
  )
}
