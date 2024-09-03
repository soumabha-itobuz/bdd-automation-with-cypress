import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let categoryName;
Given("Automation exercise page is opened", () => {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
When("Verify that categories are visible on left side bar", () => {
  cy.get(".left-sidebar h2").first().should("have.text", "Category");
});
Then("Click on 'Women' category", () => {
  cy.get('[href="#Women"]').click();
});
Then(
  "Click on any category link under 'Women' category, for example: Dress",
  () => {
    cy.get('[id="Women"] .panel-body li')
      .its("length")
      .then(($count) => {
        const randomNumber = Math.floor(Math.random() * $count);
        cy.get('[id="Women"] .panel-body li a')
          .eq(randomNumber)
          .then(($ele) => {
            categoryName = $ele.text();
          });
        cy.get('[id="Women"] .panel-body li a').eq(randomNumber).click();
      });
  }
);
When(
  "Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'",
  () => {
    cy.get(".title").then(($heading) => {
      expect($heading.text()).to.eq(`Women - ${categoryName}Products`);
    });
  }
);
Then(
  "On left side bar, click on any sub-category link of 'Men' category",
  () => {
    cy.get('[href="#Men"]').click();
    cy.get('[id="Men"] .panel-body li')
      .its("length")
      .then(($count) => {
        const randomNumber = Math.floor(Math.random() * $count);
        cy.get('[id="Men"] .panel-body li a')
          .eq(randomNumber)
          .then(($ele) => {
            categoryName = $ele.text();
          });
        cy.get('[id="Men"] .panel-body li a').eq(randomNumber).click();
      });
  }
);
When("Verify that user is navigated to that category page", () => {
  cy.get(".title").then(($heading) => {
    expect($heading.text()).to.eq(`Men - ${categoryName}Products`);
  });
});
