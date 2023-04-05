describe('Maintenance', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();

        cy.get("a[href='/web/index.php/maintenance/viewMaintenanceModule']").click();
            
    })    

    it('Purge record-Employee record', ()=>{
        cy.get("[name='password']").type("admin123")

        cy.get("button[type='submit']").click();

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Purge Records ').click();

        cy.wait(1000);
        
        cy.contains('a[href="#"]', 'Employee Records').click();

        cy.wait(1000);

        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter"); 

        cy.wait(1000);

        cy.get(".oxd-form").submit();

    })

    it('Purge record-Candidate records', ()=>{

        cy.get("[name='password']").type("admin123")

        cy.get("button[type='submit']").click();

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Purge Records ').click();

        cy.wait(1000);

        cy.contains('a[href="#"]', 'Candidate Records').click();

        cy.wait(1000);

        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter"); 

        cy.wait(1000);

        cy.get(".oxd-form").submit();


        
    })

    it('Access Records', ()=>{
        cy.get("[name='password']").type("admin123")

        cy.get("button[type='submit']").click();

        cy.contains('a[href="#"]', 'Access Records').click();

        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter"); 

        cy.wait(1000);

        cy.get(".oxd-form").submit();


    })
})