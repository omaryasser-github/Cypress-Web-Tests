describe("Login Test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
        cy.visit("https://www.saucedemo.com/")
        // cy.title().should('eq', data.loginTitle)
    })

    it("Visit login page", () => {
        cy.username().type(data.userName)
        cy.password().type(data.passwordNew)
        cy.loginButton().click()
    })
})
