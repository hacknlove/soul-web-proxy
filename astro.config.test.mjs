// @ts-check
import { defineConfig } from 'astro/config';

// Test configuration with dedicated port
export default defineConfig({
  server: {
    port: 54321,
  },
});