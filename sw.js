const CACHE_NAME = "todo-app-v1";

const urlsToCache = [
  "/todo-app/",
  "/todo-app/index.html",
  "/todo-app/manifest.json",
  "/todo-app/icon-192.png.png",
  "/todo-app/icon-512.png.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
