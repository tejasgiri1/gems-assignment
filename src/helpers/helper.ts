export class Helpers {


    
  public async clickOnElement(element) {
    await element.waitForClickble();
    await element.click();
  }
}

export default new Helpers();
