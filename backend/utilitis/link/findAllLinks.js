function findAllLinks(req, res, username, linkDB) {
    linkDB.find({ username }, function(err, docs) {
        if(err) return res.json({error: true, message: "Ceva nu a mers cum trebuie:("})
        res.json({eSrror: false, links: docs})
    })
}

module.exports = findAllLinks