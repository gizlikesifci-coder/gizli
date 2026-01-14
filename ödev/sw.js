// Service Worker - Tracker Pro v3.0
const CACHE_NAME = 'tracker-pro-v3';

// Önbelleğe alınacak dosyalar
const urlsToCache = [
  '/tracker.html',
  '/index.html',
  '/manifest.json'
];

// Service Worker kurulumu
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Aktivasyon
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch istekleri - Network first, cache fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Başarılı yanıtları önbelleğe al
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Network başarısızsa önbellekten dön
        return caches.match(event.request);
      })
  );
});

// Arka plan senkronizasyonu
self.addEventListener('sync', (event) => {
  if (event.tag === 'tracker-sync') {
    event.waitUntil(
      // Senkronizasyon işlemi
      console.log('Background sync triggered')
    );
  }
});

// Push bildirimleri (gelecekte kullanılabilir)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Yeni güncelleme',
    icon: '/icon.png',
    badge: '/badge.png',
    vibrate: [100, 50, 100]
  };

  event.waitUntil(
    self.registration.showNotification('Tracker Pro', options)
  );
});

// Bildirime tıklama
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/tracker.html')
  );
});
