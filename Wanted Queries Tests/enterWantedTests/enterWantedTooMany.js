var ePage = {}
let eForm = require('../testAssets/enterWantedAssets')
let eFill = require('../testAssets/enterWantedTooManyFill')

module.exports = {
    beforeEach: browser => {
        ePage = browser.page.enterWantedPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    
    'IDCheck': browser => { 
        eFill.forEach(fill => {
            eForm(ePage, fill)
        })
    },
}