if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>i(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-307d6875.css",revision:null},{url:"assets/index-69c4bb5c.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"d496e769cc5bac66a0283b489504f5d2"},{url:"favicon.svg",revision:"ca6de0fc5c4cbdec93321c4f578b66c8"},{url:"splash_icon.png",revision:"588581b6733bda245e9591bf5bd2c728"},{url:"maskable_icon.svg",revision:"9762d2ffc0a314f6f1a0c716e0b0e836"},{url:"manifest.webmanifest",revision:"fa46fea2992e5509ac8eb89b9587a8f8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
