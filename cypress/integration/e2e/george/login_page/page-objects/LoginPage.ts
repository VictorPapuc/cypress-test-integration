import '../selectors/selectors'
import {} from 'cypress'
import { ERROR_MESSAGES_LOGIN, LOGIN_PAGE_ELEMENTS } from '../selectors/selectors'

const accountName = '#accountName'

export default class LoginPage {

	static verifyLoginPage() {

		cy.get(LOGIN_PAGE_ELEMENTS.languageButton)
			.should('be.visible')
			.wait(3000)
            .and('contain', "Česky")
		cy.get(LOGIN_PAGE_ELEMENTS.loginButton).should('be.visible')

	}

	static clickLogInButton() {
		cy.get(LOGIN_PAGE_ELEMENTS.loginButton
		).contains('Login').click()
	}

	static clickContinueButton() {
		cy.get(LOGIN_PAGE_ELEMENTS.loginButton).contains('Continue').click()
	}

	static switchLoginPageLanguage(language) {
		cy.get(LOGIN_PAGE_ELEMENTS.languageButton).should('be.visible')
		cy.get(LOGIN_PAGE_ELEMENTS.languageButton).its('length').should('eq', 2)
		cy.get(LOGIN_PAGE_ELEMENTS.languageButton).contains(language).click()
	}

	static typeNickname(nickname) {
		// 
		cy.get(LOGIN_PAGE_ELEMENTS.inputNickNameToolBar).should('be.visible')
		// 
		cy.get(LOGIN_PAGE_ELEMENTS.inputNickNameToolBar).type(nickname).wait(2000)
	}

	static verifyErrorMessageForBadNicknameInput(errorMessage) {

		cy.get(ERROR_MESSAGES_LOGIN.errorMessageIncorrectDateInput)
			.should('be.visible')
		cy.get(ERROR_MESSAGES_LOGIN.errorMessageBadCredentials)
			.contains(errorMessage)
	}

	static inputDays(daysNumber, months) {
		cy.get(LOGIN_PAGE_ELEMENTS.inputDays).should('be.visible')
		cy.get(LOGIN_PAGE_ELEMENTS.inputDays).type(daysNumber).wait(1000)
		cy.get(LOGIN_PAGE_ELEMENTS.monthList).should('be.visible')
		cy.get(LOGIN_PAGE_ELEMENTS.monthList).select(months)

	}

	static verifyErrorMessageBadCredentials(errorMessage) {
		cy.get(ERROR_MESSAGES_LOGIN.errorMessageBadCredentials)
			.should('be.visible')
		cy.get(ERROR_MESSAGES_LOGIN.errorMessageBadCredentials)
			.contains(errorMessage)
	}

	static verifyErrorMessageNotValidDateOfBirth(errorMessage) {
		cy.get(ERROR_MESSAGES_LOGIN.errorMessageIncorrectDateInput)
			.should('be.visible')
		cy.get(ERROR_MESSAGES_LOGIN.errorMessageIncorrectDateInput)
			.contains(errorMessage)
	}

	static checkBox() {
		cy.get(LOGIN_PAGE_ELEMENTS.checkBox).should('exist')
		cy.get(LOGIN_PAGE_ELEMENTS.checkBox).click({ force: true })
	}

	static verifyLoginSuccessfully(accountName:string) {
		cy.wait(250).get(accountName).should('be.visible')
		cy.url().should('include', 'overview')
	}
}
