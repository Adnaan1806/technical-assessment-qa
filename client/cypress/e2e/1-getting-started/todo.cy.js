/// <reference types="cypress" />

describe("Functionality of Items", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Verify if user is able to Add a new item", () => {
    const Item = "Cars";

    cy.get('input').type(Item);
    cy.get('button').click();
    cy.log("Item Added successfully");

    // check if item is displayed in the list
    cy.get('li');
  });
  

  it("Verify if user is able to Delete an item and check if the list is empty", () => {  
    const Item = "Books";

    // Add the item first
    cy.get('input').type(Item);
    cy.get('button').click();

    // Now delete the item
    cy.get('li > button').click(); // Make sure this button targets the correct delete button

    // Check if the item is removed
    cy.contains(Item).should("not.exist");

    // check if list is empty
    cy.get('ul').children().should('have.length', 0); 

    // Diplay message if there are no items in the list
    cy.log("Item list is empty, please add an item to view the list");
  });


  it("Verify if Input field has a maximum character of 25", () => {
    const item = "Wireless Bluetooth";
    
    cy.get('input').type(item);
  
    // Get the input value and check its length
    cy.get('input').invoke('val').then((inputValue) => {
      expect(inputValue.length).to.be.lessThan(26); // validating the input field character length
    });


});
});
