# Flowly — Landing Page (React + TypeScript + shadcn/ui)

A single-page, fully responsive SaaS landing page template built with React 18, TypeScript,
Vite, Tailwind CSS, shadcn/ui, and Framer Motion. Built as a reusable template you can
re-skin (colors, copy, logo) for different Khamsat clients.

## Stack

- **React 18 + TypeScript** — strict mode
- **Vite** — dev server & build
- **Tailwind CSS** — utility styling, with a shadcn/ui token setup (`src/index.css`)
- **shadcn/ui primitives** — `Button`, `Card`, `Input`, `Badge`, `Separator` in `src/components/ui`
- **Framer Motion** — page-load and scroll-reveal animations
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    ui/           shadcn/ui primitives (button, card, input, badge, separator)
    Navbar.tsx
    Hero.tsx
    LogoCloud.tsx
    Features.tsx
    HowItWorks.tsx
    Testimonial.tsx
    Pricing.tsx
    CTA.tsx
    Footer.tsx
  lib/utils.ts    cn() helper used by shadcn/ui components
  App.tsx
  main.tsx
  index.css       design tokens (CSS variables) + Tailwind layers
```

## Design system

Only three colors are used across the whole page, defined as CSS variables in `src/index.css`:

- **Paper** — warm off-white background
- **Ink** — near-black text / dark sections
- **Indigo** — the single accent color for buttons, links, and highlights

Typography: **Space Grotesk** for headings, **Inter** for body text (loaded from Google Fonts
in `index.html`).

## Customizing for a new client

1. Update copy in each component under `src/components/`.
2. Update the 4 CSS variables in `src/index.css` (`--background`, `--foreground`, `--primary`,
   `--secondary`) to re-theme the whole site without touching component code.
3. Swap the hero illustration in `Hero.tsx` for a real product screenshot if you have one —
   drop the image in `public/` and replace the `<svg>` block with an `<img>`.
4. Replace the logo/name "Flowly" in `Navbar.tsx` and `Footer.tsx`.

## Notes

- Smooth scrolling is enabled globally (`html { scroll-behavior: smooth }` in `index.css`)
  and respects `prefers-reduced-motion`.
- Fully responsive from small phones up to wide desktop screens.
- Adding more shadcn/ui components later: copy the component source from
  [ui.shadcn.com](https://ui.shadcn.com) into `src/components/ui/` — `components.json` is
  already configured for that workflow.
