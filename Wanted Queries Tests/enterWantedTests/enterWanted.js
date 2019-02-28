var ePage = {}
let eForm = require('../testAssets/enterWantedAssets')

module.exports = {
    beforeEach: browser => {
        ePage = browser.page.enterWantedPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Correct Form Entry Tests': browser => { 
        eForm(ePage, 'Driving Suspension', 'BRKE', 'B2MS8HA9B', 'Jimmy Dooper', 'M', 'A', '511', '183', 'Black', 'License Expired', '02012019', 
        'B492839403849', 'CO', '10102010', 'BB4739', 'CO', '08162018', 
        'Driving Suspension.BRKE.B2MS8HA9B.Jimmy Dooper.M.A.511.183.Black.License Expired.2019-02-01.B492839403849.CO.2010-10-10.BB4739.CO.2018-08-16')
    },

}