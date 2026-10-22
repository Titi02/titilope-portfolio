# Design System — Personal Portfolio

This document defines the visual direction, design tokens, typography, spacing, layout rules, component styles, and accessibility standards for the portfolio website.

All implementation must follow these specifications. Do not deviate without discussion and approval.

---

## 1. Visual Direction

**Style:** Editorial and modern.

The portfolio should feel professional, confident, clear, thoughtful, and distinctive. It should not look like a generic developer template.

### Use
- Strong typography and clear visual hierarchy.
- Generous whitespace to let content breathe.
- Structured, grid-aligned layouts.
- Restrained use of colour — the burgundy accent (`#8A4545`) is reserved for interactive elements.
- Clear, readable project presentations.
- Subtle interactive details only where they serve a purpose.

### Avoid
- Excessive gradients, glowing effects, or neon colours.
- Unnecessary animations and decorative elements.
- Generic AI-generated portfolio layouts.
- Too many accent colours.
- Excessive rounded cards and pill-shaped containers.
- Skill progress bars, fabricated statistics, or proficiency percentages.
- Visual complexity that distracts from content.

---

## 2. Colour System

> **Confirmed palette.** All seven core colours, including the burgundy accent (`#8A4545`), are confirmed for Phase 1. The accent is defined via CSS custom properties in `:root` so it can be easily adjusted in the future if desired.

### 2.1 Core Palette

| Token | CSS Custom Property | Value | Status | Purpose |
|-------|-------------------|-------|--------|---------|
| Main background | `--color-bg` | `#F7F6F2` | Confirmed | Warm off-white page background |
| Primary text | `--color-text-primary` | `#202124` | Confirmed | Main headings and body text |
| Secondary text | `--color-text-secondary` | `#555960` | Confirmed | Supporting descriptions and metadata |
| Primary accent | `--color-accent` | `#8A4545` | Confirmed | Burgundy accent for important links, primary buttons, selected highlights |
| Borders | `--color-border` | `#E2E0D9` | Confirmed | Dividers and subtle boundaries |
| Secondary surface | `--color-surface-alt` | `#EEEDE7` | Confirmed | Gentle contrast between selected sections |
| White surface | `--color-surface-white` | `#FFFFFF` | Confirmed | Surfaces where additional separation is useful |

> **Accessibility note:** All text and interactive combinations meet or exceed WCAG AA. Secondary text was darkened to `#555960` (6.51:1) to maintain compliance. The burgundy accent (`#8A4545`) provides strong contrast margins: 6.43:1 on the main background and 6.96:1 on white.

### 2.2 Contrast Ratios (Verified)

| Combination | Ratio | WCAG AA normal text | WCAG AA large text |
|-------------|------:|:---:|:---:|
| `#202124` on `#F7F6F2` (primary text on bg) | 14.89:1 | ✅ Pass | ✅ Pass |
| `#555960` on `#F7F6F2` (secondary text on bg) | 6.51:1 | ✅ Pass | ✅ Pass |
| `#8A4545` on `#F7F6F2` (accent link on bg) | 6.43:1 | ✅ Pass | ✅ Pass |
| `#202124` on `#EEEDE7` (text on alt surface) | 13.72:1 | ✅ Pass | ✅ Pass |
| `#202124` on `#FFFFFF` (text on white surface) | 16.10:1 | ✅ Pass | ✅ Pass |
| `#8A4545` on `#FFFFFF` (accent link on white) | 6.96:1 | ✅ Pass | ✅ Pass |
| `#FFFFFF` on `#8A4545` (button label on accent) | 6.96:1 | ✅ Pass | ✅ Pass |

### 2.3 Interactive State Colours

> These derive from the accent colour and are controlled via CSS custom properties in `:root`.

| State | Accent treatment | Text link treatment |
|-------|-----------------|---------------------|
| Default | `#8A4545` | `#8A4545` with no underline (or subtle underline) |
| Hover | `#793C3C` (darkened ~12%) | `#793C3C` with underline |
| Focus | `#8A4545` with a visible 2–3px outline offset | Same, with focus ring |
| Active / Pressed | `#6E3737` (darkened ~20%) | `#6E3737` |
| Disabled | `#A0A4AB` on `#F7F6F2` | Reduced opacity or grey |
| Visited (links) | `#8A4545` (do not change — keep links visually consistent) | — |

### 2.4 Colour Usage Rules

