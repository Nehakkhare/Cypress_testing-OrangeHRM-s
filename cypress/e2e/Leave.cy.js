describe('Leave', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();

        cy.get("a[href='/web/index.php/leave/viewLeaveModule']").click();

        cy.get("a[href='/web/index.php/leave/viewLeaveModule']").click();
                    
    })    
        
           
        
    it.skip('Apply', ()=>{

        cy.contains('a[href="#"]', 'Apply').click();

    })    

    it('My Leave', ()=>{
            
        cy.contains('a[href="#"]', 'My Leave').click();

        cy.get(".oxd-date-wrapper").first().click();

        //cy.get('input[class="oxd-input oxd-input--focus"]').eq(0).clear();

        cy.xpath('//input[@class="oxd-date-input-calendar"]').click();
        
        cy.xpath('//div[@class="oxd-date-input"]')
                
        //cy.get(".oxd-date-wrapper").second().click();

        //cy.get('input[placeholder="yyyy-mm-dd"]').type("22-03-2023");
                
        // cy.get(".oxd-multiselect-wrapper").first().click();
                
        // cy.get(".oxd-select-text-input").click();
    })
            
    it.skip('Entitlements', ()=>{
                
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Entitlements ').click();
                

        //
        cy.contains('a[href="#"]', 'Add Entitlements').click();
        
        cy.get("input[placeholder='Type for hints...']").type("");
        
        cy.get("input[class='oxd-input oxd-input--active']").type("");

        //
        
        cy.contains('a[href="#"]', 'Employee Entitlements').click();
        
        cy.get("input[placeholder='Type for hints...']").type("");

        //
        cy.contains('a[href="#"]', 'My Entitlements').click();
    
    })

    it.skip('Reports', ()=>{
        
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Reports ').click();
        
        cy.contains('a[href="#"]', 'Leave Entitlements and Usage Report').click();
        
        cy.contains('a[href="#"]', 'My Leave Entitlements and Usage Report').click();

    })  

    it.skip('Configure', ()=>{

        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Configure ').click();
        
        cy.contains('a[href="#"]', 'Leave Period').click();
        
        cy.contains('a[href="#"]', 'Leave Types').click();
        
        cy.contains('a[href="#"]', 'Work Week').click();
        
        cy.contains('a[href="#"]', 'Holidays').click();

    })
                
    it.skip('Leave', ()=>{
        
        cy.contains('a[href="#"]', 'Leave List').click();

    })

    it.skip('Assign Leave', ()=>{
        //ASSIGN LEAVE
        cy.contains('a[href="#"]', 'Assign Leave').click();
    })
}) 