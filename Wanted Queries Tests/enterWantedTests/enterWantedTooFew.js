var ePage = {}
let eForm = require('../testAssets/enterWantedAssets')
let eFill = require('../testAssets/enterWantedTooFewFill')

module.exports = {
    beforeEach: browser => {
        ePage = browser.page.enterWantedPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Too Few/No Characters Enter Wanted Test': browser => { 
        eFill.forEach(fill => {
            eForm(ePage, fill)
        })
    },
}