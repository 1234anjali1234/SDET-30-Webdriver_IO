class HomePage {

     get organizationLnk(){
        return $("//a[.='Organizations']")
        }

    async clickOnOrganizationLnk(){                         
            // await this.organizationLnk.waitForDisplayed()
            await this.organizationLnk.click()
        }
    

    get contactLnk(){
        return $("//a[.='Contacts']")
    }   
    
    async clickOnContactLnk(){
        // await this.clickOnContactLnk.waitForDisplayed()
        await this.contactLnk.click()
    }


    get moreLnk(){
        return $("//a[.='More']")
    }

    async clickOnMoreLnk(){
        await this.moreLnk.click()
    }
    

    get campaignsLnk(){
        return $("//a[@name='Campaigns']")
    }

    async clickOnCampaignsLnk(){
        await this.campaignsLnk.click()
    }
    

    get productsLnk(){
        return $("//a[.='Products']")
    }

    async clickOnProductsLnk(){
        await this.productsLnk.click()
    }

    get opportunitiesLnk(){
        return $("//a[.='Opportunities']")
    }

    async clickOnOpportunitiesLnk(){
        await this.opportunitiesLnk.click()
    }

    get adminImage(){
        return $('//img[@src="themes/softed/images/user.PNG"]')
    }

    async hoverOnAdminImage(){
        await this.adminImage.waitForDisplayed()
        await this.adminImage.moveTo()
    }
 
    get SignOutLink(){
        return $("//a[. = 'Sign Out']")
    }

    async clickOnSignOutLink(){                              // get SignOutLink(){
        await this.SignOutLink.waitForDisplayed()
        await this.SignOutLink.click()
    }

   
   async logoutFromApplication(){
        await this.hoverOnAdminImage()
        await this.clickOnSignOutLink()
    }

}
module.exports = new HomePage()