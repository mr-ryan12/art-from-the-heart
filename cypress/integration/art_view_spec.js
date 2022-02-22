const { get } = require("http")

describe('check to see if it works', () => {
  beforeEach(() => {
    cy.intercept('https://api.artic.edu/api/v1/artworks/search?q=painting&fields=image_id,title,date_start,date_end,artist_title,thumbnail', 
    {
      "data": [
        {
          "_score": 108.59207,
          "thumbnail": {
            "alt_text": "A work made of oil on canvas.",
            "width": 10184,
            "lqip": "data:image/gif;base64,R0lGODlhBgAFAPQAAL9xNL9yOc5pH9BoH8pnJMxpJdFpJ9NsKNZtKNZuKMBxNdaPL8yeJ8yfJ82eK8ucLNOMMtaOMdaPMcGBTdOJS8ybS8CEUdCKUNaPVc6aUNaXU9iQUdWaUgAAAAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYoBUogDJdRCEMFGYcCbJxkLREWvU0jJOFADs=",
            "height": 9067
          },
          "date_start": 1953,
          "date_end": 1954,
          "artist_title": "Mark Rothko",
          "image_id": "df0a03a4-be1c-3f8d-73b1-5941dca57bba",
          "title": "Untitled (Painting)"
        }
      ]
    })
    
    cy.visit('http://localhost:3000/painting')
    
  })
  it('should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  }) 

  it('should display an image', () => {
    cy.get('.featured-art').should('have.attr', 'src').should('include', 'https://www.artic.edu/iiif/2/df0a03a4-be1c-3f8d-73b1-5941dca57bba/full/843,/0/default.jpg')
  })

  it('should be able to like a piece of art', () => {
    cy.get('.ratings-choice').first().click()
  })

  it('should display art details after click', () => {
    cy.get('.ratings-choice').eq(0).click()
    cy.get('.title-details').should('have.text', 'TITLE:')
    cy.get('.date-details').should('have.text', 'STARTING DATE:')
    cy.get('.ending-date-details').should('have.text', 'ENDING DATE:')
    cy.get('.artists-details').should('have.text', 'ARTIST:')
    cy.get('.description-details').should('have.text', 'DESCRIPTION:')
  })

  it('should display art details after click', () => {
    cy.get('.ratings-choice').eq(1).click()
    cy.get('.title-details').should('have.text', 'TITLE:')
    cy.get('.date-details').should('have.text', 'STARTING DATE:')
    cy.get('.ending-date-details').should('have.text', 'ENDING DATE:')
    cy.get('.artists-details').should('have.text', 'ARTIST:')
    cy.get('.description-details').should('have.text', 'DESCRIPTION:')
  })
})
