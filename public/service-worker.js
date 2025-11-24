// Service Worker: 实施 PWA 基础缓存策略

// 升级版本号到 V6，强制浏览器更新Service Worker和所有缓存
const CACHE_NAME = 'levelup-cache-v6';

// 应用外壳的核心文件列表。注意：所有文件现在都假定位于 / 路径下（即 public 目录的内容）
const APP_SHELL_FILES = [
  '/', 
  '/index.html',
  '/manifest.json',
  '/icon_final.svg',  // 确保指向桌面黑底图标
  '/logo_transparent.svg', // 确保指向开屏透明图标
];

// 1. 安装阶段：强行缓存核心文件
self.addEventListener('install', (event) => {
  console.log('[SW] Installing and caching App Shell...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // 使用新文件列表进行缓存
        return cache.addAll(APP_SHELL_FILES);
      })
      .then(() => self.skipWaiting()) // 强制跳过等待，立即接管
  );
});

// 2. 激活阶段：清理所有旧版本缓存
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating and cleaning old caches...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // 立即控制所有页面
  );
});

// 3. 拦截请求：核心修复逻辑 (缓存优先，导航回退到 index.html)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      try {
        const networkResponse = await fetch(event.request);
        
        // SPA 修复逻辑：如果 404，返回 index.html
        if ((!networkResponse || networkResponse.status === 404) && event.request.mode === 'navigate') {
           console.log('[SW] 404 detected on navigation, serving index.html fallback');
           return caches.match('/index.html');
        }
        
        // 缓存新下载的资源
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, networkResponse.clone());
        return networkResponse;

      } catch (error) {
        // 断网或网络错误时，尝试返回 index.html
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        return new Response("Offline", { status: 503, statusText: "Offline" });
      }
    })()
  );
});
