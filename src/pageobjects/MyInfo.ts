export default class MyInfo {
    public static URL: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7';

    public static getFirstNameField() {
        return $('input[name="firstName"]');
    }

    public static getLastNameField() {
        return $('input[name="lastName"]');
    }

    public static getEmployeeIDField() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input');
    }

    public static getDlNumberField() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input');
    }

    public static getDLExpiryField() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div/input');
    }

    public static getDropDownButton() {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[1]/div/div[2]/div/div/div[2]');
    }

    public static getDropDownList() {
        return $('div[role = "listbox"]');
    }
}