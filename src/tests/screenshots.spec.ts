import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.screenshot({ path: 'output/default.png' });
  await page.screenshot({ path: 'output/fullpage.png', fullPage: true });

  const buffer = await page.screenshot();
  console.log(buffer.toString('base64'));
  await page.locator('#docusaurus_skipToContent_fallback').screenshot({ path: 'output/locator.png' });
});
