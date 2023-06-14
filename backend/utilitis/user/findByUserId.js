function findByUserId(req, res, userDB) {
    const { userId } = req.body
    userDB.findOne({ userId }, function(err, docs) { if(docs) { res.json({error: false, username: docs.username}) } else { res.json({error: true, message: "Ceva nu a mers cum trebuie:("}) } })
}

module.exports = findByUserId