// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//npm
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// import {addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
//
// addMatchImageSnapshotCommand()

// eslint-disable-next-line no-undef
Cypress.Commands.add('login', url => {
    // eslint-disable-next-line no-undef
    cy.visit(url);
});

// eslint-disable-next-line no-undef
Cypress.Commands.add('logout', () => {
    const logoutButton = '[data-cy="nav-logout"]';
    // eslint-disable-next-line no-undef
    cy.wait(2000).get(logoutButton).should('be.visible');
    // eslint-disable-next-line no-undef
    cy.get(logoutButton).click({ multiple: true });
});
