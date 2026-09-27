# Astro Architecture & Maintainability TODO

> Refactoring plan for `physolution-website`.
>
> **Scope:** Astro architecture, content modelling, routing/localisation, design-system consistency and maintainability.
>
> **Explicitly excluded:** the current JavaScript animation implementation, including the `innerHTML` cloning approach. Do not modify that JavaScript as part of this TODO unless a later task explicitly asks for it.

---

## 0. Refactoring principles

- [ ] Keep the project simple enough for a human developer to maintain.
- [ ] Prefer Astro components and server-rendered HTML over adding a client framework.
- [ ] Keep Tailwind CSS for one-off layout and responsive utilities.
- [ ] Use semantic CSS classes/tokens only for genuinely repeated visual patterns.
- [ ] Keep business/content data separate from presentation markup.
- [ ] Keep locale/routing decisions based on locale values, never translated display text.
- [ ] Avoid introducing abstractions that are used only once.
- [ ] Preserve the existing visual design and URL structure unless a task explicitly requires a change.
- [ ] Preserve the existing EN/DE content and legal information while refactoring structure.
- [ ] Make changes incrementally so each step can be reviewed independently.
- [ ] After each logical group, verify both `/de/` and `/en/` and their subpages.

---

# 1. Homepage component architecture

## Goal

Reduce the responsibility of `src/components/Website.astro`.

The homepage currently contains the complete page structure as well as the animation implementation. The animation JavaScript is intentionally out of scope for this refactor.

### 1.1 Extract Hero

- [ ] Create `src/components/home/Hero.astro`.
- [ ] Move only the Hero markup and its Hero-specific presentation into the component.
- [ ] Keep the existing IDs required by the animation:
  - `heroSection`
  - `heroBlueBar`
  - `heroBlackContent`
  - `heroWhiteContent`
- [ ] Do not change the existing animation JavaScript.
- [ ] Preserve the current Hero HTML structure where it is required by the animation.
- [ ] Pass Hero content through props rather than importing `content.ts` directly.
- [ ] Keep the Hero component responsible for rendering Hero content, not choosing the locale.

### 1.2 Extract Services

- [ ] Create `src/components/home/Services.astro`.
- [ ] Move the Services section markup out of `Website.astro`.
- [ ] Preserve the existing section ID `services`.
- [ ] Preserve IDs/classes needed by the existing animation:
  - `scrollBluePanel`
  - `workBlackContent`
  - `workWhiteContent`
- [ ] Pass `data.services` into the component.
- [ ] Do not introduce JavaScript into the component.

### 1.3 Extract About

- [ ] Create `src/components/home/About.astro`.
- [ ] Move the About section markup into the component.
- [ ] Preserve the existing `about` anchor.
- [ ] Pass `data.about` as a prop.
- [ ] Keep the component presentational.

### 1.4 Extract Data Model

- [ ] Create `src/components/home/DataModel.astro`.
- [ ] Move the Data Model section markup into the component.
- [ ] Preserve the existing `datamodel` anchor.
- [ ] Pass `data.model` as a prop.
- [ ] Remove duplicated type assertions where possible after content types are introduced.

### 1.5 Extract Technology

- [ ] Create `src/components/home/Technology.astro`.
- [ ] Move the Technology section markup into the component.
- [ ] Preserve the existing `technology` anchor.
- [ ] Pass `data.tech` as a prop.
- [ ] Keep technology-specific layout/classes local to this component unless the same pattern is genuinely reused elsewhere.

### 1.6 Extract homepage Contact section

- [ ] Create `src/components/home/ContactSection.astro`.
- [ ] Move the homepage contact CTA section out of `Website.astro`.
- [ ] Preserve the existing `contact` anchor.
- [ ] Pass `data.contact` as a prop.
- [ ] Generate the contact-page URL from the current locale.
- [ ] Do not use translated text such as `data.contactPage.title === 'Kontakt'` to determine routing.

### 1.7 Simplify Website.astro

