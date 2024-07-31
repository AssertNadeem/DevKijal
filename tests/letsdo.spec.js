const { test, expect } = require('@playwright/test');

test('Writing new tests' , async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  //await page.pause()


await page.click('id=user-name')
await page.locator('[id="user-name"]').click();
await page.locator('id=user-name').fill('Graham')     
await page.locator('[id="password"]').fill('Einstein')

await page.locator('#login-button').click()

await page.locator('xpath=//input[@name="login-button"]').click()
await page.locator('//input[@name="login-button"]').click()

await page.locator('text=LOGIN').click();
await page.locator('input:has-text("LOGIN")').click()
});