    describe("login test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.visit(data.loginUrl)
        cy.title().should('eq', data.loginTitle)
    })

    it("1- valid input", function(){                                            
      cy.email().type(data.registerEmail)
      cy.password().type(data.password)
      cy.loginButton().click()
    })

    it("2- invalid input (wrong password)", function(){                                            
    cy.email().type(data.registerEmail)
    cy.password().type('wrongpassword')
    cy.loginButton().click()
})

it("3- invalid input (empty fields)", function(){                                            
    cy.loginButton().click()
})


})