- The site ships with a light theme as the default, plus an optional dark theme (see §12) that is applied through token overrides only.
- Use `--color-bg` as the default background.
- Use `--color-surface-alt` sparingly to distinguish alternating sections (e.g. About or Skills).
- Use `--color-surface-white` only where a white card or panel provides meaningful separation.
- Use `--color-accent` only for interactive elements: links, primary buttons, selected states.
- Do not introduce additional colours without a clear design reason and approval.
- All foreground-on-background combinations must meet WCAG AA (4.5:1 for normal text, 3:1 for large text and UI components).

---

## 3. Typography

### 3.1 Font Families

| Role | Family | Fallback stack | Google Fonts weight range |
|------|--------|---------------|--------------------------|
| Headings | Space Grotesk | `'Space Grotesk', system-ui, -apple-system, sans-serif` | 500 (Medium), 600 (SemiBold) |
| Body & UI | Inter | `'Inter', system-ui, -apple-system, sans-serif` | 400 (Regular), 500 (Medium), 600 (SemiBold) |

**Loading strategy:**
- Use `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`.
- Load only the weights listed above.
- Use `font-display: swap` to prevent invisible text during loading.
- Do not introduce additional font families without approval.

### 3.2 Type Scale

| Token | CSS Custom Property | Desktop | Mobile | Weight | Line height | Letter spacing |
|-------|-------------------|---------|--------|--------|-------------|---------------|
| Display / H1 | `--text-display` | 60px | 38px | 600 (Space Grotesk) | 1.1 | -0.02em |
| Section heading / H2 | `--text-h2` | 40px | 30px | 600 (Space Grotesk) | 1.15 | -0.015em |
| Project heading / H3 | `--text-h3` | 26px | 22px | 500 (Space Grotesk) | 1.25 | -0.01em |
| Subheading / H4 | `--text-h4` | 20px | 18px | 500 (Space Grotesk) | 1.3 | -0.005em |
| Body large | `--text-body-lg` | 18px | 17px | 400 (Inter) | 1.65 | 0 |
| Body | `--text-body` | 16px | 16px | 400 (Inter) | 1.6 | 0 |
| Navigation & buttons | `--text-nav` | 15px | 14px | 500 (Inter) | 1.4 | 0.01em |
| Small / metadata | `--text-small` | 13px | 13px | 400 (Inter) | 1.5 | 0.01em |
| Label / overline | `--text-label` | 12px | 12px | 600 (Inter) | 1.4 | 0.06em |

### 3.3 Typography Rules

- Use `--text-display` only once per page (the hero heading).
- Maintain a logical heading hierarchy: H1 → H2 → H3. Do not skip levels.
- Body text maximum width: `65ch` (approximately 600–680px) for comfortable reading.
- Avoid all-caps except for `--text-label` (used sparingly for overline labels like "ABOUT" or "SELECTED PROJECTS").
- Avoid decorative fonts, italic body text, or bold body text unless emphasis is needed.

### 3.4 Responsive Typography

Use `clamp()` for fluid scaling between mobile and desktop breakpoints:

```css
/* Example: Display heading */
font-size: clamp(38px, 5vw + 1rem, 60px);

/* Example: Section heading */
font-size: clamp(30px, 3.5vw + 0.5rem, 40px);

/* Example: Body large */
font-size: clamp(17px, 1vw + 0.9rem, 18px);
```

This ensures smooth scaling without abrupt size jumps at breakpoints.

---

## 4. Spacing System

### 4.1 Base Scale

Built on a 4px base unit. All spacing should use values from this scale.

| Token | CSS Custom Property | Value |
|-------|-------------------|-------|
| 4xs | `--space-4xs` | 4px |
| 3xs | `--space-3xs` | 8px |
| 2xs | `--space-2xs` | 12px |
| xs | `--space-xs` | 16px |
| sm | `--space-sm` | 20px |
| md | `--space-md` | 24px |
| lg | `--space-lg` | 32px |
| xl | `--space-xl` | 40px |
| 2xl | `--space-2xl` | 48px |
| 3xl | `--space-3xl` | 64px |
| 4xl | `--space-4xl` | 80px |
| 5xl | `--space-5xl` | 96px |
| 6xl | `--space-6xl` | 120px |
| 7xl | `--space-7xl` | 160px |

### 4.2 Layout Dimensions

| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Maximum content width | 1120px | — | — |
| Horizontal page padding | 40px | 32px | 20px |
| Section vertical padding | 96–120px | 72–80px | 56–64px |
| Navigation height | 64px | 64px | 56px |

### 4.3 Content Spacing

