Feature: Verify All Products and product detail page

Scenario: Verify All Products and product detail page
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click on 'Products' button
    When Verify user is navigated to ALL PRODUCTS page successfully
    When Verify The products list is visible
    Then Click on 'View Product' of first product
    When User is landed to product detail page and Verify that detail detail is visible: product name, category, price, availability, condition, brand