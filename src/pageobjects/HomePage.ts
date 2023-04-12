import Jsonhelper from "../helpers/JsonHelper.ts";

export default class Homepage {
    private static URL: string = 'https://opensource-demo.orangehrmlive.com/';

    public static async open() {
        await browser.url(this.URL);
    }

    public static getUserDropdown() {
        return $('li[class="oxd-userdropdown"]');
    }

    public static getMyInfoTab() {
        return $('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]');
    }
}