function linkRedirect(req, res, linkDB) {
    const { username, persLink } = req.body
    linkDB.findOne({ username, persLink }, function(err, docs) {
        if(err) return res.json({error: true, message: "Ceva nu a mers cum trebuie:("})
        if(docs) {
            res.json({error: false, originalLink: docs.originalLink})
        } else { res.json({error: true, message: "Acest link nu exista."}) }
    })
}

module.exports = linkRedirect