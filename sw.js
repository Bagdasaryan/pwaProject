self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/pwaProject/',
      '/pwaProject/index.html',
      '/pwaProject/index.js',
      '/pwaProject/style.css',
      '/pwaProject/images/fox1.jpg',
      '/pwaProject/images/fox2.jpg',
      '/pwaProject/images/fox3.jpg',
      '/pwaProject/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
