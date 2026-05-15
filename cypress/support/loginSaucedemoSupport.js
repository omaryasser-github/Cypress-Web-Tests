Cypress.Commands.add('username', () => {
    cy.get('#user-name')
   
})
Cypress.Commands.add('password', () => {
    cy.get('#password')
})
Cypress.Commands.add('loginButton', () => {
    cy.get('#login-button')
})