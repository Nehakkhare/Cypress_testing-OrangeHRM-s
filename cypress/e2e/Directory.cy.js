describe('Directory', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();

        cy.get("a[href='/web/index.php/directory/viewDirectory']").click();

            
    })    

    it('Directory', ()=>{

        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter"); 

        cy.wait(1000);

        cy.get(".oxd-select-wrapper").first().click();
        
        cy.wait(1000);

        cy.get(".oxd-select-wrapper").first().click();
        
        cy.get(".oxd-form").submit();

    })
})