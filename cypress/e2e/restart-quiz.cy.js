describe('As a user, I should be able to restart the quiz from the quiz page once I have completed it. This option should not appear until the quiz is fully finished.', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka', {fixture: 'vodka-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lime', {fixture: 'lime-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass', {fixture: 'glassware-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=14133', {fixture: 'full-quiz-cocktail.json'});
        cy.visit('http://localhost:3000/');
    });

    it('should display a button that allows me to restart the quiz after completing it', () => {
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
        cy.get('button')
          .contains('Restart Quiz!')
          .click();
        cy.get('h2')
          .contains('Pick Your Poison');
        cy.get('.quiz-buttons')
          .get('button')
          .should('have.length', '6')
          .contains('Vodka');
    });

    it('should not be visible until the quiz is complete', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('button')
          .contains('Restart Quiz!')
          .should('not.exist');
          
        cy.get('.quiz-buttons')
          .contains('Vodka')
          .click();
        cy.get('button')
          .contains('Restart Quiz!')
          .should('not.exist');

        cy.get('.quiz-buttons')
          .contains('Lime')
          .click();
        cy.get('button')
          .contains('Restart Quiz!')
          .should('not.exist');

        cy.get('.quiz-buttons')
          .contains('Cocktail_glass')
          .click();
        cy.get('button')
          .contains('Restart Quiz!')
          .should('not.exist');

        cy.get('button')
          .contains('See Results')
        cy.get('button')
          .contains('Restart Quiz!')
          .should('not.exist');

        cy.get('button')
          .contains('See Results')
          .click();
        cy.get('button')
          .contains('Restart Quiz!')
          .click();
        cy.get('h2')
          .contains('Pick Your Poison');
        cy.get('.quiz-buttons')
          .get('button')
          .should('have.length', '6')
          .contains('Vodka');
    });
});