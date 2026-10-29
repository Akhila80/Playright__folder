import test from "@playwright/test";

test("locators test",async({page})=>{
      await page.goto("https://selenium.qabible.in/form-submit.php")
      await page.waitForTimeout(2000)

})