describe('PIM', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();

        cy.get("a[href='/web/index.php/pim/viewPimModule']").click();

    })    

    it('Configuration', ()=>{
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Configuration ').click();

        cy.wait(5000);

        cy.contains('a[href="#"]', 'Optional Fields').click();

        cy.wait(5000);

        cy.contains('a[href="#"]', 'Custom Fields').click();

        cy.wait(5000);

        cy.contains('a[href="#"]', 'Data Import').click();

        cy.wait(5000);

        cy.get("div[class='oxd-file-button'] h3").should('have.text','Browse');

        cy.wait(5000);

        cy.get('button:contains(" Upload ")').click();

        cy.wait(5000);

        cy.contains('a[href="#"]', 'Reporting Methods').click();

        cy.wait(5000);

        cy.contains('a[href="#"]', 'Termination Reasons').click();

    })   
        

    
    it('Employee List', ()=>{

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Employee List').click();

        cy.wait(5000);

        cy.get("input[placeholder='Type for hints...']").type("");

        cy.wait(5000);

        cy.get("input[class='oxd-input oxd-input--active']").type("");

        cy.wait(5000);

        cy.get("input[placeholder='Type for hints...']").type("");

        cy.wait(5000);

        cy.get("input[placeholder='Type for hints...'']").type("");



    })   
       
    it('Add Employee', ()=>{
        
         cy.contains('a[href="#"]', 'Add Employee').click();

         cy.wait(5000);

         cy.get("[name='firstName']").type("Myra");

         cy.wait(5000);
 
         cy.get("[name='middleName']").type("John");

         cy.wait(5000);
 
         cy.get("[name='lastName']").type("Mark");

         cy.wait(5000);
 
         cy.get("input[class='oxd-input oxd-input--active']").type("");
 
    })

       
    it('Reports', ()=>{
        
        cy.contains('a[href="#"]', 'Reports').click();
            
        cy.wait(5000);
        
        cy.get("input[placeholder='Type for hints...']").type("");

    })
})    