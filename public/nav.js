// Injects consistent header + alert banner into every page
(function () {
  const links = [
    { href: '/',                  label: 'Home' },
    { href: '/about.html',        label: 'About' },
    { href: '/service-area.html', label: 'Service Area' },
    { href: '/alerts.html',       label: 'Alerts', cls: 'nav-alerts-link' },
    { href: '/join.html',         label: 'Join Us' },
    { href: '/donate.html',       label: 'Donate' },
    { href: '/contact.html',      label: 'Contact' },
  ];

  const current = location.pathname.replace(/\/$/, '') || '/';

  function isActive(href) {
    const h = href.replace(/\/$/, '') || '/';
    return current === h || (h !== '/' && current.startsWith(h));
  }

  const navHtml = links.map(l =>
    `<a href="${l.href}" class="${(l.cls || '') + (isActive(l.href) ? ' active' : '')}">${l.label}</a>`
  ).join('');

  document.getElementById('site-header').innerHTML = `
    <div class="header-inner">
      <div class="site-title">
        <span>Capps-Batavia Fire Department</span>
      </div>
      <button class="menu-toggle" id="menu-toggle" aria-label="Menu">☰</button>
      <nav id="main-nav">${navHtml}</nav>
    </div>
  `;

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('open');
  });

  // Load and show alert banner if active alerts exist
  fetch('/api/alerts').then(r => r.json()).then(alerts => {
    if (!alerts.length) return;
    const banner = document.getElementById('alert-banner');
    const first = alerts[0];
    banner.innerHTML = `<div class="alert-banner-inner"><span>${first.title}</span> &mdash; <a href="/alerts.html">View all alerts</a></div>`;
    banner.classList.add('visible');
  }).catch(() => {});
})();
