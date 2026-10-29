import test from "@playwright/test"
test("second try",async({page})=>{
   await page.goto("https://www.linkedin.com/feed/foryou/")
})