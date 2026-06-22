# capps-batavia-fd · todo

_Express-served website for the Capps-Batavia Volunteer Fire Department (Boone County, AR): a password-protected alerts admin and a service-area map. Deployed on Railway. Redesign is complete and the hero uses real CBFD photos. House rule: no em dashes in site copy._

## Next up
- [ ] About page: add department history, the bylaws PDF (and link it), and a roster/officers list
- [ ] Contact page: add the Facebook URL, station address, and meeting schedule
- [ ] Donate page: decide whether to add online giving (PayPal/Venmo); the mailing address is done
- [ ] Verify the Capps and Batavia fire-station map pins (still from OpenStreetMap); Ridgeway is confirmed (10470 Gass Ct)
- [ ] Set a real ADMIN_PASSWORD via a Railway env var (replace the cbfd-admin default in server.js)

## Backlog
- [ ] Confirm DATA_DIR points at a Railway volume so alerts.json survives redeploys (it currently defaults to the repo dir, so alerts would be lost on each deploy)
- [ ] Add a basic README (setup, env vars, deploy notes)

## Done
- [x] Removed decorative emoji sitewide (kept the hamburger mobile-menu glyph)
- [x] Saved the district map locally to public/boundary.json from Arkansas GIS (FIRE_DISTRICTS, FDID 05003); the old third-party source was dead. Refresh with npm run refresh-map
- [x] Service Area shows district stats (area, residents, households); population 4,209
- [x] Dropped node-fetch (Node 22 has built-in fetch)
- [x] Service Area map: cropped to the district, dimmed-outside mask, town and highway labels, 9 community labels, 3 fire-station icons
- [x] Full site redesign: shared design system in style.css and nav.js (serif headings, warm light base, dark masthead and footer, red accent); hero supports weighted rotation, scheduling, blurred-fill, and manual arrows
- [x] Join page: full copy, an RSVP form via Formspree (id mbdvjrog, emails cbfd5003@gmail.com), and the "What to Expect" onboarding steps
