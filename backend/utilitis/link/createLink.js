const findAllLinks = require("./findAllLinks")
const { v4: uuidv4 } = require('uuid');

async function createLink(req, res, linkDB) {
    const { username, option } = req.body
    let { name, originalLink, persLink } = option
    if(persLink == '') persLink = uuidv4()
    await linkDB.findOne({ username, persLink }).then(async (docs) => {
        if(!docs) {
            await linkDB.findOne({ username, name }).then(async (docs) => {
                if(!docs) {
                    await linkDB.create({username, name, originalLink, persLink, clicks: 0}).catch((error) => { console.log(error); res.json({error: true, message: "Ceva nu a mers cum trebuie:("}) })
                    findAllLinks(req, res, username, linkDB)
                } else { res.json({error: true, message: "Nu poți pune același nume de mai multe ori."}) }
            }).catch((error) => { console.log(error); res.json({error: true, message: "Ceva nu a mers cum trebuie:("}) })
        } else { res.json({error: true, message: "Nu poți pune același nume pentru link-ul personalizat de mai multe ori."}) }
    }).catch((error) => { console.log(error); res.json({error: true, message: "Ceva nu a mers cum trebuie:("}) })
}

module.exports = createLink