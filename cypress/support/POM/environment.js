class Environment {
    dev() {
        cy.visit("https://practicesoftwaretesting.com/")
        cy.title().should('include', 'Practice Software Testing')
    }
}

export default Environment