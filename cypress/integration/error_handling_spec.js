const { createYield } = require("typescript")

describe('check to see if it works', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/askdjalskdasdkjasd')
  })

  it('User should see the nav bar, with page title and logo', () => {
    cy.get('.logo-icon').should('exist')
    .get('.logo').should('have.text', 'Art From TheHeart')
  })

  it('User should see error handling gif', () => {
    cy.get('.error-pic').should('be.visible')
  })

  it('User should see error message', () => {
    cy.get('.error-message').should('be.visible')
  })

  it('User should see back to main page button, and be able to click it to return to main page', () => {
    cy.get('.return-to-main').contains('Back To Main Page').click()
    .url().should("eq", "http://localhost:3000/");
  })

})