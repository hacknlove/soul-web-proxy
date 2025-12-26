import { test, expect } from '@playwright/test';

test('state monitoring', async ({ page }) => {
  await page.goto('/state');

  // Check title
  await expect(page.locator('h2')).toContainText('Internal State');

  // Check state items
  const items = page.locator('.state-item');
  await expect(items).toHaveCount(3);

  // Check labels
  await expect(items.nth(0).locator('h3')).toContainText('Memory');
  await expect(items.nth(1).locator('h3')).toContainText('Emotions');
  await expect(items.nth(2).locator('h3')).toContainText('Thoughts');

  // Check content exists
  await expect(items.nth(0).locator('pre')).not.toBeEmpty();
});