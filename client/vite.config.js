import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
// import pwaPlugin from '@vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ['styled-components'],
  //   },
  // },
  // plugins: [
  //   pwaPlugin({
  //     mode: 'development',
  //     base: '/',
  //     registerType: 'autoUpdate',
  //   }),
  //   react(),
  // ],
});
