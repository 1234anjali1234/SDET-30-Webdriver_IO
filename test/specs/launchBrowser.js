//after lanching i need title of the browser

describe('launch_suite', () => {
    it('navigate to Amazon', async() => {
        await browser.url("https://amazon.in")

        //**URL Validation**\\
        //await expect(browser).toHaveUrl('https://amazon.in')           //Using actual link text
        await expect(browser).toHaveUrlContaining('amazon')              //Using partial link text
        let title = await browser.getTitle()
        console.log("*****title_of _the_page is********"+ title);

        //**Title Validation**\\
        //await expect(browser).toHaveTitle("Onli Shoes - Amazon.in")      //Using actual link text
        await expect(browser).toHaveTitleContaining('Shopping')            //Using partial link text
    });
});

