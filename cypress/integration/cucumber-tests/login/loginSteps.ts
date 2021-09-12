import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
	cy.visit('http://zero.webappsecurity.com/login.html')
})