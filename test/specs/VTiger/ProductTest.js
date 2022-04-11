const { assert } = require("chai");

var lp = require("../../pageobjects/VTigerApplication/VtigerLoginpage")
var hp = require("../../pageobjects/VTigerApplication/VtigerHomepage")
var c = require("../../pageobjects/VTigerApplication/ProductPage")
//var co = require("../../pageobjects/VTigerApplication/CreateProductPage")

describe('Product', () => {
    it('createNewProducts',async () => {

        // lp.loginToApplication("admin", "admin")
        // console.log("Login successfull");
        // wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')

        await hp.clickOnProductsLnk()
        await c.clickOnProductLookUpImage()
        //await co.createNewContact("qwyuiop")
            

    });
});



