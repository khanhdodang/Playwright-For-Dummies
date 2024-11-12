import { test, expect } from '@playwright/test';

test('Test login page @fast', async ({ page }) => {
  // npx playwright test --grep @fast
});

test('Test full report @slow', async ({ page }) => {
  // npx playwright test --grep-invert @slow
  // npx playwright test --grep "@fast|@slow"
});

test('Test full report @fast|@slow', async ({ page }) => {
    // npx playwright test --grep "@fast|@slow"
});
