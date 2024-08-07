import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

const fullName = faker.person.fullName();
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
Then(
  "Enter name and already registered email address and Click 'Signup' button",
  () => {
    cy.get('[data-qa="signup-name"]').type(fullName);
    cy.get('[data-qa="signup-email"]').type(Cypress.env("userEmail"));
    cy.get('[data-qa="signup-button"]').click();
  }
);
When("Verify error 'Email Address already exist!' is visible", () => {
  cy.contains("Email Address already exist!");
});
