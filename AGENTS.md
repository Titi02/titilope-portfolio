# Agent Instructions — Personal Portfolio

These instructions govern how AI coding agents should work on this project.

---

## 1. Document Hierarchy

1. **`PRD.md`** — the source of truth for scope, requirements, content, and acceptance criteria.
2. **`design.md`** — the source of truth for visual decisions, design tokens, typography, spacing, layout, components, and accessibility.
3. **`AGENTS.md`** (this file) — conventions, quality rules, and workflow guidelines.

If there is a conflict between documents, follow the order above.

---

## 2. Project Overview

A professional, responsive, one-page personal portfolio website.

- **Stack:** HTML + vanilla CSS + vanilla JavaScript.
- **Fonts:** Space Grotesk (headings) + Inter (body), loaded from Google Fonts.
- **No frameworks, no build tools, no CSS libraries** unless explicitly approved.
- **Visual direction:** Editorial and modern. See `design.md` for full specifications.

---

## 3. Content Rules

### Never fabricate content
- Do not invent personal details, biographical information, or career history.
- Do not invent project names, descriptions, metrics, outcomes, testimonials, or user research.
- Do not invent screenshots, mockups, or demo links.
- Do not present unstarted projects as completed, in progress, or portfolio-ready.
- Do not claim expertise or proficiency levels without evidence from the owner.

### Use clearly labelled placeholders
- Where content is not yet available, use neutral placeholders such as `[Your Name]`, `[Project title]`, `[Technologies used]`.
- Make placeholders easy to find and replace without restructuring the page.
- Mark placeholder content in HTML with a `data-placeholder="true"` attribute or a comment so it is easy to locate.

### Excluded projects
- Do not include OwoLog or the Lagos BRT waiting-time case study.

---

## 4. Code Standards

### HTML
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`.
- Maintain a logical heading hierarchy: H1 → H2 → H3, no skipped levels.
- Only one `<h1>` per page.
- Include `<a class="skip-link" href="#main">Skip to main content</a>` as the first focusable element.
- Use descriptive `id` attributes on sections for navigation anchoring.
- Use `alt` attributes on all images: meaningful for content images, empty for decorative.

### CSS
- Define all design tokens as CSS custom properties in `:root`, following `design.md` section 11.
- Use the defined custom properties — do not hard-code colours, spacing, or typography values.
- Organise styles logically: tokens → reset/base → layout → components → utilities → responsive.
- Use mobile-first responsive design with `min-width` media queries.
- Use `clamp()` for fluid typography as specified in `design.md`.
- Keep selectors simple and readable. Avoid deep nesting.
- Use BEM naming or clear descriptive class names. Be consistent.

### JavaScript
- Vanilla JavaScript only. No libraries or frameworks.
- Keep JavaScript minimal: navigation toggling, smooth scrolling, and similar interactions.
- Use `addEventListener` rather than inline event handlers.
- Ensure all interactive elements work with keyboard.
- Use `const` and `let` — never `var`.

### File structure
```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
├── PRD.md
├── design.md
└── AGENTS.md
```

---

## 5. Accessibility Requirements

These are mandatory, not optional polish:

- [ ] All text meets WCAG AA contrast ratios (4.5:1 normal text, 3:1 large text).
- [ ] All interactive elements are keyboard-accessible.
- [ ] Visible focus indicators on all focusable elements — never `outline: none` without a replacement.
- [ ] Skip-to-content link present and functional.
- [ ] Semantic landmark elements used throughout.
- [ ] ARIA attributes used correctly and only when native HTML is insufficient.
- [ ] Mobile menu toggle has `aria-expanded` and `aria-controls`.
- [ ] External links have `aria-label` noting new tab behaviour.
- [ ] Minimum 44×44px touch targets for interactive elements on mobile.
- [ ] `prefers-reduced-motion` media query respects user preference.
- [ ] Font loading uses `font-display: swap`.

---

## 6. Design Compliance

- Follow `design.md` for all visual decisions.
- Use the defined colour tokens — do not introduce new colours.
- **The accent colour (`--color-accent`) is burgundy (`#8A4545`).** Structure CSS custom properties in `:root` (with `--color-accent`, `--color-accent-hover: #793C3C`, `--color-accent-active: #6E3737`) so that if the accent colour is adjusted later, updating `:root` updates all derived styles (hover, active, focus) without editing individual component rules.
- Use the defined type scale — do not introduce new font sizes.
- Use the spacing scale — do not use arbitrary pixel values.
- Follow component specifications for buttons, links, navigation, cards, and tags.
- Do not add decorative elements, animations, or effects not specified in the design system.
- If a design decision is unclear, ask rather than guess.

---

## 7. Workflow Rules

### Work in small phases
- Break implementation into small, reviewable steps (e.g. HTML structure, then base styles, then components, then responsive, then interactivity).
- Present each step for review before moving to the next major section.

### Get approval before
- Starting any website implementation (Phase 2 begins only after planning approval).
- Installing any library, dependency, or build tool.
- Adding colours, fonts, or components not in the design system.
- Making major structural changes to the HTML.
- Adding features not listed in `PRD.md`.

### Communication
- Explain important technical decisions in beginner-friendly language.
- If something in the planning documents is ambiguous, ask for clarification.
- When showing code, highlight what changed and why.
- Note any trade-offs or limitations so the owner can make informed decisions.

---

## 8. Quality Checklist

Before considering any implementation step complete:

- [ ] HTML validates and is semantic.
- [ ] No horizontal overflow on any viewport (320px and up).
- [ ] All interactive elements work with mouse, keyboard, and touch.
- [ ] Focus indicators are visible.
- [ ] Colours match the design system tokens.
- [ ] Typography matches the design system scale.
- [ ] Spacing follows the defined scale.
- [ ] Placeholder content is clearly labelled.
- [ ] No fabricated content has been introduced.
- [ ] The page loads efficiently (no unnecessary resources).
- [ ] Responsive behaviour matches `design.md` specifications.
- [ ] `prefers-reduced-motion` is respected.

---

## 9. What NOT to Do

- Do not start implementation until planning documents are approved.
- Do not install npm packages, build tools, or frameworks without approval.
- Do not add dark mode, analytics, or features outside the current scope.
- Do not use TailwindCSS, Bootstrap, or any CSS framework.
- Do not add scroll-triggered animations or parallax effects.
- Do not add skill progress bars or proficiency percentages.
- Do not use stock photos or placeholder image services for portfolio content.
- Do not add a contact form with backend processing.
- Do not create multiple HTML pages — this is a single-page site.
