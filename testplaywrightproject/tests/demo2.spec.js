const {test, expect} = require('@playwright/test')
 
test('First PLaywright Test', async function display({page}){
    console.log('Running first Playwright test');
 
})
 
test('Second PLaywright Test', async function({}){
    console.log('Running second Playwright test');
 
})
 
test.only('Third PLaywright Test', async ({})=>{
    console.log('Running third Playwright test');
 
})
 
const {test, expect} = require('@playwright/test');
 
test('first Test for Assertion', async ({page})=>{
    await expect(200).toBe(200)
})
 
npx playwright test tests/demo2.spec.js
 
const {test, expect} = require('@playwright/test');
 
test('first Test for Assertion', async ({page})=>{
    expect(200).toBe(200)
})
 
test('Second Test for Assertion', async ({page})=>{
    expect(true).toBe(true)
})
 
test('Third Test for Assertion', async ({page})=>{
    expect(10.75).toBe(10.75)
})
 
test('Fourth Test for Assertion', async ({page})=>{
    expect('S G Software Testing Institute').toContain('Software')
})
 
 
test('Fifth Test for Assertion', async ({page})=>{
    expect('Good Evening'.includes('Evening')).toBeTruthy()
})
 
test('Six Test for Assertion', async ({page})=>{
    expect(150).toBeGreaterThan(100)
})
 