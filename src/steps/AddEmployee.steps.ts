import { Given, Then, When } from "@wdio/cucumber-framework";
import AddEmployeePage from "../pageobjects/AddEmployeePage.ts";

Given(/^I am on add employee page$/, async () => {
    await AddEmployeePage.open();
    await browser.refresh();
});

When(/^I Check details in Employee Id field its not empty$/, async () => {
    const employeeIdField = await AddEmployeePage.getEmployeeIdField();
    const employeeId = await employeeIdField.getValue();
    await expect(employeeId).to.not.equals('');
});


When(/^I click on Save$/, async () => {
    const saveButton = await AddEmployeePage.getSaveButton();
    await saveButton.waitForClickable();
    await saveButton.click();
});

Then(/^Error message is shown for First and Last name$/, async () => {
    
});

When(/^I toggle Create Login details$/, async () => {

});

Then(/^Username, password, Confirm Password and Status is displayed$/, async () => {

});

Given(/^Create Login details toggle is on$/, async () => {

});

When(/^I click Save$/, async () => {

});

Then(/^error message is shown at Username, Password and Confirm Password$/, async () => {

});

Given(/^Create Login details toggle is on$/, async () => {

});

When(/^I enter username with less than 5 characters$/, async () => {

});

Then(/^error message is shown$/, async () => {

});

Given(/^Create Login details toggle is on$/, async () => {

});

When(/^I enter password less than 8 characters$/, async () => {

});

Then(/^error message is shown$/, async () => {

});

Given(/^Create Login details toggle is on$/, async () => {

});

When(/^I enter password which doesn't contain atleast one of lower char, upper char, digit or special char$/, async () => {

});

Then(/^error message is shown$/, async () => {

});

Given(/^Create Login details toggle is on$/, async () => {

});

When(/^I enter password$/, async () => {

});

When(/^I fill confirm password filed with different password$/, async () => {

});

Then(/^Error message is displayed$/, async () => {

});

Given(/^Create Login details toggle is on$/, async () => {

});

When(/^I enter First name$/, async () => {

});

When(/^I enter Last name$/, async () => {

});

When(/^I enter username$/, async () => {

});

When(/^I enter password$/, async () => {

});

When(/^I enter Confirm password$/, async () => {

});

When(/^I set status of employee$/, async () => {

});

When(/^I click Save$/, async () => {

});

Then(/^I employee is saved$/, async () => {

});
