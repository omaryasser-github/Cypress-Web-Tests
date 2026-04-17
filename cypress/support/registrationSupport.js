Cypress.Commands.add('dob', () => {
    cy.get('[data-test="dob"]')
})
Cypress.Commands.add('street', () => {
    cy.get('[data-test="street"]')
})
Cypress.Commands.add('city', () => {
    cy.get('[data-test="city"]')
})
Cypress.Commands.add('postalCode', () => {
    cy.get('[data-test="postal_code"]')
})
Cypress.Commands.add('userState', () => {
    cy.get('[data-test="state"]') 
})
Cypress.Commands.add('country', () => {
    cy.get('[data-test="country"]')
})
Cypress.Commands.add('phone', () => {
    cy.get('[data-test="phone"]')
})
Cypress.Commands.add('registerEmail', () => {
    cy.get('[data-test="email"]')
})
Cypress.Commands.add('password', () => {
    cy.get('[data-test="password"]')
})
Cypress.Commands.add('registerButton', () => {
    cy.get('[data-test="register-submit"]')
})