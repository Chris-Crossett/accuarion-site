export default function Contact() {
  return (
    <div className="pt-40 md:pt-48 pb-24 min-h-[80vh]">
      <div className="container-accu">
        <div className="mb-16 max-w-3xl">
          <div className="eyebrow mb-6 reveal">Contact · 04</div>
          <h1 className="hl-xl reveal" style={{ animationDelay: '100ms' }}>
            Say <span className="grad-text italic">hello.</span>
          </h1>
          <p className="body-lg mt-8 max-w-xl reveal" style={{ animationDelay: '280ms' }}>
            Questions about ArcaERP, ArcaTrust, institutional licensing, or something else entirely — we read everything.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <ContactCard
            label="General"
            headline="chris@accuarion.com"
            href="mailto:chris@accuarion.com"
            hint="For most inquiries — partnerships, licensing, press."
          />
          <ContactCard
            label="Product"
            headline="ArcaERP demos"
            href="https://arcaerp.com"
            hint="See ArcaERP live, book a demo, review tiers."
            external
          />
          <ContactCard
            label="LinkedIn"
            headline="@accuarion"
            href="https://www.linkedin.com/in/accuarion/"
            hint="The founder's professional history, in full detail."
            external
          />
        </div>

        {/* Response expectations */}
        <div className="mt-24 pt-10 border-t border-white/10 max-w-2xl">
          <div className="eyebrow mb-4">A note on response times</div>
          <p className="text-ink-secondary leading-relaxed">
            Accuarion is a focused operation — a founder-led company with real customers to serve. Replies usually arrive within one or two business days. If you're reaching out about a specific product issue, please mention the product name and, if applicable, your tenant or account.
          </p>
        </div>
      </div>
    </div>
  )
}

function ContactCard({ label, headline, href, hint, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="card-gradient-border p-8 group transition-transform duration-300 hover:-translate-y-1 block"
    >
      <div className="eyebrow mb-6">{label}</div>
      <div className="font-display text-2xl tracking-tight mb-3 text-ink-primary group-hover:grad-text transition">
        {headline}
      </div>
      <p className="text-sm text-ink-tertiary">{hint}</p>
      <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-ink-secondary">
        <span>Open</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </a>
  )
}
