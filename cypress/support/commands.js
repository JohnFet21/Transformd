// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit("/login")
        cy.get("#login-form-email").type(username)
        cy.get("#login-form-password").type(password)
        cy.intercept('POST', '/site/login').as('postLogin')
        cy.get('button[name="login-button"]').click()
        cy.wait('@postLogin')
    },
        {
            cacheAcrossSpecs: true
        }
    )

})

Cypress.Commands.add('forgotPassEnterCreds', (username) => {

    cy.url().should('contain', '/forgot-password')
    cy.get("#passwordresetrequestform-email").type(username)
    cy.get('.pull-left > .btn').click() 

})

Cypress.Commands.add('dropdownSelect', (placeholder, dropdown_item) => {

    cy.get('.ant-select-selection__placeholder').contains(placeholder).click()
    cy.get('.ant-select-dropdown').not('have.class','.ant-select-dropdown-hidden').then($el=> {
        cy.wrap($el).find('li.ant-select-dropdown-menu-item').contains(dropdown_item).click({force:true});
    })

})

Cypress.Commands.add('dropdownSelect', (placeholder, dropdown_item) => {

    cy.get('.ant-select-selection__placeholder').contains(placeholder).click()
    cy.get('.ant-select-dropdown').not('have.class','.ant-select-dropdown-hidden').then($el=> {
        cy.wrap($el).find('li.ant-select-dropdown-menu-item').contains(dropdown_item).click({force:true});
    })

})

Cypress.Commands.add('checkLoading', () => {
    cy.get('.ant-spin-dot.ant-spin-dot-spin').should('not.exist')

})