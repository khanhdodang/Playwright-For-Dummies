import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await expect(page.getByRole('button')).toHaveText('Sign in', { timeout: 10000 });
});

test('slow test', async ({ page }) => {
  test.slow(); // Easy way to triple the default timeout
  // ...
});

test('very slow test', async ({ page }) => {
  test.setTimeout(12000);
  // ...
});