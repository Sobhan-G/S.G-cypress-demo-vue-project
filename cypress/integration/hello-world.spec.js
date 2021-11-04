/// <reference types="cypress" />


// test suite

describe('test suit example', function(){

    it('testcase-1', function(){

      cy.visit('http://127.0.0.1:5500/acme/index.html')
      cy.contains('Affordable Professional Web Design')
      cy.get(':nth-child(2) > a').click()  
      cy.contains('About Us')
      cy.get(':nth-child(3) > a').click()     
      cy.contains('Services') 
      cy.get('form > input').type('mashti10@hotmail.com')
      cy.get('.container > form > .button_1').click()


    })

})