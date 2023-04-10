export default class AddEmployeePage {
    public static URL: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee';

    public static async open() {
        await browser.url(AddEmployeePage.URL);
    }

    public static getEmployeeIdField() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input');
    }

    public static getSaveButton() {
        return $('button[type="submit"]');
    }
}