'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "408b41367a8bed200c7976d652c36948",
"index.html": "fc4636dccfec184add746962181c0183",
"/": "fc4636dccfec184add746962181c0183",
"main.dart.js": "11fe3f0337fc24ead83bf7ea3f733827",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "193297ec791776a69406b899184620ad",
"assets/asset/fashion.png": "287a4f5ef7c6aae524930418c257461b",
"assets/asset/white_icon.png": "1d430ef9003d43950a749000ab1e651b",
"assets/asset/ic_launcher.png": "35de9a9404b246530ef02438b63be056",
"assets/asset/bg_app.png": "fd21f40d3a659fb66041e854819746ac",
"assets/asset/keys/0_key.png": "614a49633a460a7e3c85e03a8bd4ddbf",
"assets/asset/keys/13_key.png": "5ce58410f78f7266023fa6f4cfe16c2e",
"assets/asset/keys/25_key.png": "3bef22f8aafb69f0ad42bd63939ee591",
"assets/asset/keys/35_key.png": "587065f20a9193a7bb27756237b7c5f9",
"assets/asset/keys/9_key.png": "531029cd2954106b8d5ee1f40f5a5dda",
"assets/asset/keys/34_key.png": "1f9ffe0a03265bf9d788aae604103a48",
"assets/asset/keys/24_key.png": "ad08fce5dbf846bdcd1c1e3aca0d3d6a",
"assets/asset/keys/8_key.png": "be0a6997022eb052ef8468be7c3630f9",
"assets/asset/keys/1_key.png": "ad4c783028cd14bd339ec27b938e41b8",
"assets/asset/keys/12_key.png": "482678136fa81bd2e7a33c8391587ba9",
"assets/asset/keys/26_key.png": "70510d7809764362aa7b5ba06adcce4e",
"assets/asset/keys/19_key.png": "e87a6e713fa2c20d44f14774c60e1f54",
"assets/asset/keys/10_key.png": "dafe450618140b3f17f7b8440dd2838f",
"assets/asset/keys/3_key.png": "7e2a038a626a88d4bc9efc3e648a6695",
"assets/asset/keys/11_key.png": "60d7b558ccd3884ee94c1b9ce07bc0b3",
"assets/asset/keys/2_key.png": "64889bad9c90921a18347242ee0ca755",
"assets/asset/keys/27_key.png": "58bffff865018e1f6a9ad7dc92ff08b1",
"assets/asset/keys/18_key.png": "2e3a213a6b63091347c85b896325e26d",
"assets/asset/keys/22_key.png": "ffb152d57c50895102a75188205c4735",
"assets/asset/keys/32_key.png": "b528a679a39a3839723d04d098478a06",
"assets/asset/keys/14_key.png": "3231fcb08cc147f68c9125930e635697",
"assets/asset/keys/7_key.png": "08b5e52d011a5e9b46113241e995d066",
"assets/asset/keys/15_key.png": "bc5dd623fdd5b9ad1468d6040ad4a03c",
"assets/asset/keys/6_key.png": "0c97a59e0c6408dde327d6b658919d01",
"assets/asset/keys/33_key.png": "981cc9a7a7d20664d5cce376d7386af0",
"assets/asset/keys/23_key.png": "719b8a53966e5bbb5a725f9734600a9f",
"assets/asset/keys/4_key.png": "03538b50aa29b597a2f46de283544377",
"assets/asset/keys/17_key.png": "b7dafdf28451a6444218b7c85a4f398e",
"assets/asset/keys/28_key.png": "3380f0baf9505c815feedd807c5ea6ff",
"assets/asset/keys/21_key.png": "58031dd636391029f9a1591157f2e2d2",
"assets/asset/keys/31_key.png": "def44126b0b841c3c2d05f9b457489b9",
"assets/asset/keys/30_key.png": "4ea34d0330770e2fa48e8b65158c0d13",
"assets/asset/keys/20_key.png": "d144343dcdd06aa05c24575603f8956d",
"assets/asset/keys/5_key.png": "8de8bea79fe9b300d88a994075061f58",
"assets/asset/keys/16_key.png": "872c1ab285e1709586296d2ecd42ac78",
"assets/asset/keys/29_key.png": "cf84872f568700c5cddfceab6a1f817e",
"assets/AssetManifest.json": "4d8a47fa52a4daf502c21c1faaee2d45",
"assets/NOTICES": "5015f901a34f1e6d093c10ec09cec400",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
