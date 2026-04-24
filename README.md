# Accuarion — Company Website

Single-page app for **accuarion.com**, the parent company of ArcaERP and ArcaTrust.

- **Stack:** React 18, Vite, Tailwind CSS, React Router (HashRouter)
- **Hosted:** GitHub Pages + Cloudflare DNS
- **Cost:** $0/mo

## Routes

- `/` — Home (hero, positioning, products)
- `/#/about` — Founder story & approach to AI
- `/#/products` — Detailed product showcase
- `/#/contact` — Email + LinkedIn

Using HashRouter (URLs with `#/`) so client-side routing works on GitHub Pages without server rewrites.

## Dev

```bash
npm install
npm run dev
```

Visit http://localhost:5173.

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Deploy

Push to `main`. GitHub Actions builds and publishes to GitHub Pages.

## Custom domain

`public/CNAME` contains `accuarion.com`. After first deploy:

1. In the GitHub repo → Settings → Pages: confirm custom domain is `accuarion.com` and Enforce HTTPS is on.
2. In Cloudflare DNS for `accuarion.com`:
   - `A` record `@` → `185.199.108.153`
   - `A` record `@` → `185.199.109.153`
   - `A` record `@` → `185.199.110.153`
   - `A` record `@` → `185.199.111.153`
   - `CNAME` record `www` → `<your-github-username>.github.io`
3. Cloudflare SSL/TLS mode: **Full** (not strict — GitHub Pages serves its own cert).

## Content edits

All copy lives in `src/pages/`. Change words, keep the components. Headlines use the `hl-*` classes from `index.css`.

## Design tokens

- **Colors:** `tailwind.config.js` → `theme.extend.colors` (obsidian, spectrum, amber, ink)
- **Fonts:** Fraunces (display), Inter Tight (body), JetBrains Mono (eyebrows/labels)
- **Motion:** `aurora`, `fade-up`, `ticker` keyframes in `tailwind.config.js`

## Aesthetic direction

Editorial-tech: dark obsidian background, slow-animating aurora gradients, Fraunces serif headlines with italic gradient accents, mono eyebrow labels. Bold AI-forward feel without the purple-gradient-on-white cliché.
