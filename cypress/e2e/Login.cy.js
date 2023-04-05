describe('OrangeHRM Login', () => {
  it('should be able to login successfully', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.title().should('eq','OrangeHRM')
    
    cy.get("[name='username']").type("Admin")    
    
    cy.get("[name='password']").type("admin123")
    
    cy.get("button[type='submit']").click();
    
    cy.url().should('include', '/dashboard')
    
    //cy.get('#menu_dashboard_index').should('be.visible')
  });

});
