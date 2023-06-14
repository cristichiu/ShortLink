const findAllLinks = require('./findAllLinks')

async function deleteLink(req, res, linkDB) {
    const { username, name } = req.body
    await linkDB.findOneAndDelete({ username, name }).catch((error) => { console.log(error) })
    findAllLinks(req, res, username, linkDB)
}

module.exports = deleteLink