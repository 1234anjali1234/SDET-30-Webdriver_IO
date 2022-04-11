class OpportunityPage {

    get createOppLookUpImage(){
        return $("//img[@alt='Create Opportunity...']")
    }
    async clickOnOppLookUpImage(){
       //await this.createOppLookUpImage.waitForDisplayed()
        await this.createOppLookUpImage.click()
    }
}
module.exports = new OpportunityPage()





