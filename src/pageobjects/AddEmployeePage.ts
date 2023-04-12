export default class AddEmployeePage {
    public static URL: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee';

    public static async open() {
        await browser.url(AddEmployeePage.URL);
    }

    public static getEmployeeIdField() {
        return $('//label[text()="Employee Id"]/parent::div/following-sibling::div/input');
    }

    public static getSaveButton() {
        return $('button[type="submit"]');
    }

    public static getFirstNameErrorMessage() {
        return $('//input[@name="firstName"]/parent::div//following-sibling::span');
    }

    public static getLastNameErrorMessage() {
        return $('//input[@name="lastName"]/parent::div//following-sibling::span');
    }

    public static getUsernameErrorMessage() {
        return $('//label[text()="Username"]/parent::div/following-sibling::span');
    }

    public static getPasswordErrorMessage() {
        return $('//label[text()="Password"]/parent::div/following-sibling::span');
    }

    public static getConfirmPasswordErrorMessage() {
        return $('//label[text()="Confirm Password"]/parent::div/following-sibling::span');
    }

    public static getCreateLoginDetailsCheckBox() {
        return $('span[class="oxd-switch-input oxd-switch-input--active --label-right"]');
    }

    public static getUsernameField() {
        return $('//label[text()="Username"]/parent::div/following-sibling::div/input');
    }

    public static getPasswordField() {
        return $('//label[text()="Password"]/parent::div/following-sibling::div/input');
    }

    public static getConfirmPasswordField() {
        return $('//label[text()="Confirm Password"]/parent::div/following-sibling::div/input');
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
        return $('//label[text()="Enabled"]');
    }
}