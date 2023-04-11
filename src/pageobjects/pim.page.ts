
class PIMPage {
    get pimElement() {
      return $("ul li:nth-child(2) a");
    }

    get message() {
      return $("//h6");
    }
  
    get addEmpBtn() {
      return $('//a[text()="Add Employee"]');
    }
    get sideBtn() {
      return $('.oxd-icon-button.oxd-main-menu-button');
    }
    get dropBtn() {
      return $('.oxd-userdropdown');
    }
    get logoutBtn() {
      return $('=Logout');
    }
    
    
  }
  
  export default new PIMPage();
  





