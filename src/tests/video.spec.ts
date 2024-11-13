import { test, expect } from '@playwright/test';

test('has video & trace', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PlaywrightFailed/);
});
