import { expect, test } from '@playwright/test'

import listofappData from "../../test-data/mulitplelogintestdata.json"

listofappData.forEach((testDataObject)=>{
    test(`verify client handling for ${testDataObject.case}`, async ({ page }) => {  
        //console.log(listofappData)
    
          // Go to login page
          await page.goto('https://www.saucedemo.com/v1/index.html')
          const userNameSelector:string  = "#user-name";
          const userPasswordSelctor:string = "#password";
          const loginButtonSelctor:string = "#login-button";
    
          await page.locator("#user-name").fill(testDataObject.username);
          await page.locator("#password").fill(testDataObject.password);
    
          await page.locator("#login-button").click();
          await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
          await expect(page.locator("//h3[@data-test='error']")).toContainText(testDataObject.message)

    })

});

