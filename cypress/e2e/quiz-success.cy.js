describe('As a user, I should be able to answer three questions about my cocktail preference and see a targeted "random" cocktail that matches my selections', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka', {fixture: 'vodka-results.json'});
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lime', {fixture: 'lime-results.json'});
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass', {fixture: 'glassware-results.json'});
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=14133', {fixture: 'full-quiz-cocktail.json'});
    })
    
    
  });