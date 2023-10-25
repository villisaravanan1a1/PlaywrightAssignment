import { expect, chromium, test } from '@playwright/test'

test.only('Login into saucesdemo', async ({ page}) => {
      // Go to login page
      await page.goto('https://www.saucedemo.com/v1/index.html')
      const userNameSelector:string  = "#user-name";
      const userPasswordSelctor:string = "#password";
      const loginButtonSelctor:string = "#login-button";
      //const invalidPassword = "#error";

      await page.locator(userNameSelector).fill("standard_user");
      await page.locator(userPasswordSelctor).fill("");

      await page.locator(loginButtonSelctor).click();

      await expect(page.locator("button.error-button")).toContainText("Password is required");

      await page.waitForTimeout(6000);
      await page.close();
      
})