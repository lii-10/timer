const staticCacheName = 'site-static'; 

const assets = [
    './index.html',
    './public/Real/Blog.html',
    './public/Real/Aticles/Space_Article.html',
    './public/Real/timer.html',
    './public/css/timer.css',
    './public/App.js',
    './public/css/Article.css',
    './public/css/Blog.css',
    './public/css/tailwind.css',
    './favicon.ico',
    './icons/apple-touch-icon.png',
    './icons/favicon-32x32.png',
    './icons/favicon-16x16.png',
    './icons/manifest-icon-192.png',
    './icons/manifest-icon-512.png',
];
//install service worker
self.addEventListener('install', evt =>{
    console.log('service worker is installed')
    evt.waitUntil(
        caches.open(staticCacheName).then( Cache => {
            console.log('cache shell');
            Cache.addAll(assets);
        })
    );
});
//Well done
self.addEventListener('activate',evt=>{
    console.log("Service Worker Activated")
})
//Fetch Event
self.addEventListener('fetch',evt =>{
    evt.respondWith(
        caches.match(evt.request)
        .then(cacheRes =>{
            return cacheRes || fetch(evt.request);
        }))
});