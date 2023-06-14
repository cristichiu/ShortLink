async function addClick(req, res, linkDB) {
    const { username, persLink } = req.body
    await linkDB.findOneAndUpdate({ username, persLink }, { $inc: { clicks: 1 } }, { upsert: true }).catch((error) => console.log(error))
    res.json({error: false})
}

module.exports = addClick