import { Given, Then, When } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.ts';
import jsonhelper  from '../helpers/FrameworkHelper.ts';
import {expect }from 'chai';

Given(/^I am on login page$/, async () => {
    
    const url=await jsonhelper.ExtractKeyValuePair('login',"Url")
    await LoginPage.open(url)
    await browser.maximizeWindow()
});

When(/^I login with useremail and password$/, async () => {
    const username=await jsonhelper.ExtractKeyValuePair('login',"Username")
    const password=await jsonhelper.ExtractKeyValuePair('login',"Password")
    await LoginPage.login(username, password)
});

Then(/^I should see a welcome page$/, async () => {
    await browser.waitUntil(async () => {
        return (await LoginPage.userMenu).isDisplayed()
    },{timeout:2000})
    
});
