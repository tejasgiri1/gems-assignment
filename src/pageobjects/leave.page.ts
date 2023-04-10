class LeavePage  {
    public get leaveTab(){
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
    public async applyleaveHeader()
    {
        (await $('//div//h6[text()="Apply Leave"]')).waitForDisplayed();
        
    }
    public get fromDate()
    {
        return $('//label[text()="From Date"]/parent::div//following-sibling::div//input');
    }
    public get toDate()
    {
        return $('//label[text()="To Date"]/parent::div//following-sibling::div//input');
    }
    public get searchfilterbtn()
    {
        return $('//button[text()[normalize-space() = "Search"]]');
    }
    public async searchWithDates()
    {
        await (await this.fromDate).waitForClickable();
        await (await this.toDate).waitForClickable();
        await (await this.fromDate).click();
        
        
        // await (await this.toDate).click();
        // (await this.fromDate).setValue(new Date("2022-01-01").toString());

        
        // (await this.toDate).setValue(new Date("2022-12-31").toDateString());
        // (await this.toDate).setValue("2022-12-31");
        (await this.searchfilterbtn).waitForClickable();
        (await this.searchfilterbtn).click();
    }

    public get recordsFound()
    {
        return $('//*[@class="orangehrm-header-container"]/span');
    }
    public async getRecords()
    {
        await this.recordsFound.waitForDisplayed();
        const records = await (await this.recordsFound).getText();
        const temp=records.split(' ')[0].replace('(','').replace(')','');
        const n=parseInt(temp)
        // console.log('rec-----------',n);
return n;
    }

    public get configureTab()
    {
        return $('//header//span[text()="Configure "]');
    }
    public async clickOnLeaveTypes()
    {
        (await this.configureTab).waitForClickable();
        (await this.configureTab).click();
        const type=$('//li/a[text()="Leave Types"]');
        (await type).waitForDisplayed();
        (await type).waitForClickable();
        (await type).click();
    }
    // public get headertypes() { return $('//h6[text()="Leave Types"]') }
    public async showAllLeaveTYpes() {

        // (await this.headertypes).waitForDisplayed()
        const addbtn =  $('//h6[text()="Leave Types"]/parent::div//button')
        await addbtn.waitForDisplayed();
        await addbtn.waitForClickable()
        await addbtn.click();
        // console.log('......', addbtn.getText())
        // return addbtn;
    }
public async addNewLeaveType()
{
    const t1=await $('//label[text()="Name"]/parent::div/following-sibling::div//input');
    await t1.waitForDisplayed();
    await t1.setValue('IND- vacation');
    const checkbox=await $('//input[@value="true"]/following-sibling::span');
    await checkbox.waitForClickable();
    await checkbox.click();
    // await browser.pause(2000)
    await checkbox.isSelected();

    const save=(await $('//button[text()[normalize-space() = "Save"]]'))
    await save.waitForClickable();
    await save.click()
}    
// public async showNewLeaveType()
// {
//     await
// }
}

export default new LeavePage();