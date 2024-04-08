describe('login spec', () => {
  beforeEach(()=>{
      cy.visit('https://www.saucedemo.com/')
  })
  it('Should login successfuly', () => {
    
    cy.get('[data-test="username"]').type('standard_userxxxx')
    cy.get('[data-test="password"]').type('secret_saucevvvvv')
    cy.get('[data-test="login-button"]').click()
    //cy.compareSnapshot('loginPage');
   cy.compareSnapshot({name:'loginPage', testThreshold:0.1});
  
  
  })
})