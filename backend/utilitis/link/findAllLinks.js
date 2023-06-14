async function findAllLinks(req, res, username, linkDB) {
    await linkDB.find({ username }).then((docs) => {
        res.json({eSrror: false, links: docs})
    }).catch((error) => {res.json({error: true, message: "Ceva nu a mers cum trebuie:("}); console.log(error)})
}

module.exports = findAllLinks