describe('Home page', function () {

  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it ('Allows navigation via app bar', function () {

    cy.contains('A b o u t').click()

    cy.url()
      .should('include', '/about')

    cy.contains('P r o p r i e t o r s').click()

    cy.url()
      .should('include', '/proprietors')

    cy.contains('P a t r o n s').click()

    cy.url()
      .should('include', '/restaurants')

    cy.contains('S i g n u p / L o g i n').click()

    cy.url()
      .should('include', '/signuplogin')

    cy.contains('Restauranter').click()

    cy.url()
      .should('equal', 'http://localhost:3001/')
  })

  it('Allows navigation via proprietors select card', function () {

    cy.contains('FOR RESTAURANT PROPRIETORS').click()

    cy.url()
      .should('include', '/proprietors')
  })

  it('Allows navigation via proprietors button', function () {

    cy.contains('Hungry people').click()

    cy.url()
      .should('include', '/proprietors')
  })

  it('Allows navigation via patrons select card', function () {

    cy.contains('FOR RESTAURANT PATRONS').click()

    cy.url()
      .should('include', '/restaurants')
  })

  it('Allows navigation via patrons button', function () {

    cy.contains('Show me restaurants').click()

    cy.url()
      .should('include', '/restaurants')
  })
})