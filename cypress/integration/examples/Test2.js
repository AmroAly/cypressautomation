describe("My Second Test Suite", () => {
  it("should add products to cart", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('input[type="search"').type("ca");
    cy.wait(2000);
    cy.get(".products").as("productLocator");

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const productName = $el.find("h4.product-name").text();
        if (productName.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".cart-icon").click();
    cy.get(".cart-items:visible").should("have.length", 1);
    cy.get(".cart-items")
      .eq(0)
      .find(".cart-item .product-name")
      .should("have.text", "Cashews - 1 Kg");
    cy.get(".cart-preview.active").contains("PROCEED TO CHECKOUT").click();
    cy.get("#productCartTables tbody tr").as("firstRow");
    cy.get("@firstRow").should("have.length", 1);
    cy.get("@firstRow").find("td").eq(1).should("have.text", "Cashews - 1 Kg");
    cy.get("@firstRow").find("td").eq(2).should("have.text", "1");
    cy.contains("Place Order").click();
  });
});
