import { expect, test } from '@playwright/test'

import loginData from "../../test-data/logintestdata.json"

test.only('Login into saucesdemo', async ({ page }) => {  
    console.log(loginData)
      await page.waitForTimeout(10000)
      // Go to login page
      await page.goto('https://www.saucedemo.com/v1/index.html')
      const userNameSelector:string  = "#user-name";
      const userPasswordSelctor:string = "#password";
      const loginButtonSelctor:string = "#login-button";

      await page.locator("#user-name").fill(loginData.username);
      await page.locator("#password").fill(loginData.password);

      await page.locator("#login-button").click();
      


 
})