var cPage = {}
let cForm = require('../testAssets/cancelWantedAssets')

module.exports = {
    beforeEach: browser => {
        cPage = browser.page.cancelWantedPage()
        cPage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Too few Characters Entry Test': browser => { 
        cForm(cPage, '123456789', '123456789', '13322098', '')
    },
}