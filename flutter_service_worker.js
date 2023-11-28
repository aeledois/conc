'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/images/conc.png": "2604048bf3b4b58a1a154a3904f8c074",
"assets/assets/images/conc.jpeg": "256d62566981d9e5f8f35571fa933c0a",
"assets/NOTICES": "dfea98d9c063e3b6ed3125e40abd7a9b",
"assets/AssetManifest.bin": "f0d4e38899666dbc554e26e18df7987e",
"assets/AssetManifest.json": "80a17c4ddb4728685bca0e34215b1e35",
"assets/AssetManifest.bin.json": "f3f5a7d8c3beccd01f353574462b149f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7ba69fd3c97ca93e50ec8bcd72c0291f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"manifest.json": "522d3818c1d97d5587099dda1d62ebb6",
"main.dart.js": "0f0c63f13072c24c3154dd6ae01f2563",
"icons/Icon-maskable-512.png": "377b9875083399339405de07a14695e3",
"icons/Icon-maskable-192.png": "3971c30813c2274c84b80179cc6b25b8",
"icons/Icon-512.png": "377b9875083399339405de07a14695e3",
"icons/Icon-192.png": "3971c30813c2274c84b80179cc6b25b8",
"favicon.png": "5459ef5e806e25a82c62a15f08bc4bda",
"index.html": "32238058f7449d506813f075d8688de4",
"/": "32238058f7449d506813f075d8688de4",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"version.json": "35cd3c5d2b044d0470e7cbabb6aaf8bf",
".git/COMMIT_EDITMSG": "57fdf2506f59fee344aa47a28a1e421b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "1093a6f3c580b0177e935eed04cfc97e",
".git/refs/remotes/origin/master": "1093a6f3c580b0177e935eed04cfc97e",
".git/config": "fd9b9bb000515bcd03790de0ecbba103",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "554172aaa9187a5f1547e4a5350139b7",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0f/d9e27b193a4efe9dcdc81de90b024e643813f5": "dc20e4baca896917151d852420ed80b2",
".git/objects/67/c2af281afa9a7a91fbf4b6ff935b0d40061cbf": "29b147096e6bad94d430416992f7d703",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/f2/25595bf65807b13f0be5ce2a876e075a79d902": "58f66b0bd64bab3a6521c1330344b3b9",
".git/objects/60/4071981501caff336467c7cecb9d08b59b9dab": "3e183d7fd9ce579b24efc0ae17f85fdc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/5a/2b9aa288b9229c7857513fb95dea876f80f088": "33d6c6ce4ce86dcab5404141f5a86566",
".git/objects/fa/e6826a47f5c9c7775806407c9be135b0da065c": "ad2b47821229a68cda7fd1d4eb4bb40c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/a2/9de6ec34ab180215f21bac2ed98c66b5efece3": "5287e565c875a490de5902cafc139393",
".git/objects/f1/337146a3835c4de06e1919efd4d1f0c5d76bf8": "54288a654e55f866cde3079d4f3507c9",
".git/objects/fe/889f67a0d6d181b6524cd1541ed99412d758b7": "6c6fbef61c7048544d15f5745326de8f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/95/2325ee3d6418a3c08ea45b98bebe7fcb920ff2": "d5d83d2e71180bd5a775b4ac01443b1c",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/12/102ae3c44ba6d0d5e5e9454ad730de320e2486": "a460893ac1be6e4eaae69601f37e03d1",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/a9/30d6f7a029a029958821f9c5a89082082584fa": "821a64e95595576ca9ee5bab90893119",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/b4/9679787eef031d46ed58640fdb1ab6b1122016": "116bff2573628aa9893ad975660efd57",
".git/objects/db/651ab16f445ff79e07ed552cd1d22df8388779": "e36c66e852b1393ea142727a927abe26",
".git/objects/1a/4e2104c80f69c5582c42ff25489d8d26006e2c": "1ae1647b1481f8e738267640f764cce2",
".git/objects/29/05d038191cb0667e4e0b933bf8cd66cb794786": "ff91c8648f60e103b90838a129e8beef",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/77/b6a1cf061f315499bfdf40ad7584cce6f7088b": "4f575ee85d1476c8599ae3f738372686",
".git/objects/6c/06e4dfb4d1e28f4ebf45413bb9f9fc76930f40": "4e9f51e991a1c7b4939cd60a0887eac2",
".git/objects/f9/022219423a79810cafc58e4999fa3423998a76": "17db19672d66ada97a8309b185a64189",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/f6/04e29704e71530a986687537b3dfef5cbc66e0": "12e37db0254d06fc1c08b51fda6f3651",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/64/c2b962b7fe1e89c61fdc7dc6ae97c423fc7ece": "e0cdee4b3d4797f6f3fbdf4ea76ace2f",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/cb/a4fbb49cc4527a12b7564b66c23596efec922d": "eb8827cbc418818b1cdd637b98df095f",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/logs/refs/heads/main": "7654bea5acae24be4497c7e1a938c140",
".git/logs/refs/remotes/origin/master": "904d860853ce3ef2b1a705e54e4ddbeb",
".git/logs/HEAD": "ba9bc239de8c53704b1fff79244956e2",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
