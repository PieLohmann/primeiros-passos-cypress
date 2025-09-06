import userData from '../fixtures/userData'

describe('Login', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role= 'alert']"
  
  }


  it('should log in with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index'); 
    cy.get(selectorsList.dashboardGrid);
  });
  it('Login - fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get(selectorsList.usernameField).type(userData.userFail.username);
  cy.get(selectorsList.passwordField).type(userData.userFail.password);
  cy.get(selectorsList.loginButton).click();
  cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials');
  })
})
