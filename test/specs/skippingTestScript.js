//mocha snippet
//skippingTestscripts

describe.skip('Test_suite', () => {       //we can use skip with describe()
    it.skip('test_tc_01', async () => {   //we can use skip with it() also
        console.log("test_tc_01");
    })
    it('test_tc_02', async () => {
        console.log("test_tc_02");
    })
    xit('test_tc_03', async () => {  
        console.log("test_tc_03");
    })
})    