- [ ] After extraction, keep `Website.astro` as the homepage composition layer but rename it to `Home.astro`
- [ ] It should primarily:
  - receive page data,
  - render the Header,
  - render the home components in order,
  - render the Footer,
  - retain the existing animation script unchanged.
- [ ] You can safely move the animation JavaScript during this task as long as it doesnt break.
- [ ] Do not redesign the animation architecture.

Target structure:

```text
Website.astro
  -> Hero
  -> HeroAnimationHelper
  -> Services
  -> About
  -> DataModel
  -> Technology
  -> ContactSection
  -> Footer
```

---

# 2. Content model / TypeScript types

## Goal

Replace anonymous tuple structures such as `string[]` with named data structures.

### 2.1 Define reusable content types

- [ ] Introduce explicit TypeScript interfaces/types for:
  - navigation
  - hero content
  - service items
  - about/history items
  - data-model cards
  - technology principles
  - technology items
  - contact-page content
  - footer content
  - legal sections
- [ ] Prefer named object properties over positional tuple indexes.

Example:

```ts
type TechnologyItem = {
  category: string;
  label: string;
};
```

instead of:

```ts
[string, string]
```

### 2.2 Replace tuple access

- [x] Replace patterns such as `x[0]`, `x[1]`, `x[2]` with named properties.
- [ ] Remove unnecessary annotations such as `(x: string[])` once the content model supplies the type.
- [ ] Ensure components receive typed props.

### 2.3 Type the complete locale content

- [x] Define one shared `SiteContent` type.
- [x] Ensure both `de` and `en` satisfy that type.
- [ ] Use TypeScript to catch missing sections between languages.
- [ ] Keep the German and English structures identical even where the actual copy differs.

### 2.4 Avoid overengineering

- [ ] Do not build a generic CMS abstraction.
- [ ] Do not introduce runtime schemas unless there is a concrete need.
- [ ] Keep the content model plain TypeScript.

---

# 3. Remove HTML from content data

## Goal

Make `src/lib/content.ts` data-only instead of mixing content and presentation markup.

Current concern:

```ts
[
  'Kontakt',
  '<strong>Telefon:</strong> ...'
]
```

rendered with:

```astro
<div set:html={section[1]} />
```

### 3.1 Define structured legal content

- [ ] Replace HTML strings in Impressum content with structured data.
- [ ] Model headings and fields separately.
- [ ] Model links as data where links are required.
- [ ] Preserve all current legal information.

### 3.2 Define appropriate field types

Consider structures such as:

```ts
type LegalSection = {
  title: string;
  content: LegalBlock[];
};

type LegalBlock =
  | { type: 'text'; value: string }
  | { type: 'link'; label: string; href: string }
  | { type: 'field'; label: string; value: string };
```

- [ ] Use the simplest structure that supports the current legal pages.
- [ ] Do not build a full rich-text editor/data format.

### 3.3 Remove `set:html` if no longer needed

- [ ] Once legal content is structured, remove `set:html` from `Impressum.astro`.
- [ ] Render text and links as normal Astro elements.
- [ ] Preserve link styling.

### 3.4 Security / maintainability check

- [ ] Confirm no user-generated or externally supplied HTML is being rendered.
- [ ] Keep legal content declarative and predictable.

---

# 4. Locale and routing architecture

## Goal

Make locale handling explicit and prevent business logic from depending on translated strings.

### 4.1 Eliminate translation-based routing

- [ ] Remove logic like:

```ts
data.contactPage.title === 'Kontakt'
```

- [ ] Never use translated labels to decide:
  - locale,
  - URL,
  - component behavior,
  - feature state.

### 4.2 Use the existing language helpers

- [ ] Use `getSupportedLanguage()` to resolve the current locale.
- [ ] Use `getLocalizedPath()` for localized URLs.
- [ ] Keep `SUPPORTED_LANGUAGES` as the source of truth.

### 4.3 Establish locale once per page

- [ ] Prefer resolving the locale at the page/layout boundary.
- [ ] Pass the resolved locale into shared components where practical.
- [ ] Avoid every component independently parsing `Astro.url.pathname` when the parent already knows the locale.

