# Product Requirements Document — Personal Portfolio

## 1. Product Overview

A professional, responsive, one-page personal portfolio website built as part of the Dev and Design HQ Product Engineering Bootcamp graduation task.

The site showcases the owner's capabilities as a junior software developer with complementary skills in UI/UX design and WordPress development, with an emphasis on AI-assisted product development.

**Status:** Planning phase. No implementation until these documents are reviewed and approved.

---

## 2. Goals

| # | Goal | Success indicator |
|---|------|-------------------|
| 1 | Present a clear professional identity | Visitors understand the owner's positioning within 10 seconds |
| 2 | Demonstrate real project work | Up to three case studies with genuine evidence and links |
| 3 | Be accessible and performant | Passes WCAG AA, loads quickly on slower connections |
| 4 | Work well on all devices | Polished experience on mobile, tablet, and desktop |
| 5 | Be easy to maintain | Editable placeholders, reusable components, clean code |
| 6 | Stand out from generic templates | Editorial visual direction with strong typography and whitespace |

---

## 3. Target Audience

| Audience | What they look for |
|----------|-------------------|
| Hiring managers and recruiters | Evidence of skills, clear communication, professionalism |
| Technical leads | Code quality, technical decisions, problem-solving approach |
| Design collaborators | Visual sensibility, user-centred thinking |
| Bootcamp assessors | Completion quality, learning demonstrated, applied skills |

---

## 4. Career Positioning (Provisional)

These are provisional and should be refined as experience develops:

- **Primary role:** Junior Software Developer
- **Secondary role:** UI/UX Designer
- **Additional skill:** WordPress Development

---

## 5. Content Structure

The website is a single page with the following sections, in order:

### 5.1 Navigation
- Sticky or fixed navigation.
- Desktop: name or wordmark on the left, section links on the right.
- Mobile: hamburger menu with slide-out or overlay.
- Smooth scroll to sections.

### 5.2 Hero Section
- Layout: **Centred** on all viewports, personal-identity-first editorial hierarchy.
- Content hierarchy:
  1. **Main heading:** `[Your Name]` — primary H1, prominent Space Grotesk typography (`--text-display`).
  2. **Supporting headline:** “I build digital products with code and thoughtful design.” (`--text-h3`).
  3. **Description:** “I build responsive applications and practical digital solutions, combining software development with user-centred design to create experiences that are functional, intuitive, and useful.” (`--text-body-lg`).
  4. **Primary CTA:** “View Projects” (scrolls to `#projects`).
  5. **Secondary CTA:** “Get in Touch” (scrolls to `#contact`).
- Visual direction: Editorial-modern, generous whitespace, warm off-white background, burgundy accent `#8A4545`. No profile photo. No separate role tags above heading.

### 5.3 About Section
- Concise introduction covering:
  - Background and training (placeholder for personal details).
  - Approach to learning and building.
  - Type of work sought.
- Keep paragraphs short and scannable.
- Placeholder: `[Brief personal background]`, `[Training and learning approach]`.

### 5.4 Skills and Tools
- Displayed as a unified, responsive grid of 9 confirmed technical skills and tools:
  1. **HTML**
  2. **CSS**
  3. **JavaScript**
  4. **Node.js**
  5. **Express.js**
  6. **PostgreSQL**
  7. **React Native**
  8. **Git & GitHub**
  9. **Figma**
- Layout: 3-column grid on desktop and tablet (3×3), adapting to smaller viewports.
- Each item features an authentic vector logo and readable label.
- No proficiency bars, percentages, or arbitrary ratings.
- Excluded: Antigravity, Gemini, WordPress, and unconfirmed technologies.

### 5.5 Selected Projects
- Structure supports up to **four** project case studies (2×2 grid on desktop/tablet).
- Layout: 2-column grid on desktop and tablet, stacked into 1 column on mobile.
- Connected project-card design:
  - Project preview / screenshot at the top with consistent height.
  - White information panel attached directly beneath with no gap.
  - Rounded outer corners only (`var(--radius-lg)`).
  - Displays:
    1. Project name (`[Project title]`)
    2. Project category (e.g. Software Development or UI/UX Design)
    3. Short project description
    4. “View Case Study” link with arrow icon
- All content uses neutral placeholders until genuine content is supplied.

**Rules:**
- Do not present unstarted projects as completed or in progress.
- Do not include OwoLog or the Lagos BRT waiting-time case study.
- Do not invent screenshots, metrics, outcomes, testimonials, or links.
- Make it easy to swap placeholder content without redesigning the layout.

