// theme-toggle.js - Theme toggle button logic
(function() {
  const btn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  const labels = {
    light: btn.dataset.themeLight || 'Light',
    dark: btn.dataset.themeDark || 'Dark'
  };

  const titles = {
    light: btn.dataset.themeLightTitle || 'Light',
    dark: btn.dataset.themeDarkTitle || 'Dark'
  };

  const icons = {
    light: '\
      <svg class="w-5 h-5 text-[var(--ink)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">\
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>\
      </svg>',
    dark: '\
      <svg class="w-5 h-5 text-[var(--ink)]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">\
        <circle cx="12" cy="12" r="5"></circle>\
        <line x1="12" y1="1" x2="12" y2="3"></line>\
        <line x1="12" y1="21" x2="12" y2="23"></line>\
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>\
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>\
        <line x1="1" y1="12" x2="3" y2="12"></line>\
        <line x1="21" y1="12" x2="23" y2="12"></line>\
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>\
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>\
      </svg>'
  };

  const states = ['light', 'dark'];
  let currentState = 'light';

  function applyTheme(theme) {
    const isDark = theme === 'dark';

    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    currentState = theme;
    btn.innerHTML = icons[theme];
    btn.setAttribute('aria-label', labels[theme]);
    btn.setAttribute('title', titles[theme]);
    btn.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function getNextState(current) {
    const index = states.indexOf(current);
    return states[(index + 1) % states.length];
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && states.includes(savedTheme)) {
    currentState = savedTheme;
  }
  applyTheme(currentState);

  btn.addEventListener('click', function() {
    btn.classList.add('ring-2', 'ring-[var(--ink)]');
    setTimeout(function() {
      btn.classList.remove('ring-2', 'ring-[var(--ink)]');
    }, 150);
    btn.blur();
    
    const nextState = getNextState(currentState);
    applyTheme(nextState);
  });
})();