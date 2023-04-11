Feature:  Login Test
Background: Open URL
  Given Open orangeHRM

Scenario: Login to orangeHRM
    When I want to Login with username "Admin" and password "admin123"
    Then I verify Login successfully

