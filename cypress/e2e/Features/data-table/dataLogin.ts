import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { DataTable } from '@badeball/cypress-cucumber-preprocessor';


Given('I open the login page', () => {
//   cy.visit('/login'); // Adjust the path to your login page
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
  cy.get(".fa.fa-lock").click();
});

When('I fill in the following credentials:', (dataTable: DataTable) => {
//   dataTable.hashes().forEach((row) => {
    const userData = dataTable.rowsHash();
    cy.get('[name="email"]').first().click().type(userData.username);
    cy.get('[name="password"]').click().type(userData.password);
    cy.get('[data-qa="login-button"]').first().click();
//   });
});

Then('I should see the dashboard page', () => {
  cy.url().should('include', '/dashboard'); // Adjust the path to your dashboard page
});


