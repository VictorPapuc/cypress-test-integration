import LoginPage from './integration/e2e/george/login_page/page-objects/LoginPage'

before(() => {
	cy.visit('https://bezpecnost.csas.cz/login/?client_id=georgeclient_cz');
	cy.url().should('include', 'george');
	LoginPage.verifyLoginPage();
})