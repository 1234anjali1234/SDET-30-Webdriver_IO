class createProductPage {
    
    get lastNameText () {
        return $("(//input[@class='detailedViewTextBox'])[3]");
    }
    
    get saveButton(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async createNewProduct(lastName){
        await this.lastNameText.waitForDisplayed()
        await this.lastNameText.setValue(lastName)
        await this.saveButton.waitForClickable()
        await this.saveButton.click()
    }

}

module.exports = new createProductPage()