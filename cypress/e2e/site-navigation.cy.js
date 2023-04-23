describe('As a user, I should be able to navigate through the application by clicking buttons or using the browser back and forward buttons', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php', {fixture: 'random-cocktail1.json'});
      cy.visit('http://localhost:3000/');
    });
  
    it('should take me to a new page when I click on "Surprise Me!"', () => {
      cy.get('[href="/cocktail"] > .big-button')
        .click();
      cy.url()
        .should('include', '/cocktail');
    });

    it('should take me back to home when I click on the logo or use the browser back button and back to the Cocktail page when I click the browser forward button', () => {
        cy.get('[href="/cocktail"] > .big-button')
          .click();
        cy.url()
          .should('include', '/cocktail');
        cy.get('.logo')
          .click();
        cy.url()
          .should('include', '/');

        cy.get('[href="/cocktail"] > .big-button')
          .click();
        cy.url()
          .should('include', '/cocktail');
        cy.go('back');
        cy.url()
          .should('include', '/');
        cy.go('forward');
        cy.url()
            .should('include', '/cocktail');
    });

    it('should take me to a new page when I click on "Guide Me!"', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.url()
          .should('include', '/quiz');
    });
  
    it('should take me back to home when I click on the logo or use the browser back button and back to the Quiz page when I click the browser forward button', () => {
        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.url()
          .should('include', '/quiz');
        cy.get('.logo')
          .click();
        cy.url()
          .should('include', '/');

        cy.get('[href="/quiz"] > .big-button')
          .click();
        cy.url()
          .should('include', '/quiz');
        cy.go('back');
        cy.url()
          .should('include', '/');
        cy.go('forward');
        cy.url()
          .should('include', '/quiz');
    });
});