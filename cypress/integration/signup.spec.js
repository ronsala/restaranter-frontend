/* eslint-disable no-undef */
describe('Signup process', function () {

  const baseUrl = 'http://localhost:3001'
  
  beforeEach(() => {
    cy.visit(`${baseUrl}/signuplogin`)
  })
  
  it('Allows signup with correct info', function () {
    cy.get('#first_name')
      .type('Abe')
      .should('have.value', 'Abe')

    cy.get('#last_name')
      .type('Bennett')
      .should('have.value', 'Bennett')

    cy.get('#email')
      .type('abennett@example.com')
      .should('have.value', 'abennett@example.com')

    cy.get('#street')
      .type('20 Division Street')
      .should('have.value', '20 Division Street')

    cy.get('#city')
      .type('Pittsburgh')
      .should('have.value', 'Pittsburgh')

    cy.get('#state')
      .click()
      .get('[data-value="AL"]')
      .click({ force: true })

    cy.get('#password')
      .type('password')

    cy.get('#password_confirm')
      .type('password')

    cy.contains('Submit')
      .click()

    cy.url()
      .should('include', '/users')

    cy.contains('View My Account')
      .click()

    cy.contains('DELETE')
      .click()

    cy.wait(500)
  })

  it('Prevents signup without first name', function () {

    cy.get('#last_name')
      .type('Bennett')
      .should('have.value', 'Bennett')

    cy.get('#email')
      .type('abennett@example.com')
      .should('have.value', 'abennett@example.com')

    cy.get('#street')
      .type('20 Division Street')
      .should('have.value', '20 Division Street')

    cy.get('#city')
      .type('Pittsburgh')
      .should('have.value', 'Pittsburgh')

    cy.get('#state')
      .click()
      .get('[data-value="AL"]')
      .click({ force: true })

    cy.get('#password')
      .type('password')

    cy.get('#password_confirm')
      .type('password')

    cy.contains('Submit')
      .click()

    cy.url()
      .should('include', '/signuplogin')
  })
})
