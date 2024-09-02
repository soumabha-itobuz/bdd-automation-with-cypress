Feature: Verify product quantity in cart

Scenario: Verify product quantity in cart
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click 'View Product' for any product on home page
    When Verify product detail is opened
    Then Increase quantity to 4
    Then Click "Add to cart" button
    Then Click "View Cart" button
    When Verify that product is displayed in cart page with exact quantity