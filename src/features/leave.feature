Feature: Go to Leave tab  
Scenario Outline: As an admin, I can log into the Website
    Given I am on login page
    When I login with useremail and password
    Then I should see a welcome page

  Scenario Outline: apply leave
    Given I see a dashboard page
    When I click on leave tab
    When I should see a leaveList
    When I click on apply tab
    Then I should see a apply options

# Scenario Outline: Apply Leave
#     Given I should see a leaveList