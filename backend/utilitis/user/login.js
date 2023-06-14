async function login(req, res, userDB) {
    const { username, password } = req.body
    await userDB.findOne({ username, password }).then((docs) => {
        if(docs) { res.json({error: false, userId: docs.userId}) } else { res.json({error: true, message: "Username sau parolă greșită."}) }
    }).catch((error) => { res.json({error: true, message: "Ceva nu a mers cum trebuie:("}); console.log(error) })
}
module.exports = login