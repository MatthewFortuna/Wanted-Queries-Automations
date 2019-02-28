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
    'Too Many Characters Entry Test': browser => { 
        cForm(cPage, '12345678901', '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901', '13322098', '')
    },
}