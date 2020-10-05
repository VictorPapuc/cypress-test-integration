const MainMenuObjects = Object.freeze({
     settingsButtons :'[data-cy="main.menu.v2.settingsLink-desktop"]',
     profileSettings :'[data-cy="main.menu.v2.settings.userSettings"]',
     overViewMenu    :'[data-cy="main.menu.v2.overviewLink-common"]',
     searchBar: '#overviewSearchbar'
}) 

const ProfileMenu = Object.freeze({
    languageSelector : '[data-cy="language-selector"]',
    checkBox: '[type="checkbox"]'
})

const Transactions = Object.freeze({
    transaction: '#transactions',
    transactionIds :[
    '#transaction-line-100000448218838',
    '#transaction-line-100000446866115',
    '#transaction-line-100000441757892',
    '#transaction-line-100000428095979',
    '#transaction-line-100000417387690',
    '#transaction-line-100000414556916',
    '#transaction-line-100000390037039'
    ]
})

const setLanguageValue = ['en', 'cs']

class AccountPage{

    static enterSettingsPage(){
        cy.wait(12000).get(MainMenuObjects.settingsButtons).should('be.visible')
        cy.get(MainMenuObjects.settingsButtons).click({multiple:true})
        cy.wait(3000).get(MainMenuObjects.profileSettings).should('be.visible')
        cy.get(MainMenuObjects.profileSettings).click()
    }

    static setTheLanguage(language){
        
        if(language==='English'){

            language = setLanguageValue[0]
            cy.wait(8000).get(ProfileMenu.languageSelector).should('be.visible')   
            cy.get(ProfileMenu.languageSelector).check([setLanguageValue[0]])
     
       
        }else if (language==='Czech'){
            language = setLanguageValue[1]
            cy.get(ProfileMenu.languageSelector).should('be.visible')   
            cy.get(ProfileMenu.languageSelector).check([setLanguageValue[1]])
    
        }else {
            cy.reload()
        }
    }

    static enterOverviewPage(){

        cy.wait(14000).get(MainMenuObjects.overViewMenu).should('be.visible')
        cy.get(MainMenuObjects.overViewMenu).click()
    }

    static typeInsSearchBar(transactionValue){

       cy.wait(2000).get(MainMenuObjects.searchBar).should('be.visible')
        cy.get(MainMenuObjects.searchBar).type(transactionValue) 
      
    }

    static checkBoxDisplayOutgoingTransactionsInRed(){ 
 
        cy.wait(12000).get(ProfileMenu.checkBox).should('be.visible')
        cy.get(ProfileMenu.checkBox).click({multiple:true})
        
    }

    static acessTranzaction(transactionPosition){

        switch(transactionPosition) {
            case 1:
                cy.get(Transactions.transactionIds[0]).click()
                break;
            case 2:
                 cy.get(Transactions.transactionIds[1]).click()
                 break;
             case 3:
                 cy.get(Transactions.transactionIds[2]).click()
                 break;
             case 4:
                  cy.get(Transactions.transactionIds[3]).click()
                  break;
             case 5:
                  cy.get(Transactions.transactionIds[4]).click()
                  break;
             case 6:
                  cy.get(Transactions.transactionIds[5]).click()
                  break;         
          }
    }

    static verifyTransactionCategory (category){
        cy.contains(category)
    
    }

    static verifyColor(){

        cy.get(Transactions.transaction).should('be.visible')
        //Need to Review : https://github.com/chaijs/chai-jquery/issues/63
        // expect($('div')).to.have.css('color', 'rgb(255, 0, 0)');

    }

    static verifyTransactions(transactions,date, cost , currency){

      cy.wait(2000).get(Transactions.transaction).should('be.visible')
      cy.get('footer').scrollIntoView()
   
      if(date === 'January'){
        cy.get(Transactions.transactionIds[6]).should('be.visible')
        .and('contain',transactions)
        .and('contain', cost)
        .and('contain', currency)
      }else if(date ==='February'){
        cy.get(Transactions.transactionIds[0]).should('be.visible')
        .and('contain',transactions)
        .and('contain', cost)
        .and('contain', currency)
        cy.get(Transactions.transactionIds[1]).should('be.visible')
        .and('contain',transactions)
        .and('contain', cost)
        .and('contain', currency)
        cy.get(Transactions.transactionIds[2]).should('be.visible')
        .and('contain',transactions)
        .and('contain', cost)
        .and('contain', currency)
        cy.get(Transactions.transactionIds[3]).should('be.visible')
        .and('contain',transactions)
        .and('contain', cost)
        .and('contain', currency)
        cy.get(Transactions.transactionIds[4]).should('be.visible')
        .and('contain',transactions)
        .and('contain', cost)
        .and('contain', currency)
        cy.get(Transactions.transactionIds[5]).should('be.visible')
        .and('contain',transactions)
        .and('contain', cost)
        .and('contain', currency)
      }
    }

    static verifyMessageNoSearchCriteria(message){
        cy.contains(message)
    }

}
//     after( function(){
//         cy.logout()
// })

export default AccountPage