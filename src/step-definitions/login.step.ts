import { Given, Then, When } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";

Given(/^Open orangeHRM$/, async () => {
  await loginPage.open();
});

When(
  /^I want to Login with username "(.*)" and password "(.*)"$/,
  async (username, password) => {
    await loginPage.login(username, password);
  }
);

Then(/^I verify Login successfully$/, async () => {
  await loginPage.verifyLogin();
});
