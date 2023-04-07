import { Given, When, Then } from "@cucumber/cucumber";
import pimPage from "../pageobjects/pim.page";
import empList from "../pageobjects/empList";
import empDetails from "../pageobjects/empDetails";

import Helper from "../helpers/Helper";

Given(/^I click on PIM tab$/, async () => {
  let buttonElement = await pimPage.pimElement;
  await Helper.clickButton(buttonElement);
});
Then(/^I should see message as "(.*)"$/, async (msg: string) => {
  await (await pimPage.message).waitForDisplayed({ timeout: 15000 });
  const loggedInText = await pimPage.message.getText();
  expect(loggedInText).toContain(msg);
});

When(/^I sort in acending order of Id$/, async () => {
  const buttonElement = await empList.sortBtn;
  await buttonElement.scrollIntoView();
  await Helper.clickButton(buttonElement);
  await browser.pause(2000);
  const ascbutton = await empList.ascBtn;
  await Helper.clickButton(ascbutton);
});

When(/^I click to see details of second employee$/, async () => {
  const buttonElement = await empList.detailsBtn;
  await Helper.clickButton(buttonElement);

  // await new Promise((resolve) => setTimeout(resolve, 5000));
});

When(/^I search employee by name$/, async () => {
  (await empList.empName).waitForDisplayed();
  await empList.setEmpName("Alice");
  const buttonElement = await empList.submitBtn;
  await Helper.clickButton(buttonElement);
  await browser.pause(1000);
});

When(/^I click on search button$/, async () => {
  let buttonElement = await empList.submitBtn;
  await Helper.clickButton(buttonElement);
  await (await empList.sortBtn).scrollIntoView();
  await browser.pause(1000);
});

When(/^I click on add employee button$/, async () => {
  let buttonElement = await pimPage.addEmpBtn;
  await Helper.clickButton(buttonElement);
});

When(/^I fill the details$/, async () => {
  await empDetails.setEmpFirstName(
    await Helper.extractJson("emp1", "firstName")
  );
  await empDetails.setEmpMidName(
    await Helper.extractJson("emp1", "middleName")
  );

  await empDetails.setEmpLastName(await Helper.extractJson("emp1", "lastName"));
  await browser.pause(3000);
  let buttonElement = await empDetails.submitBtn;
  await Helper.clickButton(buttonElement);

  // const remoteFilePath = await browser.uploadFile(
  //   await Helper.extractJson("emp1", "imgPath")
  // );
  // const path = require("path");
  // const path = require("path");

  // const remoteFilePath = "C:/Users/shivani_singh1/Desktop/pp1.jpeg";
  // const remoteFilePath = await browser.uploadFile(
  //   "C:/Users/shivani_singh1/Desktop/pp1.jpeg"
  // );
  // const imgElement = await empDetails.imgBtn;
  // await imgElement.waitForDisplayed();

  // await imgElement.setValue(remoteFilePath);
  // await Helper.clickButton(butElement)
});
When(/^I close sidebar$/, async () => {
  let buttonElement = await pimPage.sideBtn;
  await Helper.clickButton(buttonElement);
  // await browser.pause(1000);
});

When(/^I click on dropdown button$/, async () => {
  let buttonElement = await pimPage.dropBtn;
  await Helper.clickButton(buttonElement);
  // await browser.pause(1000);
});

Then(/^I click on logout button$/, async () => {
  let buttonElement = await pimPage.logoutBtn;
  await Helper.clickButton(buttonElement);
});
