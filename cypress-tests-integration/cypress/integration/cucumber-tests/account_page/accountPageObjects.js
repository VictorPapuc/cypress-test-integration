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
        cy.wait(1000)
        cy.get(MainMenuObjects.settingsButtons).should('be.visible')
        cy.get(MainMenuObjects.settingsButtons).click({multiple:true})
        cy.wait(1000)
        cy.get(MainMenuObjects.profileSettings).should('be.visible')
        cy.get(MainMenuObjects.profileSettings).click()
    }

    static setTheLanguage(language){
        
        if(language==='English'){
            cy.wait(10000)
            language = setLanguageValue[0]
            cy.get(ProfileMenu.languageSelector).should('be.visible')   
            cy.get(ProfileMenu.languageSelector).check([setLanguageValue[0]])
     
       
        }else if (language==='Czech'){
            language = setLanguageValue[1]
            cy.wait(3000)
            cy.get(ProfileMenu.languageSelector).should('be.visible')   
            cy.get(ProfileMenu.languageSelector).check([setLanguageValue[1]])
    
        }else {
            cy.reload()
        }
    }

    static enterOverviewPage(){
        cy.wait(15000)
        cy.get(MainMenuObjects.overViewMenu).should('be.visible')
        cy.get(MainMenuObjects.overViewMenu).click()
    }

    static typeInsSearchBar(transactionValue){

        cy.get(MainMenuObjects.searchBar).should('be.visible')
        cy.get(MainMenuObjects.searchBar).type(transactionValue) 
      
    }

    static checkBoxDisplayOutgoingTransactionsInRed(){ 
        cy.wait(30000)
        cy.get(ProfileMenu.checkBox).should('be.visible')
        cy.get(ProfileMenu.checkBox).click({multiple:true})
        
    }

    static acessTranzaction(transactionPosition){

        switch(transactionPosition) {
            case 1:
                cy.wait(2000)
                cy.get(Transactions.transactionIds[0]).click()
                cy.wait(10000)
                break;
            case 2:
                 cy.wait(2000)
                 cy.get(Transactions.transactionIds[1]).click()
                 cy.wait(10000)
                 break;
             case 3:
                 cy.wait(2000)
                 cy.get(Transactions.transactionIds[2]).click()
                 cy.wait(10000)
                 break;
             case 4:
                  cy.wait(2000)
                  cy.get(Transactions.transactionIds[3]).click()
                  cy.wait(10000)
                  break;
             case 5:
                  cy.wait(2000)
                  cy.get(Transactions.transactionIds[4]).click()
                  cy.wait(10000)
                  break;
             case 6:
                  cy.wait(2000)
                  cy.get(Transactions.transactionIds[5]).click()
                  cy.wait(10000)
                  break;         
          }
    }

    static verifyTransactionCategory (category){
        cy.wait(2000)
        cy.contains(category)
    
    }

    static verifyColor(){

        cy.wait(2000)
        cy.get(Transactions.transaction).should('be.visible')
        //Need to Review : https://github.com/chaijs/chai-jquery/issues/63
        // expect($('div')).to.have.css('color', 'rgb(255, 0, 0)');

    }

    static verifyTransactions(date){

      cy.wait(2000)
      cy.get(Transactions.transaction).should('be.visible')

      if(cy.contains(date)==='February'){
        cy.get(Transactions.transactionIds[0]).should('be.visible')
        cy.get(Transactions.transactionIds[1]).should('be.visible')
        cy.get(Transactions.transactionIds[2]).should('be.visible')
        cy.get(Transactions.transactionIds[3]).should('be.visible')
        cy.get(Transactions.transactionIds[4]).should('be.visible')
        cy.get(Transactions.transactionIds[5]).should('be.visible')

      }else if(cy.contains(date)==='January'){
        cy.get(Transactions.transactionIds[6]).should('be.visible')
      }

    }

    static verifyMessageNoSearchCriteria(message){
        cy.wait(2000)
        cy.contains(message)
    }

}

export default AccountPage