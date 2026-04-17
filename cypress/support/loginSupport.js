Cypress.Commands.add('email',() => {
    cy.get('[data-test = "email"]')
})
Cypress.Commands.add('password',() => {
    cy.get('[data-test = "password"]')
})
Cypress.Commands.add('loginButton', () => {
    cy.get('[data-test="login-submit"]')
})