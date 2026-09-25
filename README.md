# PhySolution Website

Astro-based bilingual website for PhySolution.

## URL and locale architecture

- `/` — explicit language chooser; no automatic language detection or redirect
- `/en/` — English
- `/de/` — German
- `/en/impressum/` — English legal page
- `/de/impressum/` — German legal page

The locale is part of the URL and is the source of truth for the current language. The header language switcher derives its target from the current pathname and replaces only the `/en` or `/de` segment. For example, `/en/impressum/` switches to `/de/impressum/` and stays on the legal page.

This keeps route state out of the translation/content model. New locale-aware pages should not need a custom `switchHref` value.

## Architecture principles

The project deliberately favors shared components and thin locale routes:

- `src/pages/en/...` and `src/pages/de/...` are thin route adapters.
- `src/components/Website.astro` contains the shared homepage structure and interaction.
- `src/components/Impressum.astro` contains the shared legal-page structure.
- `src/components/Header.astro` and `src/components/Footer.astro` contain shared site chrome.
- `src/lib/content.ts` contains language-specific copy and business data. It should not contain route state or duplicated navigation URLs.
- `src/styles/global.css` contains global styles and reusable visual primitives.
- Keep route construction close to routing concerns. If route rules grow, introduce a small `src/lib/routes.ts` rather than scattering URL logic across components.

### Practical rule for new pages

1. Create the shared component once.
2. Add one thin `/en/...` route and one thin `/de/...` route.
3. Add translated copy to `content.ts`.
4. Do not add language-switch URLs to content.
5. Let the current pathname determine locale-switch targets.

Comments should explain **why** non-obvious code exists, not restate what the code does. The locale-switch comment in `Header.astro` is an example.

## Content model

Keep presentation markup in components and language-specific strings/data in `content.ts`.

The Impressum currently contains HTML strings because legal copy needs inline links and emphasis. Treat this as a deliberate exception; if legal content grows substantially, move toward structured fields rather than adding more markup strings.

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
