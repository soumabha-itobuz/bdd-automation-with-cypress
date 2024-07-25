import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Home page is opened", function () {
  cy.visit("https://www.saucedemo.com/");
  cy.wait(7000);
});
When("test when", () => {
  console.log("hello");
  cy.wait(7000);
});
Then("test then", () => {
  console.log("hi");
  cy.wait(7000);
});
