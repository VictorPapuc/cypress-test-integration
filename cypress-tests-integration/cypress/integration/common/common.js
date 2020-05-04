import{defineStep} from 'cypress-cucumber-preprocessor/steps'
import LoginPageBank from '../cucumber-tests/login_page/loginBankPageObjects'

const URL = 'https://george.csas.cz/?login_hint=7777777777'
const InvalidURL = 'https://bezpecnost.csas.cz/flfe/?client_id=georgeclient_cz'

// cy.fixture('url').then(url =>{
//     const URL = url.URL
//     const InvalidURL=url.InvalidURL

// })


defineStep('The user access George Application Login page',()=>{
    
    cy.login(URL)
    cy.url().should('include', 'george')
    LoginPageBank.verifyLoginPage()

})

defineStep('The user access George Login page', ()=>{
    //The URL is Valid but we use it for wrong login.
    cy.login(InvalidURL)
    LoginPageBank.verifyLoginPage()

})

defineStep('The user switches login page language to {string}', language =>{
    LoginPageBank.switchLoginPageLanguage(language)
    
})

defineStep('Access Page with correct credentials',()=>{
    LoginPageBank.clickLogInButton()
    LoginPageBank.verifyLoginSuccesfull()

})
