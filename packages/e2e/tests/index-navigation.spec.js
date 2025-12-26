import { test, expect } from '@playwright/test';

test.describe('Index Page Navigation', () => {
  test('should display navigation links to main features', async ({ page }) => {
    await page.goto('/');

    // Check that navigation links are present
    await expect(page.getByRole('link', { name: 'Browse Virtual World' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Entity Memories' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Monitor Internal State' })).toBeVisible();
  });

  test('should navigate to world page when clicking Browse Virtual World', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Browse Virtual World' }).click();
    await expect(page).toHaveURL(/\/world/);
  });

  test('should navigate to memories page when clicking View Entity Memories', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'View Entity Memories' }).click();
    await expect(page).toHaveURL('/memories');
  });

  test('should navigate to state page when clicking Monitor Internal State', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Monitor Internal State' }).click();
    await expect(page).toHaveURL('/state');
  });
});