import Jsonhelper from "../helpers/JsonHelper";

export default class LoginPage {
    public static URL: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

    public static open() {
        browser.url(LoginPage.URL);
    }

    public static getUsernameField() {
        return $('input[name="username"]');
    }

    public static getPasswordField() {
        return $('input[name="password"]');
    }

    public static getLoginButton() {
        return $('button[type = "submit"]');
    }
}