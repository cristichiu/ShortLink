const { v4: uuidv4 } = require('uuid');

async function register(req, res, userDB) {
    const { username, password } = req.body
    await userDB.findOne({ username }).then(async (docs) => {
        if(!docs) {
            await userDB.create({ userId: uuidv4(), username, password }).then((docs) => {
                res.json({error: false, userId: docs.userId})
            }).catch((error) => {res.json({error: true, message: "Ceva nu a mers cum trebuie:("}); console.log(error)})
        } else {
            res.json({error: true, message: "Cineva utilizează deja acest username."})
        }
    }).catch((error) => { res.json({error: true, message: "Ceva nu a mers cum trebuie:("}); console.log(error) })
}

module.exports = register