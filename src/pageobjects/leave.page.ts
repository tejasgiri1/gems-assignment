class LeavePage {
    public get leaveTab() {
        return $('//nav//a/span[text()="Leave"]');
    }
    public async clickonLeaveTab() {

        (await this.leaveTab).waitForClickable();
        await browser.pause(5000);
        (await this.leaveTab).click();
    }

    public get applyTab() {
        return $('//header//a[text()="Apply"]');
    }
    public async clickonApplyTab() {

        (await this.applyTab).waitForDisplayed();
        (await this.applyTab).waitForClickable();
        (await this.applyTab).click();
    }
    public async applyleaveHeader() {
        (await $('//div//h6[text()="Apply Leave"]')).waitForDisplayed();

    }
    public get fromDate() {
        return $('//label[text()="From Date"]/parent::div//following-sibling::div//input');
    }
    public get toDate() {
        return $('//label[text()="To Date"]/parent::div//following-sibling::div//input');
    }
    public get searchfilterbtn() {
        return $('//button[text()[normalize-space() = "Search"]]');
    }
    public get calender() {
        return $('//div[@class="oxd-calendar-wrapper"]');
    }
    public get monthlist() {
        return $('//div[@class="oxd-calendar-wrapper"]//ul/li[1]//i');
    }
    public get yearlist() {
        return $('//div[@class="oxd-calendar-wrapper"]//ul/li[2]//i');
    }
    public async setfromDate(month: string, year: string) {
        await (await this.fromDate).waitForClickable();
        await (await this.fromDate).waitForClickable();
        await (await this.fromDate).click();

        await (await this.calender).waitForDisplayed();
        await (await this.monthlist).waitForDisplayed();
        await (await this.monthlist).waitForClickable();
        await (await this.monthlist).click();
        await (await $(`//li[text()="${month}"]`)).waitForClickable();
        await (await $(`//li[text()="${month}"]`)).click();
        // await browser.pause(2000);

        await (await this.yearlist).waitForDisplayed();
        await (await this.yearlist).waitForClickable();
        await (await this.yearlist).click();
        await (await $(`//li[text()="${year}"]`)).waitForClickable();
        await (await $(`//li[text()="${year}"]`)).click();

        (await $('//div[@class="oxd-calendar-wrapper"]//div[text()="1"]')).waitForClickable();
        (await $('//div[@class="oxd-calendar-wrapper"]//div[text()="1"]')).click();
        await browser.pause(2000);
    }
    public async search() {

        await (await $('//span[text()="Pending Approval "]/i')).waitForClickable();
        await (await $('//span[text()="Pending Approval "]/i')).click();
        await (await $('//div[text()="Select"]')).waitForClickable();
        await (await $('//div[text()="Select"]')).click();
        await (await $('//div[@role="listbox"]')).waitForDisplayed();

        await (await $('//span[text()="Taken"]')).waitForDisplayed();
        await (await $('//span[text()="Taken"]')).waitForClickable();
        await (await $('//span[text()="Taken"]')).click();

        (await this.searchfilterbtn).waitForClickable();
        (await this.searchfilterbtn).click();
    }
    public async setToDate(month: string, year: string) {
        await (await this.toDate).waitForClickable();
        await (await this.toDate).waitForClickable();
        await (await this.toDate).click();

        await (await this.calender).waitForDisplayed();
        await (await this.monthlist).waitForDisplayed();
        await (await this.monthlist).waitForClickable();
        await (await this.monthlist).click();
        await (await $(`//li[text()="${month}"]`)).waitForClickable();
        await (await $(`//li[text()="${month}"]`)).click();
        // await browser.pause(2000);

        await (await this.yearlist).waitForDisplayed();
        await (await this.yearlist).waitForClickable();
        await (await this.yearlist).click();
        await (await $(`//li[text()="${year}"]`)).waitForClickable();
        await (await $(`//li[text()="${year}"]`)).click();
        (await $('//div[@class="oxd-calendar-wrapper"]//div[text()="30"]')).waitForClickable();
        (await $('//div[@class="oxd-calendar-wrapper"]//div[text()="30"]')).click();
        await browser.pause(2000);

    }
    public get recordsFound() {
        return $('//*[@class="orangehrm-header-container"]/span');
    }
    public async getRecords() {
        await this.recordsFound.waitForDisplayed();
        const records = await (await this.recordsFound).getText();
        const temp = records.split(' ')[0].replace('(', '').replace(')', '');
        const n = parseInt(temp)
        // console.log('rec-----------',n);
        return n;
    }

    public get configureTab() {
        return $('//header//span[text()="Configure "]');
    }
    public async clickOnLeaveTypes() {
        (await this.configureTab).waitForClickable();
        (await this.configureTab).click();
        const type = $('//li/a[text()="Leave Types"]');
        (await type).waitForDisplayed();
        (await type).waitForClickable();
        (await type).click();
    }
    // public get headertypes() { return $('//h6[text()="Leave Types"]') }
    public async showAllLeaveTYpes() {

        // (await this.headertypes).waitForDisplayed()
        const addbtn = $('//h6[text()="Leave Types"]/parent::div//button')
        await addbtn.waitForDisplayed();
        await addbtn.waitForClickable()
        await addbtn.click();
        // console.log('......', addbtn.getText())
        // return addbtn;
    }
    public async addNewLeaveType() {
        const t1 = await $('//label[text()="Name"]/parent::div/following-sibling::div//input');
        await t1.waitForDisplayed();
        await t1.setValue('IND- vacation');
        const checkbox = await $('//input[@value="true"]/following-sibling::span');
        await checkbox.waitForClickable();
        await checkbox.click();
        // await browser.pause(2000)
        await checkbox.isSelected();

        const save = (await $('//button[text()[normalize-space() = "Save"]]'))
        await save.waitForClickable();
        await save.click();

    }
    public get successText() {
        return $('//div[@id="oxd-toaster_1"]//p');
    }

    public get deleteType() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[3]/div/div/div[6]/div/div/div/div[2]/div/div/button[1]');
    }
    public async delete() {
        (await this.deleteType).waitForDisplayed();
        (await this.deleteType).waitForClickable();
        (await this.deleteType).click();
        // await this.checkIfSuccess();
        // (await this.successText).waitForDisplayed();
        // const r = (await this.successText).isDisplayed();
        // console.log("Susccess: ", r);
    }
    // public async checkIfSuccess() {
    //     //         await browser.waitUntil(async()=>
    //     // {        this.successText.isDisplayed()},{timeout:6000});
    //     (await this.successText).waitForDisplayed();
    //     const r = (await this.successText).isDisplayed();
    //     console.log("Susccess: ", r);
    // }
}

export default new LeavePage();