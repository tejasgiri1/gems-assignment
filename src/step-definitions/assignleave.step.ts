import { Then, When } from "@wdio/cucumber-framework";
import AssignleavePage from "../pageobjects/assignleave.page";

When(/^I click on leave$/, async () => {
  await AssignleavePage.clickOnLeaveElement();
});

Then(/^I verify Leave page successfully$/, async () => {
  await AssignleavePage.verifyLeavePage();
});

When(/^I go to assign leave tab$/, async () => {
  await AssignleavePage.clickOnAssignLeave();
});

Then(/^I verify assign leave tab$/, async () => {
  await AssignleavePage.verifyAssignLeavePage();
});

When(/^I fill employee name$/, async () => {
  await AssignleavePage.setEmployeeName();
});

When(/^I choose leave type$/, async () => {
  await AssignleavePage.setLeaveType();
});

When(/^I choose from date$/, async () => {
  await AssignleavePage.setFromDateValue();
});

When(/^I choose To date$/, async () => {
  await AssignleavePage.setToDateValue();
});

When(/^I click on assing leave$/, async () => {
  await AssignleavePage.assignLeave();
});

Then(/^I verify leave assigned successfully$/, async () => {
  await AssignleavePage.verifyToastMessage();
});
