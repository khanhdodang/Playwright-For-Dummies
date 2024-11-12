import { test, expect } from '@playwright/test';

test.only('focus this test', async ({ page }) => {
    // Run only focused tests in the entire project.
});

test.skip('skip this test', async ({ page }) => {
    // This test is not run
});

test('skip this test with browserName', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it');
});
