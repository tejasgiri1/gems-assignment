Feature: Login to OrangeHRM
    Background:
        Given I am on login page

    Scenario: Login to OrangeHRM
        When I enter username at Login Page
        When I enter password at Login Page
        When I click login
        Then I will be logged in