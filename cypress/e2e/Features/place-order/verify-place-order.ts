import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let productName = [],
  productPrice = [],
  sum2 = 0;

Given("Automation exercise page is opened", () => {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
Then("Click on 'Products' button", () => {
  cy.get('[href="/products"]').click();
});
Then("Hover over first product and click 'Add to cart'", () => {
  cy.get('.productinfo > p')
    .first()
    .then(($elem) => {
      productName.push($elem.text());
    });
  cy.get('.productinfo > h2')
    .first()
    .then(($elem) => {
      productPrice.push($elem.text().substring(4));
    });
  cy.get('.add-to-cart').first().click();
});
Then("Click 'View Cart' button", () => {
  cy.get('[href="/view_cart"]').eq(1).click();
});
When("Verify the product is added to Cart", () => {
  cy.get('[class="cart_description"] > h4').each(($itemName, index) => {
    const name = $itemName.text();
    expect(name).to.eq(productName[index]);
  });
});
Then("Click Proceed To Checkout after adding to cart", () => {
  cy.get("a.check_out").click();
});
Then("Click 'Register Login' button", () => {
  cy.get('[href="/login"]').eq(1).click();
});
Then("Log into the account", () => {
  cy.get('[data-qa="login-email"]').type(Cypress.env("userEmail"));
  cy.get('[data-qa="login-password"]').type(Cypress.env("userPassword"));
  cy.get('[data-qa="login-button"]').click();
});
Then('Click "Cart" button', () => {
  cy.get('[href="/view_cart"]').first().click();
});
Then("Click Proceed To Checkout", () => {
  cy.get("a.check_out").click();
});
When("Verify Address Details and Review Your Order", () => {
  cy.get('[class="address_firstname address_lastname"]').eq(0).should(
    "have.text",
    "Mrs. Zenia Banerjee"
  );
  cy.get('[class="address_address1 address_address2"]').eq(0).should(
    "have.text",
    "Itobuz"
  );
});
Then("Enter description in comment text area and click 'Place Order'", () => {
  cy.get("textarea").type("test");
  cy.get('[href="/payment"]').click();
});
Then(
  "Enter payment details: Name on Card, Card Number, CVC, Expiration date'",
  () => {
    cy.get("[data-qa='name-on-card']").type("Zenia Banerjee");
    cy.get('[data-qa="card-number"]').type("4000003560000123");
    cy.get('[data-qa="cvc"]').type("123");
    cy.get('[data-qa="expiry-month"]').type("01");
    cy.get('[data-qa="expiry-year"]').type("2030");
  }
);
Then("Click 'Pay and Confirm Order' button'", () => {
  cy.get('[data-qa="pay-button"]').click();
});
When(
  "Verify success message 'Your order has been placed successfully!'",
  () => {
    cy.get('[data-qa="order-placed"]').should("have.text", "Order Placed!");
  }
);
