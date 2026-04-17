describe("My First Test", () => {

  it("Visit homepage", () => {

    cy.visit("https://practicesoftwaretesting.com/")

    // cy.contains("Practice Software Testing").should("exist")
    cy.url().should("include", "practicesoftwaretesting")
    cy.get('body').should("be.visible")

  });

});