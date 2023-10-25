import {test, expect} from '@playwright/test';
const siteUrl= "https://www.saucedemo.com/v1/index.html";
//testcase to verify login button error message

test(`Verify the login button is visible`, async ({page}) =>{

    await page.goto(siteUrl);
    
    const loginButton = page.locator("#login-button");

    expect(loginButton).toBeVisible({timeout:10000});
  

})

/*


PS D:\PlayWright-Demo> npx playwright test ./tests/Day5-Weekend/test-visibilty.spec.js --headed

Running 1 test using 1 worker
  1 passed (3.6s)

To open last HTML report run:

  npx playwright show-report
*/