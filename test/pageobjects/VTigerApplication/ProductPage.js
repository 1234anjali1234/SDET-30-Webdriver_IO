class ProductPage {

    get createProductLookUpImage(){
        return $("//img[@alt='Create Product...']")
    }
    async clickOnProductLookUpImage(){
         await this.createProductLookUpImage.click()
    }
}
module.exports = new ProductPage ()

