
const { assert } = require("chai");

var lp = require("../../pageobjects/VTigerApplication/VtigerLoginpage")
//var hp = require("../pageobjects/VTigerApplication/VtigerHomepage")
describe('loginToVtiger', () => {
    it('loginToVtigerAndValidateTitle', async () => {

        await lp.loginToApplication("admin", "admin")
        wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')

        let QuickCreate = await $("//select[@id ='qccombo']")
        await QuickCreate.click()                                      //await fnameTxtField.setValue("Jha")
        QuickCreate.selectByVisibleText("New Organization")
        await browser.debug()
            
        });
    });

    