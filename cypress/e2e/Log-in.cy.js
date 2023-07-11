describe('Log-in', () => {
    it('Successful login_Valid Credentials', () => {
      cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
      const input_email = "#login-form-email"
      const input_password= "#login-form-password"
      const show_password_icon = 'i[title="Show Password"]'
      const hide_password_icon = 'i[title="Hide Password"]'
      const login_button = 'button[name="login-button"]'
      const forgot_password_link = 'a[href="/site/forgot-password"]'
      const logo = ".header-logo"
      
      cy.get(input_email).type("john.gutierrez@transformd.com")  
      cy.wait(2000)
      cy.get(input_password).type("xva7MKT2neh_php6cpz")
      cy.get(show_password_icon).click()
      /* asserts input to have attribute "type=text */
      cy.get(input_password).should("have.attr","type","text") 
      cy.get(hide_password_icon).click()
      /* asserts input to have attribute "type=text */
      cy.get(input_password).should("have.attr","type","password") 
      cy.wait(2000)
      cy.get(login_button).click()
      cy.get(logo).should("be.visible") 
    })

    it('Unsuccessful login_Invalid Credentials for both fields', () => {
        cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
        const input_email = "#login-form-email"
        const input_password= "#login-form-password"
        const show_password_icon = 'i[title="Show Password"]'
        const login_button = 'button[name="login-button"]'
        const forgot_password_link = 'a[href="/site/forgot-password"]'
        const logo = ".header-logo"
        const error_msg = ".section__form-container .control-container+.help-block span"

        
        cy.get(input_email).type("test")
        cy.wait(2000)
        cy.get(input_password).type("wrongpassword")
        cy.get(login_button).click()
        cy.get(error_msg).should('contain', 'Incorrect email/username or password')
      })

      it('Unsuccessful login_Invalid email', () => {
        cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
        const input_email = "#login-form-email"
        const input_password= "#login-form-password"
        const show_password_icon = 'i[title="Show Password"]'
        const login_button = 'button[name="login-button"]'
        const forgot_password_link = 'a[href="/site/forgot-password"]'
        const logo = ".header-logo"
        const error_msg = ".section__form-container .control-container+.help-block span"

        
        cy.get(input_email).type("test")
        cy.wait(2000)
        cy.get(input_password).type("xva7MKT2neh_php6cpz")
        cy.get(login_button).click()
        cy.get(error_msg).should('contain', 'Incorrect email/username or password')
      })

      it('Unsuccessful login_Invalid password', () => {
        cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
        const input_email = "#login-form-email"
        const input_password= "#login-form-password"
        const show_password_icon = 'i[title="Show Password"]'
        const login_button = 'button[name="login-button"]'
        const forgot_password_link = 'a[href="/site/forgot-password"]'
        const logo = ".header-logo"
        const error_msg = ".section__form-container .control-container+.help-block span"

        
        cy.get(input_email).type("john.gutierrez@transformd.com")
        cy.wait(2000)
        cy.get(input_password).type("wrongpassword")
        cy.get(login_button).click()
        cy.get(error_msg).should('contain', 'Incorrect email/username or password')
      })
  })