/* ══════════════════════════════════════════════════════════════
   sw.js — Service Worker
   Stratégie : Cache-first pour les assets, réseau pour le reste.
   Mettre à jour CACHE_NAME à chaque déploiement pour forcer
   le rechargement du cache sur les appareils existants.
══════════════════════════════════════════════════════════════ */

const CACHE_NAME = 'gym-app-v1';

const ASSETS_TO_CACHE = [
  '.',
  'index.html',
  'style.css',
  'app.js',
  'data.js',
  'manifest.json',
];

/* ── Installation : mise en cache des assets ─────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

/* ── Activation : nettoyage des anciens caches ───────────────── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── Interception des requêtes ───────────────────────────────── */
self.addEventListener('fetch', event => {
  /* Ne gérer que les requêtes GET */
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      /* Si en cache → réponse immédiate */
      if (cached) return cached;
      /* Sinon → réseau, puis mise en cache */
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
