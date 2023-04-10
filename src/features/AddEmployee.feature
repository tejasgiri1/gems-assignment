Feature: Add Employee
    Background: I am on add employee page
        Given I am on add employee page

    Scenario: Employee Id is filled from backend
        When I Check details in Employee Id field its not empty

    Scenario: Employee can't be added without entering First and Last Name
        When I click on Save
#     Then Error message is shown for First and Last name

# Scenario: Create Login Details toggle should display credentials fields
#     When I toggle Create Login details
#     Then Username, password, Confirm Password and Status is displayed

# Scenario: When create login info is on employee can't be created without username and password
#     Given Create Login details toggle is on
#     When I click Save
#     Then error message is shown at Username, Password and Confirm Password

# Scenario: Check Username Validation
#     Given Create Login details toggle is on
#     When I enter username with less than 5 characters
#     Then error message is shown

# Scenario: Check min 8 characters Password Validation
#     Given Create Login details toggle is on
#     When I enter password less than 8 characters
#     Then error message is shown

# Scenario: Check combination of characters Password Validation
#     Given Create Login details toggle is on
#     When I enter password which doesn't contain atleast one of lower char, upper char, digit or special char
#     Then error message is shown

# Scenario: Password and confirm password should match
#     Given Create Login details toggle is on
#     When I enter password
#     When I fill confirm password filed with different password
#     Then Error message is displayed

# Scenario: Fill all details and Save employee
#     Given Create Login details toggle is on
#     When I enter First name
#     When I enter Last name
#     When I enter username
#     When I enter password
#     When I enter Confirm password
#     When I set status of employee
#     When I click Save
#     Then I employee is saved

# When I enter Driver's License Number
#     When I select License Expiry Date
# When I select Nationality
# When I select Marital status
# When I select Date of Birth
# When I select Gender
# When I enter Military Service
# When I select smoker status
# When I click save
# When I select blood group
# When I click save