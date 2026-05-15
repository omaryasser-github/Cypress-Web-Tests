class Items {
    navigateTOCloth() {
        cy.contains('Cloth').click()
    }

    selectProduct() {
        cy.contains('Combination Pliers').click()
    }
    addProductToCart() {
        cy.get('#btn-add-to-cart').click()
    }
    checkoutItem() {
        cy.get('[data-test="proceed-1"]').click()

    }
    cartPage() {
        cy.url().should("include", "/cart");
        cy.get('[data-test="cart-page"]', { timeout: 10000 }).should("be.visible");
    }
}

export default Items