const LoginPageObjects = Object.freeze({
	languageButton: '.lang-item-label',
	loginButton: '.ladda-label',
	inputNickNameToolBar: '//*[@id="input.nickname"]',
	inputDays: '//*[@id="input.apin_day"]',
	checkBox: '[type="checkbox"]',
	monthList: '//*[@id="input.apin_month"]',

})

const ErrorMessagesLoginPage = Object.freeze({
	MessageWrongNickNameLengthNumber: '//*[@id="widgetsDiv"]/nickname/app-widget/div/div/div/div/ng-transclude/ng-container/app-bubble-error/p/span',
	errorMessageBadCredentials: '//*[@id="widgetsDiv"]/div/div/div[1]/div',
	errorMessageIncorrectDateInput: '//*[@id="widgetsDiv"]/apin/app-widget/div/div/div/div/ng-transclude/ng-container/app-bubble-error/p',
})

const accountName = '#accountName'

export default class LoginPage {

	static verifyLoginPage() {


		// @ts-ignore
		cy.get(LoginPageObjects.languageButton)
			.should('be.visible')
			.wait(3000)
			.and('contain', 'Česky')
		// @ts-ignore
		cy.get(LoginPageObjects.loginButton).should('be.visible')

	}

	static clickLogInButton() {

		// @ts-ignore
		cy.get(LoginPageObjects.loginButton).contains('Login').click()
	}

	static clickContinueButton() {
		// @ts-ignore
		cy.get(LoginPageObjects.loginButton).contains('Continue').click()
	}

	static switchLoginPageLanguage(language) {

		// @ts-ignore
		cy.get(LoginPageObjects.languageButton).should('be.visible')
		// @ts-ignore
		cy.get(LoginPageObjects.languageButton).its('length').should('eq', 2)
		// @ts-ignore
		cy.get(LoginPageObjects.languageButton).contains(language).click()

	}

	static typeNickname(nickname) {
		// @ts-ignore
		cy.get(LoginPageObjects.inputNickNameToolBar).should('be.visible')
		// @ts-ignore
		cy.get(LoginPageObjects.inputNickNameToolBar).type(nickname).wait(2000)
	}

	static verifyErrorMessageForBadNicknameInput(errorMessage) {

		// cy.get(ErrorMessagesLoginPage.errorMessageWrongNickNameLengthNumber)
		// 	.should('be.visible')
		// cy.get(ErrorMessagesLoginPage.errorMessageWrongNickNameLengthNumber)
		// 	.contains(errorMessage)
	}

	static inputDays(daysNumber, months) {

		// @ts-ignore
		cy.get(LoginPageObjects.inputDays).should('be.visible')
		// @ts-ignore
		cy.get(LoginPageObjects.inputDays).type(daysNumber).wait(1000)

		// @ts-ignore
		cy.get(LoginPageObjects.monthList).should('be.visible')
		// @ts-ignore
		cy.get(LoginPageObjects.monthList).select(months)

	}

	static verifyErrorMessageBadCredentials(errorMessage) {

		// @ts-ignore
		cy.get(ErrorMessagesLoginPage.errorMessageBadCredentials)
			.should('be.visible')
		// @ts-ignore
		cy.get(ErrorMessagesLoginPage.errorMessageBadCredentials)
			.contains(errorMessage)
	}

	static verifyErrorMessageNotValidDateOfBirth(errorMessage) {

		// @ts-ignore
		cy.get(ErrorMessagesLoginPage.errorMessageIncorrectDateInput)
			.should('be.visible')
		// @ts-ignore
		cy.get(ErrorMessagesLoginPage.errorMessageIncorrectDateInput)
			.contains(errorMessage)

	}


	static checkBox() {
		// @ts-ignore
		cy.get(LoginPageObjects.checkBox).should('exist')
		// @ts-ignore
		cy.get(LoginPageObjects.checkBox).click({ force: true })
	}

	static verifyLoginSuccesfull(name) {
		// @ts-ignore
		cy.wait(25000).get(accountName).should('be.visible')
		// @ts-ignore
		cy.url().should('include', 'overview')
	}

}
