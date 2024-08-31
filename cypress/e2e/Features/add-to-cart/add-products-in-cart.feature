Feature: Verify Add Products in Cart

Scenario: Verify Add Products in Cart
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click on 'Products' button
    Then Hover over first product and click 'Add to cart'
    Then Click 'Continue Shopping' button
    Then Hover over second product and click 'Add to cart'
    Then Click 'View Cart' button
    When Verify both products are added to Cart
    When Verify their prices, quantity and total price
    