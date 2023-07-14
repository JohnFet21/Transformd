describe('Log-in', () => {
    const new_assessmnt_btn = '.d-block > .btn'
    const new_assessmnt_heading = '.formatic-heading'
    const new_assessmnt_nextbutton ='.formatic-button'
    const new_assessmnt_fn_mn_ln_mn_dln_la_e = '.formatic-text__input'
    const new_assessmnt_dob_input = 'input[class="formatic-date-picker__date-picker"]'
    const new_assessmnt_dob_picker = 'input[id="647f87c2-e8ba-8c48-2c42-37ccccdca24d"]'
    const new_assessmnt_gender_dropdown = "div[class='formatic-dropdown__select ant-select ant-select-enabled'] div[class='ant-select-selection__placeholder']"
    const new_assessmnt_gender_input = 'input[class="ant-select-search__field"]'
    const new_assessmnt_currentaddress_input = 'input[class="formatic-address-lookup__auto-complete-input ant-select-search__field"]'
    const new_assessmnt_currentaddress_list= ".ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-selected"
    const new_assessmnt_errormsg = 'div[class="formatic-error-message"]'
    const new_assessmnt_sendassessmnt_btn = 'button[class="formatic-button"]'
    const new_assessmnt_add_an_other_btn = 'button[class="formatic-repeatable__add-repeatable-button"]'
    const new_assessmnt_address_enter_manually_btn ='button[class="formatic-address-lookup__button-enter-manually"]'
    const new_assessmnt_address_enter_manually_country_dropdown = '.formatic-manually-input-address__country-container > .formatic-dropdown > .formatic-dropdown__select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder'
    const new_assessmnt_address_enter_manually_country_list_australia= '.ant-select-dropdown-menu-item formatic-dropdown__option'


    it('New assessment_success_open', () => {
    cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
    cy.visit("/")
    cy.get(new_assessmnt_btn).click()
    cy.wait(5000)
    cy.get(new_assessmnt_heading).should('be.visible')
    cy.wait(5000)
    cy.get(new_assessmnt_heading).should('contain', 'Applicant Details')
    
    })

    it('Unable to proceed if required fields not filled', () => {
        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.visit("/");
        cy.get(new_assessmnt_btn).click()
        cy.wait(5000)
        cy.get(new_assessmnt_nextbutton).click()
        cy.wait(5000)
        cy.get(new_assessmnt_errormsg).eq(0).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(1).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(2).should("be.visible").contains("Please enter valid date");
        cy.get(new_assessmnt_errormsg).eq(3).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(4).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(5).should("be.visible").contains("This field is required");
        cy.get(new_assessmnt_errormsg).eq(6).should("be.visible").contains("Please select a valid address")
        cy.get(new_assessmnt_errormsg).eq(7).should("be.visible").contains("This field is required");
    })

    it('Unsuccessful submit assessment if without consent', () => {
        const gender = 'Male'
        const address = '2 AIDAN ST, DEERAGUN QLD 4818'

        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.visit("/");
        cy.get(new_assessmnt_btn).click()
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(0).type("Test");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(1).type("Fet");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(2).type("Fet");
        cy.get(new_assessmnt_dob_input).type('09091978')
        cy.get(new_assessmnt_gender_dropdown).click()
        cy.get(new_assessmnt_gender_input).type(`${gender}{enter}`)
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(3).type("0431295336");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(4).type("2507MI");
        cy.get(new_assessmnt_currentaddress_input).type(address)
        cy.get(new_assessmnt_currentaddress_list).click()
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(5).type("50000");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get(new_assessmnt_sendassessmnt_btn).click()
        cy.get(new_assessmnt_errormsg).should('be.visible').contains("This field is required")
        cy.wait(3000)
        

    })


    it('Maximum of 4 applicants can be added', () => {
        const gender = 'Male'
        const address = '2 AIDAN ST, DEERAGUN QLD 4818'

        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.visit("/");
        cy.get(new_assessmnt_btn).click()
        cy.get(new_assessmnt_add_an_other_btn).last().click()
        cy.get(new_assessmnt_add_an_other_btn).last().click()
        cy.get(new_assessmnt_add_an_other_btn).last().click()
        cy.get(new_assessmnt_add_an_other_btn).last().click()
        cy.get(new_assessmnt_add_an_other_btn).should('not.exist')
        
        //cy.get(new_assessmnt_add_an_other_btn).click({multiple: true})

       
    //it('spam click by 6', () => {
              //for(let n = 0; n < 6; n ++){
               // cy.get('[data-cy=click-up]').click()



    })

    
    it.only('Manual address entry', () => {
        const gender = 'Male'
        const address = '2 AIDAN ST, DEERAGUN QLD 4818'

        cy.login(Cypress.env('user_main'), Cypress.env('user_main_password'))
        cy.visit("/");
        cy.wait(3000)
        cy.get(new_assessmnt_btn).click()
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(0).type("Test");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(1).type("Fet");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(2).type("Fet");
        cy.get(new_assessmnt_dob_input).type('09091978')
        cy.get(new_assessmnt_gender_dropdown).click()
        cy.get(new_assessmnt_gender_input).type(`${gender}{enter}`)
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(3).type("0431295336");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(4).type("2507MI");
        cy.get(new_assessmnt_currentaddress_input).click()
        cy.get(new_assessmnt_address_enter_manually_btn).click()
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(5).type("2 AIDAN ST");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(6).type("DEERAGUN QLD");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(7).type("48186");
        cy.get(new_assessmnt_address_enter_manually_country_dropdown).click()
        cy.get(new_assessmnt_address_enter_manually_country_list_australia).click()
        /*cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(8).type("NSW");
        cy.get(new_assessmnt_fn_mn_ln_mn_dln_la_e).eq(9).type("50000");
        cy.get(new_assessmnt_nextbutton).click()
        cy.get(new_assessmnt_sendassessmnt_btn).click()
        cy.get(new_assessmnt_errormsg).should('be.visible').contains("This field is required")
        cy.wait(3000)*/

    })

})