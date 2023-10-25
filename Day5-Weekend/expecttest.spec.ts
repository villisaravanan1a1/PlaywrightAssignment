import { expect,  test } from '@playwright/test'

test('Expected Related condition', async ({ page  }) => {
      // Go to login page
      await page.goto('https://www.saucedemo.com/v1/index.html')

      //User Name and Login Button Clicked
      const userNameSelector:string  = '//input[@id="user-name"]';      
      const loginButtonSelctor:string = '//input[@id="login-button"]';

      //Check Password Error Message
      const errorMessage:string = '//h3[@data-test="error"]';

      await page.locator(userNameSelector).fill("standard_user");    
      await page.locator(loginButtonSelctor).click();

      //Check the error message -1
      await expect(page.locator(errorMessage),"Verfiying the login error message to be displayed").toBeVisible();
      await expect(page.locator(errorMessage)).toHaveText('Epic sadface: Password is required');

    


      await page.waitForTimeout(6000);
     


 
})