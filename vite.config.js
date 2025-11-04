import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/frontend-project/',
  server: {
    host: '0.0.0.0', // Доступен извне для Live Share
    port: 5173,
    strictPort: true, // Ошибка, если порт занят
  },
  build: {
    emptyOutDir: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      input: {
        index: resolve(fileURLToPath(new URL('.', import.meta.url)), 'index.html'),
        budanov: resolve(fileURLToPath(new URL('.', import.meta.url)), 'budanov.html'),
        dydin: resolve(fileURLToPath(new URL('.', import.meta.url)), 'dydin.html'),
      },
    },
  },
});
