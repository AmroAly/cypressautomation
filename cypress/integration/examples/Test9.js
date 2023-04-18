import "cypress-iframe";

describe("My 9th Test Suite", () => {
  it("Exploring frames", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href='mentorship']").eq(0).click();
  });
});
