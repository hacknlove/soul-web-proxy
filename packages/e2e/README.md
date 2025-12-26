# E2E Tests

End-to-end tests are located in `packages/e2e/tests/` and use Playwright.

## Running Tests

```bash
# Install E2E dependencies (only needed once)
npm --prefix packages/e2e install

# Run all E2E tests
npm --prefix packages/e2e test

# Run with headed browser (useful for debugging)
npm --prefix packages/e2e run test:headed

# Run from root (convenience script)
npm run test:e2e
```

## Test Conventions

- File names should end with `.spec.js`
- Use `test.describe()` to group related tests
- Use `test()` for individual test cases
- Use `expect()` for assertions
- Use `page.locator()` for element selection

## Example Test Structure

```javascript
import { test, expect } from '@playwright/test'

test.describe('Feature name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toBeVisible()
  })
})
```

## Web Server

Tests automatically start the Astro application in test mode on port 4321:
- Uses `astro.config.test.mjs` configuration
- Runs in headless mode by default
- Server is started/stopped automatically

## Debugging

- Use `test:headed` script to run with visible browser
- Use `await page.pause()` to pause execution
- Check test reports in `packages/e2e/playwright-report/`