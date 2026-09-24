(function() {
  document.documentElement.classList.add('js-loaded');

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function initSmoothScroll() {
    document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.getAttribute('data-scroll-to') || '');
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initReveal();
      initSmoothScroll();
    });
  } else {
    initReveal();
    initSmoothScroll();
  }

  document.addEventListener('astro:page-load', () => {
    initReveal();
    initSmoothScroll();
  });
})();