### 4.4 Review Header

- [ ] Pass or derive a single typed locale.
- [ ] Keep language switching based on the URL path.
- [ ] Preserve the current-page path when switching languages.
- [ ] Verify:
  - `/de/` -> `/en/`
  - `/en/` -> `/de/`
  - `/de/contact/` -> `/en/contact/`
  - `/en/contact/` -> `/de/contact/`
  - `/de/impressum/` -> `/en/impressum/`
  - `/en/impressum/` -> `/de/impressum/`

### 4.5 Review Footer

- [ ] Use the same locale source as Header.
- [ ] Keep all footer links localized.
- [ ] Avoid duplicated locale decision logic where possible.

### 4.6 Review page routes

- [ ] Keep locale routes thin.
- [ ] Pages should primarily:
  - select locale content,
  - render the relevant page component.
- [ ] Avoid duplicating business logic between `/de` and `/en`.

---

# 5. Design-system cleanup

## Goal

Finish the semantic CSS work without turning the project into a custom CSS framework.

### 5.1 Fix token consistency

- [ ] Remove stale `--color-accent` usage.
- [ ] Remove or replace `.bg-accent` if it no longer represents a real design token.
- [ ] Ensure every semantic class references an existing token.
- [ ] Keep the current core tokens:

```css
--color-primary
--color-background
--color-foreground
--color-muted
--color-border
```

### 5.2 Review semantic classes

Keep and use where appropriate:

- [ ] `.container-site`
- [ ] `.section-padding`
- [ ] `.section-eyebrow`
- [ ] `.section-title`
- [ ] `.page-title`
- [ ] `.body-copy`
- [ ] `.button-primary`
- [ ] `.button-outline`
- [ ] `.link-primary`

### 5.3 Remove redundant class combinations

- [ ] Search for cases where a semantic class already provides a property that is repeated inline.
- [ ] Remove only genuinely redundant utilities.
- [ ] Keep one-off responsive/layout utilities in Tailwind.

### 5.4 Consolidate repeated colors

Review repeated usages of:

```text
text-black/65
text-black/60
text-black/55
text-black/40
text-black/35
border-black/20
border-black/15
```

- [ ] Decide which are meaningful semantic levels.
- [ ] Introduce additional tokens only if they are reused across multiple components.
- [ ] Do not create a token for every opacity value.

### 5.5 Avoid CSS over-abstraction

- [ ] Do not create generic classes for one-off layouts.
- [ ] Do not recreate Tailwind's entire utility system.
- [ ] Do not introduce SCSS solely to hide Tailwind classes.
- [ ] Keep the semantic layer small.

---

# 6. Header / Footer / page component cleanup

### 6.1 Header

- [ ] Keep Header responsible for navigation and language switching only.
- [ ] Keep desktop/mobile behavior unchanged.
- [ ] Preserve the mobile floating contact CTA.
- [ ] Ensure Impressum remains in the Footer and not the primary navigation.
- [ ] Remove any locale logic that can be supplied by the parent.

### 6.2 Footer

- [ ] Keep Footer responsible for global footer navigation/contact information.
- [ ] Use semantic design-system classes consistently.
- [ ] Remove stale design-token references.
- [ ] Preserve localized Impressum links.
- [ ] Verify all anchor links work from:
  - homepage,
  - contact page,
  - Impressum page.

### 6.3 Contact page

- [ ] Keep Contact as a page-level composition component.
- [ ] Use `.page-title`, `.body-copy`, and shared link/button styles where appropriate.
- [ ] Remove duplicated color utilities where semantic classes already cover them.
- [ ] Keep contact data in content configuration.

### 6.4 Impressum page

- [ ] Keep legal rendering separate from general homepage components.
- [ ] Replace HTML-string rendering with structured content.
- [ ] Keep legal content data-driven.
- [ ] Preserve the current legal text.
- [ ] Do not add legal claims or alter legal meaning as part of this architecture refactor.

---

# 7. Content organisation

## Goal

Prevent `src/lib/content.ts` from becoming difficult to navigate as the site grows.

