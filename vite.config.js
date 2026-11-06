import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Multi-page site: each page is its own HTML file, so URLs like /projects/
// work on any static host without rewrite rules.
const pages = {
  main: 'index.html',
  projects: 'projects/index.html',
  experience: 'experience/index.html',
  'system-design': 'system-design/index.html',
  writing: 'writing/index.html',
};

// Tags shared by every page (favicons, fonts). Edit here, not in each HTML file.
// TODO before launch: once the custom domain is live, add canonical and og:url tags per page.
const sharedHead = [
  ['meta', { name: 'author', content: 'Allan Avosa' }],
  ['meta', { name: 'theme-color', content: '#f9fafb' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
  ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
  ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=JetBrains+Mono:wght@400;600&display=swap' }],
];

const sharedHeadPlugin = {
  name: 'shared-head',
  transformIndexHtml: () => sharedHead.map(([tag, attrs]) => ({ tag, attrs, injectTo: 'head' })),
};

export default defineConfig({
  plugins: [react(), sharedHeadPlugin],
  base: '/',
  build: {
    rollupOptions: {
      input: Object.fromEntries(Object.entries(pages).map(([k, v]) => [k, resolve(__dirname, v)])),
    },
  },
});
