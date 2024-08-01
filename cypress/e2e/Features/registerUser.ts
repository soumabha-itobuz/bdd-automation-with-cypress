import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Automation exercise page is opened", function () {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
Then("Click on the Signup Login button", () => {
  cy.get('[href="/login"]').click();
});
When("Verify 'New User Signup!' is visible", () => {
  cy.get("h2").eq(2).should("have.text", "New User Signup!");
});
Then("Enter name and email address and click on signup button", () => {
  cy.get('[data-qa="signup-name"]').type("Zenia");
  cy.get('[data-qa="signup-email"]').type("zenia@itobuz.com");
  cy.get('[data-qa="signup-button"]').click();
});
When("Verify that 'Enter Account Information' is visible", () => {
  cy.get("[class='title text-center']")
    .eq(0)
    .should("have.text", "Enter Account Information");
});
