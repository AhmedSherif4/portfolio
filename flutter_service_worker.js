'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8325c45a9e50351b7c67e7509551b7e5",
"assets/AssetManifest.bin.json": "65dae8cc9be66167f62037e98af2f7cd",
"assets/AssetManifest.json": "879da6e6775210a27a94826ef2934ea8",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-Black.ttf": "d1222ef03318f51a628254322b9cc54f",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-BlackItalic.ttf": "a52d47d63133545e4bfaee02ce274e7a",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf": "9b38798112efb7cf6eca1de031cec4ca",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-BoldItalic.ttf": "24356ab9abfd688e49099f41a34e83aa",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-ExtraBold.ttf": "c40a2ef5334382e328c890bbad61c40c",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-ExtraBoldItalic.ttf": "1d4d23e17b1e38e972d3c1d969800400",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-Italic.ttf": "f38e89a44737b67d5dba2d9c860c3b65",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-Medium.ttf": "42e5edcf78a90b7358c0b95bfc55ce35",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-MediumItalic.ttf": "ba8190b13a816414c581ab891c85589f",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf": "1a28efdbd2876d90e554a67faabad24b",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-SemiBold.ttf": "54a87ef71bd558e23e1bdc47b4496bc1",
"assets/assets/fonts/Playfair_Display/PlayfairDisplay-SemiBoldItalic.ttf": "d5fe5fa1a76f9627334da8ff313b2b86",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/icons/agile.png": "e6f04464d62b9bdd5ced0f7963734d77",
"assets/assets/icons/android_studio.png": "329b48cc806561ba499684108dd7dfce",
"assets/assets/icons/atlassian.png": "2afc25b33c0d0aac4bdcdd1576ac9873",
"assets/assets/icons/dart.png": "734e42d8a3e024d2d15ea6772c2acc81",
"assets/assets/icons/docker.png": "c20bce70533be937725d54cdc3b45587",
"assets/assets/icons/figma.png": "2a785b2a05579a4fae959b1e42e486ee",
"assets/assets/icons/firebase.png": "b6a179081d974aa2ad9593227ad1ebd0",
"assets/assets/icons/flutter.png": "57838d52c318faff743130c3fcfae0c6",
"assets/assets/icons/github.png": "732293540b41d9ed72bbec755752eb00",
"assets/assets/icons/kotlin.png": "6375a487198b0b48c55236349aa2d0d0",
"assets/assets/icons/notion.png": "2e32401c6c14703aaf723cd98a27ebf4",
"assets/assets/icons/postman.png": "c44508c06d11ec0376f7f93b1e92ef7f",
"assets/assets/icons/restful.png": "aece03412eb98f9c4528dcca3f65e28d",
"assets/assets/icons/sql.png": "65e5aead0eed09333ae77c54c14b89e9",
"assets/assets/icons/vscode.png": "30eb3a2cebd7f4b876eb6e64f54119b0",
"assets/assets/icons/xd.png": "963bf19bea1ca2c6679d6b2fe7748153",
"assets/assets/images/catch_data_in_flutter.png": "99e77ae78e219896383392dbac02b274",
"assets/assets/images/logo.svg": "922148bf529d14f5a059d3c20538a431",
"assets/assets/images/me.jpg": "8939e5d80c92600003144babec1f86a5",
"assets/assets/images/pagination.png": "c32f24d24739abdc0ed0938011946f4e",
"assets/assets/lottie/chat1.json": "267ad18c7bcca032308704ffaa17a817",
"assets/assets/lottie/chat2.json": "f6381ffc5c6a91a06bac3679dd8779b6",
"assets/assets/lottie/facebook.json": "ed42be0b087d6e43b3c01f30871bfc61",
"assets/assets/lottie/github.json": "cd0a872a9da3a936662d0820c9027b45",
"assets/assets/lottie/gmail.json": "ba95d4217ad2a67dc9c0c395893b61b0",
"assets/assets/lottie/linkedin.json": "b62240b0374060134d08fdf2706d0322",
"assets/assets/lottie/youtube.json": "2ecd59762c2641997d75082acc7ce758",
"assets/assets/translations/ar-EG.json": "4cfb5d1d79cd0ca183622bb8df3cf2c7",
"assets/assets/translations/en-US.json": "647da73df1eed177dd2ad7897bad6285",
"assets/FontManifest.json": "3baa6a0d54558ddbfddba9b37f1e74ff",
"assets/fonts/MaterialIcons-Regular.otf": "4b79da223dbb833ac7c20aeb95142391",
"assets/NOTICES": "f57f5749a29f616d91df32d3e43cb028",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a403245fe3aa45786cb258ce8399eb8f",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "b6530f23d5df9d8b334e31a4dc62e0d0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
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
"favicon.png": "6184ae44852415297f0a5a46bef92806",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e0a9bf2052f6ac7330fc3f92657cf535",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "580b93392b3303e519bcdc328cfb6771",
"/": "580b93392b3303e519bcdc328cfb6771",
"main.dart.js": "ea1b28677be29d308933396990fabb9e",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "528590cfb00fc1ca502120db4808bb64"};
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
