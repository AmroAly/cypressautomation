describe("My 7th Test Suite", () => {
  it("Exploring mouse hover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
  });
});
