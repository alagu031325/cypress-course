describe('Forms Tests',() => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form',() => {
        //First test if the page contains the correct title
        cy.contains(/testing forms/i)
        //create alias if something is not globally used across tests
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('alagu2511992@gmail.com');
        cy.contains(/Successfully subbed: alagu2511992@gmail.com!/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/Successfully subbed: alagu2511992@gmail.com!/i).should('exist');
        //wait for success msg to disappear
        cy.wait(3000) //3 sec
        cy.contains(/Successfully subbed: alagu2511992@gmail.com!/i).should('not.exist');
        //Email id without .com
        cy.get('@subscribe-input').type('alagu2511992@gmail.io');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/invalid email: alagu2511992@gmail.io!/i).should('exist');
        cy.wait(3000) //3 sec
        cy.contains(/invalid email: alagu2511992@gmail.io!/i).should('not.exist');
        //Clicking subscribe button without the email
        cy.contains(/fail!/i).should('not.exist'); 
        cy.getDataTest('subscribe-button').click();
        cy.contains(/fail!/i).should('exist');
    })
})