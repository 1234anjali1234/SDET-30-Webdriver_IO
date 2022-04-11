describe('disabled_suite', () => {
    it('tc_01_disabledElement', async () => {
        await  browser.url("http://127.0.0.1:5500/test/specs/disabled.html")
        let fnameTxtField = await $("//input[@id ='fname']")
        await fnameTxtField.setValue("Jha")
        let fnameValue = await  fnameTxtField.getValue()
        console.log("*******fnameValue***************" + fnameValue);

        let lnameTxtField = await $("//input[@id ='lname']")
        await browser.execute(()=> {           //use execute javascript() to handle disabledElement
        document.getElementById("lname").setAttribute("value","Anjali")
       })
       //await lnameTxtfield.setValue("Anjali")
       let lnameValue = await  lnameTxtField.getValue()
        console.log("*******lnameValue***************"+ lnameValue); 
        await browser.debug()
    });
    
});