const CACHE_NAME = 'ketabkhoon-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/books.html',
  '/book.html',
  '/cart.html',
  '/profile.html',
  '/reader.html',
  '/register.html',
  '/verify.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/vazirmatn-font@33.0.2/dist/font-face.css'
];

// نصب Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// فعال‌سازی و حذف cache‌های قدیمی
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

// استراتژی Cache First با fallback به Network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // برگرداندن از cache اگر موجود باشد
        if (response) {
          return response;
        }
        
        // در غیر این صورت از شبکه دریافت کن
        return fetch(event.request).then(response => {
          // بررسی اعتبار پاسخ
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // کپی پاسخ برای ذخیره در cache
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
      .catch(() => {
        // در صورت عدم دسترسی به شبکه، صفحه آفلاین نمایش داده شود
        return caches.match('/index.html');
      })
  );
});