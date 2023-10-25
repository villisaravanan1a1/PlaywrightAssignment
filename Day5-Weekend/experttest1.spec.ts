import { expect, test } from '@playwright/test'

test.only('Login into saucesdemo', async ({ page}) => {
      // Go to login page
      await page.goto('https://www.saucedemo.com/v1/index.html')
      const userNameSelector:string  = `#user-name`;
      const loginButtonSelctor:string = `#login-button`;
      const loginerrorMessageLocator:string = `//h3[@data-test="error"]`
      //const invalidPassword = "#error";

      await page.locator(userNameSelector).fill(`standard_user`);
      await page.locator(loginButtonSelctor).click();

      //await expect(loginerrorMessageLocator,`Error message is not visible`).tobeVisible();

      await page.waitForTimeout(6000);
      await page.close();
      
})