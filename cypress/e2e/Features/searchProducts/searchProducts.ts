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

Then("Enter product name in search input and click search button", () => {
  cy.get('[class="choose"]')
    .its("length")
    .then((count) => {
      const randomItem = Math.floor(Math.random() * count);
      cy.get('.productinfo.text-center p')
        .eq(randomItem)
        .then(($div) => {
          productName = $div.text();
          cy.get('[id="search_product"]').type(productName);
          cy.get('[id="submit_search"]').click();
        });
    });
});
When('Verify "SEARCHED PRODUCTS" is visible', () => {
  cy.get("h2").eq(2).should("have.text", "Searched Products");
});
When("Verify all the products related to search are visible", () => {
  cy.get('.productinfo.text-center p').first().contains(productName);
});

