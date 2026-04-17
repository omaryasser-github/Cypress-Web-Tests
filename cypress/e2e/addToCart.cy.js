describe("Shopping Cart test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.visit(data.productURL)
        cy.title().should('include', 'Practice Software Testing')
    })

    it("1- Add product to cart successfully", function () {
        cy.visit("https://practicesoftwaretesting.com/")
        cy.contains(" Combination Pliers").click()
        cy.title().should('include','Combination Pliers - Practice Software Testing - Toolshop - v5.0')
        cy.get('#btn-add-to-cart').click()
    })
})