### 5.6 Contact and Footer
- Editable placeholders for:
  - Email: `[your.email@example.com]`
  - LinkedIn: `[LinkedIn profile URL]`
  - GitHub: `[GitHub profile URL]`
  - Portfolio or other links: `[Additional links]`
  - Working hours: West Africa Time (WAT), `[e.g. 9 AM – 5 PM WAT]`
- Do not use fabricated URLs. Use `#` or placeholder text until genuine links are available.
- Footer includes a copyright notice with the current year.

---

## 6. Scope

### In scope (Phase 1 — this project)
- Single-page responsive portfolio.
- Semantic HTML, CSS, vanilla JavaScript.
- All sections listed above.
- Accessibility (WCAG AA compliance).
- Performance optimisation (efficient fonts, minimal dependencies).
- Mobile, tablet, and desktop layouts.
- Light/dark theme toggle with a persisted visitor preference (added after initial planning; see `design.md` §12).

### Out of scope (for now)
- Blog or CMS.
- Backend or database.
- Contact form with server-side processing.
- Multi-page routing.
- Analytics or tracking.
- Third-party UI frameworks or CSS libraries.

---

## 7. Acceptance Criteria

| # | Criterion |
|---|-----------|
| 1 | All sections render correctly on mobile (≥ 320px), tablet, and desktop |
| 2 | Navigation links scroll smoothly to the correct section |
| 3 | Mobile navigation opens and closes correctly |
| 4 | All text meets WCAG AA contrast requirements |
| 5 | The site is fully navigable by keyboard |
| 6 | Focus indicators are clearly visible |
| 7 | No horizontal overflow on any viewport |
| 8 | Fonts load efficiently with appropriate fallbacks |
| 9 | Placeholder content is clearly labelled and easy to replace |
| 10 | No fabricated personal details, project data, or links |
| 11 | HTML is semantic with a logical heading hierarchy |
| 12 | Page loads quickly with minimal dependencies |
| 13 | The visual design follows the direction in `design.md` |
| 14 | The theme toggle switches between light and dark without reloading the page |
| 15 | The theme choice persists across visits; the system preference is used when no choice has been made |
| 16 | Both themes meet WCAG AA contrast requirements and honour `prefers-reduced-motion` |

---

## 8. Information Still Needed

The following must be supplied by the owner before the portfolio is complete:

| Category | Details needed |
|----------|---------------|
| **Personal** | Full name, short bio, professional photo (optional) |
| **About** | Personal background, training details, career goals |
| **Skills** | **Confirmed** (9 items: HTML, CSS, JavaScript, Node.js, Express.js, PostgreSQL, React Native, Git & GitHub, Figma) |
| **Projects** | Three completed project case studies with genuine details |
| **Contact** | Real email address, LinkedIn URL, GitHub URL |
| **Working hours** | Confirmed availability in WAT |
| **Links** | Any additional portfolio, Behance, or Dribbble links |

---

## 9. Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Architecture | Single HTML file + CSS + JS | Simple, fast, no build step needed for Phase 1 |
| Styling | Vanilla CSS with custom properties | Full control, no framework overhead |
| Fonts | Google Fonts (Space Grotesk + Inter) | Editorial feel, excellent web support |
| JavaScript | Vanilla JS, no framework | Minimal interactivity needed (nav, scroll) |
| Hosting | **Vercel** | Free tier, easy deployment, good performance |
| Hero layout | **Left-aligned** | Confirmed — editorial feel, strong visual hierarchy |
| Navigation | **Name left, links right** | Confirmed — conventional, clear orientation |
| Colour palette | **Confirmed (Burgundy accent)** | Core palette confirmed with burgundy (`#8A4545`) accent for interactive elements, defined via CSS custom properties for straightforward adjustment if needed |
| Theming | **CSS custom properties + `data-theme` attribute** | Light and dark palettes share one set of tokens, so a theme switch requires no component changes. The active theme is stored in `localStorage` and applied before first paint to avoid a flash of the wrong theme |

These decisions can be revisited if requirements change.

---

## 10. Phases

| Phase | Description | Status |
|-------|-------------|--------|
| **1 — Planning** | PRD, design system, agent instructions | **Current** |
| **2 — Implementation** | Build the site following approved plans | Pending approval |
| **3 — Content** | Replace placeholders with real content | Pending |
| **4 — Polish** | Final review, accessibility audit, optimisation | Pending |
| **5 — Deploy** | Publish to hosting platform | Pending |
