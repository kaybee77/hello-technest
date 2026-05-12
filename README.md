# Personal Portfolio

A single-page developer portfolio built with **React + Vite + TypeScript**, styled with **Tailwind CSS v4**, with shadcn-style UI primitives, `lucide-react` icons, `framer-motion` for subtle motion, and a built-in light/dark theme.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Type-check only |

## Customising the content

All copy lives in `src/data/` — you generally **don't need to touch the components** to make this your own.

- `src/data/profile.ts` — Your name, title, tagline, location, bio, email, socials, resume URL, avatar URL.
- `src/data/skills.ts` — Skill groups (Languages, Frontend, Backend, Tools).
- `src/data/projects.ts` — Project cards (title, description, tech, GitHub, live URL).
- `src/data/experience.ts` — Roles for the experience timeline.

### Assets

Drop your assets into `public/` and reference them by absolute path:

- `public/avatar.jpg` — Your headshot (referenced by `profile.avatarUrl`)
- `public/resume.pdf` — Your CV (referenced by `profile.resumeUrl`)
- `public/favicon.svg` — Browser tab icon (already includes a placeholder)
- `public/og-image.png` — 1200x630 image used for link previews (referenced from `index.html`)

### SEO

Edit the `<title>` and `<meta>` tags in [`index.html`](index.html) to match your name and description.

## Theming

- Light/dark theme is controlled by the `dark` class on `<html>`.
- Initial theme is set by a tiny inline script in `index.html` (reads `localStorage` or `prefers-color-scheme`) to avoid a flash on load.
- Toggle is in `src/components/ThemeToggle.tsx`, hook in `src/hooks/useTheme.ts`.
- Design tokens (colors, radius, fonts) live as CSS variables in `src/index.css` under `@theme` and `.dark`. Change the `--color-brand` HSL there to recolor the whole site.

## Project structure

```
public/                static assets (favicon, resume, avatar, og-image)
src/
  components/
    ui/                Button, Card, Badge primitives
    Header.tsx         Sticky nav + mobile menu
    Hero.tsx           Intro section with CTAs
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
    Contact.tsx
    Footer.tsx
    SectionHeading.tsx Shared section heading
    ThemeToggle.tsx
  data/                Editable content (profile, skills, projects, experience)
  hooks/useTheme.ts
  lib/utils.ts         cn() helper (clsx + tailwind-merge)
  App.tsx              Composes all sections
  main.tsx             React entry
  index.css            Tailwind v4 + design tokens
index.html             SEO + theme bootstrap script
vite.config.ts         Vite + Tailwind v4 plugin + @ alias
tsconfig*.json
package.json
```

## Deploying to Vercel

This site is a pure static SPA, so it deploys anywhere — Vercel is the simplest path:

```bash
npm install -g vercel
vercel
```

Accept the defaults. Vercel auto-detects Vite and configures:

- Build command: `npm run build`
- Output directory: `dist`

For future deploys: `vercel --prod`.

You can also push the repo to GitHub and import it from the Vercel dashboard for automatic deploys on every push.

## License

Personal use. Replace this with your preferred license once you're ready to share.
