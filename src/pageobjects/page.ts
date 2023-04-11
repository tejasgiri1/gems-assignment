export default class Page {
  public async open(url: string) {
    await browser.maximizeWindow();
    return browser.url(
      `https://opensource-demo.orangehrmlive.com/web/index.php/${url}`
    );
  }
}
