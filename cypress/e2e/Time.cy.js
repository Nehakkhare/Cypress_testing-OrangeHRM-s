describe('Time', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();

        cy.get("a[href='/web/index.php/time/viewTimeModule']").click();
    })
    
    it('TIMESHEET', ()=>{
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Timesheets ').click();

        cy.contains('a[href="#"]', 'My Timesheets').click();
        
        cy.contains('a[href="#"]', 'Employee Timesheets').click();
        
        cy.get("input[placeholder='Type for hints...']").type("");
    
    })

    it('ATTENDANCE', ()=>{    //ATTENDANCE
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Attendance ').click();
        
        cy.contains('a[href="#"]', 'My Records').click();

        cy.contains('a[href="#"]', 'Punch In/Out').click();
        
        cy.contains('a[href="#"]', 'Employee Records').click();
        
        cy.contains('a[href="#"]', 'Configuration').click();
        
    })

    it('REPORTS', ()=>{    //REPORTS
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Reports ').click();
        
        cy.contains('a[href="#"]', 'Project Reports').click();
        
        cy.contains('a[href="#"]', 'Employee Reports').click();
        
        cy.contains('a[href="#"]', 'Attendance Summary').click();
    
    })    

    it('PROJECT INFO', ()=>{     //PROJECT INFO
        
        cy.contains('span[class="oxd-topbar-body-nav-tab-item"]', 'Project Info ').click();
        
        cy.contains('a[href="#"]', 'Customers').click();
        
        cy.contains('a[href="#"]', 'Projects').click();   
    
    })
})