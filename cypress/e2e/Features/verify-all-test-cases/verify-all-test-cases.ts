import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Automation exercise page is opened", () => {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
Then("Click on 'Test Cases' button", () => {
  cy.get('[href="/test_cases"]').eq(0).click();
});
When("Verify user is navigated to test cases page successfully", () => {
  cy.get("h2").eq(0).should("contain.text", "Test Cases");
});
