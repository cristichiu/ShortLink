const findAllLinks = require("./findAllLinks")
const { v4: uuidv4 } = require('uuid');

function createLink(req, res, linkDB) {
    const { username, option } = req.body
    let { name, originalLink, persLink } = option
    if(persLink == '') persLink = uuidv4()
    linkDB.findOne({ username, persLink }, function(err, docs) {
        if(!docs) {
            linkDB.findOne({ username, name }, function(err, docs) {
                if(!docs) {
                    linkDB.insert({username, name, originalLink, persLink, clicks: 0})
                    findAllLinks(req, res, username, linkDB)
                } else { res.json({error: true, message: "Nu poți pune același nume de mai multe ori."}) }
            })
        } else { res.json({error: true, message: "Nu poți pune același nume pentru link-ul personalizat de mai multe ori."}) }
    })
}

module.exports = createLink