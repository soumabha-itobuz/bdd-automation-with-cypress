
Feature: Verify Subscription 

Scenario: Verify Subscription in cart page
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click 'Cart' button
    When Verify it is the Cart Page or not
    Then Scroll down to footer
    When Verify text 'SUBSCRIPTION'
    Then Enter email address in input and click arrow button
    When Verify success message 'You have been successfully subscribed!' is visible