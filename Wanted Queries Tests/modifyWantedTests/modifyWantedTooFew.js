var mPage = {}
let mForm = require('../testAssets/modifyWantedAssets')
let mFill = require('../testAssets/modifyWantedTooFewFill')

module.exports = {
    beforeEach: browser => {
        mPage = browser.page.modifyWantedPage()
        mPage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Too Few/No Characters modify Wanted Test': browser => { 
        mFill.forEach(fill => {
            mForm(mPage, fill)
        })
    },
}