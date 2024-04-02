describe('template spec', () => {

    beforeEach(() => {
        cy.task('resetDB');
    })

    it('passes', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://127.0.0.1:8000');

        // login
        cy.get(':nth-child(2) > .jumbotron > :nth-child(2) > .btn').click();
        cy.get(':nth-child(2) > :nth-child(4) > .btn > .fa').click();
        cy.get('[type="submit"]').click();

        // new post creation
        cy.get('.actions > .btn').click();
        cy.get('#post_title').type('new title from cypress');
        cy.get('#post_summary').type('new summary from cypress');
        cy.get('#post_content').type('new content from cypress');
        cy.get('#post_publishedAt').click();
        cy.get('[aria-label="April 17, 2024"]').click();
        cy.get('.bootstrap-tagsinput').click();
        cy.get('.tt-input').type('cypress');
        cy.get('form > :nth-child(6)').click();
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click();

        // check the result
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('be.visible').contains('new title from cypress');
        /* ==== End Cypress Studio ==== */
    })
})