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
      cy.get(input_password).type("xva7MKT2neh_php6cpz")
      cy.get(show_password_icon).click()
      /* asserts input to have attribute "type=text */
      cy.get(input_password).should("have.attr","type","text") 
      cy.get(hide_password_icon).click()
      /* asserts input to have attribute "type=text */
      cy.get(input_password).should("have.attr","type","password") 
      cy.get(login_button).click()
      cy.wait(5000)
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
        cy.get(input_password).type("wrongpassword")
        cy.get(login_button).click()
        cy.get(error_msg).should('contain', 'Incorrect email/username or password')
      })

      it('Unsuccessful login_Blank email_Valid password', () => {
        cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
        const input_email = "#login-form-email"
        const input_password= "#login-form-password"
        const show_password_icon = 'i[title="Show Password"]'
        const login_button = 'button[name="login-button"]'
        const forgot_password_link = 'a[href="/site/forgot-password"]'
        const logo = ".header-logo"
        const error_msg = ".section__form-container .control-container+.help-block span"

        
        cy.get(input_password).type("xva7MKT2neh_php6cpz")
        cy.get(login_button).click()
        cy.get('.type--text > .help-block > span').should('be.visible')   
        cy.get('.type--text > .help-block > span').should('contain','Email or Username cannot be blank')   

       })

      it('Unsuccessful login_Blank password_Valid email', () => {
        cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
        const input_email = "#login-form-email"
        const input_password= "#login-form-password"
        const show_password_icon = 'i[title="Show Password"]'
        const login_button = 'button[name="login-button"]'
        const forgot_password_link = 'a[href="/site/forgot-password"]'
        const logo = ".header-logo"
        const error_msg = ".section__form-container .control-container+.help-block span"

        
        cy.get(input_email).type("john.gutierrez@transformd.com")
        cy.get(login_button).click()
        cy.get('.type--password > .help-block > span').should('be.visible')   
        cy.get('.type--password > .help-block > span').should('contain','Password cannot be blank')     
  
     })

     it('Unsuccessful login_Blank password and email', () => {
        cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
        const input_email = "#login-form-email"
        const input_password= "#login-form-password"
        const show_password_icon = 'i[title="Show Password"]'
        const login_button = 'button[name="login-button"]'
        const forgot_password_link = 'a[href="/site/forgot-password"]'
        const logo = ".header-logo"
        const error_msg = ".section__form-container .control-container+.help-block span"

        cy.get(login_button).click()
        cy.get('.type--password > .help-block > span').should('be.visible')   
        cy.get('.type--password > .help-block > span').should('contain','Password cannot be blank')     
        cy.get('.type--text > .help-block > span').should('be.visible')   
        cy.get('.type--text > .help-block > span').should('contain','Email or Username cannot be blank')   
     })


     it('Click Forgot Password', () => {
      cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
      const input_email = "#login-form-email"
      const input_password= "#login-form-password"
      const show_password_icon = 'i[title="Show Password"]'
      const login_button = 'button[name="login-button"]'
      const forgot_password_link = 'a[href="/site/forgot-password"]'
      const logo = ".header-logo"
      const error_msg = ".section__form-container .control-container+.help-block span"

      cy.get(forgot_password_link).click()
      cy.get('.page-sub-title').should('be.visible')
      cy.get('.page-sub-title').should('contain','Enter your e-mail below and we will send you reset instructions.')

   })

     it('Successful reset password', () => {
      cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
      const input_email = "#login-form-email"
      const input_password= "#login-form-password"
      const show_password_icon = 'i[title="Show Password"]'
      const login_button = 'button[name="login-button"]'
      const forgot_password_link = 'a[href="/site/forgot-password"]'
      const logo = ".header-logo"
      const error_msg = ".section__form-container .control-container+.help-block span"
      const email_frgtpass = "#passwordresetrequestform-email"

      cy.get(forgot_password_link).click()
      cy.url().should('contain', '/forgot-password')
      cy.get(email_frgtpass).type('john.gutierrez@transformd.com')
      cy.get('.pull-left > .btn').click()
      cy.get('#w0-success').should('be.visible')
      cy.get('#w0-success').should('contain','A reset e-mail has been sent.')

   })

   it('Unsuccessful Forgot Password_ Email field is empty', () => {
    cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
    const input_email = "#login-form-email"
    const input_password= "#login-form-password"
    const show_password_icon = 'i[title="Show Password"]'
    const login_button = 'button[name="login-button"]'
    const forgot_password_link = 'a[href="/site/forgot-password"]'
    const logo = ".header-logo"
    const error_msg = ".section__form-container .control-container+.help-block span"
    
    cy.get(forgot_password_link).click()
    cy.get('.pull-left > .btn').click()
    cy.get('#w0-success').should('be.visible')
    cy.get('#w0-success').should('not.contain','A reset e-mail has been sent')
  })

  it('Unsuccessful Forgot Password_ Invalid email', () => {
    cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
    const input_email = "#login-form-email"
    const input_password= "#login-form-password"
    const show_password_icon = 'i[title="Show Password"]'
    const login_button = 'button[name="login-button"]'
    const forgot_password_link = 'a[href="/site/forgot-password"]'
    const logo = ".header-logo"
    const error_msg = ".section__form-container .control-container+.help-block span"
    const email_frgtpass = "#passwordresetrequestform-email"
    
    cy.get(forgot_password_link).click()
    cy.get(email_frgtpass).type('aisdasidh')
    cy.get('.pull-left > .btn').click()
    cy.get('#w0-success').should('be.visible')
    cy.get('#w0-success').should('not.contain','A reset e-mail has been sent.')
  })

  })