function addClick(req, res, linkDB) {
    const { username, persLink } = req.body
    linkDB.update({ username, persLink }, { $inc: { clicks: 1 } }, { upsert: true })
    res.json({error: false, message: "Ceva nu a mers cum trebuie:("})
}

module.exports = addClick