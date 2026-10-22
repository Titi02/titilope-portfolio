/**
 * Personal Portfolio — Interactive Features
 * Step 2.4: Mobile Navigation, Footer Year, and Active Section Highlighting
 * Theme Toggle: light/dark switching with persisted preference
 *
 * Requirements & Standards:
 * - AGENTS.md §4: Vanilla JavaScript only, minimal, keyboard accessible, const/let only.
 * - WCAG AA: Accessible focus management, aria-expanded/aria-controls, non-colour active states.
 * - Respects prefers-reduced-motion preferences.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initFooterYear();
  initActiveSectionNavigation();
  initAboutScrollReveal();
  initContactScrollReveal();
  initThemeToggle();
});

/**
 * 1. Mobile Navigation
 * Handles mobile hamburger toggle, open/close overlay states,
 * aria attributes, Escape key handling, and responsive window resizing.
 */
function initMobileNavigation() {
  const navToggle = document.querySelector('.site-nav__toggle');
  const navLinks = document.getElementById('nav-links');

  if (!navToggle || !navLinks) {
    return;
  }

  // Ensure aria-controls is correctly mapped to the navigation list ID
  if (navToggle.getAttribute('aria-controls') !== navLinks.id) {
    navToggle.setAttribute('aria-controls', navLinks.id);
  }

  const isMenuOpen = () => navToggle.getAttribute('aria-expanded') === 'true';

  const openMenu = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation menu');
    navLinks.classList.add('site-nav__links--open');
    navToggle.style.position = 'relative';
    navToggle.style.zIndex = '101';
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = (returnFocusToToggle = false) => {
    if (!isMenuOpen()) return;

    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    navLinks.classList.remove('site-nav__links--open');
    navToggle.style.position = '';
    navToggle.style.zIndex = '';
    document.body.style.overflow = '';

    if (returnFocusToToggle) {
      navToggle.focus();
    }
  };

  // Toggle button click
  navToggle.addEventListener('click', () => {
    if (isMenuOpen()) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  // Close menu when any navigation link is clicked
  const links = navLinks.querySelectorAll('.site-nav__link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu(false);
    });
  });

  // Close menu on Escape key press and return focus to toggle button
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen()) {
      closeMenu(true);
    }
  });

  // Close menu if user clicks on the backdrop area outside link items
  navLinks.addEventListener('click', (event) => {
    if (event.target === navLinks && isMenuOpen()) {
      closeMenu(false);
    }
  });

  // Ensure menu closes and body scroll lock resets when resizing to desktop width (>= 1024px)
  const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');
  const handleViewportChange = (e) => {
    if (e.matches && isMenuOpen()) {
      closeMenu(false);
    }
  };

  if (desktopMediaQuery.addEventListener) {
    desktopMediaQuery.addEventListener('change', handleViewportChange);
  } else if (desktopMediaQuery.addListener) {
    // Backward compatibility for older browser engines
    desktopMediaQuery.addListener(handleViewportChange);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && isMenuOpen()) {
      closeMenu(false);
    }
  });
}

/**
 * 2. Footer Year
 * Sets the dynamic copyright year in the footer to the current calendar year.
 */
function initFooterYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = String(currentYear);
  }
}

/**
 * 3. Active Section Navigation
 * Uses IntersectionObserver to detect the current visible section.
 * Updates the active navigation link using both CSS class and aria-current,
 * plus a non-colour visual cue (underline border) to ensure WCAG 1.4.1 compliance.
 * Respects prefers-reduced-motion preferences.
 */
