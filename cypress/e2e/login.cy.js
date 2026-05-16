import LoginPom from "../support/pom/loginPom"

const login = new LoginPom()

describe("login test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        login.navigateToLoginPage()
    })

    it("1- valid input", function () {
        login.fillLoginForm(data.registerEmail, data.password)
        login.submitLoginForm()
    })

    it("2- invalid input (wrong password)", function () {
        login.fillLoginForm(data.registerEmail, 'wrongpassword')
        login.submitLoginForm()
    })

    it("3- invalid input (empty fields)", function () {
        login.submitLoginForm()
    })

})