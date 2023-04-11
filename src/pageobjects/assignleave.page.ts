import helper from "../helpers/helper";
import Page from "./page";

export class Assignleavepage extends Page {
  public get leaveElement() {
    return $("//span[text()='Leave']");
  }

  public get leaveVerifyElement() {
    return $("//h6[text()='Leave']");
  }

  public get assignLeaveTab() {
    return $("//a[text()='Assign Leave']");
  }
  public get assignLeaveElement() {
    return $("//h6[text()='Assign Leave']");
  }

  public get fromDateField() {
    return $(
      "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[1]/div/div[2]/div/div/input"
    );
  }

  public get toDateField() {
    return $(
      "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div/div[2]/div/div/input"
    );
  }

  public get nextMonthBtn() {
    return $(
      '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/button[2]'
    );
  }

  public get selectDate() {
    return $(
      "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div[3]/div[1]/div"
    );
  }

  public get assignBtn() {
    return $("//button[@type='submit']");
  }

  public get okBtn() {
    return $('//button[text()=" Ok "]');
  }
  public get employeeNameField() {
    return $("//*[*/text()='Employee Name']/../div[2]/div/div/input");
  }

  public get employeeName() {
    return $("//*[@role='listbox']/div[1]");
  }

  public get leaveTypeField() {
    return $("//*[*/text()='Leave Type']/../div[2]/div/div/div[2]");
  }

  public get leaveTypeList() {
    return $("//div[@role='listbox']");
  }

  public get leaveType() {
    return $("//div[@role='listbox']/div[2]");
  }

  public get verifyToast() {
    return $('//*[@id="oxd-toaster_1"]/div/div[1]/div[2]/p[1]');
  }

  public async clickOnLeaveElement() {
    await (await this.leaveElement).click();
  }

  public async verifyLeavePage() {
    let text = await (await this.leaveVerifyElement).getText();
    expect(text).toBe("Leave");
  }

  public async clickOnAssignLeave() {
    await (await this.assignLeaveTab).click();
  }

  public async verifyAssignLeavePage() {
    let text = await (await this.assignLeaveElement).getText();
    expect(text).toBe("Assign Leave");
  }

  public async setEmployeeName() {
    await (await this.employeeNameField).waitForDisplayed();
    await (await this.employeeNameField).setValue("e");
    await browser.pause(3000);
    await (await this.employeeName).waitForDisplayed();
    await (await this.employeeName).click();
  }

  public async setLeaveType() {
    await (await this.leaveTypeField).click();
    await (await this.leaveTypeList).waitForDisplayed();
    await (await this.leaveType).click();
  }

  public async setFromDateValue() {
    await (await this.fromDateField).setValue("2023-01-01");
  }

  public async setToDateValue() {
    await (await this.toDateField).click();
    await (await this.nextMonthBtn).click();
    await (await this.nextMonthBtn).click();
    await (await this.nextMonthBtn).click();
    await (await this.selectDate).click();
  }

  public async assignLeave() {
    await (await this.assignBtn).click();
    await (await this.okBtn).waitForClickable();
    await (await this.okBtn).click();
  }

  public async verifyToastMessage() {
    await (await this.verifyToast).waitForDisplayed();
    let text = await (await this.verifyToast).getText();
    expect(text).toBe("Success");
    await browser.pause(5000);
  }
}

export default new Assignleavepage();
