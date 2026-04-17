describe("Contact us", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.visit(data.contactusURL)
        cy.title().should('eq', data.contactTitle)
    })
    it("1- valid inputs", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.email().type(data.email)
        cy.subjectDrop().select(data.subject)
        cy.message().type(data.message)
        cy.sendButton().click()
    })

    it("2- invalid inputs (Typing all except first name)", function () {
        cy.lastName().type(data.lastName)
        cy.email().type(data.email)
        cy.subjectDrop().select(data.subject)
        cy.message().type(data.message)
        cy.sendButton().click()
    })

    it("3- invalid inputs (Typing all except last name)", function () {
        cy.firstName().type(data.firstName)
        cy.email().type(data.email)
        cy.subjectDrop().select(data.subject)
        cy.message().type(data.message)
        cy.sendButton().click()
    })

    it("4- invalid inputs (Typing all except email name)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.subjectDrop().select(data.subject)
        cy.message().type(data.message)
        cy.sendButton().click()
    })

    it("5- invalid inputs (Typing all except subject name)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.email().type(data.email)
        cy.message().type(data.message)
        cy.sendButton().click()
    })

    it("6- invalid inputs (Typing all except message)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.email().type(data.email)
        cy.subjectDrop().select(data.subject)
        cy.sendButton().click()
    })

    it("7- invalid inputs (typing none)", function () {
        cy.sendButton().click()
    })

    it("8- invalid inputs (typing less than requried 50 char)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.email().type(data.email)
        cy.subjectDrop().select(data.subject)
        cy.message1().type(data.message1)
        cy.sendButton().click()
    })

    it("9- invalid input (message more than 200 words)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.email().type(data.email)
        cy.subjectDrop().select(data.subject)
        cy.message().type(data.longMessage)
        cy.sendButton().click()
    })
})
