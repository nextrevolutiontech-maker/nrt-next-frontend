// Self-unregistering Service Worker to clear any legacy PWA registrations
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      for (const client of clients) {
        client.navigate(client.url);
      }
    }).then(() => self.registration.unregister())
  );
});

// Explicitly bypass fetch interception for metadata routes
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (
    url.pathname.endsWith('.xml') ||
    url.pathname.endsWith('.txt') ||
    url.pathname === '/sitemap.xml' ||
    url.pathname === '/robots.txt' ||
    url.pathname === '/manifest.json' ||
    url.pathname === '/favicon.ico'
  ) {
    return; // Pass directly to network
  }
});
