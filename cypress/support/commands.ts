declare namespace Cypress {
    interface Chainable {
      login(username: string, password: string): void
    }
  }

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.get('body').should('be.visible');
});