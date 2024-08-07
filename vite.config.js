// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // Optional: useful for certain environments
    },
    hot: true,
  },
});
