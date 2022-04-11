const { assert } = require("chai");

var lp = require("../../pageobjects/VTigerApplication/VtigerLoginpage")
var hp = require("../../pageobjects/VTigerApplication/VtigerHomepage")
var c = require("../../pageobjects/VTigerApplication/OpportunityPage")
var co = require("../../pageobjects/VTigerApplication/CreateOrganizationPage")

describe('Opportunity', () => {
    it('createNewOpportunity',async () => {

        // lp.loginToApplication("admin", "admin")
        // console.log("Login successfull");
        // wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')

        await hp.clickOnOpportunitiesLnk() 
        await c.clickOnOppLookUpImage()
        await co.createNewOpportunity()
             
        
    });
});

// let frame1 = await $("//td[@style ='padding:10px;']//following-sibling::td[2]")
        // await browser.switchToFram(frame1)
        
        //await browser.debug() 

// //switch to frame1 to enter in Topic:text feild
// let frame1 = await $("//iframe[@id='frame1']")
// await browser.switchToFrame(frame1)
// await $("//b[@id='topic']//following-sibling::input").setValue("javaScript")
