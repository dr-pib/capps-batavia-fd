// Refreshes public/boundary.json from the authoritative Arkansas GIS source.
// The fire district boundary almost never changes, so we save it once and
// serve a static copy instead of querying ArcGIS on every page view.
//
// Run with: npm run refresh-map

const fs = require('fs');
const path = require('path');

const FDID = '05003'; // Capps-Batavia, Boone County (NFIRS FDID)
const SERVICE =
  'https://gis.arkansas.gov/arcgis/rest/services/FEATURESERVICES/Boundaries/FeatureServer/59/query';
const OUT_FILE = path.join(__dirname, '..', 'public', 'boundary.json');

const params = new URLSearchParams({
  where: `fdid_nfirsid='${FDID}'`,
  outFields:
    'name,service_area,fdid_nfirsid,fire_district_type,square_miles,estimated_households,estimated_addresses,revision_date',
  returnGeometry: 'true',
  outSR: '4326', // WGS84 lat/lng, ready for Leaflet
  f: 'geojson',
});

(async () => {
  const url = `${SERVICE}?${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} from Arkansas GIS`);

  const data = await res.json();
  const feature = data.features && data.features[0];
  if (!feature || !feature.geometry) {
    throw new Error(`No district geometry returned for FDID ${FDID}. Response: ${JSON.stringify(data).slice(0, 300)}`);
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(data, null, 0));

  const p = feature.properties || {};
  console.log(`Saved ${OUT_FILE}`);
  console.log(`  ${p.name} (${p.service_area} County) — ${p.fire_district_type}`);
  console.log(`  ${Math.round(p.square_miles)} sq mi · ${p.estimated_households} households · ${p.estimated_addresses} addresses`);
})().catch((e) => {
  console.error('refresh-map failed:', e.message);
  process.exit(1);
});
