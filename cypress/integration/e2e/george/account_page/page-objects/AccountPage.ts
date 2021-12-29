import { MAIN_MENU_OBJECTS, PROFILE_MENU, TRANSACTIONS } from '../selectors/selectors';

const setLanguageValue = ['en', 'cs'];

class AccountPage {

    static enterSettingsPage(): void {
        cy.wait(12000).get(MAIN_MENU_OBJECTS.settingsButtons).should('be.visible');
        cy.get(MAIN_MENU_OBJECTS.settingsButtons).click({ multiple: true });
        cy.wait(3000).get(MAIN_MENU_OBJECTS.profileSettings).should('be.visible',
        );
        cy.get(MAIN_MENU_OBJECTS.profileSettings).click();
    }

    static setTheLanguage(language: string): void {

        if (language === 'English') {

            language = setLanguageValue[0];
            cy.wait(8000).get(PROFILE_MENU.languageSelector).should('be.visible');
            cy.get(PROFILE_MENU.languageSelector).check([setLanguageValue[0]]);


        } else if (language === 'Czech') {
            language = setLanguageValue[1];
            cy.get(PROFILE_MENU.languageSelector).should('be.visible');
            cy.get(PROFILE_MENU.languageSelector).check([setLanguageValue[1]]);

        } else {
            cy.reload();
        }
    }

    static enterOverviewPage():void {

        cy.wait(1400).get(MAIN_MENU_OBJECTS.overViewMenu).should('be.visible');
        cy.get(MAIN_MENU_OBJECTS.overViewMenu).click();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static typeInsSearchBar(transactionValue) {

        cy.wait(2000).get(MAIN_MENU_OBJECTS.searchBar).should('be.visible');
        cy.get(MAIN_MENU_OBJECTS.searchBar).type(transactionValue);

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static checkBoxDisplayOutgoingTransactionsInRed() {

        cy.wait(12000).get(PROFILE_MENU.checkBox).should('be.visible');
        cy.get(PROFILE_MENU.checkBox).click({ multiple: true });

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static accessTransaction(transactionPosition):void {

        switch (transactionPosition) {
        case 1:
            cy.get(TRANSACTIONS.transactionIds[0]).click();
            break;
        case 2:
            cy.get(TRANSACTIONS.transactionIds[1]).click();
            break;
        case 3:
            cy.get(TRANSACTIONS.transactionIds[2]).click();
            break;
        case 4:
            cy.get(TRANSACTIONS.transactionIds[3]).click();
            break;
        case 5:
            cy.get(TRANSACTIONS.transactionIds[4]).click();
            break;
        case 6:
            cy.get(TRANSACTIONS.transactionIds[5]).click();
            break;
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static verifyTransactionCategory(category) {
        cy.contains(category);

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static verifyColor() {

        cy.get(TRANSACTIONS.transaction).should('be.visible');
        //Need to Review : https://github.com/chaijs/chai-jquery/issues/63
        // expect($('div')).to.have.css('color', 'rgb(255, 0, 0)');

    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static verifyTransactions(transactions, date, cost, currency) {

        cy.wait(2000).get(TRANSACTIONS.transaction).should('be.visible');
        cy.get('footer').scrollIntoView();

        if (date === 'January') {
            cy.get(TRANSACTIONS.transactionIds[6]).should('be.visible')
                .and('contain', transactions)
                .and('contain', cost)
                .and('contain', currency);
        } else if (date === 'February') {
            cy.get(TRANSACTIONS.transactionIds[0]).should('be.visible')
                .and('contain', transactions)
                .and('contain', cost)
                .and('contain', currency);
            cy.get(TRANSACTIONS.transactionIds[1]).should('be.visible')
                .and('contain', transactions)
                .and('contain', cost)
                .and('contain', currency);
            cy.get(TRANSACTIONS.transactionIds[2]).should('be.visible')
                .and('contain', transactions)
                .and('contain', cost)
                .and('contain', currency);
            cy.get(TRANSACTIONS.transactionIds[3]).should('be.visible')
                .and('contain', transactions)
                .and('contain', cost)
                .and('contain', currency);
            cy.get(TRANSACTIONS.transactionIds[4]).should('be.visible')
                .and('contain', transactions)
                .and('contain', cost)
                .and('contain', currency);
            cy.get(TRANSACTIONS.transactionIds[5]).should('be.visible')
                .and('contain', transactions)
                .and('contain', cost)
                .and('contain', currency);
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static verifyMessageNoSearchCriteria(message:string) {
        cy.contains(message);
    }

}

//     after( function(){
//         cy.logout()
// })

export default AccountPage;