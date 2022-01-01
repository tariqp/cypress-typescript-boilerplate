declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): void;
    navigateToTheLoginPage(): void;
  }
}

Cypress.Commands.add('navigateToTheLoginPage', () => {
  cy.get('.nav-item > a[href="#/login"]').click();
});

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
