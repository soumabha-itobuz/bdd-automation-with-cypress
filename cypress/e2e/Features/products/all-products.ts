import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let productName;
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
When("Verify user is navigated to ALL PRODUCTS page successfully", () => {
  cy.get("h2").eq(2).should("have.text", "All Products");
});
When("Verify The products list is visible", () => {
  cy.get('[class="single-products"]').its("length").should("be.greaterThan", 0);
});
Then("Click on 'View Product' of first product", () => {
  cy.get('[class="choose"]')
    .its("length")
    .then((count) => {
      const randomItem = Math.floor(Math.random() * count);
      cy.get('[class="single-products"] > div > p')
        .eq(randomItem)
        .then(($div) => {
          productName = $div.text();
        });
      cy.get('[class="choose"]').eq(randomItem).click();
    });
});
When(
  "User is landed to product detail page and Verify that detail detail is visible: product name, category, price, availability, condition, brand",
  () => {
    cy.get('[class="product-information"] > h2').should(
      "have.text",
      productName
    );
    cy.contains("Availability:");
    cy.contains("Condition:");
    cy.contains("Brand:");
    cy.get(".product-information").find("span").should("exist");
  }
);
