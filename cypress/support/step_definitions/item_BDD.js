import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import enviroment from "../POM/enviroment"
import items from "../POM/items"

const env = new enviroment()
const browser = new items()

Given('Navigation to website store ' , () => {
    env.dev()
})

When('I browse to cloth section' , () => {
    browser.navigateTOCloth()
})

When('the user selects an item' , () => {
    browser.selectProduct()
})          

When('add it to cart' , () => {
    browser.addProductToCart()
})

When('checkout the item' , () => {
    browser.checkoutItem()
})

Then('it navigationtes to  cart Page' , () => {
    browser.cartPage()
})