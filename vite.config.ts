import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pwaConfig from './pwa.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaConfig()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
