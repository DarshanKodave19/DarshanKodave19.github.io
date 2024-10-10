'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/images/c1.jpg": "04b84cf131ae9aa83c2334874e8506db",
"assets/asset/images/c10.jpg": "3f129ba9c99c999e99a086869b6c513f",
"assets/asset/images/c11.jpg": "9269a646263b78e4a83876153427caf7",
"assets/asset/images/c12.jpg": "bd12bdc39094414153c752a4acd97325",
"assets/asset/images/c2.jpg": "63b264acadf00ddf52362bc3a81e0715",
"assets/asset/images/c3.jpg": "45eafc1e01a2cd463523c9dbd06df410",
"assets/asset/images/c4.jpg": "5b3fdc2b3663a0b525d293c63831a32d",
"assets/asset/images/c5.jpg": "95d3dc39b6b4371dc4f7a387caa1412f",
"assets/asset/images/c6.jpg": "7e3a5125a588802b7b228a92c45b852d",
"assets/asset/images/c7.jpg": "9949b85483367751d7e2370e2b6a65ca",
"assets/asset/images/c8.jpg": "83c948b67a520edf43526b7140d86113",
"assets/asset/images/c9.jpg": "27b91c47fe1bdd3fb10b645af726e94c",
"assets/asset/images/chat.png": "8b8fe1797322a44700104d3d04ff4013",
"assets/asset/images/ecommerce.png": "86efc01bcb46d00bf9f99823807d2dda",
"assets/asset/images/em1.jpg": "14b6308fe9239ac1f12dafb98b4a0875",
"assets/asset/images/em2.jpg": "2dda4e87bad25f33f8a177fd9ecd4449",
"assets/asset/images/em3.jpg": "3229c1e5d5f00d29d7fb03db43352980",
"assets/asset/images/em4.jpg": "2b346533e6ab2e758818c2eb216882f4",
"assets/asset/images/em5.jpg": "e3fe79bc9a9d34859986673146a945e6",
"assets/asset/images/em6.jpg": "d76b94c27eb4a7506244d95753ba1e1e",
"assets/asset/images/em7.jpg": "d64448824d3469c4e815f876a503a08d",
"assets/asset/images/em8.jpg": "531c9e63a0861ac27f067e5964fe871d",
"assets/asset/images/em9.jpg": "e0203b3dd556b9e3f1fe209fff7f22f7",
"assets/asset/images/eu1.jpg": "319620ecc55d8d93a50c6114b19822e4",
"assets/asset/images/eu10.jpg": "b30f56f12b4bb65df000afe71a451ebd",
"assets/asset/images/eu11.jpg": "af39086cd452aae4af03eba428d2f04f",
"assets/asset/images/eu13.jpg": "cd9e575f5a27cd181b31dcd770b98659",
"assets/asset/images/eu14.jpg": "b8659088a7e508b264619430159a1bbc",
"assets/asset/images/eu15.jpg": "de97c4ae5daed8a27dee00b4d6d829a2",
"assets/asset/images/eu17.jpg": "c2e7a70b791f5c710cd380c4b7b82da5",
"assets/asset/images/eu2.jpg": "839932afb3e8b340fd90c83fb8a95904",
"assets/asset/images/eu20.jpg": "217e49da55406468bdc7612b205834da",
"assets/asset/images/eu21.jpg": "9c6638652cc3b7eed575d1feddd9669d",
"assets/asset/images/eu22.jpg": "6df478bb2b7bce4b42ee2886fd1b5042",
"assets/asset/images/eu23.jpg": "d946061ecadc6668d5496ef720b075bd",
"assets/asset/images/eu24jpg.jpg": "95c0571b1d28ec4c2ced40190a37f460",
"assets/asset/images/eu25.jpg": "ebab6a71f2efe3473dd56b2a735eede4",
"assets/asset/images/eu4.jpg": "5bf21de26b5b88bba29db1b5bf025a23",
"assets/asset/images/eu5.jpg": "04a4a58f9128529db0c1567821606b37",
"assets/asset/images/eu6.jpg": "8f33f85e1732f2f4532f197f1dbc0233",
"assets/asset/images/eu7.jpg": "5098631d65b24b7ea7b4dc0f88432b3f",
"assets/asset/images/eu8.jpg": "bf3ce74e86f3e4098c36c8d9900893b4",
"assets/asset/images/eu9.jpg": "cbd51bca1bf1dba6c962dcec16613313",
"assets/asset/images/ev1.jpg": "a709754b52602d1ebbe530fcd3fa0107",
"assets/asset/images/ev10.jpg": "94cd1a978880d5ce292d54f41e554290",
"assets/asset/images/ev11.jpg": "c6e394ed511520574b1822c0a3d9598c",
"assets/asset/images/ev12.jpg": "e5484dc9dadf2ebc863adce3e33266f2",
"assets/asset/images/ev13.jpg": "546afd9bce068ec4ff95094e38d5d9ef",
"assets/asset/images/ev14.jpg": "f1e00b9c919004668ac85b61b41d8f6b",
"assets/asset/images/ev2.jpg": "939d07c88066f2388ef4ed282b992910",
"assets/asset/images/ev3.jpg": "4e9f33aac791b70e21c4d97db1a4d215",
"assets/asset/images/ev4.jpg": "d5dc019ebc0d622b37f970f7243b2b7f",
"assets/asset/images/ev5.jpg": "733e483f827c6504ecea34731f345e8e",
"assets/asset/images/ev6.jpg": "70941a556147292fd0a9f8abee9fc7f7",
"assets/asset/images/ev7.jpg": "38f1faeab2340016748078b022bdb9f5",
"assets/asset/images/ev8.jpg": "258e6dd3335e287ed64de419917c1d5e",
"assets/asset/images/ev9.jpg": "7d75f3193589521c2079c177053d3c9b",
"assets/asset/images/j1.jpg": "1983da77210ce1b583dd2884408c6451",
"assets/asset/images/j2.jpg": "9384f02c8ec2847785326c75382ea767",
"assets/asset/images/m1.jpg": "1c81051bbf5228084ca038d4304f0414",
"assets/asset/images/m2.jpg": "a28ed48a96c7251a93c5f24f83e503d1",
"assets/asset/images/n1.jpg": "fbe6073ad0ed63aef89664007e23768c",
"assets/asset/images/n2.jpg": "ae7814a92f29c42f7e7ac47fe3e9ad58",
"assets/asset/images/n3.jpg": "b0b8a579ddf52efb4c1b4347c0f96eea",
"assets/asset/images/news.png": "f1d4a0bbd746c593f51033ea85d90aca",
"assets/asset/images/p2.jpg": "9f380085b2c743367e7b708fc5ca9ac5",
"assets/asset/images/p3.jpg": "51eb52858f6ebb1f830f67632c09a8d5",
"assets/asset/images/p4.jpg": "21cfff8eab982363e6388b66b67541be",
"assets/asset/images/p5.jpg": "3031d8596be9f3e8534637fae12d06ef",
"assets/asset/images/p6.jpg": "2a8777e1c28de39e6b5c5df6d3641a24",
"assets/asset/images/p7.jpg": "593ed9de9c20192b4fa88a88d4792e74",
"assets/asset/images/p8.jpg": "09cd0224a070efaaca348d496ec90171",
"assets/asset/images/p9.jpg": "249901d4c60001c13f65a6d6646248f5",
"assets/asset/images/pf2.png": "32f717d39703bed3f532bff2df157b7f",
"assets/asset/images/profile-image.png": "950332b3cc804250050aad066c0324be",
"assets/asset/images/profile.png": "cc1657f120cebef5942bc652c46bf31f",
"assets/asset/images/quiz.png": "b50bd6d8629067621e1b1e00f6ac5b12",
"assets/asset/images/seo.png": "e98c8b197158ed32a711ac907f2149a6",
"assets/asset/images/tmdb.png": "f770e71634bf832426bdddf10de7f447",
"assets/asset/images/weather.png": "bc8f1a2e2d1226ec034a02f4d131f80b",
"assets/asset/images/wi1.jpg": "deb41523f0c17c6e411043ed1235645d",
"assets/asset/images/wi10.jpeg": "fd3c432475c5e42934e295b72a954062",
"assets/asset/images/wi11.jpeg": "0428d448dfdbc492563bc7348c2da198",
"assets/asset/images/wi12.jpeg": "9b83f67966251f091b6b991e5ec0678c",
"assets/asset/images/wi2.jpg": "a167458c895a73c38bbb62e7b67e1034",
"assets/asset/images/wi3.jpg": "15ecc45660466c465d992f74b4837f80",
"assets/asset/images/wi4.jpg": "517e44fac051cfe7f51bf3e5caec175e",
"assets/asset/images/wi5.jpg": "ec0090623f876e3115cadbe71187b43a",
"assets/asset/images/wi6.jpg": "2a80499b9c1c2abe5ddddd19f6f0d815",
"assets/asset/images/wi7.jpg": "f46bf69273c7d13616b6775d15927c99",
"assets/asset/images/wi8.jpeg": "bab9eb81d0659ee32a0c269f1fc09c61",
"assets/asset/images/wi9.jpeg": "288c2ebee8ac39b268814382faccf968",
"assets/AssetManifest.bin": "cb07ed81852ac0873d0772165168a61d",
"assets/AssetManifest.bin.json": "ea8d69e7732962cfab142f2a7830b8f9",
"assets/AssetManifest.json": "53ee4b861204edb31b0d592f59d83d77",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "37fc876e715a321e063db724e9f5f3b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "cef4e6bd2ea9cb242948cee6353f1067",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "5fbe61e292ed2120229c840e0bd7f31e",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
