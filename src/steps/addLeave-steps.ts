import { Given, Then, When } from '@wdio/cucumber-framework';
import addleavetypePage from '../pageobjects/addLeaveTYpe.page.js';

When(/^I select leave type from configure tab$/, async () => {
    await addleavetypePage.clickOnLeaveTypes()
})
When(/^I should see all leave types$/, async () => {
    // await browser.pause(2000);
    addleavetypePage.showAllLeaveTYpes()
})
When(/^I add new leave type$/, async () => {

    await addleavetypePage.addNewLeaveType();
})
Then(/^I should see new leave type added$/, async () => {
    
    await browser.pause(2000);
    await addleavetypePage.showAllLeaveTYpes();
})
