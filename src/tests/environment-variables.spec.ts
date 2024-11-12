import { test, expect } from '@playwright/test';

test(`example test`, async ({ page }) => {
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
    // await page.getByLabel('User Name').fill(process.env.USERNAME);
    // await page.getByLabel('Password').fill(process.env.PASSWORD);
  });
