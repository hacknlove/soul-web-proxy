import { test, expect } from '@playwright/test'

test.describe('Example E2E test', () => {
  test('should navigate and interact with the page', async ({ page }) => {
    await page.goto('/')
    
    // Check that the main heading is visible
    const mainHeading = page.locator('h1')
    await expect(mainHeading).toBeVisible()
    await expect(mainHeading).toContainText('Soul Web Proxy')
    
    // Check that the welcome message is present
    const welcomeMessage = page.locator('p')
    await expect(welcomeMessage).toBeVisible()
    await expect(welcomeMessage).toContainText('Welcome')
  })
  
  test('should handle page interactions', async ({ page }) => {
    await page.goto('/')
    
    // Example of waiting for an element
    const body = page.locator('body')
    await expect(body).toBeVisible()
    
    // Example of checking page title
    await expect(page).toHaveTitle('Soul Web Proxy')
  })
})