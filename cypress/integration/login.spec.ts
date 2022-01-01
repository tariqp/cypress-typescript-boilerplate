const testData = require('../fixtures/users.json');

const { tarik } = testData;
describe("Login suite", () => { 

    beforeEach(() => { 
        cy.visit('/');
    }); 

    it('Login as Student', () => { 
        cy.navigateToTheLoginPage();
        cy.login(tarik.email, tarik.password);
    });
});