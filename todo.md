# capps-batavia-fd — todo

_What this is: Express-served website for the Capps-Batavia Volunteer Fire Department (Boone County, AR), with a password-protected alerts admin and a service-area map fed by ArcGIS boundary data. Deployed on Railway._

## In progress
- Site redesign complete. Hero uses real CBFD photos (weighted rotation + manual arrows). Join page content is largely filled in.

## Next up
- Remaining content placeholders: About (history, bylaws PDF, roster/officers), Contact (Facebook URL, station address, meeting schedule), Donate (online methods like PayPal/Venmo if wanted; mailing address is done).
- Verify Capps & Batavia fire-station map coordinates (still from OSM); Ridgeway is confirmed (10470 Gass Ct).
- Decide on a real `ADMIN_PASSWORD` via Railway env var instead of the `cbfd-admin` default in server.js.

## Standing notes
- NO EM DASHES anywhere in site copy (user preference). Use periods, commas, or middots.
- Hero images: drop files in `public/images/`, list in `HERO_IMAGES` in index.html. `weight` = frequency, `fit:'contain'` = blurred-fill for small photos, `season`/`from`/`to` = scheduling.
- Join form is live via Formspree (id `mbdvjrog`), emails to cbfd5003@gmail.com. Onboarding "What to Expect" steps are done.

## Backlog
- Confirm `DATA_DIR` points at a Railway volume so `alerts.json` survives redeploys (currently defaults to repo dir — alerts would be lost on each deploy).
- Add a basic README (setup, env vars, deploy notes).

## Done
- Removed decorative emoji sitewide (hero, nav, card icons, placeholders, admin dropdown). Kept the `☰` mobile menu glyph.
- District map no longer fetched live on every visit. Saved to `public/boundary.json` from Arkansas GIS (`gis.arkansas.gov/.../Boundaries/FeatureServer/59`, layer `FIRE_DISTRICTS`, FDID 05003). Old source (`services.arcgis.com/PwY9.../FeatureServer/59`) was dead. Refresh with `npm run refresh-map`.
- Service Area page now shows district stats (sq mi · households · addresses) pulled from the saved data — restores the old "popcount". Source figures: 67 sq mi, 1,708 households, 2,112 addresses (AR GIS, rev. Sept 2023).
- Dropped `node-fetch` dependency (Node 22 has built-in `fetch`).
- Service Area map: cropped/locked to district, dimmed-outside mask, town/highway labels, 9 community labels, 3 fire-station icons (Capps/Batavia/Ridgeway), population 4,209 in stats bar.
- Full site redesign: shared design system in `style.css` + `nav.js` (util bar, masthead+nav, footer injected everywhere). Serif headings (Libre Baskerville), Source Sans body, warm light base, dark masthead/footer, red accent. Homepage hero supports scheduled + rotating images.

## Loose ends (code TODO/FIXME)
- None — no TODO/FIXME comments found in the codebase.
