import { Given, Then, When } from "@wdio/cucumber-framework";
import { expect } from 'chai';
import Jsonhelper from "../helpers/JsonHelper.ts";
import Util from "../helpers/Util.ts";
import AddEmployeePage from "../pageobjects/AddEmployeePage.ts";
import Homepage from "../pageobjects/HomePage.ts";
import LoginPage from "../pageobjects/LoginPage.ts";

Given(/^I am on add employee page$/, async () => {
    await AddEmployeePage.open();
    await Util.waitForLoaded();
});

Given(/^I am on login page$/, async () => {
    // await LoginPage.open();
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When(/^I enter username at Login Page$/, async () => {
    const username: string = await Jsonhelper.extractKeyValuePair('login', 'username');
    await (await LoginPage.getUsernameField()).setValue(username);
});

When(/^I enter password at Login Page$/, async () => {
    const password: string = await Jsonhelper.extractKeyValuePair('login', 'password');
    await (await LoginPage.getPasswordField()).setValue(password);
});

When(/^I click login$/, async () => {
    await (await LoginPage.getLoginButton()).click();
});

Then(/^I will be logged in$/, async () => {
    await Util.waitForLoaded();
    await (await Homepage.getUserDropdown()).isDisplayed();
    await browser.pause(5000);
});

When(/^I Check details in Employee Id field its not empty$/, async () => {
    const employeeIdField = await AddEmployeePage.getEmployeeIdField();
    const employeeId = await employeeIdField.getValue();
    await expect(employeeId).to.not.equal('');
});

When(/^I click on Save$/, async () => {
    const saveButton = await AddEmployeePage.getSaveButton();
    await saveButton.waitForClickable();
    await saveButton.click();
});

Then(/^Error message is shown for First and Last name$/, async () => {
    const firstNameErrorMessage = await AddEmployeePage.getFirstNameErrorMessage();
    const lastNameErrorMessage = await AddEmployeePage.getLastNameErrorMessage();

    await firstNameErrorMessage.waitForDisplayed();
    await lastNameErrorMessage.waitForDisplayed();

    expect(await firstNameErrorMessage.getText()).to.be.equal('Required');
    expect(await lastNameErrorMessage.getText()).to.be.equal('Required');
});

When(/^I toggle Create Login details$/, async () => {
    const createLoginDetailsCheckBox = await AddEmployeePage.getCreateLoginDetailsCheckBox();
    await createLoginDetailsCheckBox.waitForClickable();
    await createLoginDetailsCheckBox.click();
});

Then(/^Username, password, Confirm Password and Status is displayed$/, async () => {
    const usernameField = AddEmployeePage.getUsernameField();
    const passwordField = AddEmployeePage.getPasswordField();
    const confirmPasswordField = AddEmployeePage.getConfirmPasswordField();
    const getStatusRadio = AddEmployeePage.getStatusRadio();

    expect(await usernameField.isDisplayed()).to.be.true;
    expect(await passwordField.isDisplayed()).to.be.true;
    expect(await confirmPasswordField.isDisplayed()).to.be.true;
    expect(await getStatusRadio.isDisplayed()).to.be.true;
});

Given(/^Create Login details toggle is on$/, async () => {
    const createLoginDetailsCheckBox = await AddEmployeePage.getCreateLoginDetailsCheckBox();
    await createLoginDetailsCheckBox.waitForClickable();
    await createLoginDetailsCheckBox.click();
});


Then(/^error message is shown at Username, Password and Confirm Password$/, async () => {
    const usernameErrorMessage = await AddEmployeePage.getUsernameErrorMessage();
    const passwordErrorMessage = await AddEmployeePage.getPasswordErrorMessage();
    const confirmPasswordErrorMessage = await AddEmployeePage.getConfirmPasswordErrorMessage();

    await usernameErrorMessage.waitForDisplayed();
    await passwordErrorMessage.waitForDisplayed();
    await confirmPasswordErrorMessage.waitForDisplayed();

    expect(await usernameErrorMessage.getText()).to.be.equal('Required');
    expect(await passwordErrorMessage.getText()).to.be.equal('Required');
    expect(await confirmPasswordErrorMessage.getText()).to.be.equal('Required');
});

When(/^I enter username with less than 5 characters$/, async () => {
    const usernameField = await AddEmployeePage.getUsernameField();
    await usernameField.waitForDisplayed();
    await usernameField.setValue('abc');
});

Then(/^Username should be of atleast 5 characters error message is shown$/, async () => {
    const usernameErrorMessage = await AddEmployeePage.getUsernameErrorMessage();
    expect(await usernameErrorMessage.getText()).to.be.equal('Should be at least 5 characters');
});

When(/^I enter password less than 8 characters$/, async () => {
    const passwordField = await AddEmployeePage.getPasswordField();
    await passwordField.setValue('abc');
});

Then(/^Password should be of atleast 8 characters error message is shown$/, async () => {
    const passwordErrorMessage = await AddEmployeePage.getPasswordErrorMessage();
    expect(await passwordErrorMessage.getText()).to.be.equal('Should have at least 8 characters');
});

When(/^I enter password which doesn't contain atleast one of lower char, upper char, digit or special char$/, async () => {
    const passwordField = await AddEmployeePage.getPasswordField();
    await passwordField.setValue('abcdef123');
});

Then(/^Characters combination error is shown$/, async () => {
    const passwordErrorMessage = await AddEmployeePage.getPasswordErrorMessage();
    expect(await passwordErrorMessage.getText()).to.be.equal('Your password must contain a lower-case letter, an upper-case letter, a digit and a special character. Try a different password');
});

When(/^I enter password on create login details$/, async () => {
    const passwordField = await AddEmployeePage.getPasswordField();
    await passwordField.setValue('Pass@123');
});

When(/^I fill confirm password field with different password$/, async () => {
    const confirmPasswordField = await AddEmployeePage.getConfirmPasswordField();
    await confirmPasswordField.setValue('Pass@1234');
});

Then(/^Different password error message is displayed$/, async () => {
    const confirmPasswordErrorMessage = await AddEmployeePage.getConfirmPasswordErrorMessage();
    await confirmPasswordErrorMessage.waitForDisplayed();
    expect(await confirmPasswordErrorMessage.getText()).to.be.equal('Passwords do not match');
});


When(/^I enter First name at Add Employee Page$/, async () => {
    const firstNameField = await AddEmployeePage.getFirstNameField();
    const firstName = await Jsonhelper.extractKeyValuePair('userDetails', 'firstName');
    await firstNameField.setValue(firstName);

    expect(await firstNameField.getValue()).to.be.equal(firstName);
});

When(/^I enter Last name at Add Employee Page$/, async () => {
    const lastNameField = await AddEmployeePage.getLastNameField();
    const lastName = await Jsonhelper.extractKeyValuePair('userDetails', 'lastName');
    await lastNameField.setValue(lastName);

    expect(await lastNameField.getValue()).to.be.equal(lastName);
});

When(/^I enter username at Add Employee Page$/, async () => {
    const usernameField = await AddEmployeePage.getUsernameField();
    const username = await Jsonhelper.extractKeyValuePair('userDetails', 'username');
    await usernameField.setValue(username);

    expect(await usernameField.getValue()).to.be.equal(username);
});

When(/^I enter password at Add Employee Page$/, async () => {
    const passwordField = await AddEmployeePage.getPasswordField();
    const password = await Jsonhelper.extractKeyValuePair('userDetails', 'password');
    await passwordField.setValue(password);

    expect(await passwordField.getValue()).to.be.equal(password);
});

When(/^I enter Confirm password at Add Employee Page$/, async () => {
    const confirmPasswordField = await AddEmployeePage.getConfirmPasswordField();
    const confirmPassword = await Jsonhelper.extractKeyValuePair('userDetails', 'password');
    await confirmPasswordField.setValue(confirmPassword);

    expect(await confirmPasswordField.getValue()).to.be.equal(confirmPassword);
});

When(/^I set status of employee at Add Employee Page$/, async () => {
    const enabledOption = await AddEmployeePage.getEnabledOption();
    await enabledOption.waitForClickable();
    await enabledOption.click();
});

Then(/^I employee is saved$/, async () => {

});
