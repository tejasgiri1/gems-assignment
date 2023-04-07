import type { Element } from "webdriverio";

class Helper {
  public extractJson(key1: string, key2: string) {
    const fs = require("fs");
    let rawData = fs.readFileSync("src/test-data/data.json");
    let smapleData = JSON.parse(rawData);
    let result = smapleData[key1][key2];
    return result;
  }

  public async clickButton(element: Element) {
    await element.waitForClickable();
    await element.click();
  }
}

export default new Helper();
