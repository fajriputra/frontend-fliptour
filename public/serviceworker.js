// const CACHE_NAME = "FliptourID";
// var urlsToCache = ["/", "/index.html"];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request, { cacheName: CACHE_NAME }).then((response) => {
//       if (response) {
//         return response;
//       }
//       var fetchRequest = event.request.clone();

//       return fetch(fetchRequest).then((response) => {
//         if (!response || response.status !== 200) {
//           return response;
//         }

//         var responseToCache = response.clone();

//         caches.open(CACHE_NAME).then((cache) => {
//           cache.put(event.request, responseToCache);
//         });
//         return response;
//       });
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME && cacheName.startsWith("LiburanYuk")) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener("push", (event) => {
//   var body;
//   if (event.data) {
//     body = event.data.text();
//   } else {
//     body = "Push message no payload";
//   }
//   var options = {
//     body: body,
//     icon: "images/favicon.ico",
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: 1,
//     },
//   };
//   event.waitUntil(
//     self.registration.showNotification("Push Notification", options)
//   );
// });
