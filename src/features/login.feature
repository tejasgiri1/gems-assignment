Feature: Login to OrangeHRM

  Background:
    Given I am on the OrangeHRM login page

  Scenario: Successful login with valid credentials
    When I enter my username
    And I enter my password
    And I click on the login button
    Then I should see message as Dashboard
    