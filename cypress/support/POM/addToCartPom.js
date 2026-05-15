class AddToCartPom {
    navigateToProductsPage() {
        cy.visit(data.productURL)
        cy.title().should('include', 'Practice Software Testing')
    }
    selectProduct(productName) {
        cy.contains(productName).click()
    }

    addProductToCart() {
        cy.addToCart().click()
    }
    increaseProductQuantity() {
        cy.increaseQty().click()
    }

    decreaseProductQuantity() {
        cy.decreaseQty().click()
    }
    getProductQuantity() {
        cy.quantity().invoke('val')
    }
    removeProductFromCart() {
        cy.removeProduct().click()
    }

}

export default AddToCartPom
