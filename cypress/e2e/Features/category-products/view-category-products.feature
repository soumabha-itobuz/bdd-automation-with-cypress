
Feature: Verify Category Products 

Scenario: Verify Category Products 
    Given Automation exercise page is opened
    When Verify it is the home page or not
    When Verify that categories are visible on left side bar
    Then Click on 'Women' category
    Then Click on any category link under 'Women' category, for example: Dress
    When Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    Then On left side bar, click on any sub-category link of 'Men' category
    When Verify that user is navigated to that category page
    