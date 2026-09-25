# PhySolution Website

Astro-based bilingual website for PhySolution.

## URLs

- `/` — explicit language chooser; there is **no automatic language detection or redirect**
- `/en/` — English
- `/de/` — German

The language is always explicit in the URL. The language switcher links directly between the two versions.

## Structure

- `src/components/Website.astro` — shared page structure and interaction
- `src/components/Header.astro` / `Footer.astro` — shared chrome
- `src/lib/content.ts` — all English/German copy
- `src/pages/en/index.astro` — English route
- `src/pages/de/index.astro` — German route
- `src/pages/index.astro` — language chooser
- `src/styles/global.css` — global styles
- `astro.config.mjs` — Astro + Tailwind configuration

This keeps the site deliberately simple: one shared page template, one content file, and two thin locale entry points.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The original single-file design has been split into maintainable Astro components while preserving the existing visual direction and GSAP blue-stripe interaction.
