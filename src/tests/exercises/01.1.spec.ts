import { test, expect } from '@playwright/test';

test('test Locators 01', async ({ page }) => {
  await page.goto('https://www.programsbuzz.com/user/login');
  await page.getByLabel('Username').fill('myusername');
  await page.getByLabel('Password').fill('mypassword');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#edit-name--description')).toHaveText('Enter your ProgramsBuzz username.');
  await expect(page.locator('#edit-pass--description')).toHaveText('Enter the password that accompanies your username.');
  await expect(page.getByText('Error message Unrecognized username or password. Forgot your password?')).toBeVisible();
});
