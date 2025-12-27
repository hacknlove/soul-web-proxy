// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Test configuration with dedicated port
export default defineConfig({
  integrations: [react()],
  server: {
    port: 54321,
  },
});
