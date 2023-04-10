import helper from "../helpers/helper";
import Page from "./page";

export class Leavepage extends Page {
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

  public get selectDate(){
    return $()
  }

  public get employeeNameField() {
    return $("//*[*/text()='Employee Name']/../div[2]/div/div/input");
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
    await (await this.employeeNameField).setValue("Odis  Adalwin");
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
    await (await this.toDateField).clearValue();
    await (await this.toDateField).setValue("2023-04-01");
    await browser.pause(10000);
  }
}

export default new Leavepage();
