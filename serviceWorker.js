self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('map-app-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './map.js',
        './manifest.json',
        'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css',
        'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