| Context | Spacing |
|---------|---------|
| Section label (overline) to section heading | 12px (`--space-2xs`) |
| Section heading to section description | 16–20px (`--space-xs` to `--space-sm`) |
| Section description to section content | 40–48px (`--space-xl` to `--space-2xl`) |
| Between project cards | 32–40px (`--space-lg` to `--space-xl`) |
| Within project card: title to description | 12px (`--space-2xs`) |
| Within project card: description to tags | 16px (`--space-xs`) |
| Between skill category groups | 32px (`--space-lg`) |
| Between individual skill tags | 8px (`--space-3xs`) |
| CTA group: between buttons | 16px (`--space-xs`) |
| Footer content to page bottom | 40–48px (`--space-xl`) |

---

## 5. Layout System

### 5.1 Grid

- Use CSS Grid as the primary layout tool.
- Maximum content width: `1120px`, centred with `margin: 0 auto`.
- Single-column layout for most content, with a two-column option for project case studies on desktop.

### 5.2 Responsive Breakpoints

| Name | Breakpoint | Layout behaviour |
|------|-----------|------------------|
| Mobile | < 768px | Single column, stacked layout, hamburger nav |
| Tablet | 768px – 1024px | Single column with wider margins, full nav or condensed |
| Desktop | > 1024px | Full layout, maximum content width applies |

### 5.3 Section Layout Rules

| Section | Desktop | Mobile |
|---------|---------|--------|
| Navigation | Name/wordmark left, section links right | Hamburger menu with slide-out or overlay |
| Hero | **Centred**, generous vertical padding | Centred, reduced padding |
| About | Single column, max-width `65ch` for body text | Full width within padding |
| Skills | Unified 3-column grid of 9 skill cards | Single column (or 2-column) responsive grid |
| Projects | 2-column grid of connected project cards | Single column stacked cards |
| Contact | Centred links, clear visual grouping | Stacked vertically |
| Footer | Single line or two-column (info + links) | Stacked |

### 5.4 Alignment Principles

- Align content to a consistent left edge within the content container.
- Use whitespace, not borders or cards, to separate major sections.
- Cards are acceptable for project case studies if they add clarity, but avoid excessive card usage.
- Keep vertical rhythm consistent using the spacing scale.

---

## 6. Component Specifications

### 6.1 Navigation

**Desktop:**
- Fixed/sticky at the top.
- Background: `--color-bg` with subtle backdrop blur or solid background on scroll.
- Height: 64px.
- **Name or wordmark on the left**, section links on the right.
- Link style: `--text-nav`, `--color-text-primary`, no underline by default.
- Active section link: `--color-accent`.
- Hover: `--color-accent`.

