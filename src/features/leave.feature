Feature: Leavelist and add leave types Leave tab  

Scenario Outline: Apply Leavelist filter
    Given I am on login page
    When I login with useremail and password
    When I see a dashboard page
    When I click on leave tab
    When I should see a leaveList
    When I should search with dates
    Then I should see records


Scenario Outline: As an admin I can add leave type
    # Given I am on login page
    # When I login with useremail and password
    When I see a dashboard page
    When I click on leave tab
    When I should see a leaveList
    When I select leave type from configure tab
    When I should see all leave types
    When I add new leave type
    Then I should see new leave type added

# Scenario Outline: As an admin, I can log into the Website
#     Given I am on login page
#     When I login with useremail and password
#     Then I should see a welcome page

#   Scenario Outline: I can see apply leave page
#     Given I see a dashboard page
#     When I click on leave tab
#     When I should see a leaveList
#     When I click on apply tab
#     Then I should see a apply options