import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ch-recipe-page/' : './',
  server: {
    open: true,
  },
});
