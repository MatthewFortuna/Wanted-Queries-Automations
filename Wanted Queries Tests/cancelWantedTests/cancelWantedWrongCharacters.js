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
        cForm(cPage, 'abcd-=ceiv', '7229304587293045', 'abajeigh', '')
    },
}