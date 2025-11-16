/* =========================
 Theme Price Switcher utility js  
=========================== */

const themeSwitcher = {
  elements: null,
  animationConfig: { duration: 0.6, delay: 0.2, ease: 'power2.out' },

  get isForcedPage() {
    return !!document.documentElement.dataset.forceTheme;
  },

  get forcedTheme() {
    return document.documentElement.dataset.forceTheme || null; // "light" or null
  },

  init() {
    try {
      this.cacheElements();
      this.setInitialTheme();
      this.bindEvents();
    } catch (error) {
      console.error('Theme switcher initialization failed:', error);
    }
  },

  cacheElements() {
    this.elements = {
      darkIcon: document.getElementById('dark-theme-icon'),
      lightIcon: document.getElementById('light-theme-icon'),
      toggleBtn: document.getElementById('theme-toggle'),
      toggleBtnMobile: document.getElementById('theme-toggle-mobile'),
      html: document.documentElement,
    };
  },

  setInitialTheme() {
    // Respect forced pages; do not touch localStorage
    if (this.isForcedPage) {
      this.setTheme(this.forcedTheme, { persist: false });
      // Optionally hide the toggle if it exists:
      if (this.elements.toggleBtn) this.elements.toggleBtn.style.display = 'none';
      return;
    }

    // Normal pages: use saved or system preference
    const storedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (prefersDark ? 'dark' : 'light');
    this.setTheme(theme, { persist: false });
  },

  bindEvents() {
    const { toggleBtn, toggleBtnMobile } = this.elements;
    if (this.isForcedPage) return;

    const handleToggle = () => {
      const isDark = this.elements.html.classList.contains('dark');
      this.setTheme(isDark ? 'light' : 'dark', { persist: true });
    };

    if (toggleBtn) {
      toggleBtn.addEventListener('click', handleToggle);
    }

    if (toggleBtnMobile) {
      toggleBtnMobile.addEventListener('click', handleToggle);
    }
  },

  setTheme(theme, { persist = true } = {}) {
    if (!['dark', 'light'].includes(theme)) return;

    const { html } = this.elements;
    html.classList.remove('dark', 'light');
    html.classList.add(theme);

    // Only persist on non-forced pages
    if (persist && !this.isForcedPage) {
      localStorage.setItem('color-theme', theme);
    }

    this.updateIcons(theme === 'dark');
  },

  updateIcons(isDark) {
    const { darkIcon, lightIcon } = this.elements;

    // Update desktop icons
    if (darkIcon && lightIcon) {
      const showIcon = isDark ? darkIcon : lightIcon;
      const hideIcon = isDark ? lightIcon : darkIcon;

      hideIcon.classList.add('hidden');
      showIcon.classList.remove('hidden');

      if (typeof gsap !== 'undefined') {
        gsap.fromTo(
          showIcon,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: this.animationConfig.duration,
            delay: this.animationConfig.delay,
            ease: this.animationConfig.ease,
          }
        );
      }
    }

    // Update mobile icons
    const lightIcons = document.querySelectorAll('.light-icon');
    const darkIcons = document.querySelectorAll('.dark-icon');

    lightIcons.forEach(icon => {
      if (isDark) {
        icon.classList.remove('hidden');
      } else {
        icon.classList.add('hidden');
      }
    });

    darkIcons.forEach(icon => {
      if (isDark) {
        icon.classList.add('hidden');
      } else {
        icon.classList.remove('hidden');
      }
    });
  },
};

if (typeof window !== 'undefined') {
  themeSwitcher.init();
}
