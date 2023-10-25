import { chromium, test } from '@playwright/test'

test('Login into saucesdemo', async ({  }) => {
  

    const browserInstance = await chromium.launch({headless:false})
    //get a browser context from the browser instance
    const browserContext= await browserInstance.newContext(); //give me new context
    //get a new page where we will do all our actions etc
    const page = await browserContext.newPage(); //new pages

      // Go to login page
      await page.goto('https://www.saucedemo.com/v1/index.html')
      const userNameSelector:string  = "#user-name";
      const userPasswordSelctor:string = "#password";
      const loginButtonSelctor:string = "#login-button";

      await page.locator(userNameSelector).fill("standard_user");
      await page.locator(userPasswordSelctor).fill("secret_sauce");

      await page.locator(loginButtonSelctor).click();

      await page.waitForTimeout(6000);
      await browserInstance.close();


 
})