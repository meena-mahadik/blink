const CACHE_NAME = 'your-app-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/js/script.js',
      ]);
    })
  );
});
