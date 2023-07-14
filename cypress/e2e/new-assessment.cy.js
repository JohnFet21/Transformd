describe('New Assessment', () => {
    const new_assessmnt_btn = '.page.page__dashboard .d-block > .btn'
    const new_assessmnt_heading = '.formatic-heading'
    const new_assessmnt_nextbutton = '.formatic-button'
    const new_assessmnt_input = '.formatic-text__input'
    const new_assessmnt_dob_input = 'input[class="formatic-date-picker__date-picker"]'
    const new_assessmnt_gender_dropdown = "div[class='formatic-dropdown__select ant-select ant-select-enabled'] div[class='ant-select-selection__placeholder']"
    const new_assessmnt_gender_input = 'input[class="ant-select-search__field"]'
    const new_assessmnt_currentaddress_input = 'input[class="formatic-address-lookup__auto-complete-input ant-select-search__field"]'
    const new_assessmnt_currentaddress_list = ".ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-selected"
    const new_assessmnt_errormsg = 'div[class="formatic-error-message"]'
    const new_assessmnt_sendassessmnt_btn = '.formatic-action-bar-root__next-container'
    const new_assessmnt_add_an_other_btn = 'button[class="formatic-repeatable__add-repeatable-button"]'
    const new_assessmnt_address_enter_manually_btn = 'button[class="formatic-address-lookup__button-enter-manually"]'
    
    it('Should open a new assessment', () => {
        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.visit("/")
        cy.get(new_assessmnt_btn).click()
        cy.get(new_assessmnt_heading).should('be.visible')
        cy.get(new_assessmnt_heading).should('contain', 'Applicant Details')

    })

    it.only('Should be unable to proceed if required fields are not filled', () => {
        const gender = 'Male'
        const address = '2 AIDAN ST, DEERAGUN QLD 4818'

        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.visit("/");
        cy.get(new_assessmnt_btn).click()
        cy.checkLoading()
        cy.get('.formatic-action-bar-root__next-container').find('button').click()
        cy.checkLoading()
        cy.get(new_assessmnt_errormsg).eq(0).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(1).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(2).should("be.visible").contains("Please enter valid date");
        cy.get(new_assessmnt_errormsg).eq(3).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(4).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(5).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(6).should("be.visible").contains("Please select a valid address")
        cy.get(new_assessmnt_errormsg).eq(7).should("be.visible").contains("This field is required");


        cy.get('[data-tag="ApplicantFirstName"]').find('input').type("Test");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('[data-tag="ApplicantFirstName"]').find('div[class="formatic-error-message"]').should('not.exist')

        cy.get('[data-tag="ApplicantLastName"]').find('input').type("Fet");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('[data-tag="ApplicantLastName"]').find('div[class="formatic-error-message"]').should('not.exist')

        cy.get('[data-tag="ApplicantDateOfBirth"]').find('input').type('09091978')
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('[data-tag="ApplicantDateOfBirth"]').find('div[class="formatic-error-message"]').should('not.exist')

        cy.get(new_assessmnt_gender_dropdown).click()
        cy.get('[data-tag="ApplicantGender"]').type(`${gender}{enter}`)
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('[data-tag="ApplicantGender"]').find('div[class="formatic-error-message"]').should('not.exist')

        cy.get(new_assessmnt_dob_input).eq(3).type("0431295336");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('[data-tag="ApplicantMobileNumber"]').find('div[class="formatic-error-message"]').should('not.exist')

        cy.get(new_assessmnt_dob_input).eq(4).type("2507MI");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('[data-tag="ApplicantDriversLicenceNumber"]').find('div[class="formatic-error-message"]').should('not.exist')

        cy.get(new_assessmnt_currentaddress_input).type(address)
        cy.get(new_assessmnt_currentaddress_list).click()
        // cy.get(new_assessmnt_dob_input).eq(6).type("DEERAGUN QLD");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('[data-tag="ApplicantCurrentAddress"]').find('div[class="formatic-error-message"]').should('not.exist')

        cy.get(new_assessmnt_dob_input).eq(5).type("50000");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('[data-tag="loanAmount"]').find('div[class="formatic-error-message"]').should('not.exist')


    })

    it('Should Unsuccessfully submit assessment if without consent', () => {
        const gender = 'Male'
        const address = '2 AIDAN ST, DEERAGUN QLD 4818'

        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.visit("/");
        cy.get(new_assessmnt_btn).click()
        cy.get('[data-tag="ApplicantFirstName"]').find('input').type("Test");
        cy.get(new_assessmnt_input).eq(1).type("Fet");
        cy.get('[data-tag="ApplicantLastName"]').find('input').type("Fet");
        cy.get(new_assessmnt_dob_input).type('09091978')
        cy.get(new_assessmnt_gender_dropdown).click()
        cy.get(new_assessmnt_gender_input).type(`${gender}{enter}`)
        cy.get(new_assessmnt_input).eq(3).type("0431295336");
        cy.get(new_assessmnt_input).eq(4).type("2507MI");
        cy.get(new_assessmnt_currentaddress_input).type(address)
        cy.get(new_assessmnt_currentaddress_list).click()
        cy.get(new_assessmnt_input).eq(5).type("50000");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get('.formatic-action-bar-root__next-container').find('button').click()
        cy.get(new_assessmnt_errormsg).should('be.visible').contains("This field is required")
        cy.wait(3000)


    })

    

    it('Should only be able to  have a Maximum of 4 applicants ', () => {
        

        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.visit("/");
        cy.get('button').contains('NEW ASSESSMENT').click()
        cy.get(new_assessmnt_add_an_other_btn).last().click()
        cy.get(new_assessmnt_add_an_other_btn).last().click()
        cy.get(new_assessmnt_add_an_other_btn).last().click()
        cy.get(new_assessmnt_add_an_other_btn).last().click()
        cy.get(new_assessmnt_add_an_other_btn).should('not.exist')
    })



    it.only('Manual address entry', () => {
        const gender = 'Male'

        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.intercept('GET', '/v3/users/me').as('getUserWidget')
        cy.visit("/");
        cy.wait('@getUserWidget')
        // cy.wait(50000)
        cy.get('button').contains('NEW ASSESSMENT').click()
        cy.checkLoading()
        cy.get('[data-tag="ApplicantFirstName"]').find('input').type("First");
        cy.get(new_assessmnt_input).eq(1).type("Middle");
        cy.get('[data-tag="ApplicantLastName"]').find('input').type("Last");
       
        cy.get(new_assessmnt_dob_input).type('09091978')
        cy.get(new_assessmnt_gender_dropdown).click()
        cy.get(new_assessmnt_gender_input).type(`${gender}{enter}`)
        cy.get(new_assessmnt_input).eq(3).type("0431295336");
        cy.get(new_assessmnt_input).eq(4).type("2507MI");
        cy.get(new_assessmnt_currentaddress_input).click()
        cy.get(new_assessmnt_address_enter_manually_btn).click()
        cy.get(new_assessmnt_input).eq(5).type("2 AIDAN ST");
        cy.get(new_assessmnt_input).eq(6).type("DEERAGUN QLD");
        cy.get(new_assessmnt_input).eq(7).type("48186");
        
        cy.dropdownSelect('Please select a country', 'Australia')
        cy.dropdownSelect('Please select a state', 'NSW')
        
        cy.get('[data-tag="loanAmount"]').find('input').type('30000')
        cy.get('[data-tag="ApplicantEmployer"]').find('input').type('Some Employer')
        cy.get('.formatic-action-bar-root__next-container').find('button').click()
        cy.get('input[label="I have read and agree to the consent statement above"]').check({force:true})
        cy.get('[data-tag="sendAssessments"]').find('button').click()
        cy.get('.formatic-label__content').contains('Applicant SMS Sent')

        cy.get('.page.page__edit').find('button').contains('Back').click()

        
        cy.get('.gridview .gridview__rows .gridview__row:nth-child(1) .gridview__column:nth-child(7)').should('have.text', 'With Customer');
        cy.get('.gridview .gridview__rows .gridview__row:nth-child(1) .gridview__column:nth-child(1)').should('not.have.text', 'Not Set');
        
    })

})