**Theme toggle (light/dark):**
- Icon-only button, 44×44px touch target, placed immediately before the mobile menu button.
- Moon icon in the light theme (action: switch to dark); sun icon in the dark theme (action: switch to light).
- `aria-label` and `title` reflect the action ("Switch to dark theme" / "Switch to light theme").
- Focus: visible outline, 2px solid `--focus-ring-color`, 2px offset.
- Must stay above the open mobile menu overlay (z-index above the overlay's 99).

**Mobile:**
- Height: 56px.
- Hamburger button on the right.
- Menu opens as a full-screen or slide-out overlay.
- Menu links: larger touch targets (minimum 44px height).
- Close button clearly visible.
- Body scroll locked when menu is open.
- The theme toggle remains visible and operable while the overlay is open.

**Keyboard and focus:**
- All navigation links reachable by Tab.
- Visible focus ring: 2px solid `--color-accent`, 2px offset.
- Skip-to-content link as the first focusable element.

### 6.2 Buttons

**Primary button:**
- Background: `--color-accent` (`#8A4545`).
- Text: `#FFFFFF`.
- Padding: 14px 28px.
- Border-radius: 6px.
- Font: `--text-nav`, weight 500.
- Hover: background `--color-accent-hover` (`#793C3C`).
- Focus: visible outline, 2px solid `--color-accent`, 2px offset.
- Active: background `--color-accent-active` (`#6E3737`).
- Disabled: background `--color-accent-disabled` (`#A0A4AB`), cursor `not-allowed`.
- Minimum touch target: 44×44px.

**Secondary button:**
- Background: transparent.
- Border: 1.5px solid `--color-border`.
- Text: `--color-text-primary`.
- Same padding, radius, and font as primary.
- Hover: border colour `--color-text-secondary`, background `--color-surface-alt`.
- Focus: same focus ring as primary.

### 6.3 Text Links

- Colour: `--color-accent`.
- No underline by default, underline on hover.
- Focus: visible outline ring.
- External links: append a small external-link icon (accessible, with `aria-label` noting the link opens in a new tab).

### 6.4 Profile Photo (Removed)

- Per user direction, the profile photo and its placeholder have been removed entirely from the hero section.
- The hero layout relies on clean, centered typography and visual hierarchy (name, positioning statement, and CTA buttons).
- No placeholder or replacement image element is used in the hero.

### 6.5 Connected Project Cards / Case Studies

- Layout: Responsive 2-column grid on desktop and tablet (`.projects__grid`), 1 column on mobile.
- Connected unified card structure (`.project-card`):
  - Outer card: `display: flex; flex-direction: column; background: var(--color-surface-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden;`.
  - Preview at top (`.project-card__preview`): fixed height (220px mobile/tablet, 240px desktop), background `--color-surface-alt`, border-bottom `1px solid var(--color-border)`.
  - Information panel (`.project-card__info`): directly attached beneath preview with no gap, white background, `padding: var(--space-lg)`.
  - Content structure:
    1. Category overline (`.project-card__category`): `--text-label` (12px), bold, uppercase, burgundy accent `--color-accent: #8A4545`.
    2. Project title (`.project-card__title`): `--text-h3`, Space Grotesk, weight 600.
    3. Short description (`.project-card__description`): `--text-body`, Inter, `--color-text-secondary`.
    4. “View Case Study” link (`.project-card__cta`): `--text-small`, weight 600, `--color-accent`, with SVG arrow icon that slides on hover.
  - Hover effect: subtle lift (`transform: translateY(-4px)`), border shifts to `--color-accent` (`#8A4545`), soft shadow `0 8px 24px rgba(32, 33, 36, 0.08)`.

### 6.6 Skill Cards / Tools Grid

- Unified 3-column responsive grid (3×3 on desktop and tablet, adapting to smaller viewports).
- Individual `.skill-card` components:
  - Layout: flex row, `align-items: center`, gap `12px` (`--space-2xs`).
  - Padding: `16px 20px` (`--space-xs` `--space-sm`).
  - Background: `--color-surface-white` (`#FFFFFF`).
  - Border: 1px solid `--color-border` (`#E2E0D9`).
  - Border-radius: 6px (`--radius-md`).
  - Hover: subtle lift (`transform: translateY(-2px)`), border shifts to `--color-accent` (`#8A4545`), subtle box-shadow.
- Icon: authentic vector SVG (28×28px), `aria-hidden="true"`.
- Label: Inter font, weight 500, size `--text-small` (14px), color `--color-text-primary`.
- No proficiency bars, percentages, or arbitrary ratings.
- Excluded: Antigravity, Gemini, WordPress, and unconfirmed technologies.

### 6.7 Section Headings

- Overline label (optional): `--text-label`, `--color-text-secondary`, all-caps, letter-spacing `0.06em`.
- Heading: `--text-h2`, `--color-text-primary`.
- Description (optional): `--text-body-lg`, `--color-text-secondary`, max-width `55ch`.

### 6.8 Contact Links

- Display as a clear, scannable list or inline group.
- Use recognisable icons (or text labels) for email, LinkedIn, GitHub.
- Colour: `--color-accent` for links.
- Adequate spacing between items.

### 6.9 Footer

- Background: `--color-surface-alt` or same as `--color-bg`.
- Top border: 1px solid `--color-border`.
- Content: copyright notice, optional repeat of key links.
- Text: `--text-small`, `--color-text-secondary`.
- Padding: `--space-xl` vertical.

---

## 7. Interaction and Motion

### 7.1 Principles

- Motion should be purposeful, subtle, and brief.
- Use transitions for interactive feedback (hover, focus), not for decoration.
- Do not add scroll-triggered animations, parallax, or entrance effects unless specifically requested.

### 7.2 Transition Defaults

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-theme: 300ms ease;
```

| Element | Property | Duration |
|---------|----------|----------|
| Button hover/focus | background-color, border-color | `--transition-fast` |
| Link hover | color, text-decoration | `--transition-fast` |
| Navigation scroll state | background-color, box-shadow | `--transition-base` |
| Mobile menu open/close | transform, opacity | `--transition-slow` |
| Theme switch (colour properties only) | color, background-color, border-color, box-shadow | `--transition-theme` |

### 7.3 Reduced Motion

Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Accessibility Standards

### 8.1 Requirements

| Requirement | Standard |
|-------------|----------|
| Colour contrast (text) | WCAG AA — 4.5:1 for normal text, 3:1 for large text |
| Colour contrast (UI) | WCAG AA — 3:1 for interactive components and graphics |
| Keyboard navigation | All interactive elements reachable and operable by keyboard |
| Focus indicators | Visible on all focusable elements, not removed by CSS |
| Heading hierarchy | Logical, sequential (H1 → H2 → H3), no skipped levels |
| Semantic HTML | Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` |
| Link labels | Descriptive — no "click here" or unlabelled icons |
| Image alt text | Meaningful alt text for content images; empty alt for decorative |
| Touch targets | Minimum 44×44px for buttons and links on touch devices |
| Reduced motion | Respect `prefers-reduced-motion` media query |

### 8.2 Landmarks

```
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header>   → site navigation
  <main id="main">
    <section id="hero">
    <section id="about">
    <section id="skills">
    <section id="projects">
    <section id="contact">
  </main>
  <footer>
</body>
```

### 8.3 ARIA Usage

- Use ARIA only when native HTML semantics are insufficient.
- Mobile menu toggle: `aria-expanded`, `aria-controls`, `aria-label`.
- Section navigation: each `<section>` can use `aria-labelledby` pointing to its heading.
- External links: `aria-label` describing the destination and that it opens in a new tab.

---

## 9. Responsive Behaviour Summary

| Aspect | Desktop (> 1024px) | Tablet (768–1024px) | Mobile (< 768px) |
|--------|--------------------|--------------------|-------------------|
| Navigation | Name left, links right | Horizontal or condensed | Hamburger menu |
| Hero layout | Left-aligned, 60px heading | Fluid (clamp) | Left-aligned, 38px heading |
| Content width | Max 1120px | Full width - padding | Full width - padding |
| Page padding | 40px | 32px | 20px |
| Section spacing | 96–120px | 72–80px | 56–64px |
| Skills grid | 2–3 columns | 2 columns | 1 column |
| Project layout | Full width, stacked | Full width, stacked | Full width, tighter |
| Body text width | Max 65ch | Max 65ch | Full width |

---

## 10. File Organisation (Planned)

```
/
├── index.html          ← Single-page structure
├── css/
│   └── styles.css      ← All styles, tokens as custom properties
├── js/
│   └── main.js         ← Navigation, smooth scroll, minimal interactivity
├── assets/
│   └── images/         ← Project images when available
├── PRD.md              ← Product requirements (this project)
├── design.md           ← Design system (this document)
├── AGENTS.md           ← Agent instructions and conventions
└── .agents/
    └── skills/         ← Reusable agent skills (if approved)
```

---

## 11. Design Tokens — CSS Custom Properties Reference

> **Note:** All tokens must be defined in `:root` in `styles.css`. Defining the accent and derived states through custom properties ensures the palette can be refined at any time by updating `:root` without altering individual component rules.

When implementation begins, all tokens should be defined in `:root` in `styles.css`:

```css
:root {
  /* Colours */
  --color-bg: #F7F6F2;
  --color-text-primary: #202124;
  --color-text-secondary: #555960;
  --color-accent: #8A4545;
  --color-accent-hover: #793C3C;
  --color-accent-active: #6E3737;
  --color-accent-disabled: #A0A4AB;
  --color-border: #E2E0D9;
  --color-surface-alt: #EEEDE7;
  --color-surface-white: #FFFFFF;

  /* Typography */
  --font-heading: 'Space Grotesk', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  --text-display: clamp(38px, 5vw + 1rem, 60px);
  --text-h2: clamp(30px, 3.5vw + 0.5rem, 40px);
  --text-h3: clamp(22px, 2vw + 0.5rem, 26px);
  --text-h4: clamp(18px, 1.5vw + 0.4rem, 20px);
  --text-body-lg: clamp(17px, 1vw + 0.9rem, 18px);
  --text-body: 16px;
  --text-nav: clamp(14px, 0.5vw + 0.7rem, 15px);
  --text-small: 13px;
  --text-label: 12px;

  /* Spacing */
  --space-4xs: 4px;
  --space-3xs: 8px;
  --space-2xs: 12px;
  --space-xs: 16px;
  --space-sm: 20px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 40px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;
  --space-5xl: 96px;
  --space-6xl: 120px;
  --space-7xl: 160px;

  /* Layout */
  --content-max-width: 1120px;
  --nav-height: 64px;
  --body-max-width: 65ch;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
}
```

### 11.1 Theme Tokens

Tokens that change between themes are declared once in `:root` (light values) and overridden in a single `[data-theme="dark"]` block. Component rules must reference the token, never a raw colour, so that switching themes requires no component changes.

```css
:root {
  /* Theme-sensitive surfaces */
  --color-surface-raised: #FFFFFF;
  --color-accent-soft: rgba(138, 69, 69, 0.06);
  --color-accent-soft-strong: rgba(138, 69, 69, 0.12);

  /* Buttons */
  --color-btn-primary-bg: var(--color-accent);
  --color-btn-primary-bg-hover: var(--color-accent-hover);
  --color-btn-primary-bg-active: var(--color-accent-active);
  --color-btn-primary-text: #FFFFFF;
  --color-btn-secondary-bg: transparent;
  --color-btn-secondary-bg-hover: var(--color-accent-soft);
  --color-btn-secondary-bg-active: var(--color-accent-soft-strong);
  --color-btn-secondary-text: var(--color-accent);
  --color-btn-secondary-text-hover: var(--color-accent-hover);
  --color-btn-secondary-text-active: var(--color-accent-active);
  --color-btn-secondary-border: var(--color-accent);

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(32, 33, 36, 0.04);
  --shadow-md: 0 4px 12px rgba(32, 33, 36, 0.08);
  --shadow-lg: 0 8px 24px rgba(32, 33, 36, 0.08);
  --shadow-accent: 0 10px 28px rgba(138, 69, 69, 0.08);
  --shadow-accent-strong: 0 6px 16px rgba(138, 69, 69, 0.12);

  /* Theme transitions */
  --transition-theme: 300ms ease;
}
```

---

## 12. Dark Theme

### 12.1 Palette

The dark theme is a **token override only** — no component rule changes. It is applied through `data-theme="dark"` on the `<html>` element.

| Token | Light | Dark |
| --- | --- | --- |
| `--color-bg` | `#F7F6F2` | `#121212` |
| `--color-surface-alt` | `#EEEDE7` | `#262626` |
| `--color-surface-raised` | `#FFFFFF` | `#1E1E1E` |
| `--color-text-primary` | `#202124` | `#E8E6E3` |
| `--color-text-secondary` | `#555960` | `#A8A9AD` |
| `--color-accent` | `#8A4545` | `#C97F7F` |
| `--color-accent-hover` | `#793C3C` | `#D99393` |
| `--color-accent-active` | `#6E3737` | `#B96B6B` |
| `--color-accent-disabled` | `#A0A4AB` | `#6B6D73` |
| `--color-border` | `#E2E0D9` | `#3A3B42` |
| `--color-btn-primary-bg` | `#8A4545` | `#8A4545` (unchanged) |

The accent is lightened in dark mode so links, labels and focus rings stay legible on dark surfaces. The primary button keeps the deep burgundy so its white label text remains AA-compliant in both themes.

### 12.2 Contrast Ratios (Verified)

Measured against `--color-bg` (`#121212`):

| Element | Colour | Ratio | Requirement |
| --- | --- | --- | --- |
| Primary text | `#E8E6E3` | 15.0:1 | 4.5:1 |
| Muted text | `#A8A9AD` | 8.0:1 | 4.5:1 |
| Accent (links, focus ring) | `#C97F7F` | 6.1:1 | 4.5:1 |
| Primary button label | `#FFFFFF` on `#8A4545` | 7.0:1 | 4.5:1 |

### 12.3 Behaviour

- The theme is applied by `data-theme` on `<html>`; the value is `light` or `dark`.
- An inline script in `<head>` sets the attribute before first paint, so there is no flash of the wrong theme.
- The visitor's explicit choice is stored in `localStorage` under `portfolio-theme`; when no choice exists, the system `prefers-color-scheme` value is used.
- `localStorage` access is wrapped in `try/catch`: if storage is blocked, the page still renders and the toggle still works for the current session.
- Switching themes transitions colour properties only (`--transition-theme`, 300ms ease). Layout, typography and spacing never change between themes.
- `prefers-reduced-motion: reduce` disables the theme transition, as it does all other motion.

### 12.4 Component Notes

- Dark brand marks that would disappear on a dark surface (for example the Express.js and PostgreSQL logos) sit on a white chip (`--color-surface-white`) inside the pill.
- Focus ring colour follows `--color-accent`, so it remains AA-compliant in both themes.
