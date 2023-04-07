class LeavePage  {
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
    public async applyleaveHeader()
    {
        (await $('//div//h6[text()="Apply Leave"]')).waitForDisplayed();
        
    }
    
}

export default new LeavePage();