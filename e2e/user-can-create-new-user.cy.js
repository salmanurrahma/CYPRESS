describe('template spec', () => {
  before(() => {
    cy.log('run once before all test in the block');
  })
  after(() => {
    cy.log('run once before all test in the block');
  })

  beforeEach(() => {
    cy.log('run once before all test in the block');
  })
  //postive test case
  it('user can create new user ', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000')
    cy.exec(
      'cd D:/cypres-basic/demo-app-cypress-automation && php artisan migrate:fresh --seed'
    );
    /* ==== Generated with Cypress Studio ==== */
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user');
    cy.get('.card-header-action > .btn-icon').click();
    cy.get('#name').type('baru');
    cy.get('#email').type('baru@gmail.com');
    cy.get('#password').type('1234567890');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn-primary').click();
    //assert
    cy.get('p').should('be.visible');
    cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
    cy.get('.nav-link > .d-sm-none').click();
    cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })
});