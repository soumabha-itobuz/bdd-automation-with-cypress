Feature: Contact us functionality

Scenario: Contact us functionality test
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click on 'Contact Us' button
    When Verify 'GET IN TOUCH' is visible
    Then Enter name, email, subject and message
    Then Upload file and Click 'Submit' button
    When Verify success message 'Success! Your details have been submitted successfully.' is visible
    Then Click 'Home' button and verify that landed to home page successfully