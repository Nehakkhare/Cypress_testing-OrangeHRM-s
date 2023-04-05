describe('My Info', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();

        cy.get("a[href='/web/index.php/pim/viewMyDetails']").click();

        cy.wait(1000);

        //cy.url().should('include', '/Personal Details')
            
    })    

   it('Contact Details', ()=>{
        
        cy.get("a[href='/web/index.php/pim/contactDetails/empNumber/7']").click({force: true});

        cy.wait(1000);
    })



    it('Emergency Contacts', ()=>{

        cy.get("a[href='/web/index.php/pim/viewEmergencyContacts/empNumber/7']").click({force: true});

        cy.wait(1000);
    })

    it('Dependents', ()=>{

        cy.get("a[href='/web/index.php/pim/viewDependents/empNumber/7']").click({force: true});

        cy.wait(1000);
    })

    it('Immigration', ()=>{

        cy.get("a[href='/web/index.php/pim/viewImmigration/empNumber/7']").click({force: true});

        cy.wait(1000);
    })

    it('Job', ()=>{

        cy.get("a[href='/web/index.php/pim/viewJobDetails/empNumber/7']").click({force: true});

        cy.wait(1000);
    })

    it('Salary', ()=>{

        cy.get("a[href='/web/index.php/pim/viewSalaryList/empNumber/7']").click({force: true});

        cy.wait(1000);
    })

    it('Tax Exemptions', ()=>{

        cy.get("a[href='/web/index.php/pim/viewUsTaxExemptions/empNumber/7']").click({force: true});

        cy.wait(1000);
    })

    it('Report-To', ()=>{

        cy.get("a[href='/web/index.php/pim/viewReportToDetails/empNumber/7']").click({force: true});
        cy.wait(1000);
    })

    it('Qualifications', ()=>{

        cy.get("a[href='/web/index.php/pim/viewQualifications/empNumber/7']").click({force: true});
        cy.wait(1000);
    })

    it('Memberships', ()=>{

        cy.get("a[href='/web/index.php/pim/viewMemberships/empNumber/7']").click({force: true});

        cy.wait(1000);
    })

    
    it('Personal Details', ()=>{
        
        cy.get("a[href='/web/index.php/pim/viewPersonalDetails/empNumber/7']").click({force: true});
        cy.wait(1000);

        cy.get("[name='firstName']").type("Paul");

        cy.wait(1000);

        cy.get("[name='middleName']").type("P");

        cy.wait(1000);

        cy.get("[name='lastName']").type("Collings");

        cy.wait(1000);
    })
})