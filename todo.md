# capps-batavia-fd — todo

_What this is: Express-served website for the Capps-Batavia Volunteer Fire Department (Boone County, AR), with a password-protected alerts admin and a service-area map fed by ArcGIS boundary data. Deployed on Railway._

## In progress
- Nothing actively in flight — site is built and deployed; remaining work is content.

## Next up
- Replace content placeholders flagged with "✏️" across pages: about (mission, history, bylaws PDF, roster), join (requirements, application process), donate (donation methods + mailing address), contact (Facebook URL, station address, meeting schedule).
- Decide on real `ADMIN_PASSWORD` via Railway env var instead of relying on the `cbfd-admin` default in server.js.

## Backlog
- Confirm `DATA_DIR` points at a Railway volume so `alerts.json` survives redeploys (currently defaults to repo dir — alerts would be lost on each deploy).
- Add a basic README (setup, env vars, deploy notes).

## Done
- Removed decorative emoji sitewide (hero, nav, card icons, placeholders, admin dropdown). Kept the `☰` mobile menu glyph.
- District map no longer fetched live on every visit. Saved to `public/boundary.json` from Arkansas GIS (`gis.arkansas.gov/.../Boundaries/FeatureServer/59`, layer `FIRE_DISTRICTS`, FDID 05003). Old source (`services.arcgis.com/PwY9.../FeatureServer/59`) was dead. Refresh with `npm run refresh-map`.
- Service Area page now shows district stats (sq mi · households · addresses) pulled from the saved data — restores the old "popcount". Source figures: 67 sq mi, 1,708 households, 2,112 addresses (AR GIS, rev. Sept 2023).
- Dropped `node-fetch` dependency (Node 22 has built-in `fetch`).

## Loose ends (code TODO/FIXME)
- None — no TODO/FIXME comments found in the codebase.
