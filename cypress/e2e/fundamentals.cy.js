//describe block with 2 arguments
describe('Fundamentals Test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })

  //"it" block contains single test within the overall test file - can use methods available on cy object which is globally available
  it('Contains correct header text', () => {
    
    //to get an element using attribute we need to use []
    //can pass regular expressions within conatins and "i" makes case insensitive
    cy.getDataTest("fundamentals-header").contains(/Testing Fundamentals/i);
    //can also use assertion - .should('contain.text','Testing Fundamentals')
  })
  //it.only - to just run this one test 
  it('Accordion works correctly', () => {
    //Navigate - uses base url
    //cy.visit('/fundamentals')
    
    //cy.get('[data-test="accordion-item-1"]').click().pause();
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    //inside item-1 select the div with the role of btn
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
  })
})

//Tests must not be flaky - that is reling on a CSS class that can change often and the tests can pass and fail interchangablely 

