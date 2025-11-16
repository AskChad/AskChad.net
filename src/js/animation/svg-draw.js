const svgDraw = {
  init() {
    // Check if GSAP and required plugins are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof DrawSVGPlugin === 'undefined') {
      console.warn('GSAP or required plugins not loaded. SVG draw animations will be disabled.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    const selectors = ['#svg-one', '#svg-two', '#svg-three'];

    const existingSelectors = selectors.filter((selector) => {
      const element = document.querySelector(selector);
      return element !== null;
    });

    if (existingSelectors.length === 0) {
      return;
    }

    gsap.set(existingSelectors.join(', '), { visibility: 'visible' });

    existingSelectors.forEach((selector) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
        },
      });

      tl.from(selector, {
        duration: 1,
        drawSVG: 1,
        delay: 0.5,
        ease: 'power2.out',
      });
    });
  },
};

window.addEventListener('DOMContentLoaded', () => {
  svgDraw.init();
});
