import Environment from "../pom/environment"
import Items from "../pom/items"

const env = new Environment()
const browse = new Items()


describe("BDD Test Suite", () => {

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