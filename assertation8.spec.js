//import{test,expect} from '@playwright/test'
const{test,expect} = require('@playwright/test')


test('SoftAssertation',async({page})=>{

    await page. goto("https://demoblaze.com/");

    //hard assertation
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL("https://demoblaze.com/");
    await expect(page.locator('//a[@id="nava"]')).toBeVisible();

    //soft assertation
})


