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
  
  it('should display a message describing the purpose of site', () => {
    cy.get('.site-description')
    .should('have.text', 'Test your skills by rating art and seeing how you compare to the community! Detailed information about an art piece is only revealed after you rate to avoid impacting your vote.')
  })

  it('starts with white background', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })

  it('should have a light and dark mode button on nav bar', () => {
    cy.get('.dark-mode-button').should('exist')
  })

  it('should change to black background, and white text after click of light/dark button', () => {
    cy.get('.dark-mode-button').should('exist').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    cy.get('body').should('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('Should be able to select a category', () => {
    cy.get('.category-card').first().click()
  })
})