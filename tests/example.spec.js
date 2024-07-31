// @ts-check
const { test, expect } = require('@playwright/test');

test('Has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Westpac wrong login information test', async ({ page, context }) => {



  //
  await page.goto('https://www.westpac.co.nz/');

 

  //
  await page.getByRole('button', { name: 'Login' }).click();

  //await expect(page.getByRole('heading')).toContainText('Log in');
  await page.getByTestId('input-username').click();
  await page.getByTestId('input-username').fill('Testing');
  await page.getByTestId('input-password').click();
  await page.getByTestId('input-password').fill('Testing');
  await page.getByTestId('button-submit').click();

  await page.ge
  await expect(page.getByTestId('login-alert-form').
  getByTestId('alert-message').locator('div')).toContainText('Your Customer ID or password is invalid, please try again.');
});