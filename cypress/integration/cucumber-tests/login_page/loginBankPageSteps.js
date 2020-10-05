import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPageBank from './loginBankPageObjects'

When('The user switches to {string} language', language =>{
    LoginPageBank.switchLoginPageLanguage(language)
})

When('User presses log in button', ()=>{
    LoginPageBank.clickLogInButton()
})

When('The user types the following nickname: {string}', nickname =>{
    LoginPageBank.typeNickname(nickname)
})

When('User presses continue in button', ()=>{
    LoginPageBank.clickContinueButton()
})

When('The user enters number of days: {int} and chooses {string} month', (daysNumber , months) =>{
    LoginPageBank.inputDays(daysNumber, months)
})

When('Check box for Remember for this device', ()=>{  
    LoginPageBank.checkBox() 
})

When('The user blocks the user', ()=>{
    LoginPageBank.blockUser()
})

Then('Error message {string} should appear', errorMessage =>{
   
    //map existing error messages
    let invalidCredentialsErrorMessage =' Combination of security information is not correct. '
    let invalidDateInput ='The given date of birth is not valid. Please try again in the format for example 7 December.'
    let nicknameShortErrorMessage = ' Attention! Field "Client number / Username" must have the minimum of 6 characters. '

    if(errorMessage === nicknameShortErrorMessage){
        LoginPageBank.verifyErrorMessageForBadNicknameInput(errorMessage)
    }else if (errorMessage === invalidCredentialsErrorMessage){
        LoginPageBank.verifyErrorMessageBadCredentials(errorMessage)
    }else if(errorMessage ==invalidDateInput){
        LoginPageBank.verifyErrorMessageNotValidDateOfBirth(errorMessage)
    }

})

Then('The user should see Account Name: {string}', name =>{

    LoginPageBank.verifyLoginSuccesfull(name)

})
