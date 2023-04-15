describe("My First Test", () => {
  it("My first test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('input[type="search"').type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get("@productLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click()
      .then(() => console.log("Logging....."));
    // console.log("Logging.....");
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const productName = $el.find("h4.product-name").text();
        if (productName.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand.greenLogo").then((logo) => {
      cy.log(logo.text());
    });

    cy.get(".brand.greenLogo").should("have.text", "GREENKART");
  });
});
