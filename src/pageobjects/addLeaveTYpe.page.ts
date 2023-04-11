class addLeavePage {
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

export default new addLeavePage();