describe('As a user, I should be able to answer three questions about my cocktail preference and see a targeted "random" cocktail that matches my selections', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka', {fixture: 'vodka-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lime', {fixture: 'lime-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass', {fixture: 'glassware-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=14133', {fixture: 'full-quiz-cocktail.json'});
        cy.visit('http://localhost:3000/');
    });
    
    it('should see a "Guide Me!" button on the landing page', () => {
        cy.get('[href="/quiz"] > .big-button')
          .contains('Guide Me!');
    });
    
    it('should take me to a new page when I click on "Guide Me!"', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.url()
          .should('include', '/quiz');
    });

    it('should display a question about alcohol choice and buttons to select one', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('h2')
          .contains('Pick Your Poison');
        cy.get('.quiz-buttons')
          .get('button')
          .should('have.length', '6')
          .contains('Vodka');
    });

    it('should display a question about mixer choice and different buttons after clicking an alcohol type', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Vodka')
          .click();
        cy.get('h2')
          .contains('Pick Your Mixer');
        cy.get('.quiz-buttons')
          .get('button')
          .should('have.length', '6')
          .contains('Lime');
    });

    it('should display a question about glassware type and different buttons after clicking an alcohol type and clicking a mixer type', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Vodka')
          .click();
        cy.get('.quiz-buttons')
          .contains('Lime')
          .click();
        cy.get('h2')
          .contains('Pick Your Glass');
        cy.get('.quiz-buttons')
          .get('button')
          .should('have.length', '8')
          .contains('Cocktail_glass');
    });

    it('should display a button to see my results after clicking an alcohol type, clicking a mixer type and clicking a glass type', () => {
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
          .contains('See Results');
    });

    it('should display a cocktail that has the attributes I selected after finishing the quiz', () => {
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
        cy.get('h2')
            .contains('Cosmopolitan Martini');
        cy.contains('Vodka');
        cy.contains('Lime');
        cy.contains('Cocktail Glass');
    });    
});