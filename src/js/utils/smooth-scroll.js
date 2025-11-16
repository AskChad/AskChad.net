/* =========================
 Smooth Scroll Navigation & Mobile Menu
=========================== */

const smoothScroll = {
  init() {
    try {
      this.initSmoothScroll();
      this.initMobileMenu();
    } catch (error) {
      console.error('Smooth scroll initialization failed:', error);
    }
  },

  initSmoothScroll() {
    // Smooth scroll for all links with .smooth-scroll class or hash links
    const smoothScrollLinks = document.querySelectorAll('a.smooth-scroll, a[href^="#"]');

    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only handle hash links
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            e.preventDefault();

            // Close mobile menu if open
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
              mobileMenu.style.transform = 'translateY(-100%)';
            }

            // Smooth scroll to target
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

            // Update URL without jumping
            history.pushState(null, null, href);
          }
        }
      });
    });
  },

  initMobileMenu() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function() {
        const isOpen = mobileMenu.style.transform === 'translateY(0%)';
        mobileMenu.style.transform = isOpen ? 'translateY(-100%)' : 'translateY(0%)';
      });
    }
  }
};

// Initialize on DOM ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    smoothScroll.init();
  });
}
