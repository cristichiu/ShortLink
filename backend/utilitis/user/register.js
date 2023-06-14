const { v4: uuidv4 } = require('uuid');

function register(req, res, userDB) {
    const { username, password } = req.body
    userDB.findOne({ username }, function(err, docs) {
        if(!docs) {
            userDB.insert({ userId: uuidv4(), username, password }, function(err, docs) {
                if(err) return res.json({error: true, message: "Ceva nu a mers cum trebuie:("})
                res.json({error: false, userId: docs.userId})
            })
        } else {
            res.json({error: true, message: "Cineva utilizează deja acest username."})
        }
    })
}

module.exports = register