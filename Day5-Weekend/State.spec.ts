import { expect, chromium, test } from '@playwright/test'

test.only('Login into saucesdemo', async ({ page}) => {
      // Go to login page
      await page.goto('https://modives-web-dev.azurewebsites.net/login')
      const userNameSelector:string  = "#username";
      const userPasswordSelctor:string = "#password";
      const loginButtonSelctor:string = "//button[@class='Button-module_button__2ZuB7 Button-module_primary__s1sM6']";
      const NewVerificationSelector:string = "//button[@class='Button-module_button__2ZuB7 Button-module_primary__s1sM6']";
      const SalesRep:string = "//*[@id='salesRepUserId']/div/div[1]/div[1]";
      //const invalidPassword = "#error";

      await page.locator(userNameSelector).fill("customerAdmin@modives.com");
      await page.locator(userPasswordSelctor).fill("Modives#2023!");

      await page.locator(loginButtonSelctor).click();

      const listofSalesRep = ["Customer Customer", "Rafael Torre"]

      await page.locator(NewVerificationSelector).click();
      const listSalesRep = page.locator(SalesRep);
      await expect(listSalesRep).toHaveCount(listofSalesRep.length)
      listofSalesRep.forEach(async (salesName)=>{
        const expSales = listSalesRep.filter({hasText:salesName})
        await expect(expSales).toBeVisible();
      })

      //await expect(page.locator("button.error-button")).toContainText("Password is required");

      await page.waitForTimeout(6000);
      await page.close();
      
})