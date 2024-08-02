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
Then("Enter name and email address and click on signup button", () => {
  cy.get('[data-qa="signup-name"]').type(fullName);
  cy.get('[data-qa="signup-email"]').type(faker.internet.email());
  cy.get('[data-qa="signup-button"]').click();
});
When("Verify that 'Enter Account Information' is visible", () => {
  cy.get("[class='title text-center']")
    .eq(0)
    .should("have.text", "Enter Account Information");
});
Then("Fill details: Title, Name, Email, Password, Date of birth", () => {
  cy.get('[for="id_gender2"]').click();
  cy.get('[data-qa="password"]').type("Itobuz#1234");
  cy.get('[data-qa="days"]').select("10");
  cy.get('[data-qa="months"]').select("February");
  cy.get('[data-qa="years"]').select("2002");
});
Then("Select checkbox 'Sign up for our newsletter!'", () => {
  cy.get('[id="newsletter"]').check();
});
Then("Select checkbox 'Receive special offers from our partners!'", () => {
  cy.get('[id="optin"]').check();
});
Then(
  "Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number",
  () => {
    cy.get('[data-qa="first_name"]').type("Zenia");
    cy.get('[data-qa="last_name"]').type("Banerjee");
    cy.get('[data-qa="company"]').type("Itobuz");
    cy.get('[data-qa="address"]').type("Kolkata");
    cy.get('[id="country"]').select("India");
    cy.get('[data-qa="state"]').type("West Bengal");
    cy.get('[data-qa="city"]').type("Kolkata");
    cy.get('[data-qa="zipcode"]').type("712258");
    cy.get('[data-qa="mobile_number"]').type("9874976543");
  }
);
Then("Click 'Create Account button'", () => {
  cy.get('[data-qa="create-account"]').click();
});
When("Verify that 'ACCOUNT CREATED!' is visible", () => {
  cy.get("[data-qa='account-created']").should("have.text", "Account Created!");
});
Then("Click 'Continue' button", () => {
  cy.get("[data-qa='continue-button']").click();
});
When("Verify that 'Logged in as username' is visible", () => {
  cy.get("[class='nav navbar-nav'] > li:nth-child(10) > a > b").should(
    "have.text",
    fullName
  );
});
Then("Click 'Delete Account' button", () => {
  cy.get("[href='/delete_account']").click();
});
When("Verify that 'ACCOUNT DELETED!' is visible", () => {
  cy.get('[data-qa="account-deleted"]').should("have.text", "Account Deleted!");
});
Then("Click 'Continue' button again", () => {
  cy.get("[data-qa='continue-button']").click();
});
