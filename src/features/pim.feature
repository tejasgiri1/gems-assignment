Feature: Navigate to PIM tab
Background:
    Given I click on PIM tab


  Scenario: Sort the employee details according to ascending order of Id and check the details
    Then I should see message as "PIM"
    When I sort in acending order of Id 
    And I click to see details of second employee


  Scenario: search and see the list of employees with that name.
    When I search employee by name
    And I click on search button
    

  Scenario: Adding employee details.
    When I click on add employee button
    And I fill the details
    And I close sidebar
    And I click on dropdown button
    Then I click on logout button
    