/* global self, caches, fetch */
/* eslint-disable no-restricted-globals */

const CACHE = 'cache-e47eb34';

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
  return caches.open(CACHE).then(cache => cache.addAll(["./","./alenka_v_kraji_divu_001.html","./alenka_v_kraji_divu_002.html","./alenka_v_kraji_divu_003.html","./alenka_v_kraji_divu_005.html","./alenka_v_kraji_divu_006.html","./alenka_v_kraji_divu_007.html","./alenka_v_kraji_divu_008.html","./alenka_v_kraji_divu_009.html","./alenka_v_kraji_divu_010.html","./alenka_v_kraji_divu_011.html","./alenka_v_kraji_divu_012.html","./alenka_v_kraji_divu_013.html","./alenka_v_kraji_divu_014.html","./alenka_v_kraji_divu_015.html","./alenka_v_kraji_divu_016.html","./alenka_v_kraji_divu_017.html","./alenka_v_kraji_divu_018.html","./alenka_v_kraji_divu_019.html","./alenka_v_kraji_divu_020.html","./alenka_v_kraji_divu_021.html","./alenka_v_kraji_divu_022.html","./alenka_v_kraji_divu_023.html","./alenka_v_kraji_divu_024.html","./alenka_v_kraji_divu_025.html","./alenka_v_kraji_divu_026.html","./alenka_v_kraji_divu_027.html","./alenka_v_kraji_divu_028.html","./alenka_v_kraji_divu_029.html","./alenka_v_kraji_divu_030.html","./alenka_v_kraji_divu_031.html","./alenka_v_kraji_divu_032.html","./alenka_v_kraji_divu_033.html","./alenka_v_kraji_divu_034.html","./alenka_v_kraji_divu_035.html","./alenka_v_kraji_divu_036.html","./alenka_v_kraji_divu_037.html","./alenka_v_kraji_divu_038.html","./alenka_v_kraji_divu_039.html","./alenka_v_kraji_divu_040.html","./alenka_v_kraji_divu_041.html","./alenka_v_kraji_divu_042.html","./alenka_v_kraji_divu_043.html","./alenka_v_kraji_divu_044.html","./alenka_v_kraji_divu_045.html","./alenka_v_kraji_divu_046.html","./alenka_v_kraji_divu_047.html","./alenka_v_kraji_divu_048.html","./alenka_v_kraji_divu_049.html","./alenka_v_kraji_divu_050.html","./alenka_v_kraji_divu_051.html","./alenka_v_kraji_divu_052.html","./alenka_v_kraji_divu_053.html","./alenka_v_kraji_divu_054.html","./alenka_v_kraji_divu_055.html","./alenka_v_kraji_divu_056.html","./alenka_v_kraji_divu_057.html","./alenka_v_kraji_divu_058.html","./alenka_v_kraji_divu_059.html","./alenka_v_kraji_divu_060.html","./alenka_v_kraji_divu_061.html","./alenka_v_kraji_divu_062.html","./alenka_v_kraji_divu_063.html","./alenka_v_kraji_divu_064.html","./alenka_v_kraji_divu_065.html","./alenka_v_kraji_divu_066.html","./alenka_v_kraji_divu_067.html","./alenka_v_kraji_divu_068.html","./alenka_v_kraji_divu_069.html","./alenka_v_kraji_divu_070.html","./alenka_v_kraji_divu_071.html","./alenka_v_kraji_divu_072.html","./alenka_v_kraji_divu_073.html","./alenka_v_kraji_divu_074.html","./alenka_v_kraji_divu_075.html","./alenka_v_kraji_divu_076.html","./alenka_v_kraji_divu_077.html","./alenka_v_kraji_divu_078.html","./alenka_v_kraji_divu_079.html","./alenka_v_kraji_divu_080.html","./alenka_v_kraji_divu_081.html","./alenka_v_kraji_divu_082.html","./alenka_v_kraji_divu_083.html","./alenka_v_kraji_divu_084.html","./alenka_v_kraji_divu_085.html","./alenka_v_kraji_divu_086.html","./alenka_v_kraji_divu_087.html","./alenka_v_kraji_divu_088.html","./alenka_v_kraji_divu_089.html","./alenka_v_kraji_divu_090.html","./alenka_v_kraji_divu_091.html","./alenka_v_kraji_divu_092.html","./alenka_v_kraji_divu_094.html","./alenka_v_kraji_divu_095.html","./alenka_v_kraji_divu_093.html","./alenka_v_kraji_divu_096.html","./alenka_v_kraji_divu_097.html","./alenka_v_kraji_divu_098.html","./alenka_v_kraji_divu_099.html","./alenka_v_kraji_divu_100.html","./alenka_v_kraji_divu_101.html","./alenka_v_kraji_divu_102.html","./alenka_v_kraji_divu_103.html","./alenka_v_kraji_divu_104.html","./alenka_v_kraji_divu_105.html","./alenka_v_kraji_divu_106.html","./alenka_v_kraji_divu_107.html","./alenka_v_kraji_divu_108.html","./alenka_v_kraji_divu_109.html","./alenka_v_kraji_divu_110.html","./alenka_v_kraji_divu_111.html","./alenka_v_kraji_divu_112.html","./alenka_v_kraji_divu_113.html","./alenka_v_kraji_divu_114.html","./alenka_v_kraji_divu_115.html","./alenka_v_kraji_divu_116.html","./alenka_v_kraji_divu_117.html","./alenka_v_kraji_divu_118.html","./alenka_v_kraji_divu_119.html","./alenka_v_kraji_divu_120.html","./alenka_v_kraji_divu_121.html","./alenka_v_kraji_divu_122.html","./alenka_v_kraji_divu_123.html","./alenka_v_kraji_divu_124.html","./alenka_v_kraji_divu_125.html","./alenka_v_kraji_divu_126.html","./alenka_v_kraji_divu_127.html","./alenka_v_kraji_divu_128.html","./alenka_v_kraji_divu_129.html","./alenka_v_kraji_divu_130.html","./alenka_v_kraji_divu_131.html","./alenka_v_kraji_divu_132.html","./alenka_v_kraji_divu_133.html","./alenka_v_kraji_divu_134.html","./alenka_v_kraji_divu_135.html","./alenka_v_kraji_divu_136.html","./alenka_v_kraji_divu_137.html","./alenka_v_kraji_divu_138.html","./alenka_v_kraji_divu_139.html","./alenka_v_kraji_divu_140.html","./alenka_v_kraji_divu_141.html","./alenka_v_kraji_divu_142.html","./alenka_v_kraji_divu_143.html","./alenka_v_kraji_divu_144.html","./alenka_v_kraji_divu_145.html","./alenka_v_kraji_divu_146.html","./alenka_v_kraji_divu_147.html","./alenka_v_kraji_divu_148.html","./alenka_v_kraji_divu_149.html","./alenka_v_kraji_divu_150.html","./alenka_v_kraji_divu_151.html","./alenka_v_kraji_divu_152.html","./alenka_v_kraji_divu_153.html","./alenka_v_kraji_divu_154.html","./alenka_v_kraji_divu_155.html","./alenka_v_kraji_divu_156.html","./alenka_v_kraji_divu_157.html","./alenka_v_kraji_divu_158.html","./alenka_v_kraji_divu_159.html","./alenka_v_kraji_divu_160.html","./alenka_v_kraji_divu_161.html","./alenka_v_kraji_divu_162.html","./alenka_v_kraji_divu_163.html","./alenka_v_kraji_divu_164.html","./alenka_v_kraji_divu_165.html","./alenka_v_kraji_divu_166.html","./alenka_v_kraji_divu_167.html","./alenka_v_kraji_divu_168.html","./alenka_v_kraji_divu_169.html","./alenka_v_kraji_divu_170.html","./alenka_v_kraji_divu_171.html","./alenka_v_kraji_divu_172.html","./alenka_v_kraji_divu_173.html","./alenka_v_kraji_divu_174.html","./alenka_v_kraji_divu_175.html","./alenka_v_kraji_divu_176.html","./alenka_v_kraji_divu_177.html","./alenka_v_kraji_divu_178.html","./alenka_v_kraji_divu_179.html","./alenka_v_kraji_divu_180.html","./alenka_v_kraji_divu_181.html","./alenka_v_kraji_divu_182.html","./alenka_v_kraji_divu_183.html","./alenka_v_kraji_divu_184.html","./alenka_v_kraji_divu_185.html","./alenka_v_kraji_divu_186.html","./alenka_v_kraji_divu_187.html","./alenka_v_kraji_divu_188.html","./alenka_v_kraji_divu_189.html","./alenka_v_kraji_divu_190.html","./alenka_v_kraji_divu_191.html","./alenka_v_kraji_divu_192.html","./alenka_v_kraji_divu_193.html","./alenka_v_kraji_divu_194.html","./alenka_v_kraji_divu_195.html","./alenka_v_kraji_divu_196.html","./alenka_v_kraji_divu_197.html","./alenka_v_kraji_divu_198.html","./alenka_v_kraji_divu_199.html","./alenka_v_kraji_divu_200.html","./alenka_v_kraji_divu_201.html","./alenka_v_kraji_divu_202.html","./alenka_v_kraji_divu_203.html","./alenka_v_kraji_divu_204.html","./colophon.html","./favicon.png","./index.html","./manifest.json","./resources.html","./resources/alenka_001.jpg","./resources/alenka_002.jpg","./resources/alenka_002a.jpg","./resources/alenka_003.jpg","./resources/alenka_004b.jpg","./resources/alenka_005.jpg","./resources/alenka_006.jpg","./resources/alenka_007.jpg","./resources/alenka_008.jpg","./resources/alenka_009.jpg","./resources/alenka_010.jpg","./resources/alenka_010a.jpg","./resources/alenka_012.jpg","./resources/alenka_013.jpg","./resources/alenka_014a.jpg","./resources/alenka_014b.jpg","./resources/alenka_015a.jpg","./resources/alenka_015b.jpg","./resources/alenka_016.jpg","./resources/alenka_017.jpg","./resources/alenka_018a.jpg","./resources/alenka_018b.jpg","./resources/alenka_019.jpg","./resources/alenka_020.jpg","./resources/alenka_021.jpg","./resources/alenka_022.jpg","./resources/alenka_023.jpg","./resources/alenka_023a.jpg","./resources/alenka_024.jpg","./resources/alenka_025.jpg","./resources/alenka_026.jpg","./resources/alenka_027.jpg","./resources/alenka_028.jpg","./resources/alenka_029.jpg","./resources/alenka_030.jpg","./resources/alenka_031.jpg","./resources/alenka_032.jpg","./resources/alenka_033.jpg","./resources/alenka_034.jpg","./resources/alenka_035.jpg","./resources/alenka_036.jpg","./resources/alenka_037.jpg","./resources/alenka_038.jpg","./resources/alenka_039.jpg","./resources/alenka_040.jpg","./resources/alenka_041.jpg","./resources/alenka_042a.jpg","./resources/alenka_042b.jpg","./resources/alenka_043.jpg","./resources/alenka_044.jpg","./resources/alenka_045.jpg","./resources/alenka_046.jpg","./resources/alenka_047a.jpg","./resources/alenka_047b.jpg","./resources/alenka_048.jpg","./resources/alenka_049.jpg","./resources/alenka_050a.jpg","./resources/alenka_050b.jpg","./resources/alenka_050c.jpg","./resources/alenka_051.jpg","./resources/alenka_052.jpg","./resources/alenka_053a.jpg","./resources/alenka_053b.jpg","./resources/alenka_054.jpg","./resources/alenka_055.jpg","./resources/alenka_056a.jpg","./resources/alenka_056b.jpg","./resources/alenka_057.jpg","./resources/alenka_058.jpg","./resources/alenka_059.jpg","./resources/alenka_060.jpg","./resources/alenka_061.jpg","./resources/alenka_062.jpg","./resources/alenka_063.jpg","./resources/alenka_064.jpg","./resources/alenka_065.jpg","./resources/alenka_066.jpg","./resources/alenka_067.jpg","./resources/alenka_068.jpg","./resources/alenka_069.jpg","./resources/alenka_070.jpg","./resources/alenka_071.jpg","./resources/alenka_072.jpg","./resources/alenka_073.jpg","./resources/alenka_074.jpg","./resources/alenka_075.jpg","./resources/alenka_076.jpg","./resources/alenka_077.jpg","./resources/alenka_078.jpg","./resources/alenka_079a.jpg","./resources/alenka_079b.jpg","./resources/alenka_080.jpg","./resources/image001.jpg","./resources/image002.png","./resources/index.xml","./resources/obalka.jpg","./resources/upoutavka_eknihy.jpg","./scripts/bundle.js","./style/style.min.css"]));
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
