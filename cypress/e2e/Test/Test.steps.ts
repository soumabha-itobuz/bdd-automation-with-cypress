import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am in the Swag Labs login page", () => {
  cy.visit("https://www.saucedemo.com/index.html");
});
