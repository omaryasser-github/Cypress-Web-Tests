class LoginPom {
    /**
     * Navigate to login page and verify page loaded
     */
    navigateToLoginPage() {
        cy.visit(data.loginUrl)
        cy.title().should('eq', data.loginTitle)
    }

    fillLoginForm(email, password) {
        cy.email().type(email)
        cy.password().type(password)
    }

    submitLoginForm() {
        cy.loginButton().click()
    }
}

export default LoginPom
