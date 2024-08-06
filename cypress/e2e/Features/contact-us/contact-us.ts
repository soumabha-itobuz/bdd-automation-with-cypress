import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
Given("Automation exercise page is opened", () => {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
Then("Click on 'Contact Us' button", () => {
  cy.get('[href="/contact_us"]').click();
});
When("Verify 'GET IN TOUCH' is visible", () => {
  cy.get("h2").eq(1).should("have.text", "Get In Touch");
});
Then("Enter name, email, subject and message", () => {
  cy.get('[data-qa="name"]').type(faker.person.firstName());
  cy.get('[data-qa="email"]').type(faker.internet.email());
  cy.get('[data-qa="subject"]').type(faker.lorem.words(2));
  cy.get('[data-qa="message"]').type(faker.lorem.words(6));
});
Then("Upload file and Click 'Submit' button", () => {
  cy.get('[name="upload_file"]').selectFile(
    "cypress/e2e/assets/images/sample.jpg"
  );
  cy.get('[data-qa="submit-button"]').click();
});
When(
  "Verify success message 'Success! Your details have been submitted successfully.' is visible",
  () => {
    cy.scrollTo("top");
    cy.get('[class="status alert alert-success"]').should(
      "have.text",
      "Success! Your details have been submitted successfully."
    );
  }
);
Then(
  "Click 'Home' button and verify that landed to home page successfully",
  () => {
    cy.get('[class="btn btn-success"]').click();
  }
);
