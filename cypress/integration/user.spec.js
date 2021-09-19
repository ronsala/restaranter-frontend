/* eslint-disable no-undef */
describe('User', function () {

  const baseUrl = 'http://localhost:3001'
  
  it('Allows a user to see their account details', function () {

    cy.visit(`${baseUrl}/signuplogin`)
    cy.get('#login_email')
      .type('pg@example.com')
      .should('have.value', 'pg@example.com')
    cy.get('#login_password')
      .type('123')
      .should('have.value', '123')
    cy.get('#login_submit')
      .click()

    cy.contains('View My Account')
      .click()

    cy.get('#first_name')
      .should('have.value', 'Phoebe')
    cy.get('#last_name')
      .should('have.value', 'Gindlesberger')
    cy.get('#email')
      .should('have.value', 'pg@example.com')
    cy.get('#street')
      .should('have.value', '48 Elm Avenue')
    cy.get('#city')
      .should('have.value', 'Santa Barbara')
    cy.get('#state')
      .should('have.value', 'CA')
  })
})