/// <reference types="cypress" />

import * as indexfuncs from '../pages/indexpage'
// test suite

describe('test page objects', function(){
    beforeEach(() => {

        cy.visit('http://127.0.0.1:5500/acme/index.html')
        indexfuncs.checkTitleofindespage(cy)

    })

    it('navigate trough pages', function(){

        indexfuncs.navigatetoaboutpage()


     

    })

})