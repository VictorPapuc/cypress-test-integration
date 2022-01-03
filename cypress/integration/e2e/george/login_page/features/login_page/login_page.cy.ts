import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../page-objects/LoginPage'
import {} from 'cypress'

const invalidCredentialsErrorMessage = ' Combination of security information is not correct. '
const invalidDateInput = 'The given date of birth is not valid. Please try again in the format for example 7 December.'
const nicknameShortErrorMessage = ' Attention! Field "Client number / Username" must have the minimum of 6 characters. '

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
	if (errorMessage === nicknameShortErrorMessage) {
		LoginPage.verifyErrorMessageForBadNicknameInput(errorMessage)
	} else if (errorMessage === invalidCredentialsErrorMessage) {
		LoginPage.verifyErrorMessageBadCredentials(errorMessage)
	} else if (errorMessage == invalidDateInput) {
		LoginPage.verifyErrorMessageNotValidDateOfBirth(errorMessage)
	}

})

Then('The user should see Account Name: {string}', (name: string) => {
	LoginPage.verifyLoginSuccessfully(name)

})
Given('The user access George Application Login page', () => {
	Cypress.on('uncaught:exception', () => {
		return false;
	});
	cy.visit('https://george.csas.cz/?login_hint=7777777777')
	cy.url().should('include', 'george')
	cy.get('.box-container > .flex-col').should('be.visible')
	cy.get('.ng-isolate-scope > .font-bold').click();
	cy.contains('Login').click();
	cy.pause();
	// cy.get('#btn.continue').click();
	// cy.get('#btn.continue').click();
	// LoginPage.verifyLoginPage();
})

Given('The user switches login page language to {string}', language => {
	LoginPage.switchLoginPageLanguage(language)
})