describe('Contact Form', () => {
	beforeEach(() => {
		cy.visit('/contact');
	});

	it('successfully display the form page', () => {
		cy.get('h3').contains("Feel free to send us a message. We'll be glad to hear from you.");
		cy.get('#name').should('be.visible');
		cy.get('#emailAddress').should('be.visible');
		cy.get('#message').should('be.visible');
		cy.get('button[type="submit"]')
			.should('be.visible')
			.and('have.text', 'Send message')
			.and('have.attr', 'disabled');
	});

	it('successfully fill the contact form', () => {
		cy.get('#name').type('John Doe');
		cy.get('#emailAddress').type('john-doe@example.com');
		cy.get('#message').type('Hello World! This is a test message.');
		cy.get('button[type="submit"]').should('be.visible').and('not.have.attr', 'disabled');

		// cy.get('button[type="submit"]').click();
		// cy.contains('Thanks John Doe for sending us a message.').should('be.visible');
	});
});
