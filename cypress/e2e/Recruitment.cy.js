describe('Recruitment', () => {
    beforeEach('should be able to login successfully', () => {
  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
        cy.title().should('eq','OrangeHRM')
      
        cy.get("[name='username']").type("Admin")    
      
        cy.get("[name='password']").type("admin123")
      
        cy.get("button[type='submit']").click();

        cy.get("a[href='/web/index.php/recruitment/viewRecruitmentModule']").click();

    })    
    it.skip('Recruitment', ()=>{
        

        //CANDITATES
        cy.contains('a[href="#"]', 'Candidates').click();


        //VACNACIES
        cy.contains('a[href="#"]', 'Vacancies').click();
    })
})