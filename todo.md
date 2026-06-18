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
- Consider migrating `node-fetch@2` usage to Node's built-in `fetch` (Express 5 / modern Node) to drop a dependency.

## Loose ends (code TODO/FIXME)
- None — no TODO/FIXME comments found in the codebase.
