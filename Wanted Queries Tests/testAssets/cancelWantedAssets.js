module.exports = (cPage, wid, res, dat, result) => {
    cPage
    .setValue('@wid', wid)
    .setValue('@res', res)
    .setValue('@dat', dat)
    .click('#saveBtn')
    .expect.element('span[name="queryBody"]').text.to.equal(result).before(2000)
    cPage.click('@clear')
 }