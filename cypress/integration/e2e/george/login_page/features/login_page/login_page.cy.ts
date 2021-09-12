// import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
// import LoginPage from '../../page-objects/LoginPage'

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../page-objects/LoginPage'


When('The user switches to {string} language', language => {
	LoginPage.switchLoginPageLanguage(language)
})

When('User presses log in button', () => {
	LoginPage.clickLogInButton()
})

When('The user types the following nickname: {string}', nickname => {
	LoginPage.typeNickname(nickname)
})

When('User presses continue in button', () => {
	LoginPage.clickContinueButton()
})

When('The user enters number of days: {int} and chooses {string} month', (daysNumber, months) => {
	LoginPage.inputDays(daysNumber, months)
})

When('Check box for Remember for this device', () => {
	LoginPage.checkBox()
})

When('The user blocks the user', () => {
	// LoginPageBank.blockUser()
})

Then('Error message {string} should appear', errorMessage => {

	//map existing error messages
	let invalidCredentialsErrorMessage = ' Combination of security information is not correct. '
	let invalidDateInput = 'The given date of birth is not valid. Please try again in the format for example 7 December.'
	let nicknameShortErrorMessage = ' Attention! Field "Client number / Username" must have the minimum of 6 characters. '

	if (errorMessage === nicknameShortErrorMessage) {
		LoginPage.verifyErrorMessageForBadNicknameInput(errorMessage)
	} else if (errorMessage === invalidCredentialsErrorMessage) {
		LoginPage.verifyErrorMessageBadCredentials(errorMessage)
	} else if (errorMessage == invalidDateInput) {
		LoginPage.verifyErrorMessageNotValidDateOfBirth(errorMessage)
	}

})

Then('The user should see Account Name: {string}', (name: string) => {

	// @ts-ignore
	LoginPage.verifyLoginSuccesfull(name)

})
Given('The user access George Application Login page', () => {

	// // cy.logi(URL)
	// cy.url().should('include', 'george')
	LoginPage.verifyLoginPage()

})

Given('The user access George Login page', () => {
	// cy.login(InvalidURL)
	// @ts-ignore
	cy.visit('http://zero.webappsecurity.com/login.html')

})

Given('The user switches login page language to {string}', language => {
	LoginPage.switchLoginPageLanguage(language)

})