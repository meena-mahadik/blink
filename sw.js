const CACHE_NAME = 'your-app-cache';



const files = [
  '/',
  '/index.html',
  
  '../assets/img/slide-1.jpg',
  '../assets/img/blink-logo.png',
  '../assets/img/slide-2.jpg',
  '../assets/img/slide-3.jpg',
  '../assets/img/slide-4.jpg',
  '../assets/img/slide-5.jpg',
  '../assets/img/slide-6.jpg',
  '../assets/img/slide-7.jpg',

  // '../assets/img/slider-11.jpg',
  // '../assets/img/slider-14.jpg',
  // '../assets/img/slider-15.jpg',
  // '../assets/img/slider-16.jpg',
  // '../assets/img/slider-17.jpg',
  // '../assets/img/slider-18.jpg',

  // '../assets/img/narrow-banner-2.avif',
  // '../assets/img/sumsung-logo.png',
  // '../assets/img/glorious-logo.jpg',
  // '../assets/img/Asset_3.svg',
  // '../assets/img/dxr-logo1.png',
  // '../assets/img/apple-logo.png',
  // '../assets/img/Asset_4.svg',

  '../assets/css/bootstrap.min.css',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap',
  '../assets/css/slick.min.css',
  '../assets/css/slick-theme.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  '../assets/css/style.css',

  '../assets/js/bootstrap.bundle.min.js',
  '../assets/js/jquery.min.js',
  '../assets/js/slick.min.js',
  '../assets/js/bootstrap-drawer.js',
  '../assets/js/script.js',

  
  
  
];

console.log("aaaa", files)

self.addEventListener('install', event => {

  event.waitUntil(
        
    (async() => {
        try {
            cache_obj = await caches.open(CACHE_NAME)
            cache_obj.addAll(files)
        }
        catch{
            console.log("error occured while caching...")
        }
    })()
)


  // Perform installation steps
  // event.waitUntil(
  //   caches.open(CACHE_NAME)
  //     .then(cache => {
  //       return cache.addAll(files)
  //         .catch(err => {
  //           console.error("Error adding files to cache", err)
  //         })
  //     })
  // );
  console.log("SW Installed")
});

self.addEventListener('fetch', event => {
  // Intercept network requests and serve cached resources
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});