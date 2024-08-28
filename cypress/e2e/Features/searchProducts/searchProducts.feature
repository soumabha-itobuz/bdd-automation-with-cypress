Feature: Verify Search Products 

Scenario: Verify Search Products 
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click on 'Products' button
    When Verify user is navigated to ALL PRODUCTS page successfully
    Then Enter product name in search input and click search button
    When Verify "SEARCHED PRODUCTS" is visible
    When Verify all the products related to search are visible