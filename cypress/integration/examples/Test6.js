describe("My 6th Test Suite", () => {
  it("Exploring tables", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get(".left-align #product td:nth-of-type(2)").each(
      ($el, index, $list) => {
        const courseName = $el.text();

        if (courseName.includes("Python")) {
          cy.get(".left-align #product td:nth-of-type(3)")
            .eq(index)
            // .next()
            // .then((price) => {
            //   cy.log(price.text());

            //   expect(price.text()).to.equal("25");
            // });
            .should("have.text", "25");
        }
      }
    );
  });
});
