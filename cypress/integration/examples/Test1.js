describe("My First Test", () => {
  it("My first test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('input[type="search"').type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
  });
});
