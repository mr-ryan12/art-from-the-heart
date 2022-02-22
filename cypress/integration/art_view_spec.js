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
    .get('.title-details').should('have.text', 'TITLE:')
    .get('.art-details-text').eq(0).should('have.text', 'Untitled (Painting)')
    .get('.date-details').should('have.text', 'STARTING DATE:')
    .get('.art-details-text').eq(1).should('have.text', '1953')
    .get('.ending-date-details').should('have.text', 'ENDING DATE:')
    .get('.art-details-text').eq(2).should('have.text', '1954')
    .get('.artists-details').should('have.text', 'ARTIST:')
    .get('.art-details-text').eq(3).should('have.text', 'Mark Rothko')
    .get('.description-details').should('have.text', 'DESCRIPTION:')
    .get('.art-details-text').eq(4).should('have.text', 'A work made of oil on canvas.')
    .get('.percent-message').contains("of other voters liked this art! You have great taste!")
  })

  it('should display art details after click', () => {
    cy.get('.ratings-choice').eq(1).click()
    .get('.title-details').should('have.text', 'TITLE:')
    .get('.art-details-text').eq(0).should('have.text', 'Untitled (Painting)')
    .get('.date-details').should('have.text', 'STARTING DATE:')
    .get('.art-details-text').eq(1).should('have.text', '1953')
    .get('.ending-date-details').should('have.text', 'ENDING DATE:')
    .get('.art-details-text').eq(2).should('have.text', '1954')
    .get('.artists-details').should('have.text', 'ARTIST:')
    .get('.art-details-text').eq(3).should('have.text', 'Mark Rothko')
    .get('.description-details').should('have.text', 'DESCRIPTION:')
    .get('.art-details-text').eq(4).should('have.text', 'A work made of oil on canvas.')
    .get('.percent-message').contains("of other people agree! Congratulations!")

    
  })





})
