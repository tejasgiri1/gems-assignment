class LoginPage {
    get usernameInput() {
      return $("//input[@name='username']");
    }
    get passwordInput() {
      return $("//input[@name='password']");
    }
    
    get loginButton() {
      return $("//button[@type='submit']");
    }
  
    get message() {
      return $("//h6");
    }
  
    public async setUsername(username: string) {
      await (await this.usernameInput).setValue(username);
    }
  
    public async setPassword(password: string) {
      await (await this.passwordInput).setValue(password);
    }
  }
  
  export default new LoginPage();
  