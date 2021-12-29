import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AccountPage from '../../page-objects/AccountPage';

When('Check box Display outgoing transactions in red from profile setting', () => {

    AccountPage.checkBoxDisplayOutgoingTransactionsInRed();

});

When('The user acces the profile Settings', () => {
    AccountPage.enterSettingsPage();
});

When('Changes the language to {string}', language => {
    AccountPage.setTheLanguage(language);
});

When('Return to Overview page', () => {
    AccountPage.enterOverviewPage();
});

When('The user searches for {string} transaction', transcation => {
    AccountPage.typeInsSearchBar(transcation);
});

When('Accesss transaction with position {int} from transaction list', transactionPosition => {
    AccountPage.accessTransaction(transactionPosition);
});

Then('The user should see outgoing transactions in red color', () => {
    AccountPage.verifyColor();
});

Then('The user see transactions from date: {string}', (date: string) => {

    // AccountPage.verifyTransactions(date)
});


Then('Transaction should be in Category {string}', category => {

    AccountPage.verifyTransactionCategory(category);

});

Then('{string} is message prompted', message => {

    AccountPage.verifyMessageNoSearchCriteria(message);
});

Then('User views Transactions {string} from date: {string} with {int} and {string}',
    (transactions, date, cost, currency) => {
        AccountPage.verifyTransactions(transactions, date, cost, currency);
    });

