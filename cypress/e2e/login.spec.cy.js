describe('Login', () => {
  it.skip('should log in with valid credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get('.oxd-button').click();
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index'); 
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard');
  });
  it('Login - fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('TEST');    
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test');
  cy.get('.oxd-button').click();
  cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials');
  })
})
