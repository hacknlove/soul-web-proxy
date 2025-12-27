import dotenv from 'dotenv';
import path from 'node:path';
// Load root .env.test so both Playwright and spawned webServer inherit WORLD_PATH
dotenv.config({ path: path.resolve(process.cwd(), '..', '..', '.env.test') });
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:54321',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'cd ../.. && npm run dev:test -- --port 54321',
    url: 'http://localhost:54321',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});