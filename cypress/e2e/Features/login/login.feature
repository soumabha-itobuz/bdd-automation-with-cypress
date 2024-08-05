Feature: Login functionality

Scenario: Login as an existing user
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click on the Signup Login button
    When Verify that home page is visible successfully
    Then Enter correct email address and password
    Then Click 'login' button
    When Verify that 'Logged in as username' is visible