const {test, expect} = require('@playwright/test')

test('Login and create and delete user from Actitime Application', async({page})=>{

    await page.goto("http://localhost/login.do")

    await page.locator("//input[@id='username']").fill("admin")

    await page.locator("//input[@placeholder='Password']").fill("manager")

    await page.locator("//div[normalize-space()='Login']").click()

    await expect(page).toHaveURL("http://localhost/user/submit_tt.do")
    await expect(page).toHaveTitle("actiTIME - Enter Time-Track")

    await page.locator("//div[@id='gettingStartedShortcutsPanelId']").click()

    await page.locator("//div[normalize-space()='USERS']").click()

    await page.locator("//div[@class='icon']").click()

    await page.locator("//input[@id='userDataLightBox_firstNameField']").fill("Harshitha")

    await page.locator("//input[@id='userDataLightBox_lastNameField']").fill("G")

    await page.locator("//input[@id='userDataLightBox_emailField']").fill("hg763615@gmail.com")

    await page.locator("//input[@id='userDataLightBox_usernameField']").fill("Harshi")

    await page.locator("//input[@id='userDataLightBox_passwordField']").fill("harshi")
    await page.locator("//input[@id='userDataLightBox_passwordCopyField']").fill("harshi")

    await page.locator("//span[normalize-space()='Create User']").click()

    await page.locator("//span[@class='userNameSpan'][normalize-space()='G, Harshitha']").click()

    await page.pause()

    // await page.locator("//a[@id='logoutLink']").click()
})