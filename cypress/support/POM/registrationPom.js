class RegistrationPom {
    navigateToRegistrationPage() {
        cy.visit(data.registerURL)
        cy.title().should('eq', data.registerTitle)
    }
    fillPersonalInfo(firstName, lastName, dob) {
        cy.firstName().type(firstName)
        cy.lastName().type(lastName)
        cy.dob().type(dob)
    }
    fillAddressInfo(street, city, postalCode, state, country) {
        cy.street().type(street)
        cy.city().type(city)
        cy.postalCode().type(postalCode)
        cy.userState().type(state)
        cy.country().select(country)
    }
    fillContactInfo(phone, email, password) {
        cy.phone().type(phone)
        cy.registerEmail().type(email)
        cy.password().type(password)
    }
    submitRegistrationForm() {
        cy.registerButton().click()
    }
}

export default RegistrationPom
