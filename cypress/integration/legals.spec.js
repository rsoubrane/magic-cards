context('Legal Mentions Page', () => {
	before(() => {
		cy.visit('/legals');
	});

	it('should find the title of the legal mentions page', () => {
		cy.get('h1').contains('Legal Mentions Page');
	});

	it('should find the information of the license', () => {
		cy.get('h2').contains('Modified BSD License');
		cy.get('em').contains('Romain SOUBRANE');
	});
});
