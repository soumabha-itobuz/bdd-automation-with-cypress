import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let productName = [],
  productPrice = [],
  sum2 = 0;

Given("Automation exercise page is opened", () => {
  cy.visit(Cypress.env("baseURL"));
  cy.wait(2000);
});
When("Verify it is the home page or not", () => {
  cy.get("h1").should("contain.text", "AutomationExercise");
});
Then("Click on 'Products' button", () => {
  cy.get('[href="/products"]').click();
});
Then("Hover over first product and click 'Add to cart'", () => {
  cy.get('[class="productinfo text-center"] > p')
    .first()
    .then(($elem) => {
      productName.push($elem.text());
    });
  cy.get('[class="productinfo text-center"]>h2')
    .first()
    .then(($elem) => {
      productPrice.push($elem.text().substring(4));
    });
  cy.get('[class="btn btn-default add-to-cart"]').first().click();
});
Then("Click 'Continue Shopping' button", () => {
  cy.get('[class="btn btn-success close-modal btn-block"]').click();
});
Then("Hover over second product and click 'Add to cart'", () => {
  cy.get('[class="productinfo text-center"] > p')
    .eq(2)
    .then(($elem) => {
      productName.push($elem.text());
    });
  cy.get('[class="productinfo text-center"]>h2')
    .eq(2)
    .then(($elem) => {
      productPrice.push($elem.text().substring(4));
    });
  cy.get('[class="btn btn-default add-to-cart"]').eq(4).click();
});
Then("Click 'View Cart' button", () => {
  cy.get('[href="/view_cart"]').first().click();
});
When("Verify both products are added to Cart", () => {
  cy.get('[class="cart_description"] > h4').each(($itemName, index) => {
    const name = $itemName.text();
    expect(name).to.eq(productName[index]);
  });
});
When("Verify their prices, quantity and total price", () => {
  cy.get('[class="cart_price"] > p').each(($itemPrice, index) => {
    const price = $itemPrice.text().substring(4);
    expect(price).to.eq(productPrice[index]);
  });
  const sum = productPrice.reduce((acc, curr) => (acc += Number(curr)), 0);

  cy.get('[class="cart_total_price"]')
    .each(($itemTotalPrice) => {
      sum2 = sum2 + Number($itemTotalPrice.text().substring(4));
    })
    .then(() => expect(sum).to.eq(sum2));
});
