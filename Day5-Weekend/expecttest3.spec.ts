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

      const errMsgVal = await page.locator(loginerrorMessageLocator);
      await expect(page.locator(loginerrorMessageLocator)).toHaveText('Epic sadface: Password is required',{timeout:3000})

      await page.waitForTimeout(6000);
      await page.close();
      
})