async function linkRedirect(req, res, linkDB) {
    const { username, persLink } = req.body
    await linkDB.findOne({ username, persLink }).then((docs) => {
        if(docs) {
            res.json({error: false, originalLink: docs.originalLink})
        } else { res.json({error: true, message: "Acest link nu exista."}) }
    }).catch((error) => { res.json({error: true, message: "Ceva nu a mers cum trebuie:("}); console.log(error) })
}

module.exports = linkRedirect