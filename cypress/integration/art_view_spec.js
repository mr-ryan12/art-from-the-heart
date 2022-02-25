const { get } = require("http")

describe('Art View User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://api.artic.edu/api/v1/artworks/search?q=painting&page=4&fields=id,image_id,title,date_start,date_end,artist_title,thumbnail&limit=15',
    {
      "data": [
        {
          "_score": 1580.782,
          "thumbnail": {
            "alt_text": "Ecuadorian landscape with people, palm trees, waterfall, and volcano in background.",
            "height": 5650,
            "lqip": "data:image/gif;base64,R0lGODlhCAAFAPUAAC0rIjIvIjMwJD85I0I4KUQ+K0A9MUE+ME1DKk1ELUhCM01INFFGMFxON1NKOF1QPmFRPFNNQVVPQFVQR11SQHBjTXJrW3ZwXHhzYn54ZoKAdYaAdYWFd4iFfImHfI6LgoiNhI+TiIySio2WjY6Vjo+XkJCYkJKakwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAIAAUAAAYlwFHpZCKJQCGOZtP5eDAZhQPyiEwkiwCDYjEACAVBo3I5DBCJIAA7",
            "width": 8511
          },
          "date_start": 1857,
          "date_end": 1857,
          "artist_title": "Frederic Edwin Church",
          "image_id": "33fc29fc-097b-576b-c9e6-c3352d9d3f15",
          "title": "View of Cotopaxi"
        }
      ]
    })
    
    cy.visit('http://localhost:3000/painting')
    
  })

  it('should display an image', () => {
    cy.get('.featured-art').should('have.attr', 'src').should('include', 'https://www.artic.edu/iiif/2/33fc29fc-097b-576b-c9e6-c3352d9d3f15/full/843,/0/default.jpg')
  })

  it('should be able to like a piece of art', () => {
    cy.get('.ratings-choice').first().click()
  })

  it('should display art details after click', () => {
    cy.get('.ratings-choice').eq(0).click()
      .get('.title-details').should('have.text', 'TITLE:')
      .get('.art-details-title').eq(0).should('have.text', 'View of Cotopaxi')
      .get('.date-details').should('have.text', 'STARTING DATE:')
      .get('.art-details-start').should('have.text', '1857')
      .get('.ending-date-details').should('have.text', 'ENDING DATE:')
      .get('.art-details-date').should('have.text', '1857')
      .get('.artists-details').should('have.text', 'ARTIST:')
      .get('.art-details-title').eq(1).should('have.text', 'Frederic Edwin Church')
      .get('.description-details').should('have.text', 'DESCRIPTION:')
      .get('.art-details-text').eq(0).should('have.text', 'Ecuadorian landscape with people, palm trees, waterfall, and volcano in background.')
      .get('.percent-message').contains("of other voters liked this art! You have great taste!")
  })

  it('should display art details after click', () => {
    cy.get('.ratings-choice').eq(1).click()
      .get('.title-details').should('have.text', 'TITLE:')
      .get('.art-details-title').eq(0).should('have.text', 'View of Cotopaxi')
      .get('.date-details').should('have.text', 'STARTING DATE:')
      .get('.art-details-start').should('have.text', '1857')
      .get('.ending-date-details').should('have.text', 'ENDING DATE:')
      .get('.art-details-date').should('have.text', '1857')
      .get('.artists-details').should('have.text', 'ARTIST:')
      .get('.art-details-title').eq(1).should('have.text', 'Frederic Edwin Church')
      .get('.description-details').should('have.text', 'DESCRIPTION:')
      .get('.art-details-text').eq(0).should('have.text', 'Ecuadorian landscape with people, palm trees, waterfall, and volcano in background.')
      .get('.percent-message').contains("of other people agree! Congratulations!")
  })
})
