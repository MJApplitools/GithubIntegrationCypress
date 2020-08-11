describe('Hello Cypress, This is Applitools', () => {
  it('works', () => {
    cy.visit('https://applitools.com/helloworld');
    cy.eyesOpen({
      appName: 'Hello Cypress, This is Applitools!',
      testName: 'My first Cypress Test'
    });
    cy.eyesCheckWindow('Login Page');
    cy.eyesClose();
  });
});
