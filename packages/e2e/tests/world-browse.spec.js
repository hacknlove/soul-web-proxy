import { test, expect } from '@playwright/test';

test('world browsing', async ({ page }) => {
  await page.goto('/world');

  // Check title (updated for new file explorer)
  await expect(page.locator('h2')).toContainText('World Files');

  // Note: Old breadcrumb and items checks removed as UI changed to file explorer
});