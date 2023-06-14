function login(req, res, userDB) {
    const { username, password } = req.body
    userDB.findOne({ username, password }, function(err, docs) {
        if(!err) {
            if(docs) { res.json({error: false, userId: docs.userId}) } else { res.json({error: true, message: "Username sau parolă greșită."}) }
        } else { res.json({error: true, message: "Ceva nu a mers cum trebuie:("}) }
    })
}
module.exports = login