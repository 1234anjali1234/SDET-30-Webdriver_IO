// describe('hooks', function () {
//     before(function () {
//       // runs once before the first test in this block
//     });
  
//     after(function () {
//       // runs once after the last test in this block
//     });
  
//     beforeEach(function () {
//       // runs before each test in this block
//     });
  
//     afterEach(function () {
//       // runs after each test in this block
//     });
  
//     // test cases
//   });

describe("suite_01", ()=>{
    before(function () {
        //runs once before the 1st test case in this block
        console.log("open the brower");
        console.log("enter the url");
    });
    beforeEach(function () {
        // runs before each test in this block
        console.log("login to the application");
    });
    after(function () {
        // runs once after the last test in this block
        console.log("close the browser");
    });
    afterEach(function () {
        // runs after each test in this block
        console.log("logout from the application");
    });
    
    it("tc_01", ()=>{
        console.log("create_Contact");
    })

    it("tc_02", ()=>{
        console.log("create_Organization");
    })
})

