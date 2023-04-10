import { AfterStep, Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from "chai";
import Jsonhelper from "../helpers/JsonHelper.ts";
import Util from "../helpers/Util.ts";
import Homepage from "../pageobjects/HomePage.ts";
import LoginPage from "../pageobjects/LoginPage.ts";

Given(/^I am on login page$/, async () => {
    // await LoginPage.open();
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When(/^I enter username$/, async () => {
    const username: string = await Jsonhelper.extractKeyValuePair('login', 'username');
    await (await LoginPage.getUsernameField()).setValue(username);
});

When(/^I enter password$/, async () => {
    const password: string = await Jsonhelper.extractKeyValuePair('login', 'password');
    await (await LoginPage.getPasswordField()).setValue(password);
});

When(/^I click login$/, async () => {
    await (await LoginPage.getLoginButton()).click();
});

Then(/^I will be logged in$/, async () => {
    await Util.waitForLoaded();
    await (await Homepage.getUserDropdown()).isDisplayed();
});
