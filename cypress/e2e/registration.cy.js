import RegistrationPom from "../support/pom/registrationPom"

const registration = new RegistrationPom()

describe("Registration test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        registration.navigateToRegistrationPage()
    })

    it("1- valid registration", function () {
        registration.fillPersonalInfo(data.firstName, data.lastName, data.dob)
        registration.fillAddressInfo(data.street, data.city, data.postalCode, data.state, data.country)
        registration.fillContactInfo(data.phone, data.NewregisterEmail, data.password)
        registration.submitRegistrationForm()

        cy.url().should('include', '/auth/login')
        cy.title().should('eq', 'Login - Practice Software Testing - Toolshop - v5.0')
    })

    it("2- invalid registration (registration with registred email)", function () {
        registration.fillPersonalInfo(data.firstName, data.lastName, data.dob)
        registration.fillAddressInfo(data.street, data.city, data.postalCode, data.state, data.country)
        registration.fillContactInfo(data.phone, data.registerEmail, data.password)
        registration.submitRegistrationForm()
    })

    it("3- invalid registration (registration with putting number in city)", function () {
        registration.fillPersonalInfo(data.firstName, data.lastName, data.dob)
        registration.fillAddressInfo(data.street, data.cityInNumbers, data.postalCode, data.state, data.country)
        registration.fillContactInfo(data.phone, data.NewregisterEmail, data.password)
        registration.submitRegistrationForm()
    })

    it("4- invalid registration (writing DOF in digits)", function () {
        registration.fillPersonalInfo(data.firstName, data.lastName, data.dofInLetters)
        registration.fillAddressInfo(data.street, data.city, data.postalCode, data.state, data.country)
        registration.fillContactInfo(data.phone, data.NewregisterEmail, data.password)
        registration.submitRegistrationForm()
    })

    it("5- invalid registration (writing state in digits)", function () {
        registration.fillPersonalInfo(data.firstName, data.lastName, data.dob)
        registration.fillAddressInfo(data.street, data.city, data.postalCode, data.stateInNumbers, data.country)
        registration.fillContactInfo(data.phone, data.registerEmail, data.password)
        registration.submitRegistrationForm()
    })

    it("6- invalid registration (registration with weak password)", function () {
        registration.fillPersonalInfo(data.firstName, data.lastName, data.dob)
        registration.fillAddressInfo(data.street, data.city, data.postalCode, data.state, data.country)
        registration.fillContactInfo(data.phone, data.NewregisterEmail, data.weakPass)
        registration.submitRegistrationForm()
    })

    it("7- invalid registration (pressing button without filling fields)", function () {
        registration.submitRegistrationForm()
    })

    it("8- invalid registration (future date of birth)", function () {
        registration.fillPersonalInfo(data.firstName, data.lastName, data.futureDob)
        registration.fillAddressInfo(data.street, data.city, data.postalCode, data.state, data.country)
        registration.fillContactInfo(data.phone, `test_${Date.now()}@gmail.com`, data.password)
        registration.submitRegistrationForm()
    })



})