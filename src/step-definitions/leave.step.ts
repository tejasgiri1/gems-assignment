import { Then, When } from "@wdio/cucumber-framework";
import leavePage from "../pageobjects/leave.page";

When(/^I click on leave$/, async () => {
  await leavePage.clickOnLeaveElement();
});

Then(/^I verify Leave page successfully$/, async () => {
  await leavePage.verifyLeavePage();
});

When(/^I go to assign leave tab$/, async () => {
  await leavePage.clickOnAssignLeave();
});

Then(/^I verify assign leave tab$/, async () => {
  await leavePage.verifyAssignLeavePage();
});

When(/^I fill employee name$/, async () => {
  await leavePage.setEmployeeName();
});

When(/^I choose leave type$/, async () => {
  await leavePage.setLeaveType();
});

When(/^I choose from date$/, async () => {
  await leavePage.setFromDateValue();
});

When(/^I choose To date$/, async () => {
  await leavePage.setToDateValue();
});
