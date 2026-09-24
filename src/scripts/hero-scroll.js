// hero-scroll.js - Smooth scroll to #page-content
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.scroll-cta[data-scroll-to="page-content"]');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-scroll-to');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});