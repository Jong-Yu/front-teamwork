import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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

  // // SCSS 전역 사용
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./main.scss";',
  //     },
  //   },
  // },
});
