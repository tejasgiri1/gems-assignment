export default class Util {
    public static async waitForLoaded() {
        await browser.waitUntil(async () => {
            return !(await browser.isLoading());
        });
    }
}