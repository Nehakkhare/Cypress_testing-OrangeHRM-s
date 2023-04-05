describe('Admin', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();
      
        cy.get("a[href='/web/index.php/admin/viewAdminModule']").click();
       
    })
    
    it('Admin Search', ()=>{
       // Cypress.Commands.add('Login', (username, password) => {

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'User Management ').click();

        cy.wait(1000);

        cy.contains('a[href="#"]', 'Users').click();

        cy.wait(1000);
        
        cy.get("input[class='oxd-input oxd-input--active']").last().type("Paul");

        cy.wait(1000);
        
        cy.get(".oxd-select-wrapper").first().click();
        
        cy.get(".oxd-select-dropdown").click();

        cy.wait(1000);

        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter"); 
        
        cy.wait(5000);

        cy.get(".oxd-autocomplete-dropdown").click();

        cy.wait(5000);

        cy.get(".oxd-select-wrapper").last().click();

        cy.wait(1000);

        cy.get(".oxd-select-dropdown").click();

        cy.wait(1000);

        cy.get(".oxd-form").submit();

        //cy.get('button:contains("Add")').click();

    })

    it('Admin Add User', ()=>{

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'User Management ').click();

        cy.wait(1000);   

        cy.contains('a[href="#"]', 'Users').click();
        
        cy.wait(1000);

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]', ' Add ').click();
        
    })
})    


/*
describe('Search for Google Wiki page from Wikipedia website', () => {
    before(() => {
        cy.visit('https://wikipedia.org')
    })

    it('Validate Page Title', () => {
        cy.title().should('eq', 'Wikipedia')
    })

    it('Search for Google Wiki Page', () => {
        cy.get('#searchInput').type('google')
        cy.get('button[type="submit"]').click()
    })

    it('Validate Google Wiki Page has opened', () => {
        cy.get('h1#firstHeading').contains('Google')
        cy.title().should('eq', 'Google - Wikipedia')
    })
})

*/