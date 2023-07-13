describe('Forgot Password Tests', () => {
    const input_email = 'input[name="LoginForm[email]"]'
    const input_password = 'input[name="LoginForm[password]"]'
    const show_password_icon = 'i[title="Show Password"]'
    const hide_password_icon = 'i[title="Hide Password"]'
    const login_button = 'button[name="login-button"]'
    const forgot_password_link = 'a[href="/site/forgot-password"]'
    const logo = ".header-logo"
    const error_msg = ".section__form-container .control-container+.help-block span"
    const email_frgtpass = "#passwordresetrequestform-email"




    beforeEach(() => {
        cy.visit('/forgot-password')
    })


    it('Successful reset password', () => {

        cy.forgotPassEnterCreds(Cypress.env('user_main'))
        cy.get('#w0-success').should('be.visible')
        cy.get('#w0-success').should('contain', 'A reset e-mail has been sent.')

    })

    it('Unsuccessful Forgot Password_ Email field is empty', () => {
        cy.get("#passwordresetrequestform-email").clear()
        cy.get('.pull-left > .btn').click()
        cy.get('#w0-success').should('be.visible')
        cy.get('#w0-success').should('not.contain', 'A reset e-mail has been sent')
    })

    it('Unsuccessful Forgot Password_ Invalid email', () => {
        cy.forgotPassEnterCreds('aisdasidh')
        cy.get('#w0-success').should('be.visible')
        cy.get('#w0-success').should('not.contain', 'A reset e-mail has been sent.')
    })

})