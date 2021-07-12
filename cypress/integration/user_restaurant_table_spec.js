/* eslint-disable no-undef */
describe('UserRestaurantsTable', function () {

  const baseUrl = 'http://localhost:3001'
  
  it('Allows a user to see a list of their own restaurants by creation date, sort by name, and re-sort to the original order', function () {

    cy.visit(`${baseUrl}/signuplogin`)
    cy.get('#login_email')
      .type('pg@example.com')
      .should('have.value', 'pg@example.com')
    cy.get('#login_password')
      .type('123')
      .should('have.value', '123')
    cy.get('#login_submit')
      .click()

    cy.contains('View My Restaurants')
      .click()

    cy.get('.makeStyles-name-29').then(names => {
        expect(names[0]).to.contain.text("Phoebe's Cafe")
        expect(names[1]).to.contain.text("Max Lite Food")
        expect(names[2]).to.contain.text("The Square Meal")
        expect(names[3]).to.contain.text("Sea Food")
        expect(names[4]).to.contain.text("Adam Street Eatery")
      })

    cy.contains('Sort By Restaurant Name')
      .click()

    cy.get('.makeStyles-name-29').then(names => {
        expect(names[0]).to.contain.text("Adam Street Eatery")
        expect(names[1]).to.contain.text("Max Lite Food")
        expect(names[2]).to.contain.text("Phoebe's Cafe")
        expect(names[3]).to.contain.text("Sea Food")
        expect(names[4]).to.contain.text("The Square Meal")
      })
  })
})