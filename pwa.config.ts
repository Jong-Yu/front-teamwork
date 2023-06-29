import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

const pwaConfig = () =>
  //   VitePWA({
  //     mode: 'production',
  //     srcDir: 'src',
  //     filename: 'sw.ts',
  //     base: '/',
  //     injectRegister: 'inline',
  //     manifest: {
  //       name: 'Team Work',
  //       short_name: 'TW',
  //       description: 'Side Project',
  //       theme_color: '#ffffff',
  //       icons: [
  //         {
  //           src: '/icons/icon.png',
  //           sizes: '192x192',
  //           type: 'image/png',
  //         },
  //       ],
  //     },
  //     strategies: 'injectManifest',
  //     injectManifest: {
  //       swSrc: resolve(__dirname, 'src/sw.ts'), // path to your service worker file
  //       globPatterns: ['**/*.{js,css,html,png}'], // patterns to glob for when generating the precache manifest
  //     },
  VitePWA({
    manifest: {
      name: 'Vite App',
      short_name: 'Vite App',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icons/icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/index.html',
    },
    strategies: 'injectManifest',
    injectManifest: {
      swSrc: './src/sw.js',
      swDest: 'dist/sw.js',
      globDirectory: 'dist',
      globPatterns: ['**/*.{js,css,html,png,ico}'],
    },
  });

export default pwaConfig;
