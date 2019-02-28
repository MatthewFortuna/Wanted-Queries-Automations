var mPage = {}
let mForm = require('../testAssets/modifyWantedAssets')
let mFill = require('../testAssets/modifyWantedFill')

module.exports = {
    beforeEach: browser => {
        mPage = browser.page.modifyWantedPage()
        mPage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'modify Wanted Test': browser => { 
        mFill.forEach(fill => {
            mForm(mPage, fill)
        })
    },
}