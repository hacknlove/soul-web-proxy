import { test, expect } from '@playwright/test';

test('memory browsing', async ({ page }) => {
  await page.goto('/memories');

  // Check title
  await expect(page.locator('h2')).toContainText('Entity Memories');

  // Check memories exist
  const items = page.locator('.memories-list .memory-item');
  await expect(await items.count()).toBeGreaterThan(0);

  // Check first memory has title and link
  const firstItem = items.first();
  await expect(firstItem.locator('h3')).toBeVisible();
  const link = firstItem.locator('a');
  await expect(link).toContainText('Read more');
});