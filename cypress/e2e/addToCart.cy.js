import AddToCartPom from "../support/pom/addToCartPom"

const cart = new AddToCartPom()

describe("Shopping Cart test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cart.navigateToProductsPage()
    })

    it("1- Add product to cart successfully", function () {
        // cy.visit("https://practicesoftwaretesting.com/")
        cart.selectProduct(" Combination Pliers")
        cy.title().should('include', 'Combination Pliers - Practice Software Testing - Toolshop - v5.0')
        cart.addProductToCart()
    })
})