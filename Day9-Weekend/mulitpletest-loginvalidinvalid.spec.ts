import { expect, test } from '@playwright/test'

import listofappData from "../../test-data/mulitplelogintestdatavalid.json"

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

          if(testDataObject.case === "happy path case"){
            await expect(page.locator("//h3[@data-test='error']")).not.toBeVisible()
            await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

          }
          else{
          
          await expect(page.locator("//h3[@data-test='error']")).toBeVisible()
          await expect(page.locator("//h3[@data-test='error']")).toContainText(testDataObject.message)
          }

    })

});

