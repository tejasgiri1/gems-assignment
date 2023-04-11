import Helpers from "../helpers/helper";
import Page from "./page";

export class Loginpage extends Page {
  public get userNameField() {
    return $("//input[@name='username']");
  }

  public get passwordField() {
    return $("//input[@type='password']");
  }

  public get loginBtn() {
    return $("//button[@type='submit']");
  }

  public get verifyElement() {
    return $("//h6[contains(text(), Dashboard)]");
  }

  public async login(username: string, password: string) {
    await this.userNameField.waitForDisplayed();
    await this.passwordField.waitForDisplayed();

    (await this.userNameField).setValue(username);
    (await this.passwordField).setValue(password);

    (await this.loginBtn).waitForClickable();
    (await this.loginBtn).click();
  }

  public async verifyLogin() {
    (await this.verifyElement).waitForDisplayed();
    let verifyText = await (await this.verifyElement).getText();

    expect(verifyText).toBe("Dashboard");
  }
  public open() {
    
    return super.open("auth/login");
  }
}

export default new Loginpage();
