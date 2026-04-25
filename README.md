# Charan Kumar Portfolio — Next.js + Bootstrap + Tailwind

Converted from the static HTML/CSS/JS portfolio into a Next.js 14 App Router project with per-section components.

## Quick start

```bash
npm install
npm run dev    # → http://localhost:3000
npm run build  # production build
npm run start  # serve production build
```

## What you need to add

The `public/images/` folder is currently empty. Drop these four PNGs and one JPG in there (same filenames you were using):

- `console.png`
- `keyboard.png`
- `headphone.png`
- `square.png`
- `portrait.jpg`

Without these, the hero props and about-section portrait will show as broken image icons.

## Structure

```
app/
  layout.jsx           ← Root shell. Loads Bootstrap, fonts, globals.
  page.jsx             ← Home page. Composes all sections.
  globals.css          ← Tailwind directives + your full custom stylesheet.
  work/[slug]/
    page.jsx           ← Project detail template (dynamic route).

components/
  Header.jsx           ← Nav + mobile menu + scroll spy.
  Hero.jsx             ← Title + floating props + mouse parallax.
  Marquee.jsx          ← Auto-scrolling service list (server component).
  About.jsx            ← Portrait, body copy, stats, skill pills.
  Projects.jsx         ← Filter UI + grid. Renders from data/projects.js.
  ProjectThumb.jsx     ← Central map of the 9 SVG thumbnails.
  Branding.jsx         ← Four brand cards.
  Testimonials.jsx     ← Three quote cards.
  Contact.jsx          ← Info block + form (mocked submit).
  Footer.jsx           ← Big "Let's build" + links (server component).
  CursorGlow.jsx       ← Desktop-only cursor spotlight.
  hooks.js             ← useReveal, useCanHover helpers.

data/
  projects.js          ← Single source of truth for all 9 projects.
```

## How the project data works

Edit `data/projects.js`. Add/remove entries — both the home grid and the detail pages update automatically:

```js
{
  slug: "atlas-goods",        // URL: /work/atlas-goods
  cat: "web",                 // Filter category
  num: "01",
  year: "2026",
  name: "Atlas Goods — Commerce",
  desc: "Card preview text...",
  tagline: "Detail page hook...",
  tags: ["Next.js", "Shopify", "GSAP"],
  thumbKey: "web-atlas",      // Must match a key in ProjectThumb.jsx
  // ...
}
```

## Notable design decisions

**Bootstrap loads before Tailwind** — so Tailwind utilities win on conflict, but Bootstrap's grid (`row`, `col-*`) and flex utilities (`d-flex`, etc.) still run the layout exactly as before. Tailwind's `preflight` reset is disabled in `tailwind.config.mjs` to prevent it from fighting Bootstrap's reset and your custom base styles.

**Server vs client components.** The page shell, Footer, and Marquee are server components. Everything with state, DOM listeners, or animation (Header, Hero, About, Projects, Branding, Testimonials, Contact, CursorGlow) is a client component via `"use client"`. This keeps SEO-critical HTML server-rendered while interactivity still works.

**Static generation for project pages.** `generateStaticParams` in `app/work/[slug]/page.jsx` means all 9 project pages are pre-built at `npm run build` time. No runtime data fetching.

**SVG thumbnails preserved.** The original 9 inline SVGs live in `ProjectThumb.jsx` keyed by name, so both the home cards and the detail page covers pull from the same source.

## Things intentionally simplified

- **Social icons** in Contact.jsx are generic circle placeholders. The originals had per-brand SVG paths (Dribbble, Behance, LinkedIn, Instagram, GitHub) — restore those if you want the branded look.
- **Hero float PNGs** use plain `<img>` rather than `next/image`. They're absolutely positioned with percentage widths, and `next/image` adds wrapper divs that complicate that layout.
- **Form submit** is still the same fake setTimeout flow as the original. Wire it to a real endpoint (Resend, Formspree, an API route, etc.) when you're ready.
