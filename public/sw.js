if(!self.define){let e,t={};const s=(s,i)=>(s=new URL(s+".js",i).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(t[a])return;let c={};const f=e=>s(e,a),r={module:{uri:a},exports:c,require:f};t[a]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5t4i8ftjY6ft0ZLv171UH/_buildManifest.js",revision:"252ef10d93818bb7585d170026a31f8d"},{url:"/_next/static/5t4i8ftjY6ft0ZLv171UH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-59edc767dc2ffa0b.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/181-7d9e33526273ff56.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/223.3320c5d38e1cef47.js",revision:"3320c5d38e1cef47"},{url:"/_next/static/chunks/264-7bc1e552b3344eef.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/333-baad9740ee0735b5.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/370-dbd59583abd4a1b5.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/455-7d046d7dcea30eab.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/4bd1b696-e4ca2e7a08b4ecf2.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/53c13509-2603aa3f7d0b7680.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/591-bf750c809332a0af.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/60-3dc894ffb1e535fc.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/87-68c52fda80528fc8.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/8e1d74a4-a8d60861be5f3e55.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/_not-found/page-bf7ded3a067bc0c4.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/add-blog/page-54421900a6ac74eb.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-1e9596bd06d195aa.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/api/blogs/route-e27f738c0c6d5126.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/api/signup/route-b5aa6cb8d8ff15d0.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/blogs/%5Bslug%5D/page-1a542e494ecc2bbe.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/blogs/page-0fec2c5af70d8c5a.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/contact/page-b0778dc987229bea.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/dashboard/page-83a54e880782d1f1.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/layout-ff2bf21465a6af95.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/not-found-35c7a461792cfe7f.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/page-7df3202c9f1117cb.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/sign-in/page-a90fdc5fce2e79f8.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/app/sign-up/page-31429c21f277021d.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/dc112a36.86c9a3c5096f5d45.js",revision:"86c9a3c5096f5d45"},{url:"/_next/static/chunks/framework-895c1583be5f925a.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/main-4259c84a9a8d0384.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/main-app-5a35b004bd8d5269.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/pages/_app-abffdcde9d309a0c.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/pages/_error-94b8133dd8229633.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-d054c6ecca31db6a.js",revision:"5t4i8ftjY6ft0ZLv171UH"},{url:"/_next/static/css/0954541d54cd5db7.css",revision:"0954541d54cd5db7"},{url:"/_next/static/css/4c93a3259fcfcf89.css",revision:"4c93a3259fcfcf89"},{url:"/_next/static/media/09612036995691d3-s.woff2",revision:"0c0f93649ecc956e2f4ef93516e76b4e"},{url:"/_next/static/media/2b3290bbd74b406c-s.woff2",revision:"bbcebad74e96cafbdc4b057e8b5a493f"},{url:"/_next/static/media/5636db5d86fcf087-s.p.otf",revision:"042b83642e704d75154a6c15240fcb54"},{url:"/_next/static/media/5eb4dc476b9a2439-s.p.woff2",revision:"2e8584785602c2d4f82675881400ea07"},{url:"/_next/static/media/7b04c51cbf1b2567-s.woff2",revision:"f6218d66c369ce64c3064f3089fbd5e5"},{url:"/_next/static/media/af8267a69ca9033a-s.p.otf",revision:"44cfdead34424bdc49b11c3dc7e64e55"},{url:"/_next/static/media/f7d7b00556744853-s.woff2",revision:"7dba9fd28e9ddbe987aff201644ec4dc"},{url:"/_next/static/media/myImg.62e23d1b.webp",revision:"3b3757621dfa82c2ee97a12102956024"},{url:"/download.png",revision:"4e0b65ee44444f3705ae33cf53cf1f54"},{url:"/favicon.ico",revision:"c66f191c13da4c0eedf65b48d5eae636"},{url:"/fonts/Sprintura-Demo.otf",revision:"042b83642e704d75154a6c15240fcb54"},{url:"/fonts/toxigenesis-bd.otf",revision:"44cfdead34424bdc49b11c3dc7e64e55"},{url:"/icons/manifest-icon-192.maskable.png",revision:"01b95dba5a23bb76c1c7abd8bbe6a469"},{url:"/icons/manifest-icon-512.maskable.png",revision:"a0773a84d70a18767de2a0e77ccfbc9a"},{url:"/loading.json",revision:"b90bcb6ceb76c0b8d884749a00dc68e4"},{url:"/logo.jpg",revision:"9a9d228cb97bbc39962b08cd19dd16ff"},{url:"/manifest.json",revision:"dcb1b103ecd5e99284b183686914c04c"},{url:"/myImg.webp",revision:"3b3757621dfa82c2ee97a12102956024"},{url:"/software_dev.json",revision:"b6a331a54f98cd1745bd6a91a2541a48"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var t=e.sameOrigin,s=e.url.pathname;return!(!t||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var t=e.request,s=e.url.pathname,i=e.sameOrigin;return"1"===t.headers.get("RSC")&&"1"===t.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var t=e.request,s=e.url.pathname,i=e.sameOrigin;return"1"===t.headers.get("RSC")&&i&&!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var t=e.url.pathname;return e.sameOrigin&&!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
