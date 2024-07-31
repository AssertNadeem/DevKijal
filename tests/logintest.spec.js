
const { test, expect } = require('@playwright/test')

/*
let context
let page

test.beforeAll(async ({ browser }) =＞ {

 context = await browser.newContext()

 await context.tracing.start({ screenshots: true, snapshots: true })

 page = await context.newPage()

})

test.afterAll(async () =＞ {

 await context.tracing.stop({ path: 'test-trace.zip' });
})

*/

test('Westpac wrong login information test in login file', async ({ page }) => {

  //await context.tracing.start({snapshots:true, screenshots:true});
    //

    await page.goto('https://www.westpac.co.nz/');
    //await page.pause()

    //
    await page.getByRole('button', { name: 'Login' }).click();
    //await expect(page.getByRole('heading')).toContainText('Log in');
    await page.getByTestId('input-username').click();
    await page.getByTestId('input-username').fill('Testing');
    await page.getByTestId('input-password').click();
    await page.getByTestId('input-password').fill('Testing');
    await page.getByTestId('button-submit').click();
    await expect(page.getByTestId('login-alert-form').
    getByTestId('alert-message').locator('div')).toContainText('Your Customer ID or password is invalid, please try again.');

    //await context.tracing.stop({path:'test2_trace.zip'});
  });