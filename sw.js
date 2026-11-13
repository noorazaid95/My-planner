var C="planner-v1",F=["./","index.html","manifest.json","icon.svg"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}))});
self.addEventListener("fetch",function(e){e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(ch){ch.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
