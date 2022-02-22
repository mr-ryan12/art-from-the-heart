const { createYield } = require("typescript")

describe('check to see if it works', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  }) 

  it('should display a page title', () => {
    cy.get('.logo').should('have.text', 'Art From TheHeart')
  })

  it('should display a logo', () => {
    cy.get('.logo-icon').should('exist')
  })

  it('should display a page welcome message', () => {
    cy.get('.welcome-message')
      .should('have.text', 'Welcome to Art From the Heart!Test your skills by rating art and seeing how you compare to the community!Detailed information about an art piece is only revealed after you rate to avoid impacting your vote.Good luck!')
  })

  it('Should be able to select a category', () => {
    cy.get('.category-card').first().click()
  })

  

})