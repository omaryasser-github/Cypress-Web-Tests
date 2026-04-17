Cypress.Commands.add('firstName', () => {
    cy.get('[data-test="first-name"]')
})
Cypress.Commands.add('lastName', () => {
    cy.get('[data-test="last-name"]')
})
Cypress.Commands.add('email', () => {
    cy.get('[data-test="email"]')
})
Cypress.Commands.add('subjectDrop', () => {
    cy.get('[data-test="subject"]')
})
Cypress.Commands.add('message', () => {
    cy.get('[data-test="message"]')
})
Cypress.Commands.add('message1', () => {
    cy.get('[data-test="message"]')
})
Cypress.Commands.add('sendButton', () => {
    cy.get('[data-test="contact-submit"]')
})