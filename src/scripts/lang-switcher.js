// lang-switcher.js - Language switch button logic
(function() {
  const btn = document.getElementById('lang-toggle');
  const targetLang = btn.dataset.lang;
  
  btn.addEventListener('click', function() {
    btn.classList.add('ring-2', 'ring-[var(--ink)]');
    setTimeout(function() {
      btn.classList.remove('ring-2', 'ring-[var(--ink)]');
    }, 150);
    localStorage.setItem('locale', targetLang);
    window.location.href = '/' + targetLang;
  });
})();