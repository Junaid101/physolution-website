# PhySolution Website

Astro-based bilingual website for PhySolution.

## URL and locale architecture

- `/` — explicit language chooser; no automatic language detection or redirect
- `/en/` — English
- `/de/` — German
- `/en/impressum/` — English legal page
- `/de/impressum/` — German legal page

The locale is part of the URL and is the source of truth for the current language.

Locale configuration and URL construction live in `src/lib/languages.ts`. It is the single place for:

- supported languages
- default language
- language labels
- locale validation
- removing a locale from a pathname
- adding a locale to a pathname

For example, the language switcher derives its target by taking the current pathname and replacing only its locale prefix:

`/en/impressum/` → `/de/impressum/`

The switcher therefore preserves the current page instead of sending every page back to the homepage.

## Architecture principles

The project deliberately favors shared components and thin locale routes:

- `src/pages/en/...` and `src/pages/de/...` are thin route adapters.
- `src/lib/languages.ts` owns locale and localized-path logic.
- `src/lib/content.ts` owns translated copy and business data.
- `src/components/Website.astro` contains the shared homepage structure and interaction.
- `src/components/Impressum.astro` contains the shared legal-page structure.
- `src/components/Header.astro` and `src/components/Footer.astro` consume locale helpers rather than deciding between German and English themselves.
- `src/layouts/Layout.astro` derives the document language from the URL.
- `src/styles/global.css` contains global styles and reusable visual primitives.

### Practical rule for new pages

1. Create the shared component once.
2. Add one thin locale route per supported language.
3. Add translated copy to `content.ts`.
4. Keep URLs and locale switching out of the content model.
5. Derive the current language from the URL.
6. Use `getLocalizedPath()` for internal locale-aware links.

Components should not contain repeated `language === 'de'` / `language === 'en'` routing branches. If a label is translated content, put it in the locale content model. If it is URL logic, put it in `languages.ts`.

## Content model

Keep presentation markup in components and language-specific strings/data in `content.ts`.

The Impressum contains HTML strings because legal copy needs inline links and emphasis. Treat this as a deliberate exception; if legal content grows substantially, move toward structured fields rather than adding more markup strings.

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

## Maintainability checklist

Before adding code, ask:

- Can this be shared between English and German?
- Is this content, or application/routing logic?
- Can the current URL determine this instead of storing another value?
- Am I duplicating a URL that can be derived from the locale?
- Does a comment explain **why**, rather than **what**?
- Is there one obvious place for a future developer to change this?

The site uses Astro, Tailwind CSS 4 and GSAP. The visual direction is intentionally editorial and restrained; preserve that system rather than introducing page-specific styling without a clear reason.
