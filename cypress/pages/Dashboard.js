class Dashboard {


    locators = {
        new_assessmnt_btn : '.d-block > .btn',
        new_assessmnt_heading : '.formatic-heading',
        new_assessmnt_nextbutton : '.formatic-button',
        new_assessmnt_input : '.formatic-text__input',
        new_assessmnt_dob_input : 'input[class="formatic-date-picker__date-picker"]',
        new_assessmnt_gender_dropdown : "div[class='formatic-dropdown__select ant-select ant-select-enabled'] div[class='ant-select-selection__placeholder']",
        new_assessmnt_gender_input : 'input[class="ant-select-search__field"]',
        new_assessmnt_currentaddress_input : 'input[class="formatic-address-lookup__auto-complete-input ant-select-search__field"]',
        new_assessmnt_currentaddress_list : ".ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-selected",
        new_assessmnt_errormsg : 'div[class="formatic-error-message"]',
        new_assessmnt_sendassessmnt_btn : '.formatic-action-bar-root__next-container',
        new_assessmnt_add_an_other_btn : 'button[class="formatic-repeatable__add-repeatable-button"]',
        new_assessmnt_address_enter_manually_btn : 'button[class="formatic-address-lookup__button-enter-manually"]'
    
    }

}


module.exports = new Dashboard();