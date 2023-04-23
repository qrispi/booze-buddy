describe('As a user, I should be able to answer three questions about my cocktail preference and if there are no cocktails that match my preferences, I will see a message explaining that and allowing me to view a "random" cocktail', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Gin', {fixture: 'gin-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Coffee', {fixture: 'coffee-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass', {fixture: 'glassware-results.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=14133', {fixture: 'full-quiz-cocktail.json'});
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php', {fixture: 'random-cocktail3.json'});
        cy.visit('http://localhost:3000/');
    })

    it('should display an error message if there are no matches after finishing the quiz', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Gin')
          .click();
        cy.get('.quiz-buttons')
          .contains('Coffee')
          .click();
        cy.get('.quiz-buttons')
          .contains('Cocktail_glass')
          .click();
        cy.get('button')
          .contains('See Results')
          .click();
        cy.get('h2')
          .contains("Wow you're picky!");
        cy.get('p')
          .contains("We don't have any cocktails that match those selections...");
    });    

    it('should give the option to see a "random" cocktail if there are no matches after finishing the quiz', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Gin')
          .click();
        cy.get('.quiz-buttons')
          .contains('Coffee')
          .click();
        cy.get('.quiz-buttons')
          .contains('Cocktail_glass')
          .click();
        cy.get('button')
          .contains('See Results')
          .click();
        cy.get('button')
          .contains("Surprise Me!");
    }); 
    
    it('should display a random cocktail if the user clicks "Surprise Me! after no matches are found after finishing the quiz', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.get('.quiz-buttons')
          .contains('Gin')
          .click();
        cy.get('.quiz-buttons')
          .contains('Coffee')
          .click();
        cy.get('.quiz-buttons')
          .contains('Cocktail_glass')
          .click();
        cy.get('button')
          .contains('See Results')
          .click();
        cy.get('button')
          .contains("Surprise Me!")
          .click();
        cy.get('h2')
          .contains('Atlantic Sun');
        cy.get('ul')
          .children()
          .should('have.text', '2 cl Smirnoff Vodka2 cl Southern Comfort2 cl Passion fruit syrup6 cl Sweet and sour1 dash Club soda'); 
    }); 
});