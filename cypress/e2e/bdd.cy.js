import enviroment from ""
import items from ""

const env = new enviroment()
const item = new items()


describe("BDD Test Suite",  () => {

    it("1- Add product to cart", function () {
        env.dev()
        browse.navigateTOCloth();
        browse.selectProduct()
        browse.addProductToCart()
        browse.checkoutItem()
        browse.cartPage()
        // cy.visit(env.homeURL)
        // cy.title().should('eq', env.homeTitle)
    });
});