function initActiveSectionNavigation() {
  const navLinks = document.querySelectorAll('.site-nav__link');
  if (!navLinks.length) return;

  const sectionIds = ['hero', 'projects', 'about', 'skills', 'contact'];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el) => el !== null);

  if (!sections.length) return;

  // Updates active state across all navigation links
  const updateActiveLink = (activeSectionId) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isMatch = href === `#${activeSectionId}`;

      if (isMatch) {
        link.classList.add('site-nav__link--active');
        link.setAttribute('aria-current', 'true');
        // Visual indicator that does not rely on colour alone (WCAG 1.4.1)
        link.style.borderBottom = '2px solid currentColor';
      } else {
        link.classList.remove('site-nav__link--active');
        link.removeAttribute('aria-current');
        link.style.borderBottom = '';
      }
    });
  };

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Optional enhancement: ensure smooth scrolling for in-page navigation links respects reduced motion
  const allInPageLinks = document.querySelectorAll('a[href^="#"]');
  allInPageLinks.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        const headerOffset = 64;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
        });

        // Set focus to the target element if focusable, or manage focus for accessibility
        if (targetElement.tabIndex < 0) {
          targetElement.setAttribute('tabindex', '-1');
        }
        targetElement.focus({ preventScroll: true });

        // Update URL hash without causing a default jump
        if (window.history.pushState) {
          window.history.pushState(null, '', targetId);
        }
      }
    });
  });

  // Use IntersectionObserver when available
  if ('IntersectionObserver' in window) {
    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // 1. Bottom of page edge case: if scrolled near the bottom, contact is active
        const scrollBottom = window.innerHeight + window.scrollY;
        const totalHeight = document.documentElement.scrollHeight;
        if (totalHeight - scrollBottom <= 60) {
          updateActiveLink('contact');
          return;
        }

        // 2. Top of page edge case: if in hero or scrollY is minimal, no section link active
        if (window.scrollY < 80) {
          updateActiveLink('hero');
          return;
        }

        // 3. From currently visible sections, choose the one closest to the upper viewport area
        if (visibleSections.size > 0) {
          const headerZone = 70;
          let bestCandidate = null;
          let minDistance = Infinity;

          visibleSections.forEach((ratio, id) => {
            const sectionEl = document.getElementById(id);
            if (sectionEl) {
              const rect = sectionEl.getBoundingClientRect();
              const distance = Math.abs(rect.top - headerZone);
              if (distance < minDistance) {
                minDistance = distance;
                bestCandidate = id;
              }
            }
          });

          if (bestCandidate) {
            updateActiveLink(bestCandidate);
          }
        }
      },
      {
        root: null,
        rootMargin: '-70px 0px -40% 0px',
        threshold: [0, 0.2, 0.5, 0.8]
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Scroll listener fallback for rapid scrolling or extreme edge cases
    window.addEventListener(
      'scroll',
      () => {
        const scrollBottom = window.innerHeight + window.scrollY;
        const totalHeight = document.documentElement.scrollHeight;
        if (totalHeight - scrollBottom <= 60) {
          updateActiveLink('contact');
        } else if (window.scrollY < 80) {
          updateActiveLink('hero');
        }
      },
      { passive: true }
    );
  } else {
    // Fallback for browsers without IntersectionObserver
    const handleScrollFallback = () => {
      const scrollPosition = window.scrollY;
      const headerOffset = 80;
      let activeId = 'hero';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerOffset;
        if (scrollPosition >= sectionTop) {
          activeId = section.id;
        }
      });

      const scrollBottom = window.innerHeight + window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      if (totalHeight - scrollBottom <= 60) {
        activeId = 'contact';
      }

      updateActiveLink(activeId);
    };

    window.addEventListener('scroll', handleScrollFallback, { passive: true });
    handleScrollFallback();
  }
}

/**
 * 4. About Section Scroll Reveal
 * Adds a gentle fade-in and slight upward movement when entering the viewport.
 * Progressive enhancement: element is immediately visible if JS fails or is disabled.
 * Respects prefers-reduced-motion preferences.
 */
function initAboutScrollReveal() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    return;
  }

  // Add reveal-ready class only when JS runs and reduced-motion is not requested
  aboutSection.classList.add('about--reveal-ready');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about--revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealObserver.observe(aboutSection);
}

/**
 * 5. Contact Section Scroll Reveal
 * Adds a gentle fade-in and slight upward movement when entering the viewport.
 * Progressive enhancement: element is immediately visible if JS fails or is disabled.
 * Respects prefers-reduced-motion preferences.
 */
function initContactScrollReveal() {
  const contactSection = document.getElementById('contact');
  if (!contactSection) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    return;
  }

  // Add reveal-ready class only when JS runs and reduced-motion is not requested
  contactSection.classList.add('contact--reveal-ready');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('contact--revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealObserver.observe(contactSection);
}

/**
 * 6. Theme Toggle
 * Switches between the light and dark themes, keeps the toggle icon and
 * accessible label in sync with the active theme, and persists the
 * visitor's explicit choice for subsequent visits.
 *
 * The inline script in <head> has already applied the theme before the
 * first paint, so no flash or theme animation occurs on page load.
 * localStorage access is wrapped in try/catch: when storage is
 * unavailable the toggle still works for the current page session.
 */
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  if (!toggle) return;

  const STORAGE_KEY = 'portfolio-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Read a saved choice — returns null when storage is blocked or unset
  const readSavedTheme = () => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return (saved === 'light' || saved === 'dark') ? saved : null;
    } catch {
      return null;
    }
  };

  // Save the visitor's explicit choice — failures are non-fatal
  const saveTheme = (theme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Storage unavailable — the theme still applies for this session */
    }
  };

  // Keep the icon and accessible label in step with the active theme
  const updateToggle = (theme) => {
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    updateToggle(theme);
  };

  // Sync the button with the theme already applied by the inline head script
  const activeTheme = root.getAttribute('data-theme')
    || (prefersDark.matches ? 'dark' : 'light');
  applyTheme(activeTheme);

  // Switch to the opposite theme and remember the choice
  toggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });

  // Follow the system preference only while the visitor has not chosen a theme
  const handleSystemPreferenceChange = (event) => {
    if (readSavedTheme()) return;
    applyTheme(event.matches ? 'dark' : 'light');
  };

  if (prefersDark.addEventListener) {
    prefersDark.addEventListener('change', handleSystemPreferenceChange);
  } else if (prefersDark.addListener) {
    // Backward compatibility for older browser engines
    prefersDark.addListener(handleSystemPreferenceChange);
  }
}


