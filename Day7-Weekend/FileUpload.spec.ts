import {expect, test } from '@playwright/test'
import path from 'path';


test.describe(`File Upload tests`, async()=>{


test.only(`File download without input tag`, async ({page})=>{
      const pageurl: string = "https://the-internet.herokuapp.com/upload";
      await page.goto(pageurl, {waitUntil: "domcontentloaded"})
      const filechooser = page.waitForEvent("filechooser", {timeout:10000})
      const uploadWithoutInputTag = await page.locator("#drag-drop-upload").click()
      const filechoose = await filechooser
      await filechoose.setFiles([path.join(__dirname, "Acer_Wallpaper_04_3840x2400.jpg")])
      await expect(page.locator("#drag-drop-upload")).toContainText("Acer_Wallpaper_04_3840x2400.jpg")


     
})
})
