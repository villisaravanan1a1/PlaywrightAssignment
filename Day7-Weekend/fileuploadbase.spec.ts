import {expect, test } from '@playwright/test'
import path from 'path';


test.describe(`File Upload tests`, async()=>{
test('upload file', async ({ page }) => {
      // Go to login page
      await page.goto('https://www.leafground.com/file.xhtml ')
      const card = page.locator(".card").filter({has:page.getByText("Basic Upload")});
      await card.locator("input[type='file']").setInputFiles([path.join(__dirname, 'Acer_Wallpaper_04_3840x2400.jpg')]);
      await expect(card.locator(".ui-fileupload-filename")).toContainText("Acer_Wallpaper_04_3840x2400.jpg");
})

test.only(`File download`, async ({page})=>{
      const pageurl: string = 'https://the-internet.herokuapp.com/download';
      await page.goto(pageurl, {waitUntil: "domcontentloaded"})
      const fileDownloaded = page.waitForEvent("download")
      await page.getByText('sample.pdf').click();
      const download = await fileDownloaded
      await download.saveAs(path.join(__dirname+"/"+download.suggestedFilename()))

     
})
})
