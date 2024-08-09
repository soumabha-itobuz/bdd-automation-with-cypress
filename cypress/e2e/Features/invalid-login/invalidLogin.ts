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
Then("Enter incorrect email address and password", () => {
  cy.get('[data-qa="login-email"]').type("zenia+test@itobuz.com");
  cy.get('[data-qa="login-password"]').type("Itobuz#12345");
});
Then("Click 'login' button", () => {
  cy.get('[data-qa="login-button"]').click();
});
When("Verify error 'Your email or password is incorrect!' is visible", () => {
  cy.contains("Your email or password is incorrect!");
});
