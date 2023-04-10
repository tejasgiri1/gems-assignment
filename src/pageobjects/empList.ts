class EmpListPage {
  get empName() {
    return $("form div.oxd-grid-item:nth-child(1) input");
  }

  get empStatus() {
    return $("form div.oxd-grid-item:nth-child(3) .oxd-select-wrapper");
  }
  get sortBtn() {
    return $('div.oxd-table-header div.oxd-table-header-cell:nth-child(2) i');
  }
  get ascBtn() {
    return $('div.oxd-table-header-cell:nth-child(2) li:nth-child(1)');
  }
  get detailsBtn() {
    return $('div.oxd-table-body div.oxd-table-card:nth-child(2)');
  }
  get submitBtn() {
    return $('//button[@type="submit"]');
  }
  
  public async setEmpName(name: string) {
    await (await this.empName).setValue(name);
  }
  
  

}

export default new EmpListPage();
  
