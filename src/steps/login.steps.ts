import { Given, When, Then } from "@cucumber/cucumber";
import loginPage from "../pageobjects/login.page";

// import LoginPage from "../pageobjects/login.page";

import Helper from "../helpers/Helper";

Given("I am on the OrangeHRM login page", async () => {
  await browser.url(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await browser.maximizeWindow();
});
When(/^I click on the (\w+) button$/, async (button: string) => {
  let buttonElement = null;
  if (button === "login") {
    buttonElement = loginPage.loginButton;
  }
  await Helper.clickButton(buttonElement);
});

When("I enter my username", async () => {
  const username = "Admin";
  await (await loginPage.usernameInput).waitForDisplayed();
  await loginPage.setUsername(username);
});

When("I enter my password", async () => {
  const password = "admin123";
  await loginPage.setPassword(password);
});

Then(/^I should see message as (\w+)$/, async (msg: string) => {
  await (await loginPage.message).waitForDisplayed({ timeout: 15000 });
  const loggedInText = await loginPage.message.getText();
  expect(loggedInText).toContain(msg);
  
});
