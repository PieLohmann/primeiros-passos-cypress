describe('Login', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role= 'alert']"
  
  }

  it('should log in with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(selectorsList.usernameField).type('Admin');
    cy.get(selectorsList.passwordField).type('admin123');
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index'); 
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard');
  });
  it('Login - fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get(selectorsList.usernameField).type('TEST');
  cy.get(selectorsList.passwordField).type('Test');
  cy.get(selectorsList.loginButton).click();
  cy.get(selectorsList.wrongCredentialAlert).should('contain', 'Invalid credentials');
  })
})
