const staticCacheName = 'static-site'
const dynamicCacheName = 'dynamic-site'

const ASSETS = [
    '/',
    '/index.html',
    '/src/index.css',
    '/src/service-worker/app.js',
    '/src/pages/Details/details.module.scss',
    '/src/pages/Home/home.module.scss',
    '/src/pages/Home/Home.tsx',
    '/src/pages/List/list.module.scss',
    '/src/pages/Login/login.css',
    '/src/pages/Page404/page404.module.scss',
]
self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(ASSETS)
})

self.addEventListener('activate', async event => {
    const cachesKeysArray = await caches.keys()
    await Promise.all(cachesKeysArray.filter(key => key !== staticCacheName && key !== dynamicCacheName).map(key => caches.delete(key)))
})

self.addEventListener('fetch', event => {
    event.respondWith(cacheFirst(event.request))
    /*event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request).then(response => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(event.request.url, response.clone())
                    return response
                })
            })
        })
    )*/
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    try {
        return cached ?? await fetch(request).then(response => {
            return networkFirst(request)
        })
    } catch (ex) {
        return networkFirst(request)
    }
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (ex) {
        const cached = await cache.match(request)
        return cached ?? await caches.match('/src/pages/Page404/page404.tsx')
    }
}
