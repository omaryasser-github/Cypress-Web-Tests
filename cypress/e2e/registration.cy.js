    describe("Registration test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.visit(data.registerURL)
        cy.title().should('eq', data.registerTitle)
    })

    it("1- valid registration", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.dob().type(data.dob)
        cy.street().type(data.street)
        cy.city().type(data.city)
        cy.postalCode().type(data.postalCode)
        cy.userState().type(data.state)
        cy.country().select(data.country)
        cy.phone().type(data.phone)
        cy.registerEmail().type(data.NewregisterEmail)
        cy.password().type(data.password)
        cy.registerButton().click()

        cy.url().should('include', '/auth/login')
        cy.title().should('eq', 'Login - Practice Software Testing - Toolshop - v5.0')
    })

    it("2- invalid registration (registration with registred email)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.dob().type(data.dob)
        cy.street().type(data.street)
        cy.city().type(data.city)
        cy.postalCode().type(data.postalCode)
        cy.userState().type(data.state)
        cy.country().select(data.country)
        cy.phone().type(data.phone)
        cy.registerEmail().type(data.registerEmail)
        cy.password().type(data.password)
        cy.registerButton().click()
    })

    it("3- invalid registration (registration with putting number in city)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.dob().type(data.dob)
        cy.street().type(data.street)
        cy.city().type(data.cityInNumbers)
        cy.postalCode().type(data.postalCode)
        cy.userState().type(data.state)
        cy.country().select(data.country)
        cy.phone().type(data.phone)
        cy.registerEmail().type(data.NewregisterEmail)
        cy.password().type(data.password)
        cy.registerButton().click()
    })

    it("4- invalid registration (writing DOF in digits)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.dob().type(data.dofInLetters)
        cy.street().type(data.street)
        cy.city().type(data.city)
        cy.postalCode().type(data.postalCode)
        cy.userState().type(data.state)
        cy.country().select(data.country)
        cy.phone().type(data.phone)
        cy.registerEmail().type(data.NewregisterEmail)
        cy.password().type(data.password)
        cy.registerButton().click()
    })

    it("5- invalid registration (writing state in digits)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.dob().type(data.dob)
        cy.street().type(data.street)
        cy.city().type(data.city)
        cy.postalCode().type(data.postalCode)
        cy.userState().type(data.stateInNumbers)
        cy.country().select(data.country)
        cy.phone().type(data.phone)
        cy.registerEmail().type(data.registerEmail)
        cy.password().type(data.password)
        cy.registerButton().click()
    })

    it("6- invalid registration (registration with weak password)", function () {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
        cy.dob().type(data.dob)
        cy.street().type(data.street)
        cy.city().type(data.city)
        cy.postalCode().type(data.postalCode)
        cy.userState().type(data.state)
        cy.country().select(data.country)
        cy.phone().type(data.phone)
        cy.registerEmail().type(data.NewregisterEmail)
        cy.password().type(data.weakPass)
        cy.registerButton().click()
    })

    it("7- invalid registration (pressing button without filling fields)", function () {
        cy.registerButton().click()
    })

    it("8- invalid registration (future date of birth)", function () {
    cy.firstName().type(data.firstName)
    cy.lastName().type(data.lastName)
    cy.dob().type(data.futureDob)
    cy.street().type(data.street)
    cy.city().type(data.city)
    cy.postalCode().type(data.postalCode)
    cy.userState().type(data.state)
    cy.country().select(data.country)
    cy.phone().type(data.phone)
    cy.registerEmail().type(`test_${Date.now()}@gmail.com`)
    cy.password().type(data.password)
    cy.registerButton().click()
})



})