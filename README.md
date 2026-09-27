# PhySolution Website

Astro-based bilingual website for PhySolution GmbH.

The site is intentionally kept close to Astro's static-first model: pages are generated from shared components and typed content, while the only substantial client-side behavior is the GSAP hero/services transition.

## Website

The production website uses these locale-prefixed routes:

| Route | Purpose |
| --- | --- |
| `/` | Redirects to the default German locale |
| `/de/` | German homepage |
| `/en/` | English homepage |
| `/de/contact/` | German contact page |
| `/en/contact/` | English contact page |
| `/de/impressum/` | German legal page |
| `/en/impressum/` | English legal page |

The default language is German. English is always available explicitly at `/en/`.

There is no browser-language detection. The URL is the source of truth for the current language.

## Languages and routing

Language handling is deliberately centralized in `src/lib/languages.ts`.

It defines:

- supported languages: `en` and `de`
- the default language: `de`
- language labels and names
- locale validation
- removal of a locale prefix from a pathname
- creation of a localized pathname with `getLocalizedPath()`

Astro's i18n configuration in `astro.config.mjs` enables locale-prefixed routing and trailing slashes.

### Why the locale lives in the URL

The locale should not be inferred from translated text or component state. A URL such as:

`/en/impressum/`

already tells us everything needed to render the English Impressum.

This also makes language switching predictable.

The header takes the **current pathname**, removes its existing locale and adds the target locale:

`/en/impressum/` → `/de/impressum/`

`/de/contact/` → `/en/contact/`

So switching languages preserves the current page instead of sending the visitor back to the homepage.

### Thin locale routes

The actual page files under `src/pages/en/` and `src/pages/de/` are intentionally small. They select the correct locale content and render the shared page component.

Conceptually:

```text
/en/contact/  ──┐
                ├──> Contact.astro + English content
/de/contact/  ──┘

/en/           ──┐
                ├──> Home.astro + English content
/de/           ──┘
```

This avoids maintaining two separate copies of the website markup.

## Content architecture

The difficult part of a bilingual static website is not rendering the pages; it is keeping **content, language and routing separate**.

The current project uses a typed content model in:

`src/lib/content.ts`

The file contains the translated site content and business/legal data for both locales.

The main content groups are:

- `hero`
- `services`
- `about`
- `model`
- `tech`
- `contact`
- `contactPage`
- `footer`
- `impressum`

The structures are typed with interfaces/type aliases such as `SiteContent`, `HeroContent`, `ServicesContent`, `ServiceItem`, `ImpressumContent` and related models.

This gives us a useful separation:

```text
Content
  ↓
src/lib/content.ts
  ↓
shared Astro components
  ↓
locale-specific routes
  ↓
static HTML
```

### Important content rule

Components should **render content**, not decide what the German or English content is.

For example, this is the preferred pattern:

```astro
<Hero data={data.hero} />
```

rather than:

```ts
if (language === 'de') {
  // German content
} else {
  // English content
}
```

Routing logic belongs in `languages.ts`. Translated copy belongs in `content.ts`. Presentation belongs in components.

### Structured legal content

The Impressum is represented as structured data rather than a large HTML string.

A legal section contains typed blocks such as:

- text
- labelled fields
- links

This keeps the legal page maintainable while allowing phone numbers, email addresses and other required links to remain real links.

## Component architecture

The homepage is composed by `src/components/Home.astro`.

```text
src/components/
├── Home.astro
├── Header.astro
├── Footer.astro
├── Contact.astro
├── Impressum.astro
└── home/
    ├── Hero.astro
    ├── HeroAnimation.ts
    ├── Services.astro
    ├── About.astro
    ├── DataModel.astro
    ├── Technology.astro
    └── ContactSection.astro
```

The principle is:

> Pages decide routing. Content provides data. Components render UI. Animation code controls interaction. Global CSS provides the design system.

`Home.astro` is therefore mostly composition. It assembles the homepage sections rather than containing all of their markup.

Shared page components such as `Header.astro`, `Footer.astro`, `Contact.astro` and `Impressum.astro` are reused by both languages.

## Hero animation

The hero/services transition is isolated in:

`src/components/home/HeroAnimation.ts`

It uses GSAP and ScrollTrigger.

The animation has two main inputs:

- mouse position over the desktop hero
- scroll progress through the hero/services transition

The blue vertical bar expands as the user scrolls, while the white overlay mirrors the underlying content to create the split/reveal effect.

The animation is intentionally kept separate from the homepage markup so that visual behavior can be changed without turning `Home.astro` into a large component.

The current animation also uses a small amount of DOM cloning for the white reveal layers. This is intentional and should not be replaced casually; it is part of the current visual effect.

On mobile, mouse tracking is disabled and the animation uses the scroll-driven behavior only.

## Design system and styling

The project uses:

- Astro
- Tailwind CSS 4
- GSAP / ScrollTrigger
- CSS custom properties and reusable component classes in `src/styles/global.css`

Global styles provide the shared visual primitives, including:

- site container
- section padding
- section eyebrows
- titles
- body copy
- primary buttons
- outline buttons
- primary color/background utilities
- animation layers

The project uses Tailwind for layout and one-off composition while keeping genuinely repeated visual patterns in the global design system.

The goal is not to eliminate every utility class. The goal is to avoid duplicating the same visual decisions across components.

## Current site structure

The homepage is organized into these sections:

1. Hero
2. Services
3. About
4. Data model
5. Technology
6. Contact

The header provides:

- desktop section navigation
- Contact page access
- language switching
- desktop contact CTA

On mobile, the header is intentionally minimal and the contact CTA becomes a floating button.

The footer provides:

- section navigation
- Impressum access
- company/address information
- email and phone
- directions link

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Maintainability rules

When changing the site, keep these boundaries intact:

1. **Routing belongs in `src/pages/`.**
2. **Locale/path logic belongs in `src/lib/languages.ts`.**
3. **Translated/business/legal content belongs in `src/lib/content.ts`.**
4. **Reusable UI belongs in shared Astro components.**
5. **Homepage sections belong in `src/components/home/`.**
6. **Animation behavior belongs in `HeroAnimation.ts`.**
7. **Shared visual primitives belong in `src/styles/global.css`.**
8. Do not determine the current language from translated labels.
9. Do not duplicate the English and German page markup.
10. Prefer deriving URLs from the current locale rather than hard-coding locale-specific links.
11. Keep comments focused on **why** something is implemented a certain way.
12. Avoid introducing client-side JavaScript unless the behavior genuinely requires it.

## Useful mental model

For future development, think of the project as four layers:

```text
Routing
  ↓
Locale + content
  ↓
Shared components
  ↓
Static HTML + small client-side effects
```

The important architectural decision is that **language is a routing concern, content is a data concern, and components are a presentation concern**.

That separation is what allows the site to remain bilingual without maintaining two independent websites.
