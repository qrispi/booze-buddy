describe('As a user, I should be informed if there are issues with the server or network requests', () => {
    beforeEach(() => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/random.php', {
            statusCode: 404,
            body: '404 Not Found!',
        });
        cy.visit('http://localhost:3000/');
    });

    it('should display an error message if there is an issue with fetching the random cocktail', () => {
        cy.get('[href="/cocktail"] > .big-button')
          .click();
        cy.get('p')
          .contains('Bummer... We are experiencing server issues right now.');
        cy.get('p')
          .contains('Please try again later!');
    }); 
    
    it('should display an error message and not let the user proceed if there is an issue with fetching after the first quiz question', () => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka', {
            statusCode: 404,
            body: '404 Not Found!',
        });

        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Vodka')
          .click();
        cy.get('p')
          .contains('Bummer... We are experiencing server issues right now.');
        cy.get('p')
          .contains('Please try again later!');
        cy.get('.quiz-buttons')
          .contains('Vodka');
    });

    it('should display an error message and not let the user proceed if there is an issue with fetching after the second quiz question', () => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lime', {
            statusCode: 404,
            body: '404 Not Found!',
        });

        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Vodka')
          .click();
        cy.get('.quiz-buttons')
          .contains('Lime')
          .click();
        cy.get('p')
          .contains('Bummer... We are experiencing server issues right now.');
        cy.get('p')
          .contains('Please try again later!');
        cy.get('.quiz-buttons')
          .contains('Lime');
    });

    it('should display an error message and not let the user proceed if there is an issue with fetching after the third quiz question', () => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass', {
            statusCode: 404,
            body: '404 Not Found!',
        });

        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Vodka')
          .click();
        cy.get('.quiz-buttons')
          .contains('Lime')
          .click();
        cy.get('.quiz-buttons')
          .contains('Cocktail_glass')
          .click();
        cy.get('p')
          .contains('Bummer... We are experiencing server issues right now.');
        cy.get('p')
          .contains('Please try again later!');
        cy.get('.quiz-buttons')
          .contains('Cocktail_glass');
    });

    it('should display an error message and not let the user proceed if there is an issue with fetching after completing the quiz', () => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=14133', {
            statusCode: 404,
            body: '404 Not Found!',
        });
        cy.intercept('https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=178357', {
            statusCode: 404,
            body: '404 Not Found!',
        });

        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Vodka')
          .click();
        cy.get('.quiz-buttons')
          .contains('Lime')
          .click();
        cy.get('.quiz-buttons')
          .contains('Cocktail_glass')
          .click();
        cy.get('button')
          .contains('See Results')
          .click();
        cy.get('p')
          .contains('Bummer... We are experiencing server issues right now.');
        cy.get('p')
          .contains('Please try again later!');
    });
});