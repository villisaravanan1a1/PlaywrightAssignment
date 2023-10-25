import {test, expect} from '@playwright/test';
const siteUrl= "https://www.saucedemo.com/v1/index.html";
//testcase to verify login button error message

test(`Verify login screen error message is visible`, async ({page}) =>{

    await page.goto(siteUrl);
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.locator("#login-button").click();
    await expect(page.locator(`//h3[@data-test="error"]`)).toBeVisible();
    const errormessage = page.locator(`//h3[@data-test="error"]`);
    await expect(errormessage).toHaveText("Epic sadface: Password is required");
    const errortext = await errormessage.textContent();
    console.log(errortext);


})

/*
Running 1 test using 1 worker
[chromium] › Day5-Weekend\expecttest4.spec.ts:5:5 › Verify login screen error message is visble
Epic sadface: Password is required
  1 passed (3.2s)

To open last HTML report run:

  npx playwright show-report
*/