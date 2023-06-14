const findAllLinks = require('./findAllLinks')

function deleteLink(req, res, linkDB) {
    const { username, name } = req.body
    linkDB.remove({ username, name })
    findAllLinks(req, res, username, linkDB)
}

module.exports = deleteLink