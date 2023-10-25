import {test, expect} from '@playwright/test';
const siteUrl= "https://www.saucedemo.com/v1/index.html";
//testcase to verify login button error message

test(`Verify the login button is visible`, async ({page}) =>{

    await page.goto(siteUrl);
    
    const loginButton = page.locator("#login-button");

    const responseCode = 200;
    expect(responseCode, `expecting response code to be ${responseCode}`).toBe(200);
  

})

/*


PS D:\PlayWright-Demo> npx playwright test ./tests/Day5-Weekend/genericassertion.spec.ts --headed

Running 1 test using 1 worker
  1 passed (3.3s)

To open last HTML report run:

  npx playwright show-report

*/