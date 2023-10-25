import test, { expect  } from '@playwright/test'

test.describe(`Salesforce login without using storage state`, async () => {

    test.use({storageState:"D:/PlayWright-Demo/creds/sf-login-storage.json"})
    //test.use({storageState:"sf-login-storage.json"})

  test(`Login into saucesdemo`, async ({ page }) => {
    await page.goto("https://qeagle-dev-ed.lightning.force.com/lightning/setup/SetupOneHome/home")

    const appLauncherLocator = page.locator(".slds-icon-waffle")
    await expect(appLauncherLocator).toBeVisible({ timeout: 10000 })
    await appLauncherLocator.click()

    const viewAllLocator = page.getByLabel("View All Application")
    await viewAllLocator.click()

  })

})