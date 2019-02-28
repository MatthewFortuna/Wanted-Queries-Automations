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
    'Correct Form Entry Test': browser => { 
        cForm(cPage, '1234567890', 'Did Not Speed', '02272019', '1234567890.Did Not Speed.2019-02-27')
    },
}