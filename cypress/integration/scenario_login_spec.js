//Login test scenario
describe('instagram login', () => {
    //Visit page from url base with /accounts/login/ beforeEach() hooks from mocha
    beforeEach(() => {
        cy.visit('/accounts/login/')
    })

    //Test case of valid login
    it('valid login', () => {
        //Find an visible element on 'main' that containing 'Log in' text, using should() from chai
        cy.get('main')
            .contains('Log in')
            .should('be.visible')
        
        //Find username input element, focus an a DOM element, type "YOUR VALID USERNAME" into element, then make a focused DOM element blur
        cy.get('form._3jvtb>div._t296e:nth-child(1)>div._sjplo>div._ev9xl>input._ph6vk._jdqpn._o716c')
            .focus()
            .type('YOUR_VALID_USERNAME')
            .blur()
        
        //Find password input element, focus an a DOM element, type "YOUR VALID PASSWORD" into element, then make a focused DOM element blur
        cy.get('form._3jvtb>div._t296e:nth-child(2)>div._sjplo>div._ev9xl>input._ph6vk._jdqpn._o716c')
            .focus()
            .type('YOUR_VALID_PASSWORD')
            .blur()
        
        //Find button element that containing 'Log in' text, click it, then is that element not in the DOM after click
        cy.get('button._qv64e._gexxb._4tgw8._njrw0')
            .contains('Log in')
            .click()
            .and('not.exist')
        
        //Find an visible element that containing 'Notifications' text, using should() from chai
        cy.get('div._dzwdj._rga4h')
            .contains('Notifications')
            .should('be.visible')
    })

    //Test case of login button
    it('login button when empty username and password', () => {
        //Find button element that containing 'Log in' text and must be disabled, using should() from chai
        cy.get('button._qv64e._gexxb._4tgw8._jfvwv')
            .contains('Log in')
            .should('be.disabled')
    })

    //Test case of invalid login
    it('invalid username or password', () => {
        //Find an visible element that containing 'Instagram' text, using should() from chai
        cy.get('div._f9sjj')
            .contains('Instagram')
            .should('be.visible')
        
        //Find username input element, focus an a DOM element, type "YOUR INVALID USERNAME" into element, then make a focused DOM element blur
        cy.get('form._3jvtb>div._t296e:nth-child(1)>div._sjplo>div._ev9xl>input._ph6vk._jdqpn._o716c')
            .focus()
            .type('YOUR_INVALID_USERNAME')
            .blur()

        //Find password input element, focus an a DOM element, type "YOUR INVALID PASSWORD" into element, then make a focused DOM element blur
        cy.get('form._3jvtb>div._t296e:nth-child(2)>div._sjplo>div._ev9xl>input._ph6vk._jdqpn._o716c')
            .focus()
            .type('YOUR_INVALID_PASSWORD')
            .blur()
        
        //Find button element that containing 'Log in' text, click it
        cy.get('button._qv64e._gexxb._4tgw8._njrw0')
            .contains('Log in')
            .click()

        ////Find an visible element that containing 'Please' text, using should() from chai
        cy.get('div._e9kim')
            .contains('Please')
            .should('be.visible')
    })

    //Test case of sign up navigate
    it('navigates to sign up page', () => {
        //Find element that containing 'Sign up' text where should have "/" href attribute, click it, then is that element not in the DOM after click, using should() from chai
        cy.get('p._g9ean>a')
            .contains('Sign up')
            .should('have.attr', 'href', '/')
            .click()
            .and('not.exist')

        //Find an visible element on 'main' that containing 'Sign up' text
        cy.get('main')
            .contains('Sign up')
            .should('be.visible')
    })

    //Test case of forgot password navigate
    it('navigates to forgot password page', () => {
        //Find element that containing 'Forgot password?' text where should have "/accounts/password/reset/" attribute, click it, then is that element not in the DOM after click, using should() from chai
        cy.get('a._pbd5h')
            .contains('Forgot password?')
            .should('have.attr', 'href', '/accounts/password/reset/')
            .click()
            .and('not.exist')
        
        //Find an visible element on 'main' that containing 'Reset Password' text, using should() from chai
        cy.get('main')
            .contains('Reset Password')
            .should('be.visible')
    })

    //Test case of get app from apple store navigate
    it('navigates to get app page from apple store', () => {
        //Find the element that has href attribute from itunes.apple.com, then click it, using should() from chai
        cy.get('a._o7vmf:nth-child(1)')
            .should('have.attr', 'href', 'https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8')
            .click()
    })

    //Test case of gett app from google play navigate
    it('navigates to get app page from google play', () => {
        //Find the element that has href attribute from play.google.com, then click it, using should() from chai
        cy.get('a._o7vmf:nth-child(2)')
            .should('have.attr', 'href', 'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge')
            .click()
    })
})