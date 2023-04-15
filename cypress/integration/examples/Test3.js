describe("My Third Test Suite", () => {
  it("exploring with checkboxes", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // checkbox
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .should("have.value", "option1")
      .uncheck()
      .should("not.be.checked");

    cy.get("input[type='checkbox']").check(["option1", "option3"]);

    // static dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    // dynamic dropdown
    cy.get("#autocomplete").type("egy");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "Egypt") {
        cy.wrap($el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "Egypt");

    // visiblity
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    // radio buttons
    cy.get(".radioButton[value='radio1']")
      .should("not.be.checked")
      .check()
      .should("be.checked");
  });
});
