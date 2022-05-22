context('Cards Details', () => {
	before(() => {
		cy.visit('/cards/8d74a469-c71d-4773-99d3-5456b31df424');
	});

	it('should find the title of the cards page', () => {
		cy.get('h4').contains('Card Details');
	});

	it('should be able to display the card details', () => {
		cy.get('#test-card-image').should('have.length', 1);
		cy.get('#test-card-content')
			.should('not.be.visible')
			.and(
				'contain',
				'Emrakul, the Promised End',
				'Legendary Creature - Eldrazi',
				'13/13',
				'Illustrated by Jaime Jones'
			);
		cy.get('#test-details-card')
			.children()
			.should('have.length', 12)
			.and(
				'contain',
				'Standard',
				'Pioneer',
				'Pauper',
				'Benny',
				'Brawl',
				'Historic',
				'Explorer',
				'Legacy',
				'Vintage',
				'Commander',
				'Alchemy'
			);
	});
});

context('Breadcrumbs', () => {
	it('should display the page breadcrumbs', () => {
		cy.get('#test-breadcrumbs').children().should('have.length', 1).children().should('have.length', 3);
	});

	it('should be able to go navigate to the cards list using the breadcrumb', () => {
		cy.get('#test-breadcrumbs').contains('a').click({ force: true }).wait(5000);
		cy.get('h4').contains('Cards Page');
	});
});
