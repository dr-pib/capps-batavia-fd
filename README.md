# Capps-Batavia Fire Department website

Public website for the Capps-Batavia Volunteer Fire Department (Boone County, Arkansas).
Static HTML/CSS/JS served by a small Express app, with a password-protected
alerts admin, a service-area map, and a volunteer-application form.

## Tech

- Node 22 + Express 5 (`server.js`), serving static files from `public/`
- Vanilla HTML/CSS/JS (no build step); shared chrome injected by `public/nav.js`
- Leaflet for the service-area map (Esri imagery + Arkansas GIS district boundary)
- Formspree for the Join-page application form
- Deployed on Railway (auto-deploys on push to `main`)

## Run locally

```bash
npm install
npm start          # serves on http://localhost:3000 (or $PORT)
```

## Project layout

- `server.js` — Express server (static hosting + the alerts API)
- `public/` — the site
  - `*.html` — pages (index, about, service-area, alerts, join, donate, contact, admin)
  - `nav.js` — injects the utility bar, masthead + nav, alert banner, and footer
  - `style.css` — the shared design system
  - `boundary.json` — saved fire-district polygon (see `npm run refresh-map`)
  - `images/` — hero photos (`images/README.md` explains the config)
- `scripts/refresh-map.js` — re-fetches the district boundary from Arkansas GIS

## Environment variables

- `PORT` — server port (default `3000`)
- `ADMIN_PASSWORD` — password for `/admin.html` (default `cbfd-admin`; **set a real one in Railway**)
- `DATA_DIR` — where `alerts.json` is written (default: repo dir; point at a Railway volume so alerts survive redeploys)

## Common tasks

- **Update the district map:** `npm run refresh-map` (re-fetches and overwrites `public/boundary.json`)
- **Add/rotate hero photos:** drop files in `public/images/` and edit `HERO_IMAGES` in `public/index.html` (see `public/images/README.md`)
- **Post a community alert:** log in at `/admin.html`

## Conventions

- **No em dashes** anywhere in site copy. Use periods, commas, or middots.
- Task tracking lives in `todo.md` (read by the owner's Project HQ dashboard).
