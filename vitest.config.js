import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.test.js', 'tests/visual/**/*.test.js'],
    exclude: ['packages/**', 'astro.config.*.mjs']
  }
})