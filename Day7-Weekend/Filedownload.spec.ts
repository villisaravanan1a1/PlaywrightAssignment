import {expect, test } from '@playwright/test'
import path from 'path';


test.describe(`File Upload tests`, async()=>{


test(`File download`, async ({page})=>{
      const pageurl: string = 'https://the-internet.herokuapp.com/download';
      await page.goto(pageurl, {waitUntil: "domcontentloaded"})
      const fileDownloaded = page.waitForEvent("download")
      await page.getByText('sample.png').click();
      const download = await fileDownloaded
      await download.saveAs(path.join(__dirname+"/"+download.suggestedFilename()))

     
})
})
