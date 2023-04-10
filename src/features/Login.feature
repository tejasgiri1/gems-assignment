Feature: OrangeHRM Login
    Background: I am on login page
        Given I am on login page

    Scenario: Login to OrangeHRM
        When I enter username
        When I enter password
        When I click login
        Then I will be logged in