
const { assert } = require("chai");

var lp = require("../../pageobjects/VTigerApplication/VtigerLoginpage")
//var hp = require("../pageobjects/VTigerApplication/VtigerHomepage")
describe('loginToVtiger', () => {
    it('loginToVtigerAndValidateTitle',async () => {

        lp.loginToApplication("admin", "admin")
        wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
    });

    
});
