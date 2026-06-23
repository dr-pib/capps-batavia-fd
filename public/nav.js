// Injects the shared chrome (utility bar, masthead + nav, alert banner, footer)
// into every page. Pages just need: <div id="site-header"></div>,
// <div id="alert-banner"></div>, and <div id="site-footer"></div>.
(function () {
  const links = [
    { href: '/',                  label: 'Home' },
    { href: '/about.html',        label: 'About' },
    { href: '/service-area.html', label: 'Service Area' },
    { href: '/alerts.html',       label: 'Community Alerts', cls: 'alerts' },
    { href: '/join.html',         label: 'Join Us' },
    { href: '/donate.html',       label: 'Donate' },
    { href: '/contact.html',      label: 'Contact' },
  ];

  const current = location.pathname.replace(/\/$/, '') || '/';
  const isActive = (href) => {
    const h = href.replace(/\/$/, '') || '/';
    return current === h || (h !== '/' && current.startsWith(h));
  };

  const navHtml = links.map(l =>
    `<a href="${l.href}" class="${(l.cls || '') + (isActive(l.href) ? ' active' : '')}">${l.label}</a>`
  ).join('');

  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
      <div class="masthead">
        <div class="masthead-inner">
          <button class="menu-toggle" id="menu-toggle" aria-label="Menu">&#9776;</button>
          <div class="logo-row">
            <span class="emblem" aria-hidden="true"></span>
            <div class="wordmark">
              <div class="name">Capps-Batavia Fire Department</div>
              <div class="sub">Since 1977</div>
            </div>
          </div>
          <nav class="primary" id="main-nav">${navHtml}</nav>
        </div>
      </div>
    `;
    const toggle = document.getElementById('menu-toggle');
    if (toggle) toggle.addEventListener('click', () => document.getElementById('main-nav').classList.toggle('open'));
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.outerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="fname">Capps-Batavia Fire Department</div>
          <div class="fsub">Boone County, Arkansas &middot; <a href="mailto:cbfd5003@gmail.com">cbfd5003@gmail.com</a></div>
          <div class="femergency">For emergencies, dial <strong>9-1-1</strong></div>
        </div>
      </footer>
    `;
  }

  // Show alert banner if there are active alerts
  const banner = document.getElementById('alert-banner');
  if (banner) {
    fetch('/api/alerts').then(r => r.json()).then(alerts => {
      if (!alerts.length) return;
      banner.innerHTML = `<div class="alert-banner-inner"><span>${alerts[0].title}</span> · <a href="/alerts.html">View all alerts</a></div>`;
      banner.classList.add('visible');
    }).catch(() => {});
  }
})();
