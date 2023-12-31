describe('Log-in', () => {
  const input_email = 'input[name="LoginForm[email]"]'
  const input_password = 'input[name="LoginForm[password]"]'
  const show_password_icon = 'i[title="Show Password"]'
  const hide_password_icon = 'i[title="Hide Password"]'
  const login_button = 'button[name="login-button"]'
  const forgot_password_link = 'a[href="/site/forgot-password"]'
  const logo = ".header-logo"
  const error_msg = ".section__form-container .control-container+.help-block span"
  const email_frgtpass = 'input[name="PasswordResetRequestForm[email]"]'
  const logout_button = '.equifax__layout-header a[href="/site/logout"]'
  const email_user_error_msg = '.type--text > .help-block > span'
  const password_error_msg = '.type--password > .help-block > span'
  const resetpwpage_subtitle = '.page-sub-title'
  const new_assessmnt_btn = '.d-block > .btn'

  it.only('Successful login_Valid Credentials', () => {
    
    cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
    cy.visit("/")
    cy.get(logo).should("be.visible")
  })

  it('Successful Logout', () => {
    cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
    cy.visit("/")
    cy.get(logout_button).should("be.visible")
    cy.intercept('POST', '/site/logout').as('postLogout')
    cy.get(logout_button).click()
    cy.wait('@postLogout')
  })


  it('Unsuccessful login_Invalid Credentials for both fields', () => {
    cy.visit("/login")

    cy.get(input_email).type("test")
    cy.get(input_password).type("wrongpassword")
    cy.get(login_button).click()
    cy.get(error_msg).should('contain', 'Incorrect email/username or password')
  })

  it('Unsuccessful login_Invalid email', () => {
    cy.visit("/login")
    cy.get(input_email).type("test")
    cy.get(input_password).type(Cypress.env('user_main_password'))
    cy.get(login_button).click()
    cy.get(error_msg).should('contain', 'Incorrect email/username or password')
  })

  it('Unsuccessful login_Invalid password', () => {
    cy.visit("/login")
    cy.get(input_email).type(Cypress.env('user_main'))
    cy.get(input_password).type("wrongpassword")
    cy.get(login_button).click()
    cy.get(error_msg).should('contain', 'Incorrect email/username or password')
  })

  it('Unsuccessful login_Blank email_Valid password', () => {
    cy.visit("/login")
    cy.get(input_email).clear()
    cy.get(input_password).type(Cypress.env('user_main_password'))
    cy.get(login_button).click()
    cy.get(email_user_error_msg).should('be.visible')
    cy.get(email_user_error_msg).should('contain', 'Email or Username cannot be blank')

  })

  it('Unsuccessful login_Blank password_Valid email', () => {
    cy.visit("/login")
    cy.get(input_email).type(Cypress.env('user_main'))
    cy.get(login_button).click()
    cy.get(password_error_msg).should('be.visible')
    cy.get(password_error_msg).should('contain', 'Password cannot be blank')

  })

  it('Unsuccessful login_Blank password and email', () => {
    cy.visit("/login")
    cy.get(login_button).click()
    cy.get(password_error_msg).should('be.visible')
    cy.get(password_error_msg).should('contain', 'Password cannot be blank')
    cy.get(email_user_error_msg).should('be.visible')
    cy.get(email_user_error_msg).should('contain', 'Email or Username cannot be blank')
  })


  it('Click Forgot Password', () => {
    cy.visit("/login")
    cy.intercept('GET', '/site/forgot-password').as('getForgerPassword')
    cy.get(forgot_password_link).click()
    cy.wait('@getForgerPassword')
    cy.get(resetpwpage_subtitle).should('be.visible')
    cy.get(resetpwpage_subtitle).should('contain', 'Enter your e-mail below and we will send you reset instructions.')

  })






})