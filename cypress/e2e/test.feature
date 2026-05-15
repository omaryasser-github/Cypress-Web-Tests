Feature: BDD Test Suite 

Scenario: Add product to cart 

Given Navigation to website store 
When the user selects an item 
And add it to cart  
And checkout the item 
Then it navigates to  cart Page