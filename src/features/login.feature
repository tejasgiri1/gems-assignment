Feature: Login to OrangeHRM Website  
  
  Scenario Outline: As an admin, I can log into the Website
    Given I am on login page
    When I login with useremail and password
    Then I should see a welcome page