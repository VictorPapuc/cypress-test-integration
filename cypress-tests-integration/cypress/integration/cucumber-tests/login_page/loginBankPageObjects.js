const LoginPageObjects = Object.freeze({
    languageButton : '.lang-item-label',
    loginButton :'.ladda-label',
    inputNickNameToolBar : '//*[@id="input.nickname"]',
    inputDays: '//*[@id="input.apin_day"]',
    checkBox: '[type="checkbox"]',
    monthList: '//*[@id="input.apin_month"]'

}) 

const ErrorMessagesLoginPage =Object.freeze({
    MessageWrongNickNameLengthNumber:'//*[@id="widgetsDiv"]/nickname/app-widget/div/div/div/div/ng-transclude/ng-container/app-bubble-error/p/span',
    errorMessageBadCredentials: '//*[@id="widgetsDiv"]/div/div/div[1]/div',
    errorMessageIncorrectDateInput: '//*[@id="widgetsDiv"]/apin/app-widget/div/div/div/div/ng-transclude/ng-container/app-bubble-error/p'
})

const accountName = '#accountName'

class LoginPageBank{

    static verifyLoginPage(){

        cy.wait(5000)
        cy.get(LoginPageObjects.languageButton).should('be.visible')
        cy.get(LoginPageObjects.loginButton).should('be.visible')
       
    }

    static clickLogInButton(){
            
       cy.get(LoginPageObjects.loginButton).contains('Login').click()
    }

    static clickContinueButton(){
           cy.get(LoginPageObjects.loginButton).contains('Continue').click()
       }

    static switchLoginPageLanguage(language){
        
        cy.get(LoginPageObjects.languageButton).should('be.visible')
        cy.get(LoginPageObjects.languageButton).its('length').should('eq', 2)
        cy.get(LoginPageObjects.languageButton).contains(language).click()
        cy.wait(2000)
    
    }

    static typeNickname(nickname){
        cy.xpath(LoginPageObjects.inputNickNameToolBar).should('be.visible')
        cy.xpath(LoginPageObjects.inputNickNameToolBar).type(nickname).wait(2000)    
    }

    static verifyErrorMessageForBadNicknameInput(errorMessage){
     
     cy.xpath(ErrorMessagesLoginPage.errorMessageWrongNickNameLengthNumber)
            .should('be.visible')
             cy.wait(2000)
     cy.xpath(ErrorMessagesLoginPage.errorMessageWrongNickNameLengthNumber)
            .contains(errorMessage)     
    }

    static inputDays(daysNumber, months){

        cy.xpath(LoginPageObjects.inputDays).should('be.visible')
        cy.xpath(LoginPageObjects.inputDays).type(daysNumber).wait(1000)

        cy.xpath(LoginPageObjects.monthList).should('be.visible')
        cy.xpath(LoginPageObjects.monthList).select(months)

   }

    static verifyErrorMessageBadCredentials(errorMessage){
    
        cy.xpath(ErrorMessagesLoginPage.errorMessageBadCredentials)
              .should('be.visible')
        cy.xpath(ErrorMessagesLoginPage.errorMessageBadCredentials)
            .contains(errorMessage) 
    }

    static verifyErrorMessageNotValidDateOfBirth(errorMessage){

        cy.xpath(ErrorMessagesLoginPage.errorMessageIncorrectDateInput)
        .should('be.visible')
        cy.xpath(ErrorMessagesLoginPage.errorMessageIncorrectDateInput)
        .contains(errorMessage)

    }


    static checkBox(){
        cy.get(LoginPageObjects.checkBox).should('exist')
        cy.get(LoginPageObjects.checkBox).click({force :true});
    }

    static verifyLoginSuccesfull(name){

        cy.wait(12000)
        cy.get(accountName).should('be.visible')
        cy.get(accountName).contains('Jiří Spokojený')
    }

}
export default LoginPageBank