import { expect, test } from '@playwright/test'

test('Login into saucesdemo', async ({ page }) => {
  

  

      // Go to login page
      await page.goto('https://www.saucedemo.com/v1/index.html')
      const userNameSelector:string  = "#user-name";
      const userPasswordSelctor:string = "#password";
      const loginButtonSelctor:string = "#login-button";

      await page.locator("#user-name").fill("standard_user");
      await page.locator("#password").fill("secret_sauce");

      await page.locator("#login-button").click();
      const selectdropdown = page.locator("//select[@class='product_sort_container']").filter({hasText: "Price (low to high)"});
      await selectdropdown.selectOption("Price (low to high)");


      await expect(page.locator(".inventory_item").nth(0)).toContainText("Sauce Labs Onesie");
      await expect(page.locator(".inventory_item").nth(5)).toContainText("Sauce Labs Fleece Jacket");

      //const errormessagefirst = page.locator(`//div[@class='inventory_item_name']`).filter({hasText: "Sauce Labs Onesie"});
      //await expect(errormessagefirst).toHaveText("Sauce Labs Onesie");
      //const errormessagelast = page.locator(`//div[@class='inventory_item_name']`).filter({hasText: "Sauce Labs Fleece Jacket"});
      //await expect(errormessagelast).toHaveText("Sauce Labs Fleece Jacket");
      //const errortext = await errormessage.textContent();
      //await page.waitForTimeout(6000);


 
})