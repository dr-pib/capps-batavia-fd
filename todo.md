# capps-batavia-fd — todo

_What this is: Express-served website for the Capps-Batavia Volunteer Fire Department (Boone County, AR), with a password-protected alerts admin and a service-area map fed by ArcGIS boundary data. Deployed on Railway._

## In progress
- Site redesigned (dark-ish, nature-forward, serif headings, department-red accent). Awaiting real hero photos from the user.

## Next up
- **Onboarding process (user reminder):** spell out the application/onboarding steps on the Join page — what happens after someone attends a training meeting and applies (training year, gear, expectations, etc.). User will provide details.
- **Join page message form:** BUILT (Name/Email/Phone/Message, AJAX to Formspree). Waiting on the user's Formspree form ID to drop into `FORMSPREE_ID` in join.html — until then it shows an "email us" fallback. Recipient should be cbfd5003@gmail.com.
- NO EM DASHES anywhere in copy (user preference) — keep using periods/commas/middots.
- Hero photos: user will supply a "dominant" landscape photo (the Ozarks) + others. Drop files in `public/images/` and list them in the `HERO_IMAGES` array in `index.html` (rotation pool = random per visit; `from`/`to` = one-off dates; `season` = recurring). Currently using Unsplash placeholders.
- Replace content placeholders across pages: about (mission, history, bylaws PDF, roster), join (requirements, application process), donate (donation methods + mailing address), contact (Facebook URL, station address, meeting schedule).
- Verify Capps & Batavia fire-station coordinates (still from OSM); Ridgeway is confirmed (10470 Gass Ct).
- Decide on real `ADMIN_PASSWORD` via Railway env var instead of relying on the `cbfd-admin` default in server.js.

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
