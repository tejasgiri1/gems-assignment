export default class MyInfo {
    public static URL: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7';

    public static getUserHeading() {
        return $('h6[class="oxd-text oxd-text--h6 --strong"]');
    }
}