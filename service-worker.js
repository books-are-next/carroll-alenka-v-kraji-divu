/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-1fc19f7';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./alenka_v_kraji_divu_002.html","./alenka_v_kraji_divu_005.html","./alenka_v_kraji_divu_006.html","./alenka_v_kraji_divu_007.html","./alenka_v_kraji_divu_008.html","./alenka_v_kraji_divu_017.html","./alenka_v_kraji_divu_024.html","./alenka_v_kraji_divu_029.html","./alenka_v_kraji_divu_037.html","./alenka_v_kraji_divu_045.html","./alenka_v_kraji_divu_055.html","./alenka_v_kraji_divu_062.html","./alenka_v_kraji_divu_071.html","./alenka_v_kraji_divu_078.html","./alenka_v_kraji_divu_083.html","./alenka_v_kraji_divu_089.html","./alenka_v_kraji_divu_097.html","./alenka_v_kraji_divu_098.html","./alenka_v_kraji_divu_099.html","./alenka_v_kraji_divu_100.html","./alenka_v_kraji_divu_116.html","./alenka_v_kraji_divu_125.html","./alenka_v_kraji_divu_135.html","./alenka_v_kraji_divu_150.html","./alenka_v_kraji_divu_159.html","./alenka_v_kraji_divu_165.html","./alenka_v_kraji_divu_176.html","./alenka_v_kraji_divu_186.html","./alenka_v_kraji_divu_197.html","./alenka_v_kraji_divu_199.html","./alenka_v_kraji_divu_201.html","./alenka_v_kraji_divu_204.html","./colophon.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/alenka_001.jpg","./resources/alenka_002.jpg","./resources/alenka_002a.jpg","./resources/alenka_003.jpg","./resources/alenka_004b.jpg","./resources/alenka_005.jpg","./resources/alenka_006.jpg","./resources/alenka_007.jpg","./resources/alenka_008.jpg","./resources/alenka_009.jpg","./resources/alenka_010.jpg","./resources/alenka_010a.jpg","./resources/alenka_012.jpg","./resources/alenka_013.jpg","./resources/alenka_014a.jpg","./resources/alenka_014b.jpg","./resources/alenka_015a.jpg","./resources/alenka_015b.jpg","./resources/alenka_016.jpg","./resources/alenka_017.jpg","./resources/alenka_018a.jpg","./resources/alenka_018b.jpg","./resources/alenka_019.jpg","./resources/alenka_020.jpg","./resources/alenka_021.jpg","./resources/alenka_022.jpg","./resources/alenka_023.jpg","./resources/alenka_023a.jpg","./resources/alenka_024.jpg","./resources/alenka_025.jpg","./resources/alenka_026.jpg","./resources/alenka_027.jpg","./resources/alenka_028.jpg","./resources/alenka_029.jpg","./resources/alenka_030.jpg","./resources/alenka_031.jpg","./resources/alenka_032.jpg","./resources/alenka_033.jpg","./resources/alenka_034.jpg","./resources/alenka_035.jpg","./resources/alenka_036.jpg","./resources/alenka_037.jpg","./resources/alenka_038.jpg","./resources/alenka_039.jpg","./resources/alenka_040.jpg","./resources/alenka_041.jpg","./resources/alenka_042a.jpg","./resources/alenka_042b.jpg","./resources/alenka_043.jpg","./resources/alenka_044.jpg","./resources/alenka_045.jpg","./resources/alenka_046.jpg","./resources/alenka_047a.jpg","./resources/alenka_047b.jpg","./resources/alenka_048.jpg","./resources/alenka_049.jpg","./resources/alenka_050a.jpg","./resources/alenka_050b.jpg","./resources/alenka_050c.jpg","./resources/alenka_051.jpg","./resources/alenka_052.jpg","./resources/alenka_053a.jpg","./resources/alenka_053b.jpg","./resources/alenka_054.jpg","./resources/alenka_055.jpg","./resources/alenka_056a.jpg","./resources/alenka_056b.jpg","./resources/alenka_057.jpg","./resources/alenka_058.jpg","./resources/alenka_059.jpg","./resources/alenka_060.jpg","./resources/alenka_061.jpg","./resources/alenka_062.jpg","./resources/alenka_063.jpg","./resources/alenka_064.jpg","./resources/alenka_065.jpg","./resources/alenka_066.jpg","./resources/alenka_067.jpg","./resources/alenka_068.jpg","./resources/alenka_069.jpg","./resources/alenka_070.jpg","./resources/alenka_071.jpg","./resources/alenka_072.jpg","./resources/alenka_073.jpg","./resources/alenka_074.jpg","./resources/alenka_075.jpg","./resources/alenka_076.jpg","./resources/alenka_077.jpg","./resources/alenka_078.jpg","./resources/alenka_079a.jpg","./resources/alenka_079b.jpg","./resources/alenka_080.jpg","./resources/image001.jpg","./resources/image002.png","./resources/obalka.jpg","./resources/upoutavka_eknihy.jpg","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
