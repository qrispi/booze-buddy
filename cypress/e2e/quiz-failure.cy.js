describe('As a user, I should be able to answer three questions about my cocktail preference and if there are no cocktails that match my preferences, I will see a message explaining that and allowing me to view a "random" cocktail', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Gin', {fixture: 'gin-results.json'});
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Coffee', {fixture: 'coffee-results.json'});
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass', {fixture: 'glassware-results.json'});
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=14133', {fixture: 'full-quiz-cocktail.json'});
    })
    
    
});