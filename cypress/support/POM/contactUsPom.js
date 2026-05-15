class ContactUsPom {
    contactUsNav() {
        cy.visit(data.contactusURL)
        cy.title().should('eq', data.contactTitle)
    }

    personalInfo() {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
    }

    validContactUsInpute() {
        cy.email().type(data.email)
        cy.message().type(data.message)
        cy.subjectDrop().select(data.subject)
    }
}

export default ContactUsPom