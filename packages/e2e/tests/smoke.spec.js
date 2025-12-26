import { test, expect } from '@playwright/test'

test.describe('E2E smoke test', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')
    
    // Check that page loads successfully
    await expect(page).toHaveTitle('Soul Web Proxy')
  })
  
  test('should have main content', async ({ page }) => {
    await page.goto('/')
    
    // Look for main content or any visible text
    const body = page.locator('body')
    await expect(body).toBeVisible()
  })
})