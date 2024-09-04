Feature: Verify Add Products in Cart

Scenario: Verify Add Products in Cart
    Given Automation exercise page is opened
    When Verify it is the home page or not
    Then Click on 'Products' button
    Then Hover over first product and click 'Add to cart'
    Then Click 'View Cart' button
    When Verify both products are added to Cart
    Then Click Proceed To Checkout
    Then Click "Register / Login" button
    Then Log into the account
    Then Click "Cart" button
    Then Click Proceed To Checkout
    When Verify Address Details and Review Your Order
    Then Enter description in comment text area and click 'Place Order
    Then Enter payment details: Name on Card, Card Number, CVC, Expiration date
    Then Click 'Pay and Confirm Order' button
    When Verify success message 'Your order has been placed successfully!'