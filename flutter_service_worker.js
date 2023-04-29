'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "46db34578445af7accc03362408e4c2e",
".git/config": "f52527b0d46a052cf7639c7ba337b68c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a3c1ba61818d39b0f0e5cde6ea26cb72",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0fd0b0078a24fcdf3ffddddf85e3d702",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb8b70263959eed50cd078de4c9c831e",
".git/logs/refs/heads/master": "fb8b70263959eed50cd078de4c9c831e",
".git/logs/refs/remotes/origin/main": "fe8c41002e3f2b836eeaf064ec1ccccf",
".git/logs/refs/remotes/origin/master": "aef4848462739a94b8a6d19408daa6e0",
".git/objects/01/ce971464c296f8da4419b8835f52c589c27928": "be93deee4832ff2f7608639371ba5d99",
".git/objects/02/ae532a499547554d5e8f62b829f477ebffe682": "9ecd3972ad0826fa45768897396865a2",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/69c2626d22e171a7b80c7a65238f5e5f4e2aa3": "3fbfc914c7482d03a16ae3523152633f",
".git/objects/25/51192c4b0b4c81522e8cb0b00f08cccfc9932b": "d53ceb00058d66b4edf8c96ccfcded3d",
".git/objects/27/0b895ae9b5dafa899956fd26e664f4d3f4141f": "eac7b8aaba4baa08e2c13d590b542f33",
".git/objects/2c/021c7ee33fdb04e7da1a0d03c7a6ee056d9e74": "542c2a25c449652146d1533ad434bbbe",
".git/objects/2d/504178c97642696e361cdce9a62f2df711c17b": "6696531445ec5e68b96241679d004798",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/40/24eed60a0c1952aa952092d8dc0f9a21aa0c31": "3aefb94aafc0ea740b27414ff37b8bd6",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/49053214754683753b1f163133d9f2dff61d3c": "0b37e8b534b7e86e03fdc3dd923fbac7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/cce67a11e677c7ad9619110c7aabd70bc3f10a": "2acafb948a2fe5335e6e54c0cd283f1e",
".git/objects/5e/888defd3e49275559a184b2af56c531c83dbe0": "c17fe39dfbe80287ef48351fedeca891",
".git/objects/67/94df5b7969d850a4ebfb9e08e9ce0f0a6aefa2": "a13123110839fa40592991afe369e3bf",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/b4896d66e4bc50f63d104296db7954d27638c4": "f872da8ca1739a0c1ad55010dad8f070",
".git/objects/6f/700823eae0fcbccaa16bbce6706ed145a20da7": "6d40cc2ce175a77e6ecb5cde4b136896",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/7a6daa393ab96cc2e162ab6fec28e316c4338f": "988b224fb28a66c693fadf87641ac47d",
".git/objects/85/16c6fa12ed5577201bc70f81f27b84e6e17bfa": "95c7e2a99e2589cf00ef366680b1a2cf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2d1d86d9cf9492c778988010ddcf0725e3c0ec": "7b25208c929a332c6668885578b651af",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/96/14476d72744674fee8377dacd14a93c95586d9": "d7454bda0fae3b5c4bcb97b8481e7d77",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/280126b9b26a7099d22af42a2a3315bc97f1ef": "187b616ef5bc73f4982125ed5d8c1bea",
".git/objects/a9/75a3e7355a60e9c293ea8f5b5ba673ce16c276": "1433b3359744d76af403d39017eaa6b7",
".git/objects/aa/d08cfac51ce442ad3527ca8886a056a4cde852": "9903bf573487d5aa609368a71b6d2cbd",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/b7c4015bf575c24d9ece7ed98a6a23bdbc440b": "679c175f8b85b907cc46fc037c88d304",
".git/objects/b2/c70498ccca3718aeb672ce5573c58cf9f16832": "976cfc2e9cfb8a71e4232c423360710c",
".git/objects/b2/f39d1b88bebe0214e04728a88685893804cf1b": "e600f903b0f7aa2f6db8453d7c778885",
".git/objects/b3/e855c126c9d8d7ed6b6a219b516553cfb470b7": "79303bc2ff4f6469069c130d443f618c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/20e4fc6fc963a391d009168c253b49eecab98c": "6e4efd8a9a7c904465efe7d0f6f730c6",
".git/objects/d0/6867a96aa822b50d964f0278cc24e657f4d955": "6dfb0bf0dfebeb0a8fd389efcbe54781",
".git/objects/d4/2f024aabdc71fbbeaacad4c884e79b7576cfa5": "595f3856a1bb9ac5acde7b9410b1736b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/3d30b7a9fa488466ebefda31af75b0bfca25ef": "8c14232837aa63e09a93ef27db61c747",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/037b2e9a93cacec950fa8084a803edf2b6bbfe": "9f8d3cd298e5754d3f58ce5293e09a87",
".git/objects/fb/75f8efee5215a9ae324c8d2fa6282f579655bb": "d390ffbd84aa9fd58311dadc8a86b012",
".git/objects/fd/a4fc08e2ab1b340f02ac85956ac5d78138fc7f": "dfb12b61e6a771418a96b163d4077c64",
".git/objects/ff/2ecb32c634c02c3d745f70e386e39f6c76d0eb": "713de70df2a6727e0088d75c61ccf248",
".git/refs/heads/master": "576722c3f212475079456cbe30ec6343",
".git/refs/remotes/origin/main": "81ecbee662d1137e68b57af0f4c0b8b1",
".git/refs/remotes/origin/master": "576722c3f212475079456cbe30ec6343",
"assets/AssetManifest.json": "a39b1d2639d0a9aa35ff1942f947158a",
"assets/assets/images/under-construction-symbol.png": "9ef5c9cf0d45e5d85ba546296c06e306",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7da8aa8bdb0073452396af73a24ece70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a1263752d17a942e40c507369630619a",
"/": "a1263752d17a942e40c507369630619a",
"main.dart.js": "5a40769e9fdc02f9e7cfd6330dddd23a",
"manifest.json": "2c855507ae2f30db89b51e65d4c05baa",
"version.json": "ce2f51e49d617be6f8eb5371638cb66c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
