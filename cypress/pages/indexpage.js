/// <reference types="cypress" />

// elements
const IndePageTitle='Acme Web Deisgn | Welcome'
const AboutLink= '(test-id = about)'
href="about.html"
href="services.html"


// actions / function

function checkTitleofindespage(cy){

    cy.title().should('eq, IndePageTitle')

}

function navigatetoaboutpage(cy, contentToConfirm){

    cy.get (AboutLink).click()
    cy.contains (contentToConfirm)

}

module.exports = {


    checkTitleofindespage,
    navigatetoaboutpage


}
// export