import { Given, Then, When } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.ts';
import jsonhelper  from '../helpers/FrameworkHelper.ts';
import leavePage from '../pageobjects/leave.page.js';


Given(/^I see a dashboard page$/, async () => {
    expect( await LoginPage.userMenu).toBeDisplayed();
});


When(/^I click on leave tab$/, async () => {
await leavePage.clickonLeaveTab()
await browser.pause(3000)
});


When(/^I should see a leaveList$/,async () => {
const urlToCheck='https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList';
browser.waitUntil(async function () {
    return await browser.getUrl() === urlToCheck
  }, {timeout: 5000});

})


When(/^I click on apply tab$/,async () => {
    await leavePage.clickonApplyTab();
     await browser.pause(1000);
})
Then (/^I should see a apply options$/,async () => {
    await leavePage.applyleaveHeader()
})