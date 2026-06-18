# Homepage hero images

Drop hero photos in this folder, then list them in the `HERO_IMAGES` array
near the bottom of `public/index.html`. Each entry:

```js
{ src: 'images/creek.jpg' }                                  // regular rotation (a random one shows each visit)
{ src: 'images/parade.jpg', from: '2026-07-01', to: '2026-07-07' }   // one-off date range (inclusive)
{ src: 'images/first-snow.jpg', season: { fromMonth: 12, toMonth: 2 } } // recurring every year (Dec–Feb; months may wrap)
```

Rules:
- A **scheduled** image (a `from`/`to` range or a `season`) that is active today
  is shown ahead of the rotation pool.
- If several scheduled images are active, one is picked at random.
- Otherwise a random image from the **rotation pool** (entries with no dates) is shown.

Tips:
- Use wide landscape photos, roughly **2000px wide**, JPG, optimized to under ~500KB.
- The hero darkens the top and bottom of the image so the white title stays readable —
  busy detail in the dead-center is fine; keep it out of the very top/bottom edges.
