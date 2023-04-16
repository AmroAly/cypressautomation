describe("My Fifth Test Suite", () => {
  it("Exploring with links with target attributes", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "qaclickacademy");
    cy.go("back");
  });
});
