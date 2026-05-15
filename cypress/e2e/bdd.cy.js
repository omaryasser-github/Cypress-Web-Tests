import enviroment from "../POM/environment"
import items from "../POM/items"

const env = new enviroment()
const browse = new items()


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