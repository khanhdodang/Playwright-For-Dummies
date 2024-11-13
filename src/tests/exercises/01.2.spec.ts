import { test, expect } from '@playwright/test';

test('test Locators 02', async({ page }) => {
    await page.goto('https://www.programsbuzz.com/user/login');
    await page.waitForURL('https://www.programsbuzz.com/user/login');
    await page.locator('#edit-name').type('myusername');
    await page.locator('//input[@id="edit-pass"]').type('mypassword');
    // await page.locator('#edit-submit').click();
    // await page.locator('text="Log in"').click();
    const locator = page.getByRole('button', { name: 'Log in' });
    await locator.click();
});
