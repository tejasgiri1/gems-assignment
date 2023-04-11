import { Given, Then, When } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.ts';
import jsonhelper from '../helpers/FrameworkHelper.ts';
import leavePage from '../pageobjects/leave.page.js';


Given(/^I see a dashboard page$/, async () => {
    expect(await LoginPage.userMenu).toBeDisplayed();
});


When(/^I click on leave tab$/, async () => {
    await leavePage.clickonLeaveTab()
    // await browser.pause(3000)
});


When(/^I should see a leaveList$/, async () => {
    const urlToCheck = 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList';
    browser.waitUntil(async function () {
        return await browser.getUrl() === urlToCheck
    }, { timeout: 2000 });

})


When(/^I click on apply tab$/, async () => {
    await leavePage.clickonApplyTab();
})
Then(/^I should see a apply options$/, async () => {
    await leavePage.applyleaveHeader()
})

When(/^I should search with dates$/, async () => {
    await leavePage.setfromDate("May", "2022");
    await leavePage.setToDate("November", "2022");
    await leavePage.search();

})
// --------------------------
Then(/^I should see records$/, async () => {
    expect(await leavePage.getRecords()).toBeGreaterThan(0);
    await browser.pause(6000);
    console.log('records found: ', await leavePage.getRecords());
})

When(/^I select leave type from configure tab$/, async () => {
    await leavePage.clickOnLeaveTypes()
})
When(/^I should see all leave types$/, async () => {
    // await browser.pause(2000);
    leavePage.showAllLeaveTYpes()
})
When(/^I add new leave type$/, async () => {

    await leavePage.addNewLeaveType();
})
Then(/^I should see new leave type added$/, async () => {
    // await browser.pause(2000);
    // await await leavePage.showNewLeaveType();
    // await browser.pause(2000);
    await leavePage.showAllLeaveTYpes();
})