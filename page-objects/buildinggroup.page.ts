class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   
    
    get inputFirstName () { return $('#firstName') }
    get inputLastName () { return $('#lastName') }
    get inputEmail () { return $('#email') }
    get btnSubmit () { return $('button[type="submit"]') }


    open (path) {
        return browser.url(`https://example.mailosaur.com/${path}`)
    }

    
    
    async signUp1 () {
        let inputFirstName = await $("#idname");
        let inputLastName = await $("input[name='assa'")
        let inputEmail = await $("a[class='abc'")
        let btnSubmit = await $("button[type='submit']");
        // let btnList = await $$("button[type='submit']");

        await (inputFirstName).setValue("Abcd");
        await (inputLastName).addValue("XXX");
        await (inputEmail).setValue("abc@gmil.com");
        await (btnSubmit).click();
        // await (btnList[0]).click();
    } 

    async signUp2 (firstName, lastName, email) {
        let inputFirstName = await $("#idname");
        let inputLastName = await $("input[name='assa'")
        let inputEmail = await $("a[class='abc'")
        let btnSubmit = await $("button[type='submit']");
        // let btnList = await $$("button[type='submit']");

        await (inputFirstName).setValue(firstName);
        await (inputLastName).addValue(lastName);
        await (inputEmail).setValue(email);
        await (btnSubmit).click();
        // await (btnList[0]).click();
    }

    async signUp3 (firstName, lastName, email) {
        await (await this.inputFirstName).setValue(firstName);
        await (await this.inputLastName).addValue(lastName);
        await (await this.inputEmail).setValue(email);
        await (await this.btnSubmit).click();
    }

}

export default new Page();