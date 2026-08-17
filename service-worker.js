var CACHE = "finance-v2";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE; })
             .map(function(n) { return caches.delete(n); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  if (e.request.url.indexOf("cdn.jsdelivr.net") !== -1) {
    e.respondWith(
      caches.open(CACHE).then(function(c) {
        return fetch(e.request).then(function(r) {
          c.put(e.request, r.clone());
          return r;
        }).catch(function() {
          return c.match(e.request);
        });
      })
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request).then(function(resp) {
        return caches.open(CACHE).then(function(c) {
          c.put(e.request, resp.clone());
          return resp;
        });
      });
    }).catch(function() {
      return caches.match("./index.html");
    })
  );
});
