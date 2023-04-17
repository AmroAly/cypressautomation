describe("My 8th Test Suite", () => {
  it("Exploring child windows", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then((el) => {
      cy.visit(el.prop("href"));
    });
  });
});
