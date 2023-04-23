describe('As a user, I should be able to see a random cocktail displayed when I select “Surprise me” on the main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php', {fixture: 'random-cocktail1.json'});
  })
  
  it('should see a "Surprise Me!" button on the landing page', () => {
    cy.get('[href="/cocktail"] > .big-button')
      .contains('Surprise Me!');
  });

  it('should take me to a new page when I click on "Surprise Me!"', () => {
    cy.get('[href="/cocktail"] > .big-button')
      .click();
    cy.url('http://localhost:3000/cocktail');
  });

  it('should display a random cocktail after clicking "Surprise Me!"', () => {
    cy.get('[href="/cocktail"] > .big-button')
      .click();
    cy.get('h2')
      .contains('Alice Cocktail');
    cy.get('ul')
      .children()
      .should('have.text', '1 cl Grenadine1 cl Orange juice2 cl Pineapple juice4 cl Cream');
  });

  it('should display a different random cocktail after clicking "Spin Again!"', () => {
    cy.get('[href="/cocktail"] > .big-button')
      .click();
    cy.get('h2')
      .contains('Alice Cocktail');
    cy.get('ul')
      .children()
      .should('have.text', '1 cl Grenadine1 cl Orange juice2 cl Pineapple juice4 cl Cream');

    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php', {fixture: 'random-cocktail2.json'});

    cy.get('button')
      .contains('Spin Again!')
      .click();
    cy.get('h2')
      .contains('Gin Toddy');
    cy.get('ul')
      .children()
      .should('have.text', '2 oz Gin2 tsp Water1/2 tsp Powdered sugar1 twist of Lemon peel'); 
  });
});