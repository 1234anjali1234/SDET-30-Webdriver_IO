const { assert } = require("chai");

var lp = require("../../pageobjects/VTigerApplication/VtigerLoginpage")
var hp = require("../../pageobjects/VTigerApplication/VtigerHomepage")
var c = require("../../pageobjects/VTigerApplication/ContactPage")
var co = require("../../pageobjects/VTigerApplication/CreateContactPage")

describe('Contact', () => {
    it('createNewContact',async () => {

        // lp.loginToApplication("admin", "admin")
        // console.log("Login successfull");
        // wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')

        await hp.clickOnContactLnk()
        await c.clickOnContactLookUpImage()
        await co.createNewContact("qwyuiop")
            

    });
});



