it('Click Forgot Password', () => {
  cy.visit('https://app.equifax-broker-stg.transformd.com/#/')
  const input_email = "#login-form-email"
  const input_password= "#login-form-password"
  const show_password_icon = 'i[title="Show Password"]'
  const login_button = 'button[name="login-button"]'
  const forgot_password_link = 'a[href="/site/forgot-password"]'
  const logo = ".header-logo"
  const error_msg = ".section__form-container .control-container+.help-block span"
  const reset_btn = 'button[name="login-button">Reset]'

  cy.get(forgot_password_link).click()
  cy.get('.pull-left > .btn').click()
})