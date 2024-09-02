import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let productName;
Given("Automation exercise page is opened", () => {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
Then("Click 'View Product' for any product on home page", () => {
  cy.get('[class="choose"]')
    .its("length")
    .then((count) => {
      const randomItem = Math.floor(Math.random() * count);
      cy.get(".productinfo.text-center p")
        .eq(randomItem)
        .then(($div) => {
          productName = $div.text();
        });
      cy.get('[class="choose"]').eq(randomItem).click();
    });
});
When("Verify product detail is opened", () => {
  cy.url().should("contain", "product_details");
});
Then("Increase quantity to 4", () => {
  cy.get('[id="quantity"]').type("4");
});
Then('Click "Add to cart" button', () => {
  cy.get('[class="btn btn-default cart"]').click();
});
Then('Click "View Cart" button', () => {
  cy.get('[href="/view_cart"]').click();
});
When(
  "Verify that product is displayed in cart page with exact quantity",
  () => {
    cy.get(".cart_quantity button").then(($count) => {
      expect($count.text()).to.be("4");
    });
    cy.get(".cart_description h4 a").then(($name) => {
      expect($name.text()).to.eq(productName);
    });
  }
);
