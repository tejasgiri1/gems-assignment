class LoginPage  {
    public get inputUseremail () {
        return $('//input[@name="username"]');
    }

    public get inputPassword () {
        return $('//input[@name="password"]');
    }
    public get userMenu() {
        return $('//ul[@class="oxd-main-menu"]');
        // return $('//header//span/h6[text()="Dashboard"]');
    }

    public get btnSubmit () {
        return $('//button[text()=" Login "]');
    }

   public async login (useremail: string, password: string) {
        await this.inputUseremail.setValue(useremail);
        await this.inputPassword.setValue(password);
        // await browser.pause()
        await (await this.btnSubmit).waitForClickable();
        await this.btnSubmit.click();
       
    }
    public  get errorMessageInvalidCredentials() {
        return $('//*[text()="Invalid credentials"]');
    }
    public open (url: string) {
        return browser.url(url);
    }
}

export default new LoginPage();
