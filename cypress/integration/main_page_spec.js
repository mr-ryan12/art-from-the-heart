const { createYield } = require("typescript")

describe('Main Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display a page title', () => {
    cy.get('.logo').should('have.text', 'Art From TheHeart')
  })

  it('should display a logo', () => {
    cy.get('.logo-icon').should('exist')
  })

  it('should display a page welcome message', () => {
    cy.get('.title')
      .should('have.text', 'Welcome to Art From the Heart!')
  })

  it('Should be able to select a category', () => {
    cy.get('.category-card').first().click()
  })
})