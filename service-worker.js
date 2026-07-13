const CACHE_NAME = "shawarma-khazen-menu-v19";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./data/menu.js",
  "./images/veal-shawarma-pita.png",
  "./images/veal-shawarma-baguette.png",
  "./images/lamb-shawarma-baguette.png",
  "./images/lamb-shawarma-laffa.png",
  "./images/falafel-pita.png",
  "./images/falafel-laffa.png",
  "./images/falafel-baguette.png",
  "./images/veal-lamb-shawarma-pita.png",
  "./images/veal-lamb-shawarma-baguette.png",
  "./images/veal-lamb-shawarma-laffa.png",
  "./images/hummus-plate.png",
  "./images/tahini-plate.png",
  "./images/french-fries-plate.png",
  "./images/schnitzel-pita.png",
  "./images/schnitzel-baguette.png",
  "./images/schnitzel-laffa.png",
  "./images/veal-shawarma-pita-combo.png",
  "./images/veal-shawarma-baguette-combo.png",
  "./images/veal-shawarma-laffa-combo.png",
  "./images/turkey-shawarma-pita-combo.png",
  "./images/turkey-shawarma-baguette-combo.png",
  "./images/turkey-shawarma-laffa-combo.png",
  "./images/lamb-shawarma-pita-combo.png",
  "./images/lamb-shawarma-baguette-combo.png",
  "./images/lamb-shawarma-laffa-combo.png",
  "./images/veal-lamb-shawarma-pita-combo.png",
  "./images/veal-lamb-shawarma-baguette-combo.png",
  "./images/veal-lamb-shawarma-laffa-combo.png",
  "./images/falafel-pita-combo.png",
  "./images/falafel-baguette-combo.png",
  "./images/falafel-laffa-combo.png",
  "./images/schnitzel-pita-combo.png",
  "./images/schnitzel-baguette-combo.png",
  "./images/schnitzel-laffa-combo.png",
  "./images/coca-cola.png",
  "./images/coca-cola-zero.png",
  "./images/sprite.png",
  "./images/sprite-zero.png",
  "./images/xl-energy-drink.png",
  "./images/prigat-grape-juice.png",
  "./images/prigat-strawberry-banana-juice.png",
  "./images/prigat-lemon-mint-juice.png",
  "./images/soda-water.png",
  "./images/mineral-water.png",
  "./manifest.webmanifest",
];

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        const copy = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return networkResponse;
      })
      .catch(() =>
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === "navigate") return caches.match("./index.html");
          return Response.error();
        })
      )
  );
});
