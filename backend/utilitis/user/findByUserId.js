async function findByUserId(req, res, userDB) {
    const { userId } = req.body
    await userDB.findOne({ userId }).then((docs) => {
        if(docs) { res.json({error: false, username: docs.username}) } else { res.json({error: true, message: "Ceva nu a mers cum trebuie:("}) }
    }).catch((error) => { console.log(error); res.json({error: true, message: "Ceva nu a mers cum trebuie:("}) })
}

module.exports = findByUserId