import userData from '../fixtures/userData'

describe('Login', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role= 'alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    midleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericFIeld: ".oxd-input-group",
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index'); 
    cy.get(selectorsList.dashboardGrid);
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Roberto')
    cy.get(selectorsList.midleNameField).clear().type('Santos')
    cy.get(selectorsList.lastNameField).clear().type('Silva')
    cy.get(selectorsList.genericFIeld).eq(4).clear().type('EmployTest')
    cy.get(selectorsList.genericFIeld).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericFIeld).eq(6).clear().type('DriversLiceTest123')
    cy.get(selectorsList.genericFIeld).eq(7).clear().type('2025-09-15')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast-close')

  })

  it('User Info Update - Fail', () => { 
  cy.visit('/auth/login');
  cy.get(selectorsList.usernameField).type(userData.userFail.username);
  cy.get(selectorsList.passwordField).type(userData.userFail.password);
  cy.get(selectorsList.loginButton).click();
  cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials');
  })
})
