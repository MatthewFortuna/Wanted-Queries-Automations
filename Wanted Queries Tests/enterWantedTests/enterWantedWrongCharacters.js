var ePage = {}
let eForm = require('../testAssets/enterWantedAssets')
let eFill = require('../testAssets/enterWantedWrongCharactersFill')

module.exports = {
    beforeEach: browser => {
        ePage = browser.page.enterWantedPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Wrong Characters Enter Wanted Test': browser => { 
        eFill.forEach(fill => {
            eForm(ePage, fill)
        })
    },
}