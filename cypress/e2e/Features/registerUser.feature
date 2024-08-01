Feature: Register user

Scenario: Register user
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click on the Signup Login button
    When Verify 'New User Signup!' is visible
    Then Enter name and email address and click on signup button
    When Verify that 'Enter Account Information' is visible