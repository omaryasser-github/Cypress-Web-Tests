Cypress.Commands.add('addToCart', () => {
    cy.get('#btn-add-to-cart')
})
Cypress.Commands.add('increaseQty', () => {
    cy.get('[data-test="increase-quantity"]')
})
Cypress.Commands.add('decreaseQty', () => {
    cy.get('[data-test="decrease-quantity"]')
})
Cypress.Commands.add('quantity', () => {
    cy.get('[data-test="quantity"]')
})
Cypress.Commands.add('removeProduct', () => {
    cy.get('[data-test="delete-product"]')
})