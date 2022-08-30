Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

const CSS = require('../e2e/configuration.cy').CLASS_CSS
const URL = require('../e2e/configuration.cy').CONSTANTS.URL

describe('Automation assignment for TARGOMO', () => {


    it('Navigating to URL', () => {
        cy.visit(URL)

    })

    it('Clicking on one of the tree item', () => {
        cy.get(CSS.ACCOMMONDATION_CHECKBOX).click()
        cy.get(CSS.ACCOMMONDATION_TEXT).should('have.text', 'Accommodation')
        cy.get(CSS.COLOR_BULLET_LENGTH).should('have.length.above', 5)
    })

    it('Getting the location coordinated and to check if its mainting its state', () => {
        cy.visit(URL + CSS.SHE_FAH_Hotel)
        cy.wait(2000)
        cy.reload()
        cy.url().as('url')
        cy.get('@url').should('include', '/?lat=40.7698&lng=-74.02832&zoom=20.32&selected=apartment')
    })

    it('Testing if EMBED THIS MAP button works', () => {
        cy.get(CSS.EMBED_THIS_MAP).then(($btn) => {
            if ($btn.is(":enabled")) {
                cy.wrap($btn).click()
            }

            else {
                cy.log('button is disabled')
            }


        })


    })





})