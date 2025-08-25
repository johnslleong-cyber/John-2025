// Minimal SW just to be installable
self.addEventListener("install", (e) => {
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});
// (Optional) add caching logic here later if you want offline splash
