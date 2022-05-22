context('Cards Page', () => {
	before(() => {
		cy.visit('/cards');
	});

	it('should find the title of the cards page', () => {
		cy.get('h4').contains('Cards Page');
	});

	it('should find all the cards of the page', () => {
		cy.get('#test-container-cards').children().should('have.length', 33);
	});

	it('should be able to navigate to a card', () => {
		cy.get('#test-list-card').children().should('have.length', 1).click().wait(4000);
		cy.get('h4').contains('Card Details');
		cy.get('h4').contains('Emrakul, the Promised End');
		cy.get('#test-details-card').children().should('have.length', 12);
	});

	it('should be able to go back to the cards list', () => {
		cy.get('#test-logo').should('have.length', 1).click();
		cy.get('h1').contains('Magic: The Gathering');
	});
});
