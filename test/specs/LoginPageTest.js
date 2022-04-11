const { assert } = require("chai");

var lp = require("../pageobjects/VTigerApplication/VtigerLoginpage")
//let commonData = require('../data/commonData.json')
//let testData = require('../data/testSpecificData.json')
//let excelData = require('../../Generic_Utility/Excel_Utility')


console.log(excelArray);

describe('loginToVtiger', () => {               //test suite name
    it('loginToVtigerAndValidateTitle',async () => {         //test case name
        lp.loginToApplication(commonData.url, commonData.userName, commonData.password)
        wdioExpect(browser).toHaveTitleContaining(testData.partialTitleHomePage)
    });
    it.only('loginToVtigerAndValidateTitle from excel',async () => {         //test case name
        let excelArray = excelData("./ProjectData.xlsx", 'Sheet1')
        lp.loginToApplication(excelArray[0].url, excelArray[0].username, excelArray[0].password)
        wdioExpect(browser).toHaveTitleContaining(testData.partialTitleHomePage)
    });
});