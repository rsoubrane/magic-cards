context('Navigation Bar', () => {
	before(() => {
		cy.visit('/home');
	});

	it('should display the navbar properly', () => {
		cy.get('#test-navbar', { timeout: 10000 }).should('be.visible').and('contain', 'Cards', 'Legals', 'Contact');
		cy.get('#test-navbar-toolbar').children().should('have.length', 4);
		cy.get('#text-navbar-menu').children().should('have.length', 5);
		cy.get('#test-logo').should('have.length', 1);
	});
});

context('Navigation', () => {
	before(() => {
		cy.visit('/home');
	});

	it('should be able to navigate to the cards pages', () => {
		cy.get('#text-navbar-menu').contains('Cards').click();
		cy.wait(2000);
		cy.get('h4').contains('Cards Page');
	});

	it('should be able to navigate to the legal mentions pages', () => {
		cy.get('#text-navbar-menu').contains('Legal Mentions').click();
		cy.wait(2000);
		cy.get('h1').contains('Legal Mentions Page');
	});

	it('should be able to navigate to the contact pages', () => {
		cy.get('#text-navbar-menu').contains('Contact').click();
		cy.get('h3').contains("Feel free to send us a message. We'll be glad to hear from you.");
	});

	it('should be able to navigate to the home page', () => {
		cy.get('#test-logo').click();
		cy.wait(2000);
		cy.get('h1').contains('Magic: The Gathering');
	});
});

context('Authentication', () => {
	before(() => {
		cy.visit('/home');
	});

	it('should display the authentication menu', () => {
		cy.get('#test-account-popover').children('button').click().should('not.be.visible');
		cy.get('#test-account-popover-login')
			.should('be.visible')
			.invoke('text')
			.then((text) => text.trim())
			.should('equal', 'Login');
	});

	it('should be able to login', () => {
		cy.get('#test-account-popover-login').click();
		cy.contains('User Romain Soubrane successfully logged in!');
	});

	it('should display the updated authentication menu', () => {
		cy.wait(3000);
		cy.get('#test-account-popover').children('button').click().should('not.be.visible');
		cy.get('#test-account-popover-logout')
			.should('be.visible')
			.invoke('text')
			.then((text) => text.trim())
			.should('equal', 'Logout');
	});

	it('should be able to logout', () => {
		cy.get('#test-account-popover-logout').click();
		cy.contains('User successfully logged out!');
	});
});
