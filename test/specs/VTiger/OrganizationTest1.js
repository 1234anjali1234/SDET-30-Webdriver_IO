const { assert } = require("chai");

var lp = require("../../pageobjects/VTigerApplication/VtigerLoginpage")
var hp = require("../../pageobjects/VTigerApplication/VtigerHomepage")
var c = require("../../pageobjects/VTigerApplication/OrganizationPage")
var co = require("../../pageobjects/VTigerApplication/CreateOrganizationPage")

describe('Organization', () => {
    it('createNeworganization',async () => {

        // lp.loginToApplication("admin", "admin")
        // console.log("Login successfull");
        // wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')

        await hp.clickOnOrganizationLnk() 
        await c.clickOnOrgLookUpImage() 
        await co.createNewOrganization("abcd","Healthcare")
    });
});



