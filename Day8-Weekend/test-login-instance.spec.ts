import {test, expect} from '@playwright/test'


test.describe(`login to instance and save storage instance`, async() =>{
    const username = "admin"
    const password = "Password@1"
    const instanceURL = "https://dev192211.service-now.com"

    test(`TC001- login to serivcenow instance`, async({page}) =>{
        await page.goto(instanceURL)

        await page.waitForTimeout(10000)
        await page.locator("#user_name").fill(username)
        await page.locator("#user_password").fill(password)
        await page.locator("#sysverb_login").click()


        const mainIframeLocator = page.frameLocator("iframe#gsft_main")
        await expect(mainIframeLocator.getByText("App Engine Studio")).toBeVisible({timeout:10000})

        await page.context().storageState({path:"creds/servicenow_login_creds.json"})

        /*
        const mainIframeLocator = page.locator("//div[@class='pro-dev-home_banner_content_title'][text()='App Engine Studio']")
        await expect(mainIframeLocator).toHaveText("App Engine Studio")
        */
        

    })
})