

describe('frame_suite', () => {
    it('tc_01_frameHandle',async () => {
        
        await browser.url("https://chercher.tech/practice/frames")
        let text = await $("//span[. = 'Not a Friendly Topic']").getText()
        console.log("========text of an element======="+ text);

            
        //switch to frame1 to enter in Topic:text feild
        let frame1 = await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)
        await $("//b[@id='topic']//following-sibling::input").setValue("javaScript")
               
        //switch to frame3 to check checkbox
        let frame3 = await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)
        await $("//input[@id ='a']").click()
        
                       

     // switch to non-iframearea ---i.e back to Not a friendly Topic webpage
        await browser.switchToFrame(null) //we can use switchtoparent() too --but here parent frame is not present
        let frame2 = await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)
        let animalsDropDown = await $("//select[@id = 'animals']")
        animalsDropDown.selectByVisibleText("Avatar")
        await browser.debug()        //for making execution slow
     
    
    });
});
