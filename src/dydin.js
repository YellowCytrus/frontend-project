console.log('Страница Дениса Дыдина загружена');

(function () {
  function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
      setTimeout(initTheme, 100);
      return;
    }

    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'light';
    const currentTheme = savedTheme;

    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      body.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
      const isDark = body.getAttribute('data-theme') === 'dark';

      if (isDark) {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
