/// <reference types="cypress" />

// elements
const IndePageTitle='Acme Web Deisgn | Welcome'
const AboutLink= '(test-id = about)'


// actions / function

function checkTitleofindexpage(cy){

    cy.title().should('eq, Indexpagetitle')

}

function navigatetoaboutpage(cy, contentToConfirm){

    cy.get (AboutLink).click()
    cy.contains (contentToConfirm)

}

module.exports = {


    checkTitleofindexpage,
    navigatetoaboutpage


}
// export