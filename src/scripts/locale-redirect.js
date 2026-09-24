// locale-redirect.js - Root page locale redirect based on browser language
(function() {
  const lang = navigator.language || navigator.userLanguage || 'en';
  const prefersFrench = lang.toLowerCase().startsWith('fr');
  const target = prefersFrench ? '/fr' : '/en';
  if (window.location.pathname === '/' || window.location.pathname === '') {
    window.location.replace(target);
  }
})();