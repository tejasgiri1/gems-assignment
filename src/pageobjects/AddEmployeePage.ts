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

    public static getFirstNameErrorMessage() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[1]/span');
    }

    public static getLastNameErrorMessage() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div/div[2]/div[3]/span');
    }

    public static getUsernameErrorMessage() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[1]/div/span');
    }

    public static getPasswordErrorMessage() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[1]/div/span');
    }

    public static getConfirmPasswordErrorMessage() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[2]/div/span');
    }

    public static getCreateLoginDetailsCheckBox() {
        return $('span[class="oxd-switch-input oxd-switch-input--active --label-right"]');
    }

    public static getUsernameField() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[1]/div/div[2]/input');
    }

    public static getPasswordField() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[1]/div/div[2]/input');
    }

    public static getConfirmPasswordField() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[2]/div/div[2]/input');
    }

    public static getStatusRadio() {
        return $('div[class="--status-grouped-field"]');
    }

    public static getFirstNameField() {
        return $('input[name="firstName"]');
    }

    public static getLastNameField() {
        return $('input[name="lastName"]');
    }

    public static getEnabledOption() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[2]/div/label');
    }
}