describe('Performance', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();

        cy.get("a[href='/web/index.php/performance/viewPerformanceModule']").click();
            
    })    

    it('Configure-KPIs', ()=>{
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Configure ').click();

        cy.wait(1000);   

        cy.contains('a[href="#"]', 'KPIs').click();

        cy.wait(1000);   

        cy.get(".oxd-select-wrapper").last().click();

        cy.wait(1000);

        cy.get(".oxd-form").submit();

    })

    it('Configure-Trackers', ()=>{
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Configure ').click();

        cy.wait(1000);   

        cy.contains('a[href="#"]', 'Trackers').click();

        cy.wait(1000);   

        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter"); 

        cy.wait(1000);

        cy.get(".oxd-form").submit();
    })

    it('Manage Reviews-Manage Reviews', ()=>{

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Manage Reviews ').click();

        cy.wait(1000);   

        cy.contains('a[href="#"]', 'Manage Reviews').click();

        cy.wait(1000);  
        
        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter");

        cy.wait(1000);  

        cy.get(".oxd-select-wrapper").first().click();

        cy.wait(1000);

        cy.get(".oxd-select-wrapper").last().click();

        cy.wait(1000);



        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter");




        cy.get(".oxd-form").submit();

    })

    it('Manage Reviews-My Reviews', ()=>{

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Manage Reviews ').click();

        cy.wait(1000);   

        cy.contains('a[href="#"]', 'My Reviews').click();

        cy.wait(1000);   

        cy.get(".oxd-select-wrapper").last().click();

        cy.wait(1000);

        cy.get(".oxd-form").submit();

    })

    it('Manage Reviews-Employee Reviews', ()=>{

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Manage Reviews ').click();

        cy.wait(1000);    

        cy.contains('a[href="#"]', 'Employee Reviews').click();

        cy.wait(1000);   

        cy.get(".oxd-select-wrapper").last().click();

        cy.wait(1000);

        cy.get(".oxd-form").submit();

    })

    it('My Trackers', ()=>{   

        cy.contains('a[href="#"]', 'My Trackers').click();

        cy.wait(1000);   

        
    })

    it('Employee Trackers', ()=>{   

        cy.contains('a[href="#"]', 'Employee Trackers').click();

        cy.wait(1000);   

        cy.get("input[placeholder='Type for hints...']").type("Charlie  Carter");

        cy.get(".oxd-select-wrapper").first().click();

        cy.wait(1000);

        cy.get(".oxd-form").submit();

        
    })




})