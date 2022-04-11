class createOpportunitytPage {
    
    get Opportunity_Name() {
        return $("(//input[@name='potentialname']");
    }

    get lookupImg(){
        return $("//img[@src='themes/softed/images/select.gif']");
    }
     
   get searchtxt(){
       return $("//input[@id = 'search_txt']")
   }

   get searchNowBtn(){
    return $("//input [@name = 'search']")
   }

    get Searchedtextlink(){
    return $("//a[@href = 'javascript:window.close();']")
   }
   
   get saveButton(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async createNewOpportunity(Opportunity_Name){
        await this.Opportunity_Name.waitForDisplayed()
        await this.Opportunity_Name.setValue(Golden_Opportunity)
        await this.saveButton.waitForClickable()
        await this.saveButton.click()

    }

}
module.exports = new createOpportunitytPage()











        // async createNewContact(lastName){
        //     await this.lastNameText.waitForDisplayed()
        //     await this.lastNameText.setValue(lastName)
        //     await this.saveButton.waitForClickable()
        //     await this.saveButton.click()
        // }


       // await this.lookupImg.click()
    //     await this.searchtxt.setValue(All_States_362)
    //     await this.searchNowBtn.click()
    //     await this.Searchedtextlink.click()
    //    
    // 
   

// //switch to frame1 to enter in Topic:text feild
// let frame1 = await $("//iframe[@id='frame1']")
// await browser.switchToFrame(frame1)
// await $("//b[@id='topic']//following-sibling::input").setValue("javaScript")