### 7.1 Short term

- [ ] Keep one source of truth for EN/DE content.
- [ ] Improve typing before splitting files.
- [ ] Group related content clearly.

### 7.2 Reassess after typing

- [ ] If `content.ts` remains manageable, keep it.
- [ ] If it becomes difficult to navigate, split it into:
  - home content,
  - contact content,
  - legal content,
  - footer/navigation content.

### 7.3 Do not split prematurely

- [ ] Do not create a directory with dozens of tiny content files just for theoretical scalability.
- [ ] The content structure should follow actual maintenance needs.

---

# 8. Page/layout architecture review

### 8.1 Review `Layout.astro`

- [x] Confirm document-level responsibilities stay in the layout:
  - `<html>`
  - language attribute
  - metadata
  - global styles
  - document head
- [ ] Avoid putting page-specific UI into the layout.

### 8.2 Review locale handling

- [x] Determine whether the locale can be resolved once in the layout/page boundary.
- [ ] Avoid duplicating locale extraction throughout the component tree.

### 8.3 Keep pages thin

Target:

```astro
---
const data = content.de;
---

<Website data={data} />
```

with only the necessary locale selection/routing logic.

---

# 9. Astro-specific quality review

### 9.1 Server/client boundary

- [ ] Confirm components remain static/server-rendered unless interactivity requires JavaScript.
- [ ] Do not add `client:load`, `client:visible`, React or Vue without a concrete requirement.
- [ ] Keep the current GSAP script as-is for this refactor.

### 9.2 DOM IDs

- [ ] Document IDs that are required by the animation.
- [ ] Do not accidentally remove or rename animation-dependent IDs while extracting components.
- [ ] Keep IDs stable.

### 9.3 Accessibility

- [ ] Verify heading hierarchy after component extraction.
- [ ] Verify navigation landmarks remain correct.
- [ ] Verify language links have appropriate `hreflang`.
- [ ] Verify current language uses `aria-current`.
- [ ] Verify external links retain `target` and `rel` where appropriate.
- [ ] Verify telephone/email links remain accessible.
- [ ] Verify the mobile floating CTA remains keyboard accessible.

### 9.4 Reduced motion

- [ ] Preserve the existing `prefers-reduced-motion` behavior.
- [ ] Do not remove the existing CSS behavior during refactoring.
- [ ] Do not introduce additional animation as part of this architecture task.

---

# 10. URL and navigation regression checklist

After the refactor, manually verify:

## German

- [ ] `/de/`
- [ ] `/de/contact/`
- [ ] `/de/impressum/`
- [ ] Homepage section anchors:
  - [ ] `#services`
  - [ ] `#about`
  - [ ] `#datamodel`
  - [ ] `#technology`
  - [ ] `#contact`

## English

- [ ] `/en/`
- [ ] `/en/contact/`
- [ ] `/en/impressum/`
- [ ] Homepage section anchors:
  - [ ] `#services`
  - [ ] `#about`
  - [ ] `#datamodel`
  - [ ] `#technology`
  - [ ] `#contact`

## Language switching

- [ ] Switch language from homepage.
- [ ] Switch language from Contact.
- [ ] Switch language from Impressum.
- [ ] Confirm current page is preserved.
- [ ] Confirm no switch redirects to homepage unexpectedly.

## Navigation from subpages

- [ ] Header navigation from Contact works.
- [ ] Header navigation from Impressum works.
- [ ] Footer navigation from Contact works.
- [ ] Footer navigation from Impressum works.
- [ ] Home/logo link works in both locales.

---

# 11. Visual regression checklist

The refactor should not intentionally change visual design.

- [ ] Hero typography unchanged.
- [ ] Hero spacing unchanged.
- [ ] Blue-bar visual effect unchanged.
- [ ] Services layout unchanged.
- [ ] About layout unchanged.
- [ ] Data Model layout unchanged.
- [ ] Technology layout unchanged.
- [ ] Contact CTA unchanged.
- [ ] Header desktop layout unchanged.
- [ ] Header mobile layout unchanged.
- [ ] Footer layout unchanged.
- [ ] Impressum typography unchanged.
- [ ] Contact page typography unchanged.
- [ ] Colors remain consistent with the design tokens.
- [ ] Responsive behavior remains unchanged.

