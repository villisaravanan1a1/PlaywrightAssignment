import { chromium, test } from '@playwright/test'

test('Login into saucesdemo', async ({ page }) => {
  

  

      // Go to login page
      await page.goto('https://www.saucedemo.com/v1/index.html')
      const userNameSelector:string  = "#user-name";
      const userPasswordSelctor:string = "#password";
      const loginButtonSelctor:string = "#login-button";

      await page.locator(userNameSelector).fill("standard_user");
      await page.locator(userPasswordSelctor).fill("secret_sauce");

      await page.locator(loginButtonSelctor).click();

      await page.waitForTimeout(6000);


 
})