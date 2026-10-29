import test from '@playwright/test'
test.only("First test",async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://chatgpt.com/")
})
test("Second Test",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.obsqurazone.com/")
})