import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { DataTable } from '@badeball/cypress-cucumber-preprocessor';


Given('I open the login page', () => {
//   cy.visit('/login'); // Adjust the path to your login page
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});

When('I fill in the following credentials:', (dataTable: DataTable) => {
  dataTable.hashes().forEach((row) => {
    cy.get('input[name="username"]').clear().type(row.username);
    cy.get('input[name="password"]').clear().type(row.password);
    cy.get('button[type="submit"]').click();
  });
});

Then('I should see the dashboard page', () => {
  cy.url().should('include', '/dashboard'); // Adjust the path to your dashboard page
});


   /*
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
   */



