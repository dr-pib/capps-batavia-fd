const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = process.env.DATA_DIR || __dirname;
const ALERTS_FILE = path.join(DATA_DIR, 'alerts.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'cbfd-admin';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function loadAlerts() {
  try { return JSON.parse(fs.readFileSync(ALERTS_FILE, 'utf8')); }
  catch { return []; }
}

function saveAlerts(alerts) {
  fs.writeFileSync(ALERTS_FILE, JSON.stringify(alerts, null, 2));
}

app.get('/api/alerts', (req, res) => {
  res.json(loadAlerts());
});

app.post('/api/alerts', (req, res) => {
  const { password, type, title, message } = req.body;
  if (password !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Unauthorized' });
  const alerts = loadAlerts();
  const alert = { id: Date.now().toString(), type: type || 'general', title, message, postedAt: Date.now() };
  alerts.unshift(alert);
  saveAlerts(alerts);
  res.json(alert);
});

app.delete('/api/alerts/:id', (req, res) => {
  const { password } = req.body;
  if (password !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Unauthorized' });
  const alerts = loadAlerts().filter(a => a.id !== req.params.id);
  saveAlerts(alerts);
  res.json({ ok: true });
});

// District boundary is served as a static file (public/boundary.json).
// To refresh it from Arkansas GIS, run: npm run refresh-map

app.listen(PORT, () => console.log(`CBFD site running on port ${PORT}`));
