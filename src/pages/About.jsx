export default function About() {
  return (
    <div className="pt-40 md:pt-48 pb-24">
      <div className="container-accu">
        {/* Title block */}
        <div className="mb-20 max-w-3xl">
          <div className="eyebrow mb-6 reveal">About · 02</div>
          <h1 className="hl-xl reveal" style={{ animationDelay: '100ms' }}>
            Twenty-five years in finance, now <span className="grad-text italic">compounding</span> with AI.
          </h1>
        </div>

        {/* Body — editorial two-column */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <div className="eyebrow mb-3">The Founder</div>
              <p className="text-ink-primary font-medium mb-2">Chris Crossett</p>
              <p className="text-sm text-ink-tertiary mb-6">25-yr Finance Operator · MBA · Founder</p>
              <a
                href="https://www.linkedin.com/in/accuarion/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border-b border-white/20 pb-0.5 hover:border-white/60 transition"
              >
                View LinkedIn
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 prose-accuarion">
            <p className="body-lg mb-8">
              Accuarion was founded on a simple observation: the software running American finance teams is mostly built by people who've never sat through a month-end close. It shows.
            </p>
            <p className="body-lg mb-8">
              The founder spent two and a half decades in practitioner seats — public accounting audits, corporate FP&A, ERP implementations on some of the largest platforms in the market — watching the gap between what the software promised and what the work actually required. The gap never closed. It widened.
            </p>
            <p className="body-lg mb-8">
              Accuarion exists to close it. Our bet is that the next generation of financial software will be written by operators who then learned to ship code, not the other way around. That's a rare combination. It's also the whole company.
            </p>

            <div className="my-14 border-t border-white/10 pt-10">
              <div className="eyebrow mb-8">Our approach to AI</div>
              <div className="space-y-8">
                <ApproachBlock
                  n="I."
                  title="Embedded, not bolted on"
                  body="AI in our products isn't a chatbot in a corner. It's anomaly detection in the GL, smart matching in bank rec, narrative generation in MD&A drafts, forecast adjustments from leading indicators. If it doesn't make a task measurably faster or more accurate, we don't ship it."
                />
                <ApproachBlock
                  n="II."
                  title="Auditable by default"
                  body="Every AI-generated output is traceable to the inputs, the model version, and the prompt. Finance professionals need to show their work; so should the software that helps them."
                />
                <ApproachBlock
                  n="III."
                  title="Conservative on automation, aggressive on assistance"
                  body="We're cautious about actions that move money or alter records. We're enthusiastic about AI that helps a human decide faster. The best workflows are AI-assisted, not AI-autonomous."
                />
              </div>
            </div>

            <div className="my-14 border-t border-white/10 pt-10">
              <div className="eyebrow mb-6">Based in</div>
              <p className="text-lg text-ink-primary mb-2">Utah, United States</p>
              <p className="text-sm text-ink-tertiary">
                Operating independently. Not venture-backed. Solo-founded and customer-funded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ApproachBlock({ n, title, body }) {
  return (
    <div className="flex gap-6">
      <div className="font-display text-2xl text-ink-tertiary shrink-0 w-8">{n}</div>
      <div>
        <h3 className="font-display text-xl tracking-tight mb-2 text-ink-primary">{title}</h3>
        <p className="text-ink-secondary leading-relaxed">{body}</p>
      </div>
    </div>
  )
}
