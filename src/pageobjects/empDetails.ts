class EmpDetailsPage {
    get empFirstName() {
      return $(".orangehrm-firstname");
    }
    get empMidName() {
      return $('.orangehrm-middlename');
    }
    get empLastName() {
        return $('.orangehrm-lastname');
      }
    get imgBtn() {
      return $('//input[@type="file"]//parent::div');
    }
    // get detailsBtn() {
    //   return $('div.oxd-table-body div.oxd-table-card:nth-child(2)');
    // }
    get submitBtn() {
      return $('//button[@type="submit"]');
    }
    
    public async setEmpFirstName(fname: string) {
        await (await this.empFirstName).waitForDisplayed()
        await (await this.empFirstName).setValue(fname);
    }
    public async setEmpMidName(mname: string) {
        await (await this.empMidName).waitForDisplayed()
        await (await this.empMidName).setValue(mname);
      }

    public async setEmpLastName(lname: string) {
        await (await this.empLastName).waitForDisplayed()
        await (await this.empLastName).setValue(lname);
      }
      
  }
  
  export default new EmpDetailsPage();
    
  