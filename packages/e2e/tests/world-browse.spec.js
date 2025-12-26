import { test, expect } from '@playwright/test';

test('world browsing', async ({ page }) => {
  await page.goto('/world');

  // Check title
  await expect(page.locator('h2')).toContainText('Virtual World');

  // Check breadcrumb shows root
  await expect(page.locator('.breadcrumb')).toContainText('world');

  // Check items exist
  const items = page.locator('.items .item');
  expect(await items.count()).toBeGreaterThan(0);

  // Click on a directory if exists
  const dirLink = page.locator('.items .item a').first();
  if (await dirLink.count() > 0) {
    const dirName = await dirLink.textContent();
    const cleanName = dirName.replace('📁 ', '');
    await dirLink.click();
    await expect(page.locator('.breadcrumb')).toContainText(cleanName);
  }
});