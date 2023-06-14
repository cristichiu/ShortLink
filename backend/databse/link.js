const { model, Schema } = require("mongoose")

const link = new Schema({
    username: String,
    name: String,
    originalLink: String,
    persLink: String,
    clicks: Number
})

module.exports = model("links", link)