---

# 12. Validation / quality gates

### Before each commit

- [ ] Check TypeScript errors.
- [ ] Check Astro build.
- [ ] Check formatting.
- [ ] Check changed routes manually.
- [ ] Review the diff for accidental visual changes.

### Before merging the refactor

- [ ] Run the production build.
- [ ] Confirm all EN/DE routes generate successfully.
- [ ] Confirm no broken imports.
- [ ] Confirm no stale CSS token references.
- [ ] Confirm no locale logic depends on translated text.
- [ ] Confirm no unnecessary client-side code was introduced.
- [ ] Confirm the existing GSAP/animation JavaScript was not changed.

---

# 13. Suggested implementation order

Do the work in small, reviewable commits.

1. [ ] **Fix semantic-token inconsistency**
   - Remove `bg-accent` / stale accent token usage.
   - No structural changes.

2. [ ] **Introduce typed content models**
   - Add TypeScript types.
   - Keep rendered output unchanged.

3. [ ] **Refactor locale-dependent URLs**
   - Remove translation-based routing.
   - Use `getLocalizedPath()`.

4. [ ] **Centralise locale resolution**
   - Reduce repeated pathname parsing.
   - Preserve current language-switching behavior.

5. [ ] **Convert Impressum content to structured data**
   - Remove HTML strings.
   - Remove `set:html`.

6. [ ] **Extract homepage Contact section**
   - Smallest homepage extraction first.

7. [ ] **Extract About / Data Model / Technology**
   - One component at a time.

8. [ ] **Extract Services**
   - Preserve all animation-related IDs.

9. [ ] **Extract Hero**
   - Preserve every ID required by the existing animation.

10. [ ] **Clean up Website.astro**
    - Make it the homepage composition layer.
    - Leave the animation JavaScript untouched.

11. [ ] **Final design-system cleanup**
    - Remove only meaningful duplicated colors/styles.
    - Avoid over-abstraction.

12. [ ] **Full regression pass**
    - Routes
    - Language switching
    - Navigation
    - Mobile
    - Desktop
    - Accessibility
    - Build

---

# 14. Explicitly out of scope

The following should **not** be changed during this refactor:

- [ ] Do not rewrite the GSAP animation.
- [ ] Do not change ScrollTrigger behavior.
- [ ] Do not change mouse tracking.
- [ ] Do not change blue-bar timing/easing.
- [ ] Do not change animation state management.
- [ ] Do not replace `innerHTML` cloning.
- [ ] Do not introduce a new animation library.
- [ ] Do not add React/Vue/Svelte.
- [ ] Do not redesign the visual identity.
- [ ] Do not change the site's URL structure.
- [ ] Do not change the legal meaning/content unless required to represent it structurally.
- [ ] Do not introduce a CMS.
- [ ] Do not split every content string into separate files without a maintenance reason.

---

# 15. Definition of done

The refactor is complete when:

- [ ] `Website.astro` is primarily a composition layer.
- [ ] Homepage sections are independently understandable Astro components.
- [ ] Existing animation JavaScript is unchanged.
- [ ] Content structures are strongly typed.
- [ ] Content data does not contain presentation HTML.
- [ ] Impressum no longer depends on `set:html` for normal legal content.
- [ ] Locale routing is based on locale values, never translated labels.
- [ ] Language switching preserves the current page.
- [ ] Shared design tokens are internally consistent.
- [ ] Tailwind remains available for one-off layout work.
- [ ] No unnecessary CSS abstraction has been introduced.
- [ ] Header/Footer remain simple and reusable.
- [ ] EN and DE pages behave equivalently.
- [ ] Existing URLs continue to work.
- [ ] Desktop and mobile layouts remain visually consistent.
- [ ] Production build succeeds.
- [ ] The existing GSAP animation remains functionally unchanged.

