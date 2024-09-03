import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Automation exercise page is opened", () => {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
Then("Click 'Cart' button", () => {
  cy.get('[href="/view_cart"]').first().click();
});
When("Verify it is the Cart Page or not", () => {
  cy.get('[class="breadcrumb"] > li')
    .eq(1)
    .should("have.text", "Shopping Cart");
});
Then("Scroll down to footer", () => {
  cy.scrollTo("bottom");
});
When("Verify text 'SUBSCRIPTION'", () => {
  cy.get('[class="single-widget"] > h2').should("have.text", "Subscription");
});
Then("Enter email address in input and click arrow button", () => {
  cy.get('[id="susbscribe_email"]').type("test@gmail.com");
  cy.get('[id="subscribe"]').click();
});
When(
  "Verify success message 'You have been successfully subscribed!' is visible",
  () => {
    cy.contains("You have been successfully subscribed!");
  }
);
