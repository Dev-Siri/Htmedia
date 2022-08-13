self.addEventListener('install', event => event.waitUntil(
    caches.open('sw-cache').then(cache => {
        cache.add('index.html');
        cache.add('dist/styles.css');
        cache.add('app/create.js');
        cache.add('app/globals.js');
        cache.add('app/home.js');
    })
));

self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))));