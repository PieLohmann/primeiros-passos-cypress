class MyInfoPage {

    selectorsList(){
        const selectors = {
        firstNameField: '[name="firstName"]',
        midleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        genericFIeld: ".oxd-input-group",
        dateField: "[placeholder='yyyy-mm-dd']",
        dateCloseButton: '.--close', 
        submitButton: '[type="submit"]',
        genericComboBox: ".oxd-select-wrapper",
        }

        return selectors

    }
    
    fillPersonalDetails(firstName, midleName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().midleNameField).clear().type(midleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
     
    }
    
    fillEmployDetails(employId,otherId,driversLicence,expiryDate,ssnNumber,sinNumber){
        cy.get(this.selectorsList().genericFIeld).eq(4).clear().type(employId)
        cy.get(this.selectorsList().genericFIeld).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericFIeld).eq(6).clear().type(driversLicence)
        cy.get(this.selectorsList().genericFIeld).eq(7).type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        
    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click() //nationality
        cy.get('.oxd-select-dropdown > :nth-child(6)').click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click() //maritalStatus
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain','Successfully Saved')
        cy.get('.oxd-toast-close')
        cy.get(this.selectorsList().genericComboBox).eq(2).click() //bloodType
        cy.get('.oxd-select-dropdown > :nth-child(6)').click()
        cy.get(this.selectorsList().genericFIeld).eq(15).type('TestTest')
    }
    
        
    
    
}

export default MyInfoPage