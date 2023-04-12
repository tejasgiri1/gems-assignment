Feature: Add Employee
    Background: I am on add employee page
        Given I am on add employee page

    # Scenario: Login to OrangeHRM
    #     Given I am on login page
    #     When I enter username at Login Page
    #     When I enter password at Login Page
    #     When I click login
    #     Then I will be logged in

    Scenario: Employee Id is filled from backend
        When I Check details in Employee Id field its not empty

    Scenario: Employee can't be added without entering First and Last Name
        When I click on Save
        Then Error message is shown for First and Last name

    Scenario: Create Login Details toggle should display credentials fields
        When I toggle Create Login details
        Then Username, password, Confirm Password and Status is displayed

    Scenario: When create login info is on employee can't be created without username and password
        Given Create Login details toggle is on
        When I click on Save
        Then error message is shown at Username, Password and Confirm Password

    Scenario: Check Username Validation
        Given Create Login details toggle is on
        When I enter username with less than 5 characters
        Then Username should be of atleast 5 characters error message is shown

    Scenario: Check min 8 characters Password Validation
        Given Create Login details toggle is on
        When I enter password less than 8 characters
        Then Password should be of atleast 8 characters error message is shown

    Scenario: Check combination of characters Password Validation
        Given Create Login details toggle is on
        When I enter password which doesn't contain atleast one of lower char, upper char, digit or special char
        Then Characters combination error is shown

    Scenario: Password and confirm password shows error when different
        Given Create Login details toggle is on
        When I enter password on create login details
        When I fill confirm password field with different password
        Then Different password error message is displayed

    Scenario: Fill all details and Save employee
        Given Create Login details toggle is on
        When I enter First name at Add Employee Page
        When I enter Last name at Add Employee Page
        When I enter username at Add Employee Page
        When I enter password at Add Employee Page
        When I enter Confirm password at Add Employee Page
        When I set status of employee at Add Employee Page
        When I click on Save
        Then Employee is saved