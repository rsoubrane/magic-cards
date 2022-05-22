context('Home Page', () => {
	before(() => {
		cy.visit('/home');
	});

	it('should find the title of the homepage', () => {
		cy.get('h1').contains('Magic: The Gathering');
	});

	it('should find all the headers of the homepage', () => {
		cy.get('h2').contains('Game Description');
		cy.get('h2').contains('Game Market');
		cy.get('h2').contains('The Project');
		cy.get('h2').contains('Technologies used');
	});

	it('should be able to navigate to the card', () => {
		cy.get('h3').contains('Emrakul, the Promised End');
		cy.get('#test-main-card-content').children('a').click();
		cy.get('h4').contains('Card Details');
		cy.get('h4').contains('Emrakul, the Promised End');
		cy.get('#test-details-card').children().should('have.length', 12);
	});

	it('should be able to go back home', () => {
		cy.get('#test-logo').should('have.length', 1).click();
		cy.wait(2000);
		cy.get('h1').contains('Magic: The Gathering');
	});
});
