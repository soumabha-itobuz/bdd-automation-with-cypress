
Feature: Verify Subscription

Scenario: Verify Subscription in home page
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Scroll down to footer
    When Verify text 'SUBSCRIPTION'
    Then Enter email address in input and click arrow button
    When Verify success message 'You have been successfully subscribed!' is visible