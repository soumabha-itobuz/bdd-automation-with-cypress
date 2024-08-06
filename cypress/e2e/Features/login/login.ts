import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Automation exercise page is opened", () => {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
Then("Click on the Signup Login button", () => {
  cy.get('[href="/login"]').click();
});
When("Verify that home page is visible successfully", () => {
  cy.get("h2").eq(0).should("have.text", "Login to your account");
});
Then("Enter correct email address and password", () => {
  cy.get('[data-qa="login-email"]').type(Cypress.env("userEmail"));
  cy.get('[data-qa="login-password"]').type(Cypress.env("userPassword"));
});
Then("Click 'login' button", () => {
  cy.get('[data-qa="login-button"]').click();
});
When("Verify that 'Logged in as username' is visible", () => {
  cy.get("[class='nav navbar-nav'] > li:nth-child(10) > a > b").should(
    "have.text",
    "Zenia Banerjee"
  );
});
